(function () {
  var css = document.createElement('style');
  css.textContent =
    '.contact-section{background:#fff;padding:60px 32px 28px;max-width:900px;margin:0 auto}' +
    '.contact-section h3{font-size:28px;font-weight:700;margin-bottom:28px;color:#333;text-align:left}' +
    '.contact-cards{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:0}' +
    '.contact-card{flex:1;min-width:260px;border:1px solid #E5E7EB;border-radius:12px;padding:28px 32px;text-align:left}' +
    '.contact-card-title{font-size:17px;font-weight:700;color:#333;margin-bottom:18px;display:flex;align-items:center;gap:8px}' +
    '.contact-card-title .ico{font-size:20px}' +
    '.contact-row{font-size:16px;color:#555;line-height:2.2}' +
    '.contact-row span{color:#999;margin-right:6px}' +
    '.contact-link{color:#380097;text-decoration:none}' +
    '.contact-link:hover{text-decoration:underline}' +
    '.service-links{display:flex;flex-direction:column;gap:12px}' +
    '.service-links a{font-size:16px;color:#380097;text-decoration:none}' +
    '.service-links a:hover{text-decoration:underline}' +
    '.legal-footer{background:#fff;border-top:1px solid #E5E7EB;padding:28px 32px 60px;max-width:900px;margin:0 auto;text-align:left}' +
    '.corp-info-wrap{display:flex;flex-direction:column;gap:16px;margin-bottom:36px}' +
    '.corp-info{font-size:15px;color:#555;line-height:2.1;border:1px solid #E5E7EB;border-radius:12px;padding:24px 28px;background:#FAFAFA}' +
    '.corp-info strong{color:#333;font-weight:700}' +
    '.corp-info .corp-name-en{font-size:13px;color:#888}' +
    '.legal-block{margin-bottom:28px}' +
    '.legal-block h4{font-size:20px;font-weight:700;color:#000;margin-bottom:12px}' +
    '.legal-block ul{padding-left:20px}' +
    '.legal-block li{font-size:16px;color:#000;line-height:2}' +
    '.legal-block p{font-size:16px;color:#000;line-height:2}' +
    '.legal-block p.legal-warning{font-size:20px!important;font-weight:700;color:#000!important;margin-bottom:12px;line-height:1.8}' +
    'hr.section-divider{border:none;border-top:1px solid #E5E7EB;margin:28px 0}' +
    'hr.section-divider-full{border:none;border-top:1px solid #E5E7EB;margin:28px -32px}' +
    '.footer-bottom{border-top:1px solid #E5E7EB;padding-top:28px;margin-top:36px;margin-left:-32px;margin-right:-32px;padding-left:32px;padding-right:32px;display:flex;align-items:center;gap:12px}' +
    '.footer-logo{font-size:32px;font-weight:900;color:#333;letter-spacing:-2px;font-style:italic}' +
    '.footer-copy{font-size:13px;color:#222;line-height:1.9}' +
    '.section-label{font-size:28px;font-weight:700;margin-bottom:28px;color:#333;text-align:left}';
  document.head.appendChild(css);

  var page = document.querySelector('.page');
  if (!page) return;

  var html =
    '<div class="contact-section">' +
      '<h3>Contact</h3>' +
      '<div class="contact-cards">' +
        '<div class="contact-card">' +
          '<div class="contact-card-title"><span class="ico">📞</span> 고객센터</div>' +
          '<div class="contact-row"><span>대표전화 ｜</span>010-2153-6193</div>' +
          '<div class="contact-row"><span>고객문의 ｜</span><a href="mailto:customer@sirjuseyo.com" class="contact-link">customer@sirjuseyo.com</a></div>' +
          '<div class="contact-row"><span>사업문의 ｜</span><a href="mailto:dandy@sirjuseyo.com" class="contact-link">dandy@sirjuseyo.com</a></div>' +
          '<div class="contact-row"><span>광고문의 ｜</span><a href="mailto:hailey@sirjuseyo.com" class="contact-link">hailey@sirjuseyo.com</a></div>' +
        '</div>' +
        '<div class="contact-card">' +
          '<div class="contact-card-title"><span class="ico">💬</span> 카카오톡 CS</div>' +
          '<div class="contact-row"><a href="http://pf.kakao.com/_AcXXxl" class="contact-link" target="_blank" rel="noopener">카톡 채널로 가기</a></div>' +
          '<div class="contact-row"><a href="http://pf.kakao.com/_cRVhn/chat" class="contact-link" target="_blank" rel="noopener">1:1 채팅방에 바로 문의하기</a></div>' +
        '</div>' +
        '<div class="contact-card">' +
          '<div class="contact-card-title"><span class="ico">📄</span> 서비스</div>' +
          '<div class="service-links">' +
            '<a href="/privacy/01_terms.html">서비스 이용약관</a>' +
            '<a href="/privacy/index002.html">개인정보 처리방침</a>' +
            '<a href="/privacy/08_standard-terms.html">대부거래 표준약관</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<footer>' +
      '<div class="legal-footer">' +
        '<div class="legal-block">' +
          '<h4>대출금리 연 12% (연체금리는 약정이자율 +6%P 이내, 연 18%이내)</h4>' +
          '<ul>' +
            '<li>단, 2025년 2월 1일부터 신규체결, 갱신, 연장되는 계약에 한함. 해당 상품은 소액신용대출 상품입니다.</li>' +
            '<li>만 20세 이상 고객 대상으로 개인신용평점 등 신용도 및 당사 평가 기준에 따라 대출 가능 여부 및 이자율 산출</li>' +
            '<li>단, 채무 불이행 등록자는 제외</li>' +
            '<li>이자는 매월 약정일에 부과하고, 상품에 따라 원금자유상환(만기일시상환), 원리금균등분할상환 등의 방법으로 상환</li>' +
            '<li>조기상환 조건 없음</li>' +
            '<li>대출계약을 체결하기전에 관계법령에 따라 금융상품에 관한 중요사항을 설명받을 수 있습니다.</li>' +
          '</ul>' +
        '</div>' +
        '<hr class="section-divider">' +
        '<div class="legal-block">' +
          '<h4>부대비용 : 채무확인서 발급비, 신용조회비용 등 채무자 부담</h4>' +
          '<ul>' +
            '<li>수수료 없음</li>' +
            '<li>대출계약 전 상품설명서 및 약관을 읽어보세요.</li>' +
          '</ul>' +
        '</div>' +
        '<hr class="section-divider">' +
        '<div class="legal-block">' +
          '<p class="legal-warning">중개수수료를 요구하거나 받는 것은 불법입니다. 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 대출시 신용등급 또는 개인신용평점 하락으로 다른 금융거래가 제약 받을 수 있습니다.</p>' +
          '<ul>' +
            '<li>일정기간 원리금이 연체될 경우 기한의 이익을 상실할 수 있습니다. 대출조건을 정확히 확인해주세요</li>' +
            '<li>대출기간 : 1개월~3개월</li>' +
            '<li>예시 : 10만원을 연 12%로 3개월 원리금 균등 상환시 총 납부금액 33,956원</li>' +
          '</ul>' +
        '</div>' +
        '<hr class="section-divider-full">' +
        '<h3 class="section-label" style="margin-top:28px">About us</h3>' +
        '<div class="corp-info-wrap">' +
          '<div class="corp-info">' +
            '<strong>주식회사 혁사호재 (ALBIT Inc.)</strong><br>' +
            '대표이사 : 박준호 / PARK JUN HO<br>' +
            '대표 이메일 : customer@sirjuseyo.com<br>' +
            '주소 : 서울특별시 강남구 선릉로 428, 15층 123호<br>' +
            '<span class="corp-name-en">Address : 1081, DI TOWER, 428 Seolleung-ro, Gangnam-gu, Seoul 06198, Republic of Korea</span><br>' +
            '사업자등록번호 : 619-88-00665<br>' +
            '통신판매업 : 2019-서울강남-04564호<br>' +
            '<br>' +
            'This website is owned and operated by ALBIT Inc. (주식회사 혁사호재)<br>' +
            '© 2026 ALBIT Inc. All rights reserved.' +
          '</div>' +
          '<div class="corp-info">' +
            '<strong>써주세요.연계대부</strong><br>' +
            '대표 : 정희선 / JUNG HEE SUN<br>' +
            '주소 : 서울특별시 강남구 도곡로 112, 2층 C2-7호(도곡동, 서한빌딩)<br>' +
            '사업자 등록번호 : 778-28-01770<br>' +
            '대부업 등록번호 : 2024-서울강남-0087-대부<br>' +
            '대부중개업 등록번호 : 2024-서울강남-0088-대부중개' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<div class="footer-logo">써.</div>' +
          '<div class="footer-copy">' +
            '(써주세요.는 주식회사 혁사호재(ALBIT Inc.)와 써주세요.연계대부의 공동운영 서비스입니다.)' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';

  page.insertAdjacentHTML('beforeend', html);
})();
