function TodoForm({ $target, onSubmit }) {
  //form 만들고 target에 추가하기 =>컴포넌트 자체?
  const $form = document.createElement("form");
  $target.appendChild($form);
  //정적인 엘레멘트이므로 그냥 하드코딩
  $form.innerHTML = `
  <input type="text" name="todo">
  <button>Add</button>  
  `;
  //실제로 input, button 그리는 부분 => return 부분?
  /*
    form태그는 엔터가 눌리거나 버튼이 눌렷을 때(submit이 되었을 떄)
    자동으로 어떤 주소로 폼의 내용을 전송하는 attributes가 있다(action이라는...그래서 서버액션?)
    그걸 방지해줘야함. 
    */
  //submit처리하는 부분 => 로직 부분
  //이벤트 등록이 최초 인스턴스 생성시에만 실행되도록 한다.
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    //폼의 input태그들 중, name태그가 todo인 input의 값을 가져온다.
    //아니 이렇게 편리한게...
    const todoValue = $form.querySelector("input[name=todo]");
    let text = todoValue.value;
    /**이 함수로 text값을 주게됨. TodoForm에는 아무런 영향 없이.
     * 단지 호출만 함. onSubmit이 무슨 함수인지는 관심 없음. 몰라도 됨.
     */
    if (text.length > 0) {
      onSubmit(text);
      todoValue.value = "";
    }
  });
}
