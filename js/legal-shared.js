(function () {
  var css = document.createElement('style');
  css.textContent =
    '.legal-top{background:linear-gradient(135deg,#FFFDE7 0%,#FFF9C4 100%);padding:18px 20px;font-size:16px;font-weight:700;color:#333;line-height:1.6;border-bottom:2px solid #F0E68C}' +
    '.legal-top .reg-badge{display:inline-block;background:#7C3AED;color:#fff;padding:4px 12px;border-radius:6px;margin-bottom:8px;font-size:16px}' +
    '.legal-bottom{background:linear-gradient(135deg,#FFFDE7 0%,#FFF9C4 100%);padding:28px 20px;margin-top:16px;font-size:16px;color:#000;line-height:1.8;font-weight:400;border-top:2px solid #F0E68C;border-bottom:2px solid #F0E68C}' +
    '.legal-group{margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid rgba(0,0,0,0.08)}' +
    '.legal-group:last-child{margin-bottom:0;padding-bottom:0;border-bottom:none}' +
    '.legal-group-title{font-size:17px;font-weight:700;color:#000;margin-bottom:12px}' +
    '.legal-group-body{font-size:15px;font-weight:400;color:#000;line-height:1.8}' +
    '.legal-group-body li{margin-bottom:4px;list-style:disc inside}' +
    '.legal-group-body p.legal-warning{font-size:16px;font-weight:700;color:#000;margin-bottom:12px;line-height:1.8}' +
    '.ls-divider{border:none;border-top:1px solid rgba(0,0,0,0.08);margin:0}' +
    '.bottom-section{padding:24px 20px;border-top:1px solid #F0F0F0}' +
    '.bottom-title{font-size:16px;font-weight:700;color:#111;margin-bottom:14px;padding-bottom:8px;border-bottom:2px solid #380097;display:inline-block}' +
    '.bottom-title-wrap{margin-bottom:14px}' +
    '.contact-card{border:1px solid #ECECEC;border-radius:12px;padding:18px 20px;margin-bottom:8px;background:#FAFAFA;box-shadow:0 1px 4px rgba(0,0,0,0.03)}' +
    '.contact-card-title{font-size:14px;font-weight:700;color:#333;margin-bottom:10px;display:flex;align-items:center;gap:6px}' +
    '.contact-row{font-size:14px;color:#555;line-height:2}' +
    '.contact-row span{color:#999;margin-right:4px}' +
    '.contact-link{color:#380097;text-decoration:none;font-weight:500}' +
    '.contact-link:hover{text-decoration:underline}' +
    '.service-links{display:flex;flex-direction:column;gap:8px}' +
    '.service-links a{font-size:14px;color:#380097;text-decoration:none;font-weight:500}' +
    '.service-links a:hover{text-decoration:underline}' +
    '.corp-box{border:1px solid #ECECEC;border-radius:12px;padding:20px;margin-bottom:8px;background:#FAFAFA;font-size:14px;color:#555;line-height:2;box-shadow:0 1px 4px rgba(0,0,0,0.03)}' +
    '.corp-box strong{color:#111;font-weight:700}' +
    '.corp-desc{font-size:12px;color:#7C3AED;font-weight:600;margin-bottom:4px;letter-spacing:-0.2px}' +
    '.corp-link{color:#380097;text-decoration:underline}' +
    '.footer-bottom-wrap{border-top:1px solid #E5E7EB;padding:20px;display:flex;align-items:center;gap:12px}' +
    '.footer-bottom-logo{font-size:28px;font-weight:900;color:#333;letter-spacing:-2px;font-style:italic}' +
    '.footer-bottom-copy{font-size:12px;color:#222;line-height:1.9}';
  document.head.appendChild(css);

  var page = document.querySelector('.page');
  if (!page) return;

  /* ── LEGAL-TOP ── */
  var top = document.createElement('div');
  top.className = 'legal-top';
  top.innerHTML =
    '<span class="reg-badge">써주세요연계대부</span><br>' +
    '2024-서울강남-0087-대부<br>' +
    '2024-서울강남-0088-대부중개<br>' +
    '등록시・도 명칭 : 서울시 강남구청(대부업 담당 : 02-123-4567)';
  page.insertBefore(top, page.firstChild);

  /* ── LEGAL-BOTTOM + CONTACT + ABOUT US + COPYRIGHT ── */
  var bottom =
    '<div class="legal-bottom">' +
      '<div class="legal-group">' +
        '<div class="legal-group-title">대출금리 연 12% (연체금리는 약정이자율 +6%P 이내, 연 18%이내)</div>' +
        '<div class="legal-group-body"><ul>' +
          '<li>단, 2025년 2월 1일부터 신규체결, 갱신, 연장되는 계약에 한함. 해당 상품은 소액신용대출 상품입니다.</li>' +
          '<li>만 20세 이상 고객 대상으로 개인신용평점 등 신용도 및 당사 평가 기준에 따라 대출 가능 여부 및 이자율 산출</li>' +
          '<li>단, 채무 불이행 등록자는 제외</li>' +
          '<li>이자는 매월 약정일에 부과하고, 상품에 따라 원금자유상환(만기일시상환), 원리금균등분할상환 등의 방법으로 상환</li>' +
          '<li>조기상환 조건 없음</li>' +
          '<li>대출계약을 체결하기전에 관계법령에 따라 금융상품에 관한 중요사항을 설명받을 수 있습니다.</li>' +
        '</ul></div>' +
      '</div>' +
      '<hr class="ls-divider">' +
      '<div class="legal-group">' +
        '<div class="legal-group-title">부대비용 : 채무확인서 발급비, 신용조회비용 등 채무자 부담</div>' +
        '<div class="legal-group-body"><ul>' +
          '<li>수수료 없음</li>' +
          '<li>대출계약 전 상품설명서 및 약관을 읽어보세요.</li>' +
        '</ul></div>' +
      '</div>' +
      '<hr class="ls-divider">' +
      '<div class="legal-group">' +
        '<div class="legal-group-body">' +
          '<p class="legal-warning">중개수수료를 요구하거나 받는 것은 불법입니다. 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 대출시 신용등급 또는 개인신용평점 하락으로 다른 금융거래가 제약 받을 수 있습니다.</p>' +
          '<ul>' +
            '<li>일정기간 원리금이 연체될 경우 기한의 이익을 상실할 수 있습니다. 대출조건을 정확히 확인해주세요</li>' +
            '<li>대출기간 : 1개월~3개월</li>' +
            '<li>예시 : 10만원을 연 12%로 3개월 원리금 균등 상환시 총 납부금액 33,956원</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="bottom-section">' +
      '<div class="bottom-title-wrap"><span class="bottom-title">Contact</span></div>' +
      '<div class="contact-card">' +
        '<div class="contact-card-title">📞 고객센터</div>' +
        '<div class="contact-row"><span>대표전화 ｜</span>010-2153-6193</div>' +
        '<div class="contact-row"><span>고객문의 ｜</span><a href="mailto:customer@sirjuseyo.com" class="contact-link">customer@sirjuseyo.com</a></div>' +
        '<div class="contact-row"><span>사업문의 ｜</span><a href="mailto:dandy@sirjuseyo.com" class="contact-link">dandy@sirjuseyo.com</a></div>' +
        '<div class="contact-row"><span>광고문의 ｜</span><a href="mailto:hailey@sirjuseyo.com" class="contact-link">hailey@sirjuseyo.com</a></div>' +
      '</div>' +
      '<div class="contact-card">' +
        '<div class="contact-card-title">💬 카카오톡 CS</div>' +
        '<div class="contact-row"><a href="http://pf.kakao.com/_AcXXxl" class="contact-link" target="_blank" rel="noopener">카톡 채널로 가기</a></div>' +
        '<div class="contact-row"><a href="http://pf.kakao.com/_cRVhn/chat" class="contact-link" target="_blank" rel="noopener">1:1 채팅방에 바로 문의하기</a></div>' +
      '</div>' +
      '<div class="contact-card">' +
        '<div class="contact-card-title">📄 서비스</div>' +
        '<div class="service-links">' +
          '<a href="/privacy/01_terms.html">서비스 이용약관</a>' +
          '<a href="/privacy/index002.html">개인정보 처리방침</a>' +
          '<a href="/privacy/08_standard-terms.html">대부거래 표준약관</a>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="bottom-section">' +
      '<div class="bottom-title-wrap"><span class="bottom-title">About Us</span></div>' +
      '<div class="corp-box">' +
        '<div class="corp-desc">혁사호재</div>' +
        '<strong>주식회사 혁사호재 (ALBIT Inc.)</strong><br>' +
        '대표이사 : 박준호 / PARK JUN HO<br>' +
        '대표 이메일 : <a href="mailto:customer@sirjuseyo.com" class="corp-link">customer@sirjuseyo.com</a><br>' +
        '주소 : 서울특별시 강남구 선릉로 428, 15층 123호<br>' +
        '<span style="font-size:12px;color:#888">Address : 1081, DI TOWER, 428 Seolleung-ro, Gangnam-gu, Seoul 06198, Republic of Korea</span><br>' +
        '사업자등록번호 : 619-88-00665<br>' +
        '통신판매업 : 2019-서울강남-04564호' +
      '</div>' +
      '<div class="corp-box">' +
        '<strong>써주세요.연계대부</strong><br>' +
        '대표 : 정희선 / JUNG HEE SUN<br>' +
        '주소 : 서울특별시 강남구 도곡로 112, 2층 C2-7호(도곡동, 서한빌딩)<br>' +
        '사업자 등록번호 : 778-28-01770<br>' +
        '대부업 등록번호 : 2024-서울강남-0087-대부<br>' +
        '대부중개업 등록번호 : 2024-서울강남-0088-대부중개' +
      '</div>' +
    '</div>' +

    '<div class="bottom-section" style="padding-bottom:40px">' +
      '<div class="footer-bottom-wrap">' +
        '<div class="footer-bottom-logo">써.</div>' +
        '<div class="footer-bottom-copy">' +
          '(써주세요.는 주식회사 혁사호재(ALBIT Inc.)와 써주세요.연계대부의 공동운영 서비스입니다.)' +
        '</div>' +
      '</div>' +
    '</div>';

  page.insertAdjacentHTML('beforeend', bottom);
})();
