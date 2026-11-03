// 푸터의 연도를 자동으로 표시합니다.
(function () {
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();

// 페이지가 로드되기 전(또는 즉시) 세션 스토리지를 확인하여 최초 1회만 인트로 생성 및 출력
(function() {
  var hasShown = sessionStorage.getItem('hasShownIntro');

  // 만약 이미 본 적이 있다면(1), 절대 인트로를 만들거나 띄우지 않음
  if (hasShown === '1') {
    return;
  }

  // 최초 방문인 경우에만 인트로 화면 요소 동적 생성
  var introScreen = document.createElement('div');
  introScreen.id = 'intro-screen';
  introScreen.innerHTML = `
    <img src="https://cdn.seenews365.com/news/photo/201709/17861_12570_5047.png" alt="Black Sun" class="intro-image">
    <div class="intro-white-overlay"></div>
  `;
  document.body.appendChild(introScreen);

  // 방문 상태를 '1'로 기록하여 두 번 다시 뜨지 않게 설정
  sessionStorage.setItem('hasShownIntro', '1');

  // 3.4초 후 인트로 화면 제거
  window.addEventListener('load', function() {
    setTimeout(function() {
      if (introScreen && introScreen.parentNode) {
        introScreen.remove();
      }
    }, 3400);
  });
})();
