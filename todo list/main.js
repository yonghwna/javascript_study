import App from "./App.js";
import { getItem } from "./storage.js";

console.log(App);
const $app = document.querySelector("#app");
//있으면 가져오고 아니면 빈 값 넣어주고
const initialState = getItem("todos") || [];
/**
 * 여기서 문제, 사용자가 직접 개발자도구를 열어서 로컬스토리 todos값을 json이 아닌 다른 값으로
 * 바꾸어버린다면?
 *
 * 로컬 스토리지를 다룰 때는 가급적 한 파일에서 try/catch로 안전하게
 * 근데 사용자가 직접 바꾸는것은 역시 못막나? 못막는다.
 */
new App({
  $target: $app,
  title: "Link Local Storage",
  initialState: initialState,
});
