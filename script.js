// 최소 스크립트: 푸터의 연도를 자동으로 표시합니다.
(function () {
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();


// 인트로 스크린 완전 제거 (클릭 방지용 안전장치)
window.addEventListener('load', function() {
  setTimeout(function() {
    var intro = document.getElementById('intro-screen');
    if (intro) {
      intro.remove();
    }
  }, 3400); // 애니메이션 2초 종료 직후 HTML에서 삭제
});
