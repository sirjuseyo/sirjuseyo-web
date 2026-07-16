(function () {
  if (document.getElementById('sjy-menu')) return;

  // ── 매월 이 한 줄만 수정 ──────────────────────────────────────────
  var CURRENT_MONTH = '2026-07';
  // ─────────────────────────────────────────────────────────────────

  var ITEMS = [
    { label: '써주세요. 소개',         href: '/sirjuseyo/' },
    { label: '인기 상품은 나노크레딧',  href: '/nanocredit/' },
    { label: '나에게 맞는 대출 방식',  href: '/loan-match/' },
    { label: '월별 대출 신청하기',     href: '/' + CURRENT_MONTH + '/' },
    { label: '챌린지',                href: '/challenge/' },
    { label: '꿀정보',               href: '/tip/' },
    { label: '공지사항',              href: '/notice/' },
  ];

  var CSS =
    '#sjy-menu,#sjy-menu *{box-sizing:border-box;margin:0;padding:0}' +

    /* nav bar */
    '#sjy-nav-bar{position:fixed;top:0;left:50%;transform:translateX(-50%);width:100%;max-width:480px;height:52px;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 20px;z-index:1000;border-bottom:1px solid #EBEBEB;box-shadow:0 1px 6px rgba(0,0,0,.07)}' +
    '#sjy-nav-logo{display:flex;align-items:center;gap:8px;text-decoration:none}' +
    '#sjy-nav-logo img{width:28px;height:28px;object-fit:contain;border-radius:50%}' +
    '#sjy-nav-logo span{font-size:.92rem;font-weight:700;color:#380097;letter-spacing:-.3px}' +
    '#sjy-nav-btn{background:none;border:none;font-size:2rem;color:#380097;cursor:pointer;line-height:1;padding:6px 10px;display:flex;align-items:center}' +

    /* overlay */
    '#sjy-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10001;transition:opacity .3s;opacity:0}' +
    '#sjy-overlay.sjy-open{display:block;opacity:1}' +

    /* drawer */
    '#sjy-drawer{position:fixed;top:0;right:0;width:280px;height:100%;background:#fff;z-index:10002;transform:translateX(100%);transition:transform .3s ease;display:flex;flex-direction:column}' +
    '#sjy-drawer.sjy-open{transform:translateX(0)}' +
    '#sjy-drawer-head{display:flex;justify-content:flex-end;align-items:center;padding:14px 16px;border-bottom:1px solid #F0F0F0}' +
    '#sjy-drawer-close{background:none;border:none;font-size:1.3rem;color:#666;cursor:pointer;padding:4px 8px;line-height:1}' +
    '#sjy-drawer-nav{display:flex;flex-direction:column;overflow-y:auto;flex:1}' +
    '.sjy-item{display:block;padding:17px 24px;font-size:1rem;font-weight:500;color:#1A1A2E;text-decoration:none;border-bottom:1px solid #F5F5F5}' +
    '.sjy-item:active,.sjy-item:hover{background:#F3F0FF;color:#380097}' +

    /* body 상단 여백 (nav bar 높이만큼) */
    'body.sjy-ready{padding-top:52px}';

  var itemsHTML = ITEMS.map(function (i) {
    return '<a class="sjy-item" href="' + i.href + '">' + i.label + '</a>';
  }).join('');

  function inject() {
    if (document.getElementById('sjy-menu')) return;

    var style = document.createElement('style');
    style.id = 'sjy-menu-css';
    style.textContent = CSS;
    document.head.appendChild(style);

    var wrap = document.createElement('div');
    wrap.id = 'sjy-menu';
    wrap.innerHTML =
      '<div id="sjy-nav-bar">' +
        '<a id="sjy-nav-logo" href="/">' +
          '<img src="https://www.sirjuseyo.com/imgs/home/logoPurpleSplash@2x.png" alt="써주세요.">' +
          '<span>써주세요.</span>' +
        '</a>' +
        '<button id="sjy-nav-btn" aria-label="메뉴 열기">≡</button>' +
      '</div>' +
      '<div id="sjy-overlay"></div>' +
      '<div id="sjy-drawer">' +
        '<div id="sjy-drawer-head">' +
          '<button id="sjy-drawer-close" aria-label="메뉴 닫기">✕</button>' +
        '</div>' +
        '<nav id="sjy-drawer-nav">' + itemsHTML + '</nav>' +
      '</div>';

    document.body.insertAdjacentElement('afterbegin', wrap);
    document.body.classList.add('sjy-ready');

    var btn     = document.getElementById('sjy-nav-btn');
    var closeBtn = document.getElementById('sjy-drawer-close');
    var overlay  = document.getElementById('sjy-overlay');
    var drawer   = document.getElementById('sjy-drawer');

    function openMenu() {
      drawer.classList.add('sjy-open');
      overlay.classList.add('sjy-open');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      drawer.classList.remove('sjy-open');
      overlay.classList.remove('sjy-open');
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
