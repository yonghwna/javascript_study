import TodoList from "./todolist.js";
const $app = document.querySelector(".app");
new TodoList({
  $target: $app,
  initialState: [{ text: "asdf" }, { text: "Asdf" }],
});
