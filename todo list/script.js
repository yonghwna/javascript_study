/*어떤 동작을 하게 하고싶을 때, 직접 이것적것 명령형으로 하는것보다, 
상태 변화를 감지하고, 그에 따른 동작을 실행하는것이 선언형? 
like sql. 어떻게 가져올지 질의하지 않는다. 무엇을 가져올지에만 관심이 있다. 
ui 추상화
헤더따로 폼 따로 리스트 따로. 서로 모여서 기능을 이룰 뿐, 
영향은 안끼침 => 재사용가능.  
자기 기능에만 충실하면 됨. => 독립적이면서 집약적인 기능=> 응높결낮 ㄷㄷㄷㄷㄷ
내가 폼에 어떤 기능이나 검증을 추가하고싶다? 폼만 고치면 되는거 
결론적으로 투두리스트는 
app > 헤더, 폼, 리스트 구조 
리스트부터 만들어보자. */
/*function TodoList(target, todoListData = []) {
  const $list = document.createElement("ul");
  target.appendChild($list);
  let arr = "";
  todoListData.forEach(({ text }) => {
    return (arr += `<li>${text}</li>`);
  });
  this.render = () => {
    $list.innerHTML = arr;
  };
  this.render();
}
const app = document.querySelector("#app");
new TodoList(app, [{ text: "뿌빠뿌비?" }, { text: "뿌빠뿌비!" }]);*/
//params.$target : 컴포넌트가 추가될 dom element
//params.initialSate : 컴포넌트 초기 상태
function TodoList({ $target, initialState }) {
  /*컴포넌트 껍데기 생성 */
  const $todoList = document.createElement("div");
  $target.appendChild($todoList);
  this.state = initialState;
  /*컴포넌트 그리는 함수 */
  this.render = () => {
    $todoList.innerHTML = `
    <ul>
    ${this.state.map(({ text }) => `<li>${text}</li>`).join("")}
    </ul>
    `;
  };
  this.render();
}
