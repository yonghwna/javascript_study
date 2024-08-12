//내가 짠 코드.
//사실 하나하나 addeventlistener쓰다가 강사님꺼보고 호다닥 리팩터링 했다.
(() => {
  let styleArray = [];
  let editor = document.querySelector(".editor");
  document.querySelectorAll("button").forEach((element) => {
    const command = element.getAttribute("data-command");
    element.addEventListener("click", () => {
      const isDuplicate = styleArray.find((v) => v === command);
      if (isDuplicate) {
        styleArray = styleArray.filter((v) => v != isDuplicate);
        editor.style = styleArray.join().replace(",", "");
        return;
      }
      styleArray.push(command);
      editor.style = styleArray.join().replace(",", "");
    });
  });
})();
//   document.querySelector(".italic").addEventListener("click", () => {
//     const editor = document.querySelector(".editor");
//     editor.classList.toggle("italic");
//     addedStyle.push("italic");
//   });
//   //reset 버튼을 누르면 Remove메서드에서 addedStyle배열을 separate연산자로 풀어서 한꺼번에 삭제한다.
//   document.querySelector(".reset").addEventListener("click", () => {
//     const editor = document.querySelector(".editor");
//     editor.classList.remove(...addedStyle);
//   });
// })();

/*deprecated된 메서드.근데 유용함.
모든 버튼들마다 addeventlistener를 하는 대신,
버튼에 data-command라는 속성을 만들고, getAttribute메서드로 가져와서 커맨드로 넣었다
*/
//   () => {
// document.querySelectorAll(".toolbar button").forEach((element) => {
//   element.addEventListener("click", (e) => {
//     const command = e.target.getAttribute("data-command");
//     console.log(command);
//     document.execCommand(command);
//   });
// });
//   }
// )();
/**
 * execCommand()메서드가 흥미롭다. 완전 에디터용 메서드. deprecated되긴 했지만.
 * IIFE를 실제로 쓰는 건 처음 봤다. 코드 실행 시 머리 부분에서 configuration을 위해 쓴다고 듣긴 했는데
 * html태그에 별도의 attribute를 부여하고, getAttributes로 그 값을 가져오는게 신기했다.
    * 찾아보니 HTMLelement 프로퍼티 중 하나인 dataset이다.
      "data-"를 앞에 붙임으로써 해당 element에 custom data attributes라는 특성 클래스를 형성해서 임의의 데이터를 html과 dom사이에서 교환할 수 있다.
      여기에는 "data-"로 이름붙힌 모든 attributes가 포함되는데, dataset이라는 프로퍼티를 보면 data-라고 이름붙인 모든 attributes가 포함된 것을 알 수 있다.
      간단한 element를 객체처럼 쓸 수 있게 된 것이다
*/
