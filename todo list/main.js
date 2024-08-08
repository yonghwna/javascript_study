const data = [
  { text: "뿌빠뿌비?" },
  { text: "뿌빠뿌비!" },
  { text: "뿌빠뿌비!" },
];
const data2 = [
  { text: "react 공식문서 스터디" },
  { text: "코테 준비" },
  { text: "프로젝트 설계" },
];
const data3 = [
  { text: "뿌빠뿌비?" },
  { text: "뿌빠뿌비!" },
  { text: "뿌빠뿌비!" },
];
const $app = document.querySelector("#app");
new TodoList({
  $target: $app,
  initialState: data,
});
new TodoList({
  $target: $app,
  initialState: data2,
});
new TodoList({
  $target: $app,
  initialState: data3,
});
