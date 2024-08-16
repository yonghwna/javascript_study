// 함수: URL 변경 없이 콘텐츠 로드
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

// 함수: 현재 경로에 따른 콘텐츠 렌더링
function router() {
  const routes = [
    { path: "/", view: () => "This is the Home page" },
    { path: "/about", view: () => "This is the About page" },
    { path: "/contact", view: () => "This is the Contact page" },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = match.route.view();
  document.querySelector("#app").innerHTML = view;
}

// 이벤트: 링크 클릭 시 navigateTo 실행
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
