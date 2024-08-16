export default function ProductOption({ $target, initialState, onSelect }) {
  const $select = document.createElement("select");

  $target.appendChild($select);
  /**상품옵션 이름 렌더링 시 상품명 + 옵션명 + 재고:N개
   * 재고가 0인 상품의 경우 옵션 선택 불가
   * [{
   * option:'옵션 상품',
   * optionPrice:1000,
   * stock:10
   * }]
   */
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  const createOptionFullName = ({ optionName, optionPrice, stock }) => {
    return `${optionName}${stock > 0 ? `옵션가 ${optionPrice}` : ""} | ${
      stock > 0 ? `재고: ${stock}개` : "재고없음"
    }`;
  };
  $select.addEventListener("change", (e) => {
    const optionId = parseInt(e.target.value);
    const option = this.state.find((option) => option.optionId === optionId);
    //default값으로 선택하세요!를 넣을건데, 그거 선택하면 실행 안되게
    if (option) {
      onSelect(option);
    }
  });
  /**
   * 컴포넌트를 만들 때, render 함수는 파라미터가 없어야한다.
   * 순수하게 자신의 state만 보고 렌더링이 되어야함.
   * 외부요소 개입 없이
   */
  this.render = () => {
    //state가 잘 들어왔는지, 배열 형태인지 검사. 근데 배열 형태라면 잘 들어온 것이 아닌지?
    if (this.state && Array.isArray(this.state)) {
      $select.innerHTML = `<option value="">선택하세용!</option>${this.state
        .map((option) => {
          /*change이벤트가 생기면 id를 꺼내오고, 
        state에서 해당 Id를 가진 데이터를 찾아서 콜백으로 넘기기
        아니면 data-price, data-stock 다 dataset으로 저장해서 
        target.dataset["aaa"]이렇게 가져오던가
        근데 개발자도구로 보면 다 보임; 
        Id값을 숨겨야한다면? 
        그니까 이렇게하자. ㄱ
        */
          return `<option ${option.stock === 0 ? "disabled" : ""} value="${
            option.optionId
          }">${createOptionFullName(option)}</option>`;
        })
        .join(" ")}`;
    }
  };
  this.render();
}
