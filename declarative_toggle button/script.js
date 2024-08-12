/*화살표 함수로 렌더링만 하는거랑 생성자함수로 인스턴스를 생성하는것에 무슨 차이가있지?
화살표 함수로 렌더링 해놓고 접근해서 상태변경하면 되잖아. 
document.queryselector...
근데 그러면 버튼 동작 추가하고 관리하는 로직을 따로 만들어야함. 
반면 생성자함수로 만들면 한 곳에서 다 할수있어. this와 메서드를 사용해서. 
코드 구조도 명확하고, 유지보수도 쉬워진다. 
재사용성도, 확장성도 높다. 
그리고 화살표 함수로 작성하면 버튼 생성하고 함수가 해제되어버리니까 
데이터 관리도 어렵다.


*/
// const ToggleButton = ({ target, text }) => {
//   const button = document.createElement("button");
//   button.addEventListener("click", (e) => {});
//   target.appendChild(button);
//   button.textContent = text;
// };
function ToggleButton({ target, text }) {
  const button = document.createElement("button");
  //render 메서드는 다시 호출될 수 있으므로 버튼 생성 닫아두기
  let isInit = false;
  this.render = () => {
    button.textContent = text;
    if (!isInit) {
      target.appendChild(button);
      button.addEventListener("click", () => {
        if (button.style.textDecoration === "line-through") {
          button.style.textDecoration = "";
        } else {
          button.style.textDecoration = "line-through";
        }
      });
      isInit = true;
    }
  };
  this.render();
}
const app = document.querySelector("#app");
new ToggleButton({
  target: app,
  text: "button1",
});
