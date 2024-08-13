const data2 = [
  { text: "react 공식문서 스터디" },
  { text: "코테 준비" },
  { text: "프로젝트 설계" },
];

const $app = document.querySelector("#app");
new TodoForm({
  $target: $app,
  //어떤 콜백을 줘서 실행시키게만 하면 된다.
  //무슨 함수인지 알 필요는 없다.
  //이것으로 인해 TodoForm이 영향을 받지도 않고.
  onSubmit: (text) => {
    const nextState = [...todoList.state, { text }];
    todoList.setState(nextState);
  },
});
const todoList = new TodoList({
  $target: $app,
  initialState: data2,
});

// const $todo1Input = new TodoForm({
//   $target: $app,
//   text: "추가",
//   onClick: todo1.setState,
//   data: todo1.state,
// });
