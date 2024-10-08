/*
요즘 개발자 중요 역량 중 하나가 '얼마나 가독성 좋은 코드를 작성하는가?' 이다
그래서 선언형 프로그래밍이 뜨는데, 
선언형 프로그래밍의 특징은 '데이터를 어떻게 조작하는지'가 아니라, 
'원하는 데이터가 무엇인지' 에 초점을 맞춘다는 것이다. 
그래서 React가 선언형 라이브러리 라는거다. 
우리는 return ()안에 jsx문법으로 Ui만 작성하면 되고, 그게 어떻게 화면에 보이게 할 건지는
react에 위임하니까. 
*/
/*명령형 프로그래밍
배열을 매개변수로 받고, 빈 배열을 선언하고, 매개변수로 받은 배열에 2씩 곱해서 빈 배열에 넣고
그 배열을 리턴한다 
*/
function double2(arr) {
  let result = [];
  /*어떻게 처리할 것인지 묘사 */
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
/*선언형 프로그래밍
선언형에서는 무엇을 할 것이냐가 중요하다. 
코드의 문맥이 깔끔해지고, 유지보수가 쉬워짐. 
 */
function double(arr) {
  /*무엇을 원하는지 묘사 */
  return arr.map((v) => v * 2);
}
