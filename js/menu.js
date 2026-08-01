(function () {
  if (document.getElementById('sjy-menu')) return;

  // ── 매월 이 한 줄만 수정 ──────────────────────────────────────────
  var CURRENT_MONTH = '2026-08';
  // ─────────────────────────────────────────────────────────────────

  var ITEMS = [
    { emoji: '🏠', label: '써주세요.가 뭔데?',       href: '/sirjuseyo/' },
    { emoji: '⚡', label: '인기 상품은 나노크레딧',   href: '/nanocredit/' },
    { emoji: '🔍', label: '나에게 맞는 대출 방식',    href: '/loan-match/' },
    { emoji: '📋', label: '월별 대출 신청하기',       href: '/monthly-loan/' + CURRENT_MONTH + '/' },
    { emoji: '🏆', label: '챌린지',                  href: '/challenge/' },
    { emoji: '🍯', label: '꿀정보',                  href: '/tip/' },
    { emoji: '📢', label: '공지사항',                href: '/notice/' },
  ];

  var CSS =
    '#sjy-menu{box-sizing:border-box;margin:0;padding:0;font-family:\'Apple SD Gothic Neo\',\'Noto Sans KR\',sans-serif}' +
    '#sjy-menu *{box-sizing:border-box;font-family:\'Apple SD Gothic Neo\',\'Noto Sans KR\',sans-serif}' +

    /* nav bar */
    '#sjy-nav-bar{position:fixed;top:0;left:50%;transform:translateX(-50%);width:100vw;max-width:480px;height:52px;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 20px;z-index:1000;border-bottom:1px solid #EBEBEB;box-shadow:0 1px 6px rgba(0,0,0,.07)}' +
    '#sjy-nav-back{background:none;border:none;cursor:pointer;color:#380097;font-size:1.8rem;line-height:1;padding:8px 8px 8px 0;display:flex;align-items:center;flex-shrink:0}' +
    '#sjy-nav-back.sjy-hidden{display:none}' +
    '#sjy-nav-logo{display:flex;align-items:center;gap:8px;text-decoration:none}' +
    '#sjy-nav-bar.sjy-has-back #sjy-nav-logo{position:absolute;left:50%;transform:translateX(-50%)}' +
    '#sjy-nav-logo img{width:28px;height:28px;object-fit:contain;border-radius:50%}' +
    '#sjy-nav-logo span{font-size:.92rem;font-weight:700;color:#380097;letter-spacing:-.3px}' +
    '#sjy-nav-btn{background:none;border:none;cursor:pointer;padding:8px 10px;display:flex;flex-direction:column;align-items:center;gap:6px}' +
    '#sjy-nav-btn span{display:block;width:28px;height:3px;background:#380097;border-radius:2px}' +

    /* overlay */
    '#sjy-menu-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10001;transition:opacity .3s;opacity:0}' +
    '#sjy-menu-overlay.sjy-open{display:block;opacity:1}' +

    /* drawer — 화면 전체 덮기 */
    '#sjy-drawer{position:fixed;top:0;bottom:0;left:50%;width:100vw;max-width:480px;background:#F5F3FF;z-index:10002;transform:translateX(calc(50vw + 10px));transition:transform .3s ease;display:flex;flex-direction:column}' +
    '#sjy-drawer.sjy-open{transform:translateX(-50%)}' +

    /* drawer 헤더 — 보라 배경 */
    '#sjy-drawer-head{display:flex;justify-content:space-between;align-items:center;padding:20px 20px 18px;background:#380097;max-width:480px;margin:0 auto;width:100%}' +
    '#sjy-drawer-title{color:#fff;font-size:1.1rem;font-weight:700;letter-spacing:-.3px}' +
    '#sjy-drawer-close{background:rgba(255,255,255,.2);border:none;color:#fff;font-size:1.1rem;cursor:pointer;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;line-height:1;flex-shrink:0;padding:0}' +

    /* drawer 메뉴 리스트 */
    '#sjy-drawer-nav{background:#F5F3FF;display:flex;flex-direction:column;overflow-y:auto;flex:1;padding:12px;width:100%;max-width:480px;margin:0 auto}' +
    '.sjy-item{display:flex;align-items:center;gap:12px;padding:13px 14px;text-decoration:none;color:#1A1A2E;background:#fff;border-radius:14px;margin-bottom:6px;box-shadow:0 1px 4px rgba(0,0,0,.06)}' +
    '.sjy-item:last-child{margin-bottom:0}' +
    '.sjy-item:active{background:#F3F0FF}' +
    '.sjy-item-icon{width:40px;height:40px;background:#F3F0FF;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0}' +
    '.sjy-item-text{font-size:.95rem;font-weight:700;letter-spacing:-.3px;flex:1}' +
    '.sjy-item-arrow{margin-left:auto;color:#380097;font-size:1.3rem;font-weight:300}' +

    /* body 상단 여백 */
    'body.sjy-ready{padding-top:52px}' +

    /* breadcrumb */
    '#sjy-breadcrumb{padding:8px 20px;background:#fff;border-bottom:1px solid #EBEBEB;font-size:.78rem;max-width:480px;margin:0 auto}' +
    '#sjy-breadcrumb a{color:#888;text-decoration:none}' +
    '.sjy-bc-sep{margin:0 4px;color:#bbb}' +
    '.sjy-bc-current{color:#380097;font-weight:600}';

  var itemsHTML = ITEMS.map(function (i) {
    return '<a class="sjy-item" href="' + i.href + '">' +
      '<div class="sjy-item-icon">' + i.emoji + '</div>' +
      '<span class="sjy-item-text">' + i.label + '</span>' +
      '<span class="sjy-item-arrow">›</span>' +
    '</a>';
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
        '<button id="sjy-nav-back" aria-label="뒤로가기">←</button>' +
        '<a id="sjy-nav-logo" href="/">' +
          '<img src="https://www.sirjuseyo.com/imgs/home/logoPurpleSplash@2x.png" alt="써주세요.">' +
          '<span>써주세요.</span>' +
        '</a>' +
        '<button id="sjy-nav-btn" aria-label="메뉴 열기"><span></span><span></span><span></span></button>' +
      '</div>' +
      '<div id="sjy-menu-overlay"></div>' +
      '<div id="sjy-drawer">' +
        '<div id="sjy-drawer-head">' +
          '<span id="sjy-drawer-title">메뉴를 선택하세요.</span>' +
          '<button id="sjy-drawer-close" aria-label="메뉴 닫기">✕</button>' +
        '</div>' +
        '<nav id="sjy-drawer-nav">' + itemsHTML + '</nav>' +
      '</div>';

    document.body.insertAdjacentElement('afterbegin', wrap);
    document.body.classList.add('sjy-ready');

    var backUrl = document.body.getAttribute('data-back');
    var backBtn = document.getElementById('sjy-nav-back');
    if (!backUrl) {
      backBtn.classList.add('sjy-hidden');
    } else {
      document.getElementById('sjy-nav-bar').classList.add('sjy-has-back');
      backBtn.addEventListener('click', function () {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          location.href = backUrl;
        }
      });
    }

    var bcStr = document.body.getAttribute('data-breadcrumb');
    if (bcStr) {
      var bcEl = document.createElement('nav');
      bcEl.id = 'sjy-breadcrumb';
      bcEl.setAttribute('aria-label', '현재 위치');
      var parts = bcStr.split('|');
      var bcHtml = '<a href="/">홈</a>';
      parts.forEach(function(part) {
        bcHtml += '<span class="sjy-bc-sep">›</span>';
        var segs = part.split(',');
        if (segs.length === 2) {
          bcHtml += '<a href="' + segs[1] + '">' + segs[0] + '</a>';
        } else {
          bcHtml += '<span class="sjy-bc-current">' + segs[0] + '</span>';
        }
      });
      bcEl.innerHTML = bcHtml;
      wrap.insertAdjacentElement('afterend', bcEl);
    }

    var btn      = document.getElementById('sjy-nav-btn');
    var closeBtn = document.getElementById('sjy-drawer-close');
    var overlay  = document.getElementById('sjy-menu-overlay');
    var drawer   = document.getElementById('sjy-drawer');

    function openMenu() {
      var sw = window.innerWidth - document.documentElement.clientWidth;
      if (sw > 0) document.body.style.paddingRight = sw + 'px';
      document.body.style.overflow = 'hidden';
      drawer.classList.add('sjy-open');
      overlay.classList.add('sjy-open');
    }
    function closeMenu() {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      drawer.classList.remove('sjy-open');
      overlay.classList.remove('sjy-open');
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
