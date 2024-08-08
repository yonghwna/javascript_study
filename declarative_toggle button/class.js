class ToggleButton {
  constructor({ target, text, onClick }) {
    const button = document.createElement("button");
    this.state = {
      clickCount: 0,
      toggled: false,
    };
    this.setState = (nextState) => {
      this.state = nextState;
      this.render();
    };
    target.appendChild(button);
    button.addEventListener("click", () => {
      this.setState({
        clickCount: this.state.clickCount + 1,
        toggled: !this.state.toggled,
      });
      if (onClick) {
        onClick(this.state.clickCount);
      }
    });
    this.render = () => {
      button.textContent = `${text} 클릭횟수: ${this.state.clickCount}`;
      button.style.textDecoration = this.state.toggled
        ? "line-through"
        : "none";
    };

    this.render();
  }
}
