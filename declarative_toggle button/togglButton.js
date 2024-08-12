/*이것이 객체지향? 
명령형으로 하면 어떻게 해야할지 머리가 까마득해지는데. 
하나씩 버튼 만들고 실제 태그로 만들고 
이벤트리스너 넣어주고 클릭카운트 값 갖게하고 
버튼 누르면 해당 버튼의 클릭카운트만 올라갸게..클로저랑 메서드를 이용하면?
근데 메서드의 동적 할당이 어렵고, 상속도 어렵고 
*/
function ToggleButton({ target, text, onClick }) {
  const button = document.createElement("button");
  let isInit = false;
  /*이것이 ui상태의 추상화...? 상태가 바뀌면 render... */
  this.state = {
    clickCount: 0,
    toggled: false,
  };
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    button.textContent = `${text} 클릭횟수: ${this.state.clickCount}`;
    button.style.textDecoration = this.state.toggled ? "line-through" : "none";
    //인스턴스 생성 시에 타겟에 버튼 넣고 이벤트리스너 등록하고
    if (!isInit) {
      target.appendChild(button);
      button.addEventListener("click", () => {
        this.setState({
          clickCount: this.state.clickCount + 1,
          toggled: !this.state.toggled,
        });
        /*지금 값 유무에따라 함수실행이 달라지는데, 이건 별로임. 
        명확하게 ui의 상태를 추상화하고, 상태에 따라 render함수를 통해 
        상태변화에따라 렌더리하는 방식이 좋음. 무슨 소리징?
        =>지금은 line-through하나라 괜찮은데 뭐 하나 추가될 때 마다 계속 If else쓰면 코드가 
        길어지잖아. 
        */
        // if (button.style.textDecoration === "line-through") {
        //   button.style.textDecoration = "";
        // } else {
        //   button.style.textDecoration = "line-through";
        // }
        //아 온클릭 메서드가 있는 인스턴스만 실행하기 위한 조건이구나.
        //클릭하면 트루가 된다. 이게 아니라.
        if (onClick) {
          onClick(this.state.clickCount);
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
  onClick: (clickCount) => {
    if (clickCount === 3) {
      alert("세 번쨰요");
    }
  },
});
new ToggleButton({
  target: app,
  text: "button1",
  onClick: (clickCount) => {
    if (clickCount === 3) {
      alert("세 번쨰요");
    }
  },
});
new ToggleButton({
  target: app,
  text: "button1",
  onClick: (clickCount) => {
    if (clickCount === 3) {
      alert("세 번쨰요");
    }
  },
});
new ToggleButton({
  target: app,
  text: "button1",
  onClick: (clickCount) => {
    if (clickCount === 3) {
      alert("세 번쨰요");
    }
  },
});
