import TodoComments from "./TodoComments.js";
import TodoList from "./TodoList.js";
import { request } from "./api.js";

export default function App({ $app }) {
  this.state = {
    todos: [],
    //selectedTodo가 바뀌면 comments도 다시 렌더해야하니까 상태로 만든다.
    selectedTodo: null,
    comments: [],
  };
  //두 개의 컴포넌트의 상태를 동시에 변경하고있다.
  this.setState = (nextState) => {
    this.state.todos = nextState;
    todoList.setState(nextState);
    console.log(this.state.comments);
  };

  const todoList = new TodoList({
    $target: $app,
    initialState: this.state.todos,
    onClick: () => {
      this.getComments();
    },
  });
  const todoComments = new TodoComments({
    $target: $app,
    initialState: {
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    },
  });
  //todo promise직전 강의 참고. api 안돼서 때려넣다가 못참고 그만...
  // this.getComments = () => {
  //   request("https://jsonplaceholder.typicode.com/todos", (todos) => {
  //     const data = todos.slice(0, 9).map(({ id, title: text }) => {
  //       return { id, text };
  //     });
  //     this.setState({ comments: data, ...this.state });
  //   });
  // };
  this.init = () => {
    request("https://jsonplaceholder.typicode.com/todos", (todos) => {
      const data = todos
        .slice(0, 9)
        .map(({ userId, id, title: text, complete }) => {
          return { id, text };
        });
      this.setState([...this.state.todos, ...data]);
    });
  };
  this.init();
}
//todos api
/**
 * 1. App컴포넌트 렌더링
 * - todolist fetch
 * 2. todolist보여주기 => 상위 투두를 달력으로 바꾸면 날짜별 투두리스트네 ㄷㄷ
 * [3. todo클릭
 * - comments fetch
 * 4. 해당 todolist의 comments보여주기 ] => 반복
 * 5. 다른 todo 클릭
 * * - comments fetch
 * 6. 해당 toodlist의 comments보여주기
 */
