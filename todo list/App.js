import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import Header from "./Header.js";
import { setItem } from "./storage.js";

export default function App({ $target, title, initialState }) {
  new Header({ $target, text: title });
  new TodoForm({
    $target,
    //어떤 콜백을 줘서 실행시키게만 하면 된다.
    //무슨 함수인지 알 필요는 없다.
    //이것으로 인해 TodoForm이 영향을 받지도 않고.
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text }];
      todoList.setState(nextState);
      //로컬 스토리지 연결
      setItem("todos", JSON.stringify(nextState));
    },
  });
  const todoList = new TodoList({
    $target,
    initialState: initialState,
  });
}
