// history api를 이용하면 새로고침 없이 url만 변경하는것이 가능하다. 근데 화면을 바꾸는 트리거로 이용한다면 로컬스토리지도 사용 가능할텐데. 브라우저 ui에 보여줘서 ux를 위함인가?
// history api를 쓸 때 주의사항
// pushState로 url변경 후 새로고침하면 사용자는 에러 화면을 마주치게된다. 왜냐면 브라우저는 ulr/index.html 파일을 찾기 때문이다. spa이므로 index.html은 루트 폴더에 단 하나. 당연히 찾을 수 없으므로 에러를 리턴하는 것.
// 이 때 홈페이지로 redirect시켜주는 것이 중요하다
// ![Alt text](image-4.png)
// npx serve -s<br>
// -s(save)옵션을 주고 실행한 결과, 404에러를 리턴하는 상황에는 index.html로 Redirect한다.
// =>hashbang이 아닌 historyapi를 사용하는 spa들은 다 이 문제가 있다.
const $container = document.querySelector("#container");
function route() {
  //도메인을 제외한 pathname을 가져온다. 보여줄 페이지의 식별자로 사용하기 위함.
  const { pathname } = location;
  console.log(
    new App({
      $target: $container,
      initialState: "asd",
    })
  );
  if (pathname === "/") {
    $container.innerHTML = "home";
  } else if (pathname === "/product-list") {
    $container.innerHTML = "asdf";
  } else if (pathname === "/article-list") {
    $container.innerHTML = "article List!!!";
  }
}
window.addEventListener("click", (e) => {
  if (e.target.className === "LinkItem") {
    e.preventDefault();
    const { href } = e.target;
    const path = href.replace(window.location.origin, "");

    history.pushState(null, null, path);
  }
  route();
});
/**잘 동작하는 것 같지만, 문제가 있다. 바로 뒤로가기나 앞으로가기를 눌러도 html이 바뀌지 않는다는 것.
 * 브라우저ui는 클릭이벤트 대상이 아니기 때문이다.
 * 이 때, pops
 */
window.addEventListener("popstate", () => {
  route();
});
function App({ $target, initialState }) {
  const $app = document.createElement("div");
  $target.appendChild($app);
  this.state = initialState;
  this.render = () => {
    $app.innerHTML = `<p>안녕하세용!</p>`;
  };
  this.render();
}
const currentPath = window.location.pathname;
const $app = document.querySelector("#app");
if (currentPath.indexOf("product-list")) {
  new App({ $target: $app, initialState: "asd" });
}
