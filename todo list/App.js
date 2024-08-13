const $target = document.querySelector("#app");
function App({ $target, title }) {
  new Header({ $target, text: title });
  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text }];
      todoList.setState(nextState);
    },
  });
  const todoList = new TodoList({
    $target,
    initialState: [],
  });
}
new App({ $target, title: "1번 리스트" });
new App({ $target, title: "2번 리스트" });
new App({ $target, title: "3번 리스트" });
