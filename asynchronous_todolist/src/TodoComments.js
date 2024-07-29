export default function TodoComments({ $target, initialState }) {
  const commentsList = document.createElement("ul");
  $target.appendChild(commentsList);
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    const { selectedTodo, comments } = this.state;
    //Null은 falsy한 값이다.
    if (!selectedTodo || comments.length === 0) {
      commentsList.innerHTML = " ";
      return;
    }
    commentsList.innerHTML = `
    <h2>comments</h2>
    ${comments.length === 0 && "댓글이 없습니다"}
    <ul>
    ${comments.map(({ text }) => `<li>${text}</li>`).join("")}
    </ul>
    `;
  };
  this.render();
}
