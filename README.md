# javascript_study

## 자바스크립트 기본기를 갖추기 위한 LMS 스터디 저장소입니다

8/12 toggle로 선언형 프로그래밍 맛보기<br>
[V]Dom-조작 실습<br>
[V]toggle_button완강<br>

- 이론공부 고민과 해결방안<br>
  이론공부를 하는데, 이해는 어찌어찌 되는데 연결이 안된다. 설명하기가 어렵다. 어떻게 해야할까? 이해의 틀을 짜놓을까? 카테고리별로?
  예를들어 어떤 기술 스택 관련은
  이 기술이 왜 생겼고, 관련기술, 경쟁기술, 선두기술등은 뭐가 있으며, 이 기술만의 강점은 무엇이고, 나는 이걸 왜 배워야 하며,
  이 기술의 단점은 무엇이고, 한계는 무엇이고, 그걸 극복하기 위한 방안은 무엇이고, 요즘의 동향은? 이정도?
  <i>그럼 스코프, 실행 컨텍스트 이런건?
  모여서 하나가 되는 지식은...
  cs는 일단 정처기수준으로</i>

8/13 todolist로 선언형 프로그래밍 더 맛보기<br>
[]todo list 완강 <br>
[]현업 개발문서 종류 흝어보기<br>
[]브라우저 렌더링 심화(react 사전공부. 2depth로 해보자)
[]ui의 추상화?
장기적 공부목표 : 자바스크립트의 이해와 최적화, React의 이해와 최적화<br>

- form.querySelector(input[name=todo]).value라는 방법으로 폼에서 특정 인풋의 값을 가져왔다. css에서 특정 애트리뷰트 값을 가진 태그를 집어내는 코드인줄은 알고있었는데 querySelector로도 쓸 수 있었다니.

* 강사님이 생성자 함수 코드마다 나누어 설명하신다. 타겟에 컴포넌트를 집어넣는 부분, 컴포넌트 내부 html태그를 생성하는 부분, 컴포넌트의 로직을 다루는 부분. react에서 컴포넌트를 만드는것을 대비해서 알려주시려는 것일까. 이것이 컴포넌트 방식으로 생각하기일까?
* 왜 target을 가져오는지 의문이었는데, target을 가져와서 그 안에 컴포넌트가 들어갈 틀을 만들고, 리렌더링이 되는 부분을 따로 render함수에 담아서 최대한 리렌더링을 줄이기 위함인 것 같다. 바꿔말하면 리렌더링이 되지 않는 정적인 컴포넌트의 경우에는 타겟도, render 함수도 필요없다는 의미겠지. 아니지. this를 쓰고싶을 때는 필요함.
* 컴포넌트마다 의존성을 없애고 각자 할 일만(데이터생성하기, 데이터 투두리스트로 렌더링하기)하도록 하니, 에러 추적이 쉽다.
* 그런데 아직 선언형프로그래밍에 대해 감이 잘 안온다...<br>
  1. 컴포넌트가 들어갈 자리를 잡는다
  2. 그려질 컴포넌트를 일단 그린다
  3. 컴포넌트가 가질 상태를 작성한다.여기서 상태는 ui정보,데이터를 의미한다.
  4. 컴포넌트가 상태를 기반으로 그려지게 바꾼다
  5. 상태를 바꿀 함수를 만든다.<br>
     내가 정의한 선언형 컴포넌트 작성법.
     명령형이라면 얼키고 설켜서 에러잡기도 재사용도 어려웠을듯. 물론 공들여 짜면 다를 수 있겠지만,
     이쪽이 압도적으로 공수가 덜 든다. <br>
     강의 수강 전 먼저 짜본 코드를 보면 한숨만 나온다. react맛 좀 봐봤다고 input?setState? onChange? 바로 코드 난잡해지고 todolist에서 setState만들어서 todoform에 넣어서 의존성 왕창 생기게 만들고. <br>내가 무슨 코드를 짜는지 명확하게 알고 짜야 단단한 코드가 나온다. 이걸 체감하게 된 것 만으로도 값진 시간이다.

8/14 쿠키와 로컬스토리지<br>
로컬스토리지를 이용하면 수십메가의 데이터도 영구적으로 저장이 가능하다. 그런데 이걸 중요한 데이터의 저장소로 쓰기엔 부적절하다. 데이터를 암호화한다고 해도 사용자가 직접 로컬스토리지를 건드리는건 막을 방법이 없다. 애초에 사용자의 브라우저인데 내 서비스 저장소로 쓰겠다고 막는것도 웃기고. 비중요데이터 저장소로 쓰는게 알맞다.

- storage를 다루는 함수를 작성할 때, iife로 작성해서 전역오염을 최소화한다고 하셨다. 전역 오염은 무엇인가? 전역 스코프에 함수나 변수가 너무 많이 선언돼서 의도치 않은 동작을 유발하는 것을 말한다.
  그럼 iife는 어떻게 전역오염을 최소화하나?
  이는 실행컨텍스트와 관련이 있나.

8/14 모듈<br>
왜 모듈을 import할 때 구주분해할당을 하나? 가독성이 좋기도 하지만, 차후 번들링 할 때 트리쉐이킹을 하기 위한 작업 중 하나. 이름이 겹치는 경우는 as로 대처
