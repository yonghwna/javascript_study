export default function TodoList({ $target, initialState }) {
  const $element = document.createElement("div");
  $target.appendChild($element);
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    $element.innerHTML = `
    <h1>Simple Todo List</h1>
    <ul>
    ${this.state.map(({ text }) => `<li>${text}</li>`).join("")}
    </ul>
    `;
  };
  this.render();
}
