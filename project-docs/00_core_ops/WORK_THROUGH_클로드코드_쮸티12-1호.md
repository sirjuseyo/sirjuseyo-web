# WORK_THROUGH — 써주세요 월별대출 탈리 내재화
**최초 작성일:** 2026-05-31
**작성자:** 댄디어빠쮸너야님
**대상:** ClaudeAppCode 쮸티12호
> ⚠️ 이 파일은 덮어쓰지 말고 반드시 이어서 기록할 것

---

## WT-130 · T-119 / W-119 [원리포 혜택] 원리포 상품의 메리트 페이지 신규 생성

### 작업 요약

| 항목 | 내용 |
|---|---|
| T-ID | T-119 |
| W-ID | W-119 |
| 작업자 | 쮸티12-1호 |
| 작업일 | 2026-07-30 |
| 상태 | **테스트 완료(DONE)** |
| 최종 커밋 | `4cc5c56` |

### 작업 내용

- **이미지 이동**: `37.png` → `tip/wonripo/assets/wonripo-vip-banner.png` / `38.png` → `tip/wonripo/assets/wonripo-credit-ladder.png`
- **A. PRD 생성**: `tip/wonripo/index.html` — 목업 v0.15 기반, 메리트01~04 + 업데이트 + 유용성 예시 + 실화 + 챌린지 + 보너스4종 + 사전미션 + CTA / Pretendard 폰트 / 팝업 3종(callPop·ticketPop·missionPop) / CURRENT_MONTH 동적링크(.js-current-month) / 래더 이미지·VIP 배너 이미지 교체
- **B. DEV 생성**: `tip/wonripo/index-dev.html` — PRD 기반 + DEV 오렌지 배너(sticky top:52px) + menu-dev.js + data-back="/tip/index-dev.html" + DEV breadcrumb 경로
- **C. href 연결**: `tip/index.html` 02번 `href="#"` → `href="/tip/wonripo/"` / `tip/index-dev.html` 02번 `href="#"` → `href="/tip/wonripo/index-dev.html"`

### 대상 파일

- `tip/wonripo/index.html` (신규)
- `tip/wonripo/index-dev.html` (신규)
- `tip/wonripo/assets/wonripo-vip-banner.png` (신규)
- `tip/wonripo/assets/wonripo-credit-ladder.png` (신규)
- `tip/index.html` (02번 href 연결)
- `tip/index-dev.html` (02번 href 연결)

---

## WT-129 · T-118 / W-118 [대출 검사기] ⑤신청 정보 URL 자동 주입 + CLAUDE.md 매월 체크리스트 추가

**작업일시:** 2026-07-30
**상태:** ✅ 테스트 완료(DONE) — 2026-07-30
**로컬 커밋 (코드):** `5846239`
**로컬 커밋 (문서):** DONE 커밋 예정

### 작업 배경

대출 가능성 검사기 ⑤ 신청 정보 섹션의 santaApply select placeholder URL이 `2026-07` 하드코딩 상태. month-config.js의 자동 감지 로직이 이미 있었으나 이 부분만 누락. 함께 CLAUDE.md에 매월 전환 시 잊지 않도록 체크리스트 기록.

### 변경 내역

| # | 파일 | 변경 내용 |
|---|---|---|
| 1 | `tip/loan-checker/index.html` | santaApply options[0] placeholder: 하드코딩 URL → `신청 링크를 확인하세요` / JS 동적 주입 추가: `sa.options[0].text = 'https://www.sirjuseyo.com' + cfg.detailUrl + 'index.html'` (`5846239`) |
| 2 | `tip/loan-checker/index-dev.html` | 동일 적용 (`5846239`) |
| 3 | `CLAUDE.md` | 📅 매월 대출 전환 체크리스트 3단계 추가 — git 커밋 없이 파일 직접 저장 (Claude 세션 시작 시 자동 로드) |

---

## WT-128 · T-116 / W-116 [공지사항] 공지사항 안내 페이지 신규 생성

**작업일시:** 2026-07-30
**상태:** ✅ 테스트 완료(DONE) — 2026-07-30
**로컬 커밋 (코드):** `43b70e2`
**로컬 커밋 (문서):** DONE 커밋 예정

### 변경 내역

| # | 파일 | 변경 내용 |
|---|---|---|
| 1 | `notice/index.html` (신규) | 공지사항 안내 PRD / 아이콘 📢 / "지금은 앱에서 확인해 주세요." / 앱 경로 안내 + Play Store 버튼 / 웹 이전 예정 안내 / data-breadcrumb="공지사항" (`43b70e2`) |
| 2 | `notice/index-dev.html` (신규) | PRD 동일 + DEV 배너 + menu-dev.js (`43b70e2`) |

---

## WT-127 · T-115 / W-115 [한도 상향] 한도 상향 Coming Soon 페이지 신규 생성

**작업일시:** 2026-07-30
**상태:** ✅ 테스트 완료(DONE) — 2026-07-30
**로컬 커밋 (코드):** `43b70e2`
**로컬 커밋 (문서):** DONE 커밋 예정

### 변경 내역

| # | 파일 | 변경 내용 |
|---|---|---|
| 1 | `tip/credit-limit/index.html` (신규) | 한도 상향 Coming Soon PRD / ✨ 곧 공개 예정 배지 / 예고 카드(미션·산정·사례) / 앱 공지 알림 안내 / data-breadcrumb="꿀정보,/tip/\|한도 상향" (`43b70e2`) |
| 2 | `tip/credit-limit/index-dev.html` (신규) | PRD 동일 + DEV 배너 + menu-dev.js / data-back="/tip/index-dev.html" (`43b70e2`) |
| 3 | `tip/index.html` | 03번 항목 href `#` → `/tip/credit-limit/` 연결 (`43b70e2`) |
| 4 | `tip/index-dev.html` | 03번 항목 href `#` → `/tip/credit-limit/index-dev.html` 연결 (`43b70e2`) |

---

## WT-126 · T-114 / W-114 [브레드크럼] 전체 페이지 브레드크럼 추가 (menu.js·menu-dev.js + 71개 HTML)

**작업일시:** 2026-07-30
**상태:** ✅ 테스트 완료(DONE) — 2026-07-30
**로컬 커밋 (코드):** `79e511c`
**로컬 커밋 (문서):** `5e1e975` (진행중) → `e88f92a` (DONE)

### 작업 개요

| 항목 | 내용 |
|---|---|
| 구현방식 | B안 — `<body data-breadcrumb="...">` 속성 → menu.js 파싱·생성 |
| 브레드크럼 형식 | `홈 › 꿀정보 › 원리포 상품의 메리트` (홈 자동 추가) |
| PRD 삽입 위치 | GNB(`#sjy-nav-bar`) → 브레드크럼(`#sjy-breadcrumb`) → 콘텐츠 |
| DEV 삽입 위치 | GNB → DEV 배너(sticky) → 브레드크럼 → 콘텐츠 |
| 적용 범위 | 홈(index.html·index-dev.html)·개인정보(privacy/) 제외 전체 |
| 적용 파일 수 | PRD 37개 + DEV 34개 = 71개 HTML |

### 변경 내역

| # | 파일 | 변경 내용 |
|---|---|---|
| 1 | `js/menu.js` | CSS 변수에 `#sjy-breadcrumb` 스타일 4줄 추가 / inject() 함수에 data-breadcrumb 파싱·`<nav id="sjy-breadcrumb">` 생성·삽입 로직 추가 (`79e511c`) |
| 2 | `js/menu-dev.js` | menu.js와 동일 CSS + JS / 홈 링크 `/index-dev.html` / DEV 배너 감지(body 직접 자식 중 position:sticky) → 그 다음에 삽입 (`79e511c`) |
| 3 | 71개 HTML 파일 | 각 `<body>` 태그에 `data-breadcrumb` 속성 추가 / 홈·개인정보 제외 / PRD는 상위 URL에 `/` 경로, DEV는 `/index-dev.html` 포함 경로 (`79e511c`) |

### data-breadcrumb 형식 예시

| 파일 | data-breadcrumb 값 |
|---|---|
| `sirjuseyo/index.html` | `써주세요.가 뭔데?` |
| `tip/index.html` | `꿀정보` |
| `tip/loan-checker/index.html` | `꿀정보,/tip/\|대출 가능성 검사기` |
| `tip/submissions/job-income/4dae-insured.html` | `꿀정보,/tip/\|제출 서류,/tip/submissions/\|4대보험 O 직장인` |

---

## WT-125 · T-113 / W-113 [홈 화면] 히어로 영역 문구 변경 (앱 동일)

**작업일시:** 2026-07-30
**상태:** ✅ 테스트 완료(DONE) — 2026-07-30
**로컬 커밋:** `8ea9913` → `ff41b3f` → `83ac678` → `56614f4` → `7fdde17` (최종)

### 변경 내역

| # | 회차 | 파일 | 변경 내용 |
|---|---|---|---|
| 1 | 1회차 | `index.html` | h1: "급할 때 빌려쓰는, / *나노크레딧*" → "신용 점수가 아니라, / *미션과 대안신용으로 봐요.*" (`8ea9913`) |
| 2 | 1회차 | `index-dev.html` | h1: 동일 변경 (`8ea9913`) |
| 3 | 2회차 | `index.html` | p.sub 문구: "20~33세 청년 서민에게..." → "미션 수행이 대출 승인을 보장하지 않으며, 심사 결과에 따라 제한될 수 있습니다." / 인라인 `color:var(--cream)` 제거 → CSS var(--gray) 적용 (`ff41b3f`) |
| 4 | 2회차 | `index-dev.html` | p.sub 동일 변경 (`ff41b3f`) |
| 5 | 3회차 | `index.html` | h1 `min-height:120px` 제거 → 면책 문구 h1 바로 아래 붙어 앱 레이아웃 동일하게 정렬 (`83ac678`) |
| 6 | 3회차 | `index-dev.html` | h1 `min-height:120px` + `padding-top:20px` 제거 → 동일 (`83ac678`) |
| 7 | 4회차 | `index.html`, `index-dev.html` | hero `padding-bottom` 0→120px — 야자수(gift-box top:-110px) 겹침 해소 (`56614f4`) |
| 8 | 5회차 | `index.html`, `index-dev.html` | hero `padding-bottom` 120px→80px — 텍스트·야자수 간극 축소 (`7fdde17`) |

---

## WT-124 · T-111 / W-111 [대출 가능성 검사기] Phase A 톤·비주얼 개편

**작업일시:** 2026-07-29
**상태:** ✅ 테스트 완료(DONE) — 2026-07-29
**로컬 커밋 (코드):** `c49caec` → `e0e4565` → `2c64f0f` → `13ba21c` → `1064e32` → `2498399` → `2d5e3f2` (최종)
**로컬 커밋 (기획서):** `0fb0153`
**로컬 커밋 (문서):** `16a35f7` → `8b2a320` → `c1867d6` → `202a27b` → `b196f8c` → `aa92031` → `44be2a8`

### 변경 내역

| # | 회차 | 파일 | 변경 내용 |
|---|---|---|---|
| 1 | 1회차 | `tip/loan-checker/styles.css` | `:root` 핑크 변수 제거·섹션배경 단일화, `.title-bar` 화이트, `.tone-note` 화이트, `#liveClock` 연보라 보더, `.waiting-info-box` #F7F2FF, `.primary-button` 텍스트 버튼 스타일 (`c49caec`) |
| 2 | 1회차 | `tip/loan-checker/index.html` | 배너5장→`.title-bar` 텍스트 블록, `.tone-note` 존댓말 안내문 교체, ①~⑦ 섹션 이모지 제거, 라벨·placeholder 말투 정제, 소통거리·크레딧·포인트 가이드 정제, 결과패널 이모지 제거, CTA 이미지→텍스트 버튼, 스크립트 섹션 이모지·반말 제거 (`c49caec`) |
| 3 | 1회차 | `tip/loan-checker/app.js` | `LOAN_CONFIG` 상태 키 이모지 제거, `LOAN_OPTION_STATUS_TABLE` 오타(`블랙찬스 티캣`→`블랙찬스 티켓 사용`) 수정, `addSelectOption` 상태 이모지 제거, `benefitTitle` ✨→🌟, `santaApply/appApply` 체크 value 변경, 이중⚠️ 단일화, `까지❗️`→`까지`, `🟰🛢️➕` 이모지 제거 (`c49caec`) |
| 4 | 1회차 | `tip/loan-checker/index-dev.html` | index.html과 동일 변경 + DEV 배너 유지 + `menu-dev.js` 유지 + CTA href DEV 경로 변환 유지 (`c49caec`) |
| 5 | 문서수정 | `project-docs/120_plan/기획안_tip_loan-checker_리디자인_v1_20260728.md` | v1.4 업데이트: 작업 핵심 재정의(톤&매너만·뼈대·콘텐츠·값 유지·이미지 제거), Phase B 전체 취소 확정, §12 신설, 8월 썸머 베케이션 대출 Ⅱ 별도 작업 계획 기록 (`0fb0153`) |
| 6 | 2회차 | `tip/loan-checker/index.html`, `index-dev.html`, `app.js` | 회차 수정 — 목적 안내 박스 첫 줄·단락 문구 변경 / 대출 옵션 select 이모지 추가(⏳⚡🎫🎁) / 옵션 가이드 순서·문구 변경(웨이팅→롸잇나우→블찬→이벤트) / 이력/상태 가이드 14개 항목 (이력)/(상태) 표기 + 설명 개정 / 이벤트 가이드 6월→7월·워터밤 설명 변경 / 월별 신청 placeholder URL PRD·DEV 각각 변경 / 크레딧 미션 select 3개 장난식→정제 / 소통거리 select 3개 장난식→정제 / 소통거리 가이드 제목 변경 / app.js 반말 placeholder 6개 경어·communicationStatus "디 엔드"→"제출 완료" / 인라인 스크립트 eventGuideName PRD·DEV 공통 변경 (`e0e4565`) |
| 7 | 3회차 | `tip/loan-checker/index.html`, `index-dev.html` | 회차 수정 — santaApply placeholder PRD·DEV 모두 https://www.sirjuseyo.com/monthly-loan/2026-07/index.html 통일 / 크레딧 미션 select: 아직 적립→적립 전·현재 적립 진행 중→적립 중·미션 완료→적립 완료했습니다. / 소통거리 select: 아직 제출 전→제출 전·자료 업로드 중→제출 중 (`2c64f0f`) |
| 8 | 4회차 | `tip/loan-checker/styles.css`, `index.html`, `index-dev.html` | 영역 구분 강화 — .concept-image(연보라 160px placeholder, "🏖️ 7월 썸머 베케이션 대출 이미지 준비 중") 신규 / .clock-label(시계 위 맥락 레이블) 신규 / .section-divider(본문 구분선) 신규 / .tone-note 왼쪽 보더 4px accent 강화 (`13ba21c`) |
| 9 | 5회차 | `tip/loan-checker/styles.css`, `index.html`, `index-dev.html` | 시계 박스화·문장 재구성·divider 정렬 — .page-intro 박스화 / .clock-sentence 신규("대출을 희망하는 지금 시간은" / "[chip] 입니다." 2줄) / clock-label 시계 아래로 이동 / section-divider grid-column:1/-1 + form 첫 번째 자식으로 이동 (`1064e32`) |
| 10 | 6회차 | `tip/loan-checker/styles.css`, `index.html`, `index-dev.html` | 박스 너비 통일 — page-intro·tone-note를 form 밖 → form 첫 번째 자식으로 이동 / .page-intro·.tone-note에 grid-column:1/-1 추가 / panel·section-divider와 동일 container로 너비 완전 일치 (`2498399`) |
| 11 | 7회차 | `tip/loan-checker/styles.css`, `index.html`, `index-dev.html` | 전체 박스 너비 통일 완성 — title-bar·concept-image도 form 첫 번째 자식으로 이동 / .title-bar·.concept-image에 grid-column:1/-1 추가 / 시계 2줄 명시 분리 / clock-label 텍스트 "웨이팅 대출 옵션은 신청 시기에 따라 조건이 달라집니다." 변경 (`2d5e3f2`) |

---

## WT-123 · T-110 / W-110 [소통거리 제출 가이드] SEC-12·SEC-13 타이틀 서브라인 추가

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-07-28 |
| 작성자 | 쮸티12-1호 |
| T-ID | T-110 |
| 로컬 커밋 | `37d17bf` (1회차) / `2880556` (회차수정) |
| 상태 | ✅ 테스트 완료(DONE) — 2026-07-28 |

[배경]
submissions 페이지 SEC-12(👯 절친 소통내역)·SEC-13(🧑‍🧑‍🧒 부모님 소통내역) 타이틀에
"(대안신용평가 항목 중 사회성 검증 대상)" 설명 추가 요청.
기존 23px·900weight 타이틀에 합쳐 쓰면 480px 너비에서 두 줄로 넘쳐 미관 저해.

[처방 — 37d17bf] A안(서브라인 분리) 적용
① `tip/submissions/index.html` SEC-12·SEC-13 h3 서브라인 span 추가
② `tip/submissions/index-dev.html` 동일 적용
- 메인 타이틀: 23px·900 (기존 유지)
- 서브라인: display:block / 14px / font-weight:500 / color:#555

[회차수정 — 2880556]
- 문구: `(대안신용평가 항목 중 사회성 검증 대상)` → `대안신용평가 항목 중 사회성 검증 대상 전용` (괄호 제거)
- 스타일: 14px·500·#555 → 15px·700·#333 (B안 확정)

[검증 완료] 2026-07-28 사장님 테스트 완료(DONE)

---

## WT-122 · T-109 / W-109 [소통거리 제출 가이드] phone-docs·job-income DEV 버전 15개 신규 생성

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-07-28 |
| 작성자 | 쮸티12-1호 |
| T-ID | T-109 |
| 로컬 커밋 | `7a60f06` (코드) / `d21c053` (문서) |
| 상태 | ✅ 테스트 완료(DONE) — 2026-07-28 |

[배경]
소통거리는 이렇게 제출해 주세요 페이지(submissions)에서 phone-docs·job-income 서브페이지들의
DEV 버전이 존재하지 않아 DEV 환경에서 검증 불가.

[처방 — 7a60f06]
① phone-docs/sunbul-dev.html, alttul-dev.html, yakjeong-dev.html 신규 생성 (PRD 복사 + DEV 배너 + menu-dev.js)
② job-income 12개 *-dev.html 신규 생성 (동일 방식)
③ submissions/index-dev.html SEC-07·SEC-10 링크 15개 → -dev.html 버전 연결

[검증 완료] 2026-07-28 사장님 테스트 완료(DONE)

---

## WT-121 · T-108 [소통거리 제출 가이드] SEC-14 등·초본 → 초본 텍스트 수정

| 항목 | 내용 |
|---|---|
| T-ID | T-108 |
| W-ID | W-108 |
| 상태 | ✅ 테스트 완료(DONE) — 2026-07-28 |
| 작업자 | 쮸티12-1호 |
| 작업일 | 2026-07-28 |

### 수정 내용
- `tip/submissions/index.html` + `tip/submissions/index-dev.html` (2개 파일 동일)
- SEC-14 섹션 주석: `📋 등·초본` → `📋 초본`
- h3 섹션 제목: `📋 등·초본` → `📋 초본`
- 소제목 p: `등·초본 제출하는 방법` → `초본 제출하는 방법`
- ③항목 p: `주민등록표 등본과 초본 각각 발급합니다.` → `주민등록표 초본을 발급합니다.`

### 로컬 커밋 (테스트 전)
`b37d348` (코드 커밋)

---

## WT-120 · T-107 [소통거리 제출 가이드] nanocredit/submissions → tip/submissions 이동 + 꿀정보 06번 + 나노크레딧 CTA

| 항목 | 내용 |
|---|---|
| T-ID | T-107 |
| W-ID | W-107 |
| 상태 | ✅ 테스트 완료(DONE) — 2026-07-28 |
| 작업자 | 쮸티12-1호 |
| 작업일 | 2026-07-28 |

### 작업 목차 (컨펌 완료)
- A. `nanocredit/submissions/` → `tip/submissions/` git mv 이동
- B. `tip/submissions/index.html` 표준 UI 적용 (body.page, max-width:480px, 이미지 절대경로, back-btn /tip/, popup.js+menu.js+legal-shared.js)
- C. 서브페이지 15개 표준 UI 적용 (body.page, max-width, 이미지 절대경로, back-btn /tip/submissions/, scripts)
- D. `tip/submissions/index-dev.html` 신규 생성 (DEV 배너, menu-dev.js, back-btn /tip/index-dev.html)
- E. `tip/index.html` + `tip/index-dev.html` — "5가지" → "6가지", 06번 항목(소통거리 제출 방법 📋) 추가
- F. `nanocredit/10·20·30·50/index.html` — 하단 CTA에 소통거리 제출 방법 안내 보조 링크 삽입

### 로컬 커밋 (테스트 전)
`d5322c9` (코드 커밋 1차)
`9f450d9` (회차수정 — back-btn 완전 제거)

[회차수정 — 9f450d9]
- `tip/submissions/` 17개 파일(index.html, index-dev.html, job-income 12개, phone-docs 3개)에서 내부 back-btn 완전 제거
- HTML 제거: `<!-- ─── 하단 BACK ─── -->` 주석 + `<div class="bottom-back"></div>` 빈 컨테이너
- CSS 제거: `.back-btn { ... }` + `.back-btn:hover { ... }` + `/* ─── 하단 BACK ─── */` + `.bottom-back { ... }` 규칙
- 근거: menu.js가 ← 버튼 자동 주입 → 내부 back-btn 중복 불필요 (T-086 방식)

---

## WT-119 · T-106 [Deep Dive] 진입 보안코드 overlay 구현

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-07-28 |
| 작성자 | 쮸티12-1호 |
| T-ID | T-106 |
| 로컬 커밋 | `5315650` (1회차) / `461097e` (회차수정) |
| 상태 | ✅ 테스트 완료(DONE) — 2026-07-28 |

[코드 검토 결과]
- 기존 overlay HTML: `display:flex` 초기값 → 인증된 사용자 재방문 시 overlay 잠깐 번쩍임(flash) 이슈
- `.dev-banner` CSS 클래스: T-105에서 inline style로 교체됐으나 CSS 블록은 미삭제 상태

[1회차 처방 — 5315650]
① overlay HTML `display:flex` → `display:none` 초기값 변경 (flash 방지)
② overlay HTML 직후 inline script 추가 (overlay 렌더링 직후 즉시 sessionStorage 체크):
   `<script>if(sessionStorage.getItem('sjy-deep-dive-auth')!=='1')document.getElementById('sjy-security-overlay').style.display='flex';</script>`
③ body 끝 보안코드 IIFE에서 초기화 로직 제거 (중복 제거 — inline script가 대체)
④ 미사용 `.dev-banner` CSS 블록 제거

⚠️ 테스트 시 주의: 동일 탭에서 코드 입력 후 새로고침 시 overlay 안 뜸(정상 sessionStorage 동작) → 재테스트는 새 탭/시크릿 창 사용

[회차 수정 — 461097e] (사장님 요구: 들어갈 때마다 항상 overlay 표시)
- sessionStorage 기반 "세션 내 재입력 불필요" 정책 → 폐기
- 수정①: overlay 직후 inline script에서 sessionStorage 조건 제거 → 무조건 `display:flex` (항상 표시)
- 수정②: `sjyCheckCode()` 내 `sessionStorage.setItem` 제거 (더 이상 인증 저장 안 함)
- 결과: 딥다이브 클릭 → overlay / 이전 버튼 → 꿀정보 → 딥다이브 → overlay / URL 직접 입력 → overlay / 새로고침 → overlay

---

## WT-118 · T-105 [Deep Dive] apply-review-dev.html UI 통합

| 항목 | 내용 |
|---|---|
| 회차 | 2회차 |
| 작성일시 | 2026-07-28 |
| 작성자 | 쮸티12-1호 |
| T-ID | T-105 |
| 로컬 커밋 | `480001e` (1회차) / `7d8da3d` (2회차) / `684fc43` (회차수정) |
| 상태 | ✅ 테스트 완료(DONE) — 2026-07-28 |

[1회차 처방 — 480001e]
① UI 통합
   - `.wrap { max-width: 520px }` → `480px`
   - `<body>` → `<body class="page" data-back="/tip/index-dev.html">`
   - `.dev-banner` CSS: `top:0` → `top:52px`, `max-width:480px; margin:0 auto` 추가
   - `popup.js` + `menu-dev.js` + `legal-shared.js` 스크립트 추가

② 보안코드 overlay HTML + JS (T-106으로 분리됨)

[2회차 처방 — 7d8da3d] (이슈: 테스트 시 overlay 미표시 + UI 미변경)
- 원인①: `popup.js` 가 강제 법적 고지 팝업을 띄워 간섭 → `popup.js` 제거
- 원인②: s1~s5 전 화면에 old `.top-bar` nav div 잔존 → `menu-dev.js` 주입 nav와 중복
- 처방: `popup.js` 스크립트 태그 제거 / `.top-bar` div 5개 전부 제거

[추가 처방 — d7b6511] (이슈: DEV tip/index-dev.html에서 Deep Dive가 PRD로 연결)
- `tip/index-dev.html` L172: `href="/tip/apply-review/apply-review.html"` → `apply-review-dev.html`

[회차 수정 처방 — 684fc43] (이슈: 상단·하단 법적 고지 풀사이즈 + DEV 바 위치 오류)
- 원인: legal-shared.js가 body 첫 번째 child의 inline style `position:sticky` 여부로 삽입 위치 결정
  → 첫 child가 `#sjy-security-overlay`(position:fixed)여서 체크 실패 → 법적 고지 body 최상단 주입 → 풀사이즈
- 처방①: DEV 배너를 CSS class → inline style + body 첫 번째 child로 이동 (sticky 체크 통과)
- 처방②: `.legal-top` / `.legal-bottom` / `.bottom-section` CSS에 `max-width:480px; margin:0 auto` 추가
- 처방③: 구 `.dev-banner` HTML div 제거

---

## WT-117 · T-104 [월별대출] 2026-07/index-dev.html DEV 배너 풀사이즈 수정

| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-07-28 |
| 작성자 | 쮸티12-1호 |
| T-ID | T-104 |
| 로컬 커밋 | `4c3afe8` (2026-07/index-dev) / `c6e47dc` (apply-dev) |
| 상태 | ✅ 테스트 완료(DONE) — 2026-07-28 |

[처방]
- `4c3afe8` monthly-loan/2026-07/index-dev.html: Tailwind CDN 충돌 → `width:480px !important` 추가
- `c6e47dc` monthly-loan/apply/apply-dev.html: sticky+max-width+margin 누락 → 추가 (실제 문제 파일)

---

## WT-116 · T-103 [월전환] 8월 대출 페이지 생성 + menu.js CURRENT_MONTH 2026-08 전환

| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-07-28 |
| 작성자 | 쮸티12-1호 |
| T-ID | T-103 |
| 예정일 | 2026-07-29 |
| 로컬 커밋 | - |
| 상태 | 대기(Pending) — 사이트 통합 완료 후 착수 |

[배경]
월별 대출 페이지는 매월 폴더가 바뀜. menu.js의 `CURRENT_MONTH` 한 줄로 전체 링크 제어. 7월→8월 전환 작업.

[작업 예정]
① `monthly-loan/2026-08/index.html` + `index-dev.html` 신규 생성 (7월 기준 복사 후 내용 수정)
② `js/menu.js` L5: `CURRENT_MONTH = '2026-07'` → `'2026-08'`
③ `js/menu-dev.js` L5: 동일

[규칙] 폴더 먼저 생성 → 링크 나중 변경 (이 순서 어기면 404 발생)

---

## WT-115 · T-102 [꿀정보] 연체 이력 해제 페이지 통합 개편 (PRD 업데이트 + DEV 신규)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-07-28 |
| 작성자 | 쮸티12-1호 |
| T-ID | T-102 |
| 로컬 커밋 | `1c5b04e` (통합) / `d81803a` (링크 연결) |
| 상태 | ✅ 테스트 완료(DONE) — 2026-07-28 |

[배경]
`tip/unsuspend/index.html` — "꿀정보 > 연체 이력 해제" 페이지. 레포 통합 전 제작된 파일로, 현재 표준 통합 구성 미적용 상태.

[현황]
- PRD만 있고 DEV 버전 없음
- `footer.js`만 로드 — `menu.js`, `popup.js`, `legal-shared.js` 미탑재
- `<body class="page">` 아닌 `<div class="page">` — 표준 미통일
- `data-back` 미설정 (상단 ← 동작 불가)

[처방 — 1c5b04e]
① PRD `tip/unsuspend/index.html` 표준 통합
   - body.page + data-back="/tip/" / max-width 600→480px / 폰트순서 통일
   - footer.js 제거 → popup.js + menu.js + legal-shared.js 탑재
   - "2025년도에 서비스를 재개하고," 문구 제거
② DEV `tip/unsuspend/index-dev.html` 신규 생성
   - DEV 배너(주황) / data-back="/tip/index-dev.html" / menu-dev.js

---

## WT-114 · T-101 [나노크레딧 상세] 수치 전면 업데이트 — 7월 썸머 베케이션 기준 반영

| 항목 | 내용 |
|---|---|
| 회차 | 2회차 (회차 수정) |
| 작성일시 | 2026-07-26 / 회차수정 2026-07-27 |
| 작성자 | 쮸티12-1호 |
| T-ID | T-101 |
| 로컬 커밋 | `ada08cc` (1회차) / `1e9632a` (회차수정1) / `8a5acdf` (DEV 파일) / `69e285b` (회차수정2) / `8919686` (워딩) |
| 상태 | ✅ 테스트 완료(DONE) — 2026-07-28 |

[배경]
나노크레딧 상세 페이지(10만/20만/30만/50만) 4개에 기재된 수치들이 7월 이전 기준값으로 되어 있음.
7월 썸머 베케이션 기준으로 ①크레딧 미션 4,500포 공통 통일 ②워터밤 이포 상품 적용 ③50만 이벤트 행 삭제 ④비교 테이블 전면 개정 ⑤웨이팅 보상 할인 테이블 기준값 통일 ⑥한도상향 수치 수정.

[1회차 처방 — ada08cc]
① 크레딧 미션 수치 → 4,500포 공통 통일 (10/20/30/50만 비교 테이블 + 한도상향 섹션)
② 이벤트 대출 원금 미션 → "감면"에서 금액별 1% 수치로 변경 (10만:1,000포 / 20만:2,000포 / 30만:3,000포)
③ 50만 원 이벤트 대출 행 → 삭제 (7월 정책: 50만 이벤트 없음)
④ 웨이팅 보상 할인 테이블 → 4,500포 기준 20셀 × 4파일 전체 교체
⑤ 한도상향 섹션 크레딧 미션 수치 수정 (20/30/50만)

[회차 수정 처방 — 1e9632a]
⑥ 이벤트 대출 옵션 카드 (10/20/30만) 전면 교체
   - 타이틀: "받고 싶다면." → "받고 싶을때!"
   - 상품명: 이포 → 워터밤 이포 상품 / 설명: "원금 1%와 이자 전부를..." / 미션: 크레딧4,500포+이자(1%)+원금(1%)
   - 삭제: "월별 대출 신청 페이지에서 안내드린 바와..." 문장
⑦ 비교 테이블 전면 개정 (4개 파일)
   - 좌석 열 삭제 (헤더 + 모든 행)
   - 롸잇나우: 이포 → 원리포 상품 (10만만)
   - 이벤트: 이포 → 워터밤 이포 상품 (10/20/30만)
   - 블랙찬스: 1행 → 3행 분리 (블찬현/블찬이/블찬원)
     · 블찬현: 다음달1~5일 / 원리현 / 크레딧4,500 / 이자없음 / 원금없음 / 합계4,500
     · 블찬이: 매일 / 이포 / 크레딧4,500 / 이자N,000(1%) / 원금없음 / 합계M포
     · 블찬원: 매일 / 원리포 / 크레딧4,500 / 이자N,000(1%) / 원금N×4(4%) / 합계X포

[회차 수정 2 처방 — 69e285b] 대상: 10/20/30/50만 PRD+DEV 8개 파일 일괄
⑧ 옵션 카드 타이틀 4개 수정
   - 웨이팅: "힘들다면." → "힘들다면 선택!"
   - 롸잇나우: "필요하다면." → "필요하다면 선택!"
   - 블랙찬스: "대우받고 싶다면." → "재대출을 대우받고 싶다면 선택!"
   - 이벤트: "받고 싶을때!" → "대출을 빠르게 받고 싶다면 선택!"
⑨ 롸잇나우 카드 → "상환 후 블랙찬스 티켓 지급 받습니다." 항목 추가
⑩ 크레딧 미션이란? 섹션 전면 교체
   - "고객님의 신용 정보" → "대출 신청자의 신용 정보"
   - "악성 연체자 여부를..." → "악성 연체 여부를..." + → 서브텍스트 분리
   - "연체 원인이 신용회복이나..." → "낮은 신용이 신용회복이나..." + → 서브텍스트 분리
   - 신규 추가: 예치 포인트 안내 문구
   - cm-highlight: "신용정보조회 비용" → "신용조회비용"
⑪ 주의사항: "크레딧 미션을 클릭하지 않으면" → "모든 미션을 완료하지 않으면"

[검증 대기] 사장님 브라우저 테스트 대기 중

---

## WT-039 · T-039 [감다살 상세 카피·UI 일괄 수정] 단순 텍스트/스타일

| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-06-04 | 작성자 | 쮸티12호 |
| 상태 | ✅ 완료 — PR#14 main merge(`183ac46`)·GitHub Pages 배포·운영검증 완료(run `26898681849`) |

[배경] 감다살🐙문어 챌린지 상세 페이지(DEV `index-dev.html` + PRD `index.html`) 카피·UI를 사장님 지시로 단건씩 다수 수정. **단순 텍스트/스타일 수정이라 W-041 분석출력 생략, 수정 내역으로 일괄 표기(사장님 지시).**
[대상] `2026-06/worldcup-challenge/index-dev.html`(DEV) + `index.html`(PRD) 2파일 동일 반영.

[처방 — 수정 내역]
① **보상설명**: 경기당 `+10만 원×3경기=30만 원`→`추가 대출 10만 원×3경기` / 최종 `+10만 원`→`추가 대출 10만 원` / 총합 `총 최대 50만 원.`(끝 점 삭제) → 최종 `전부 맞히면 추가 대출 최대 50만 원`
② **🐙티켓 5박스**: reward `10만 원`→`추가 대출 10만 원` / condition `한국`→`대한민국`
③ **합계박스(✨)**: `총 최대 50만 원`→`추가 대출 최대 50만 원` (보상설명과 통일, 「총」 삭제)
④ **사용방법**: `승인/입금 후`→`승인 후` / 톡문의 어순재배열 / `진행`→`진행하는데요. 단,` / `승인 후 바로 대출`→`⚡ 신청 후 바로 심사! 바로 입금!`(강조) / `10만(원리현)·20만(이포)·30만·50만(원리포)`→`💎 이자 미션과 원금 미션이 없는 10·20만 원(원리현)`(강조)
⑤ **자격**: `이벤트 신청 자격`→`챌린지 신청 자격`
⑥ **경기일정 `.match-date`**: 빨강+볼드 제거 (color `--korea-red`→`--text`, font-weight 700→400)
⑦ **💡핵심박스**: 2줄 레이아웃 + 본문 볼드 제거(`.method-highlight` font-weight 600→400) + 불릿 `∙`
⑧ **⚠️박스**: `집중`→`신청 전 필수 확인` 타이틀 / 본문 2줄 불릿 `∙` / 차감 워딩(`차감합니다.`→`차감하며,`)
⑨ **`6개월 이내`**: 빨강→검정 볼드 (인라인 `color:var(--text)`)
⑩ **푸터**: `감다살🐙문어 챌린지 · 2026 북중미 월드컵 한정 이벤트`→`2026 북중미 월드컵 한정 · 감다살🐙문어 챌린지`
⑪ **하단CTA**: `한국 운명`→`대한민국 운명`
⑫ **`한국`→`대한민국` 전 페이지 통일**(meta·히어로·경기일정제목·유의사항·주석·티켓 등) ※단 `(한국 시간)`은 표준표현이라 한국 유지(사장님 지시)

[검증] grep `한국` 잔여 0건(DEV/PRD 양쪽) / DEV·PRD 동일 반영. DEV 브라우저 미리보기 확인.
[배포 정책] 웹 레포(monthly-loan)는 dev 브랜치 없음 — feature→main 단일. PRD `index.html`+DEV `index-dev.html` 동시 배포(GitHub Pages 1회).

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-039 (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 → 개발자]

monthly-loan T-039 반영 완료했습니다.

작업 내용:
- PR #14 feature/T-001-jun-loan-landing → main merge 완료
- merge commit: 183ac465630076656ea47dd65262bc5829e5b6a5
- GitHub Pages 운영 배포 완료

검증:
- GitHub Pages run 26898681849 success
- PRD 상세 URL HTTP/2 200
- DEV 상세 URL HTTP/2 200
- 운영 본문 PRD/DEV 모두 `대한민국 운명`, `추가 대출 최대 50만 원`, `한국 시간`, `신청 전 필수 확인` 확인
- 운영 본문 PRD/DEV 모두 `총 최대` 미검출
- main 기준 `한국`은 `한국 시간`에만 잔존 확인

문서:
- TODO_BOARD W-024/T-024 완료 처리   ※관리자측 표기오류(실제 대상 T-039) — 개발자 비고
- WORK_THROUGH WT-024 완료 보고서 작성  ※관리자측 표기오류(실제 WT-039)
- project-docs 문서 커밋/푸시 완료: 98ce6c6

한 줄:
- monthly-loan T-039 PR #14 main 반영 완료, merge 183ac46, Pages run 26898681849 success, 감다살 상세 DEV/PRD 카피·UI 반영 확인했습니다.
```

---

## WT-036 · T-036 [공통푸터 수정] 고객센터 사업문의·광고문의 삭제
| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-06-03 | 작성자 | 쮸티12호 |
| 상태 | 진행중 — footer.js 수정 완료, DEV 검증 완료 |

[처방] `footer.js`(공통자산 1파일) 고객센터 카드에서 사업문의(dandy@)·광고문의(hailey@) 2줄 삭제 → 대표전화+고객문의(customer@)만. ※1파일=12페이지 전부 반영.
[검증] DEV 브라우저: 고객센터 rows=[대표전화, 고객문의], dandy/hailey 없음 확인.

---

## WT-038 · T-038 [감다살 신청폼] 포인트 미보유 닫기 → 감다살 챌린지 홈

| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-06-03 | 작성자 | 쮸티12호 |
| 상태 | 진행중 — DEV+PRD 수정 완료, DEV 브라우저 검증 완료 |

[문제] 감다살 신청폼 포인트 "아니오" → 경고 → "닫기"(closeForm) → `window.close()`(같은탭 무효) + `https://monthly-loan.sirjuseyo.com/2026-06/`(호국보훈 PRD)로 리다이렉트. → ①감다살 아닌 호국보훈으로 감 ②DEV→PRD 샘 ③같은탭이라 window.close() 먹통.
[결정] 외부웹이라 앱 적립소 불가 / 웹홈은 앱홈과 동일 UI라 무의미 → **감다살 챌린지 홈(상세)으로 복귀** (사장님 확정).
[처방] `closeForm()`에서 window.close()·구 PRD URL 삭제 → 상대경로 리다이렉트:
- DEV `apply/index-dev.html` → `../index-dev.html` (감다살 상세 DEV)
- PRD `apply/index.html` → `../index.html` (감다살 상세 PRD)
[검증] DEV 브라우저(localhost:5503): closeForm() → `/worldcup-challenge/index-dev.html`(감다살 상세 DEV·배너) 복귀 확인. 같은 탭·DEV→DEV.

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-038 (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 → 개발자]
monthly-loan T-038 반영 완료했습니다.

작업 내용:
- PR #13 feature/T-001-jun-loan-landing → main merge 완료 / merge commit 71615ee9d999c6ba9d8962fd7f8361e1f08417bc
- GitHub Pages 운영 배포 완료

검증:
- GitHub Pages run 26855320854 success / PRD·DEV 신청폼 HTTP/2 200
- main 기준 DEV closeForm() → ../index-dev.html 확인 / PRD closeForm() → ../index.html 확인
- window.close() 제거 확인 / 호국보훈 PRD 절대 URL 리다이렉트 제거 확인

문서: TODO_BOARD·WORK_THROUGH 반영 / 문서 커밋 6f4836d

한 줄: monthly-loan T-038 PR #13 main 반영 완료, merge 71615ee, Pages run 26855320854 success, 감다살 신청폼 닫기 DEV/PRD 상대경로 복귀 확인.
```

---

## WT-037 · T-037 [신청폼 탭 통일] 호국보훈 상세→신청폼 같은 탭
| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-06-03 | 작성자 | 쮸티12호 |
| 상태 | 진행중 — DEV+PRD 수정 완료, DEV 검증 완료 |

[문제] 호국보훈 상세 신청버튼 `target="_blank"`(별도탭) ↔ 감다살 같은탭 → 불일치.
[처방] `2026-06/index-dev.html`(DEV) + `2026-06/index.html`(PRD) SpringMarch-waiting-button `target="_blank"` 제거 → 같은 탭(감다살과 통일). ※감다살 무수정.
[검증] DEV 브라우저: 신청버튼 target=(none), href=../apply/apply-dev.html 확인.

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-035/036/037 (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 → 개발자]
monthly-loan T-035/T-036/T-037 반영 완료했습니다.

작업 내용:
- PR #12 feature/T-001-jun-loan-landing → main merge 완료 / merge commit 27262b15aa1cbe452c36c34b4ca7840216a9413c
- GitHub Pages 운영 배포 완료 / 공통 footer.js 및 12개 DEV/PRD 페이지 script 포함 확인
- 호국보훈 상세 신청버튼 target="_blank" 제거 확인

검증:
- GitHub Pages run 26852413538 success
- https://monthly-loan.sirjuseyo.com/footer.js HTTP/2 200 / 홈·호국보훈상세·loan-checker 200
- footer.js 내 #sjy-footer, www.sirjuseyo.com 절대경로, 대표전화/고객문의 확인
- 사업문의/광고문의/dandy/hailey 미노출 확인 / 12개 페이지 모두 /footer.js 포함 확인

문서: TODO_BOARD·WORK_THROUGH 반영 / 문서 커밋 cc0a8f5

한 줄: monthly-loan T-035/036/037 PR #12 main 반영 완료, merge 27262b1, Pages run 26852413538 success, 공통 footer 및 신청 같은 탭 반영 확인.
```

---

## WT-035 · T-035 [공통푸터] 써주세요 공용 푸터 전 페이지 이식 (footer.js)

| 항목 | 내용 |
|---|---|
| 회차 | 1~2회차 |
| 작성일시 | 2026-06-03 |
| 작성자 | 쮸티12호 |
| 레포 | 웹 `monthly-loan` |
| 상태 | 진행중(In-Progress) — 구현+브라우저 검증 완료, 사장님 테스트·커밋 대기 |

---

[작업 목표] 써주세요 공용 푸터(Contact~저작권, 소스 sirjuseyoWeb/index.html 386~489 원본 그대로)를 월별대출 전 페이지에 이식. 공통자산 방식(중복0·유지보수1곳).

[1회차 — footer.js 공통자산 + 12페이지 링크]
- 신규 `/footer.js` 생성: 소스 푸터 HTML+CSS 추출, `#sjy-footer`로 CSS 스코핑(원본 디자인 유지+기존 페이지 무충돌), DOMContentLoaded 시 body 끝에 주입
- 12개 페이지(홈·호국보훈상세/신청폼·감다살상세/신청폼·loan-checker, PRD+DEV)에 `<script src="/footer.js"></script>` 1줄씩
- 홈(가) 우선 적용 → 브라우저 검증(Contact·법적·About us·저작권 전부)

[2회차 — 자산 도메인 정정 (중요)]
- 1회차 자산 절대경로를 `https://sirjuseyo.com/`으로 했으나 → apex는 404
- CNAME 확인: 메인 사이트 = `www.sirjuseyo.com` → 전부 `https://www.sirjuseyo.com/`으로 정정
- 검증(curl): 로고·약관3·PDF3 전부 www 200

[검증 — Chrome 실측(localhost:5503)]
- 홈: 푸터 주입·로고 로드(naturalWidth 300)·링크 www 정상
- 감다살 신청폼(다른 CSS 프레임워크): 푸터 원본 그대로 렌더링·로고·저작권 정상 (스코핑 무충돌 확인)
- 12개 전부 `footer.js` 스크립트 1줄 보유 확인

[남은 작업] 사장님 테스트 → 커밋·푸시·PR
> ※ 저작권 텍스트 "(sirjuseyo.com)"은 원본 그대로 유지(URL만 www)

---

## WT-034 · T-034 [Phase 6~7] PRD DB 테이블 생성 (운영 RDS)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-03 |
| 작성자 | 쮸티12호 |
| 대상 | 운영 RDS `sjy-nano-production` / DB `nano` |
| 상태 | 테스트 완료(DONE) — 운영 테이블 생성·검증 완료 |

---

[작업 목표] 운영(PRD) DB에 challenge_worldcup_2026_application 테이블 생성 (DEV와 동일, 쮸티12호 직접 — 서버 PRD 배포 선행조건)

[① 읽기전용 확인 — 운영 맞는지·테이블 부재]
- host `sjy-nano-production`(운영 확실) / DB `nano` / 계정 `sirjuseyo@%` / @@read_only=0
- nano 총 58 테이블(실 운영 DB 확인) / challenge 테이블수=0(부재 확인)

[② 사장님 승인 → CREATE TABLE 실행]
- DDL: `project-docs/00_plan/DDL_challenge_worldcup_2026_application_20260602.sql` (PK bigint 반영본)
- 검증: 테이블존재=1 / 25컬럼 / 5인덱스 / PK **bigint**·auto_increment·PRI / 기본값(status_cd=RECEIVED·point_confirmed_cd=N·is_deleted=0·total_hit_count=0) 정상
- 기존 58개 테이블 무변경(신규 1개만 추가)

[결과] 운영 DB 준비 완료 → 서버 PRD 배포 시 Hibernate schema-validation 통과 예정. (DEV와 동일 스키마)

[남은 작업(Phase 7)] 서버 PRD 배포 → 어드민 PRD → 웹 PR#11 main머지 → 운영 동선확인 (일괄 작업요청서)

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — PRD 일괄 배포 (보관, 정책 201~205 · 마지막 WT-ID 밑)
> 감다살🐙문어 챌린지 운영(PRD) 전체 배포 완료. 원문 그대로 보관.
```
[깃 & 배포 관리자 → 개발자/사장님]
감다살🐙문어 챌린지 PRD 일괄 배포 완료했습니다.

작업 내용:
- sirjuseyo-admin 전체 dev->main 병합 없이 요청 커밋만 선별 cherry-pick
  - 31beb1f T-025 신청 접수 API / d4af3c2 T-026 bean scan 핫픽스 / b493ec0 T-031 어드민 조회·채점 API
- 서버 PRD image main-20260602T185211UTC 배포
- EKS dispatch 실패 후 수동 GitOps 보정: sirjuseyo-eks commit 8df234b
- admin-web 전체 dev->main 병합 없이 T-032만 선별 반영: 8d45657 / 운영 S3·CloudFront 배포
- monthly-loan PR #11 main merge: merge commit bbeb1a9

검증:
- 서버 Deploy run 26841122436 success / admin-prod-deploy rollout success, pod 1/1, restart 0 / PRD liveness 200
- 신청 API GET -> 405(allow POST) / 운영 신청 POST 201, 생성 id 1
- 어드민 인증 API 비인증 호출 401 / admin-web https://admin.sirjuseyo.com/ 200
- CloudFront invalidation ICXV90F1K5SQCUYUR5TQ4XP2D1 completed
- monthly-loan Pages run 26841581778 success / 홈·상세·신청 URL 200

주의:
- 운영 테스트 신청 데이터 id 1 생성됨
- 어드민 실제 조회·채점은 관리자 로그인 세션 필요 → 비인증 401까지만 확인

문서: project-docs 반영 / 문서 커밋 feea658

한 줄: 감다살🐙문어 챌린지 PRD 일괄 배포 완료, 서버 b493ec0/EKS 8df234b/admin-web 8d45657/monthly-loan bbeb1a9 반영 및 운영 POST 201까지 확인.
```

---

## WT-033 · T-033 [Phase 5 회귀수정] DEV 홈/챌린지 — DEV 배너 + DEV→DEV 링크 + PRD 승무패

| 항목 | 내용 |
|---|---|
| 회차 | 1~5회차 (반복 수정) |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 레포 | 웹 `monthly-loan` |
| 상태 | 진행중(In-Progress) — 수정 완료, 사장님 재테스트·커밋 대기 |

---

[문제 — Phase 5 회귀 점검 중 사장님 발견]
- DEV 홈(`index-dev.html`) 등에 DEV 표시 배너 없음
- DEV 페이지가 PRD로 연결됨 (홈DEV 신청하기→/2026-06/(PRD), 승무패→/2026-06/(PRD), 호국보훈상세DEV 신청→apply.html(PRD))

[처방]
(A) DEV 배너 추가 (apply-dev.html 패턴 동일: 주황 #FF5400 바 "🚧 DEV 테스트 환경 — 실사용자 접근 금지", body 직후):
- `index-dev.html`(홈) / `2026-06/worldcup-challenge/index-dev.html`(감다살 상세) / `2026-06/worldcup-challenge/apply/index-dev.html`(감다살 신청폼)
(B) DEV→DEV 링크 정합:
- `index-dev.html`: 호국보훈 신청하기 `./2026-06/`→`./2026-06/index-dev.html` / 승무패 `./2026-06/`→`./2026-06/worldcup-challenge/index-dev.html`
- `2026-06/index-dev.html`: 호국보훈 신청 `https://.../apply/apply.html`(절대PRD)→`../apply/apply-dev.html`(상대DEV, 로컬테스트 가능)
- ※PRD 파일(index.html 등) 무수정 확인

[1회차 검증] 배너 3곳 + DEV 링크 정합 grep 확인 / PRD 무손상

---

[2회차 — 사장님 발견: 호국보훈 상세 DEV 배너 누락]
- `2026-06/index-dev.html`(호국보훈 상세 DEV)에도 DEV 배너 추가 (1회차 배너 목록에서 빠졌음)
- 검증: DEV 배너 보유 5곳(홈·호국보훈상세·호국보훈신청폼·감다살상세·감다살신청폼)

[3회차 — 사장님 승인(A): loan-checker 포함]
- `loan-checker/index-dev.html`: DEV 배너 추가
- 홈 `index-dev.html`: 검사 시작하기 `./loan-checker/`→`./loan-checker/index-dev.html`
- `loan-checker/index-dev.html` CTA 정적 href `https://.../2026-06/`→`../2026-06/index-dev.html`

[4회차 — loan-checker JS 덮어쓰기 정정 (사장님 "여전히 PRD" 재발견)]
- 원인: loan-checker `index-dev.html` 인라인 스크립트(591행)가 `cta.href = cfg.detailUrl`로 정적 href를 month-config의 PRD URL로 다시 덮어씀
- 수정: DEV 전용 스크립트라 PRD 무영향. detailUrl을 DEV 경로로 변환:
  `cta.href = cfg.detailUrl.replace('https://monthly-loan.sirjuseyo.com/','../').replace(/\/$/,'/index-dev.html')`
- 검증: **Chrome 실측(localhost:5503)** — 홈 검사→`loan-checker/index-dev.html` / loan-checker CTA(JS 실행 후)→`../2026-06/index-dev.html` / 배너 true. 전부 DEV 확인.
- ※기존 PRD 화면 "여전히 PRD"는 사장님 5502 서버/브라우저 캐시였음(파일·런타임은 정상)

[5회차 — 사장님 지시(item3): PRD 홈 승무패 링크 정정]
- `index.html`(PRD 홈) 승무패 `./2026-06/`(호국보훈)→`./2026-06/worldcup-challenge/`(감다살 PRD 상세)
- ※W-035 당초 'PRD 무수정' 범위였으나 사장님 지시로 PRD 1건 수정 (범위 확장)
- ⚠️ **배포 타이밍 경고**: PRD 감다살 신청폼→PRD admin-api(챌린지 API 미배포). 이 PRD 링크 단독 운영배포 시 실사용자 신청 404. **반드시 Phase 7(서버 PRD)과 함께 출시**.

[최종 변경 파일 (6 DEV + 1 PRD)]
- DEV: `index-dev.html`, `2026-06/index-dev.html`, `2026-06/worldcup-challenge/index-dev.html`, `2026-06/worldcup-challenge/apply/index-dev.html`, `loan-checker/index-dev.html` (+ 기존 `apply/apply-dev.html`는 배너 기보유)
- PRD: `index.html` (승무패 링크 1건)

[커밋·푸시·PR — ✅ 완료]
- 코드 커밋 `2e405ab`(DEV5+PRD1) / 문서 커밋 `ff9fc87`
- 푸시 `feature/T-001-jun-loan-landing` / PR #11 (feature → main)

### 📤 깃 & 배포 관리자 작업요청서 (보관, 양식 6-⑥)
```
[개발자 -> 깃 관리자 전달]

monthly-loan T-033 작업 완료했습니다.
`feature/T-001-jun-loan-landing` 원격 푸시 완료했고 PR은 `#11`입니다.

작업 내용:
- DEV 환경 배너(주황 #FF5400) 추가: 홈/호국보훈상세/감다살상세/감다살신청폼/loan-checker
- DEV→DEV 링크 정합: 홈(신청·승무패·검사) / 호국보훈상세 신청 / loan-checker CTA(정적+인라인JS detailUrl→DEV 변환)
- PRD index.html 승무패 ./2026-06/ → ./2026-06/worldcup-challenge/ (호국보훈→감다살)

검증:
- Chrome 실측(localhost:5503): 홈/loan-checker 모든 링크 DEV 이동 + 배너 표시 확인

커밋:
- `2e405ab` `fix(dev): DEV 배너 + DEV→DEV 링크 정합 + PRD 승무패 링크 [T-033]`

문서:
- `project-docs` (웹 레포 monthly-loan, 문서 전용)
- 브랜치: `feature/T-001-jun-loan-landing`
- PR: `#11` (코드와 동일 PR)
- 문서 커밋: `ff9fc87` `docs: T-033 DEV 배너/링크 + PRD 승무패 기록 (WT-033 1~5회차) [T-033]`

한 줄 버전:
- monthly-loan T-033 완료, feature/T-001-jun-loan-landing 푸시 및 PR #11 생성, Chrome 실측 검증 했습니다. 깃 & 배포 관리자님 검토 부탁드립니다.
```

[남은 작업]
- 깃&배포 관리자 PR #11 검토·반영 → 작업완료서 수령

---

## WT-032 · T-032 [Phase 3-🅑] 어드민 UI (admin-web, Vue.js)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 레포 | `Claude_Server_20260413/admin-web` |
| 브랜치 | `feature/worldcup-challenge-2026-admin` (origin/dev 최신화 후 분기) |
| 상태 | 테스트 완료(DONE) — DEV 배포·사장님 검증 완료 (PR#18 `a98ece0`, 정정 재배포 후 메뉴·리스트·상세·채점 정상) |

---

[작업 목표]
감다살🐙문어 챌린지 어드민 화면(리스트·상세·채점·CSV) 구현. **선배(review-application) 화면 카피캣 — 자의적 디자인 0.**

[처방 — 신규 3 + 수정 2]
- `service/worldcupChallenge/worldcupChallengeAPI.js` — review API 패턴 카피 + 챌린지 엔드포인트 + CSV(blob)
- `views/pages/worldcup-challenge/WorldcupChallengeApplicationList.vue` — ReviewApplicationList 카피캣 (필터·페이지네이션·테이블·CSV / `cw-` prefix / 6상태 / §6-2 컬럼: 예측5종·적중수·보상금액 추가)
- `views/pages/worldcup-challenge/WorldcupChallengeApplicationDetail.vue` — ReviewApplicationDetail 카피캣 (ID네비·헤더·2열카드 / `cwd-` prefix / 섹션: 기본정보·예측5종·채점입력5체크박스+자동계산·상태변경·메모)
- `router/index.js` — lazy import 2 + route 2 (review 라우트 패턴 동일)
- `_nav.js` — 사이드바 메뉴 "감다살🐙문어 챌린지" 추가 (TECHSPEC §6-1: 신청>Nano Credit 아래)

[검증]
- 정식 lint(vue-cli-service lint): 실제 코드 에러 0. 잔여는 전부 도구 아티팩트
  (.vue Parsing error = 벤치마크 review도 동일 / .js vue규칙오적용 = vue-eslint-parser 버전 불일치)
- ⚠️ 로컬 정식 빌드 미완: node-sass(4.13)↔Node20 비호환으로 기존 scss 파일에서 실패(환경 문제, 내 파일과 무관·내 파일 plain style). 관리자 CI(정상 env) 빌드 검증 예정.
- 코드 구조: 선배 벤치마크와 동일 패턴, plain `<style>`(scss 미사용)

[DEV 배포 완료 — 깃&배포 관리자 PR #18 dev 머지 + DEV 정적 배포]
- merge commit `a98ece0` / Docker Node12 build 성공 / S3 `dev-admin.sirjuseyo.com` + CloudFront invalidation Completed / DEV WEB 200
- `/challenge/**` 비인증 401 (인증경계 정상)
- ⚠️ `admin-web main...dev` diverged (PR 후 dev ahead 4 / behind 4) → **PRD 전체 dev→main 병합 금지, T-032 커밋만 선별 반영**

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 (보관 — 정책 201~205, 마지막 WT-ID 밑)
```
[DEV : 깃 & 배포 관리자 -> 개발자]
admin-web T-032 반영 완료했습니다.

원격 머지: feature/worldcup-challenge-2026-admin -> dev / PR #18 / merge commit a98ece08080217162a36d533e8b2a1c58786dcfd
DEV 정적 배포:
- Docker Node12 npm install && npm run build:dev 성공
- S3 s3://dev-admin.sirjuseyo.com/ / CloudFront invalidation IOBM0Y5ZZSSLU6RLSDZLPSQ3W status Completed
- DEV WEB https://dev-admin.sirjuseyo.com/ HTTP/2 200
확인:
- admin-web 레포에는 GitHub Actions workflow/checks 없음
- https://dev-admin-api.sirjuseyo.com/challenge/worldcup-challenge-2026/applications 비인증 HTTP/2 401 (어드민 API 인증경계 정상)
주의:
- 로컬 Node v25 build는 구형 webpack/OpenSSL 오류로 실패했으나 Docker Node12 기준 빌드 성공
- admin-web main...dev diverged. PR 병합 후 dev ahead 4 / behind 4 → PRD 전체 dev->main 병합 금지. PRD 반영 요청 시 T-032 대상 커밋만 선별 반영
문서: GitDeployOps TODO/WORK_THROUGH 업데이트, 완료보고서 WT-011 / project-docs commit 0aefda4

한 줄: admin-web T-032 PR #18 dev merge 완료, Docker Node12 DEV build 및 S3/CloudFront 정적 배포 완료, DEV URL 200 및 어드민 API 비인증 401 확인. PRD는 main/dev diverged로 전체 병합 금지.
```

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — ②차(DEV 오배포 정정 재배포) (직전 보고서 밑 이어서 보관)
> ⚠️ 1차 DEV 배포 산출물이 **로컬 main 기준으로 빌드**되어 메뉴 미노출 → dev 기준 정정 재배포. **개발자 커밋/푸시는 정상(추가 수정 불필요)** 확인됨.
```
[깃 & 배포 관리자 → 개발자]
admin-web T-032 DEV 오배포 정정 재배포 완료했습니다.

원인:
- PR #18은 dev에 정상 머지됐으나, 이전 DEV 배포 산출물이 로컬 main 기준으로 생성됨
- 개발자 커밋/푸시는 정상이며 추가 수정/복원 작업 불필요

재배포:
- 원격 dev commit a98ece08080217162a36d533e8b2a1c58786dcfd 기준 재빌드
- Docker Node12 npm run build:dev 성공 / S3 s3://dev-admin.sirjuseyo.com/ 재동기화
- CloudFront /* 무효화: I9QWZI8CB2HREAM0E9WYK6DS27

검증:
- DEV WEB https://dev-admin.sirjuseyo.com/ → HTTP/2 200
- 배포 JS /29.js 에 '감다살🐙문어 챌린지' 및 '/pages/worldcup-challenge/list' 포함 확인
- DEV admin API 비인증 → HTTP/2 401

문서: T-012/W-012/WT-012 검증완료, WORK_THROUGH WT-012 / 원격 문서 커밋 ecb53c7

한 줄: admin-web T-032 DEV 오배포 정정 완료, 원격 dev a98ece0 기준 클린 재빌드/재업로드/CloudFront 무효화 완료, DEV URL 200 및 메뉴 번들 포함 확인.
```

---

## WT-031 · T-031 [Phase 3-🅐] 어드민 서버 API (sirjuseyo-admin, /challenge/** 인증)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 레포 | `Claude_Server_20260413/sirjuseyo-admin` |
| 브랜치 | `feature/worldcup-challenge-2026-admin-api` (origin/dev 최신화 후 분기) |
| 상태 | 테스트 완료(DONE) — DEV 배포·검증 완료 (PR#25 `436447a`) |

---

[작업 목표]
TECHSPEC §5-2~5-6 어드민 조회·채점·상태·CSV API를 sirjuseyo-admin에 구현 (인증 /challenge/**).

[처방 — 신규 5 + Entity 메서드 1]
- `AdminChallengeWorldcup2026ApplicationController` — GET 목록/상세, PATCH 채점/상태/메모, GET CSV
- `AdminChallengeWorldcup2026ApplicationService` — §5-2~5-6 로직 (review 어드민 패턴 동일)
- `...ApplicationListItemVO` / `...ApplicationDetailVO`(+prev/next 네비) — 코드→라벨 변환
- `...ScoringRequestVO` — 채점 입력(hit 5종 0/1)
- Entity `updateScoring(...)` 메서드 추가
- 채점 로직: total_hit_count=hit5합 / ticket_amount=합×10(만원) / 0→MISS·≥1→HIT 자동
- 목록 page 1-base→Spring 0-base 변환, status_cd/name/phone 필터, 페이지네이션
- CSV: UTF-8 BOM + 12컬럼(코드→라벨), 필터 §5-2 동일

[보안 점검 §8-1 11~13]
- 인증: /challenge/** → 기존 anyRequest().authenticated() 자동 적용 ✅
- HTTPS: 인프라(Ingress/도메인) 레벨 ✅ 무수정
- Rate Limit(§5-1, IP 분당10): 어드민 무관·신청접수 API 대상 → **W-034 최후순위 분리(사장님 결정)**

[검증]
- ./gradlew compileJava --offline (JAVA8/Gradle5.6.4) → BUILD SUCCESSFUL
- 어드민 6개 .class 생성 확인

[커밋·푸시·PR — ✅ 완료]
- 로컬 커밋 `b5fe8a4` → `feature/worldcup-challenge-2026-admin-api` 푸시
- PR #25 (feature → dev): https://github.com/sirjuseyo/sirjuseyo-admin/pull/25

### 📤 깃 & 배포 관리자 작업요청서 (Phase 3-🅐 — 보관, 양식 6-⑥)
```
[개발자 -> 깃 관리자 전달]

sirjuseyo-admin T-031 작업 완료했습니다.
`feature/worldcup-challenge-2026-admin-api` 원격 푸시 완료했고 PR은 `#25`입니다.

작업 내용:
- 감다살🐙문어 챌린지 어드민 조회·채점 API 신규 구현 (TECHSPEC §5-2~5-6, 인증 /challenge/**)
- GET 목록(필터·페이지네이션·코드→라벨) / GET 상세(+prev·next) / PATCH 채점(자동계산) / PATCH 상태 / PATCH 메모 / GET CSV(UTF-8 BOM)
- 채점 로직: total_hit_count=hit5합, ticket_amount=×10, 0→MISS·≥1→HIT 자동
- 인증·HTTPS 기존 충족(무수정) / Rate Limit은 신청접수 API 대상 별도(W-034)

검증:
- ./gradlew compileJava → BUILD SUCCESSFUL (Java8/Gradle5.6.4)
- 벤치마크 review-application 어드민 패턴 동일

커밋:
- `b5fe8a4` `feat(challenge): 감다살문어 챌린지 어드민 조회·채점 API [T-031]`

문서:
- project-docs (웹 레포 monthly-loan, 문서 전용)
- 브랜치: feature/T-001-jun-loan-landing
- PR: 문서 PR 별도 미생성 (project-docs는 push-only 정책)
- 문서 커밋: `f86619e` `docs(challenge): Phase3-🅐 어드민 API 기록 [T-031/W-032·W-034]`

한 줄 버전:
- sirjuseyo-admin T-031 완료, feature/worldcup-challenge-2026-admin-api 푸시 및 PR #25 생성 완료, 컴파일(BUILD SUCCESSFUL) 검증 했습니다. 깃 & 배포 관리자님 feature → dev 검토 부탁드립니다. (dev 먼저 배포)
```

[DEV 배포 완료 — 깃&배포 관리자 PR #25 dev 머지 + DEV 배포]
- merge commit `436447a` / DEV image `dev-20260602T133152UTC` / rollout success·pod 1/1·liveness 200
- `/challenge/**` 비인증 GET → 401 (인증경계 정상) / bean·schema validation 오류 미재발

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 (보관 — 정책 201~205, 마지막 WT-ID 밑)
```
[깃 & 배포 관리자 → 개발자]
sirjuseyo-admin T-031 감다살문어 챌린지 어드민 조회/채점 API PR #25 dev 반영 및 DEV 배포 검증 완료했습니다.

작업 내용:
- PR #25 feature/worldcup-challenge-2026-admin-api → dev 병합 완료
- merge commit: 436447a74e3022682f30d06f20a2a367284cd920
- 신규 DEV image 생성 및 ECR push 완료 / DEV Kubernetes 배포 반영 완료
- /challenge/** 어드민 인증 경계 확인

검증:
- PR CI build-test → pass / admin Deploy GitHub Actions run 26823104036 → success
- DEV image dev-20260602T133152UTC (digest sha256:5febe86e...0f5a88)
- admin-dev-deploy rollout success / pod admin-dev-deploy-54c4447dd-4kmbv Ready 1/1 restart 0
- https://dev-admin-api.sirjuseyo.com/liveness → HTTP/2 200
- 비인증 GET /challenge/worldcup-challenge-2026/applications → HTTP/2 401
- Spring 로그: repository scan 17/25 정상 / member·nano EMF 초기화 정상 / Started AdminApplication / 이전 bean 미등록·schema validation 오류 미재발

배포 특이사항:
- EKS 자동 Repository Dispatch run 26823219064는 'Missing kustomization for admin/dev'로 실패
- 수동으로 sirjuseyo-eks/admin/dev/kustomization.yaml image tag 갱신 후 반영
- GitOps commit: e7cf571 deploy(dev): apply admin challenge management image / kubectl apply -k admin/dev 완료

문서:
- GitDeployOps TODO_BOARD W-009/T-009 검증완료 / WORK_THROUGH WT-009 완료보고서
- 문서 커밋: 3368e95 docs(gitdeploy): record admin challenge management dev deployment

한 줄: sirjuseyo-admin T-031 PR #25 dev merge 완료, image dev-20260602T133152UTC DEV 배포 완료, rollout success, pod 1/1 restart 0, liveness 200, /challenge/** 비인증 401 확인.
```

---

## WT-030 · T-030 [Phase 2 수정A] 상세→신청 CTA DEV/PRD 라우팅 정합

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 파일 | `2026-06/worldcup-challenge/index-dev.html` (상세 DEV) |
| 상태 | 진행중(In-Progress) — 수정 완료, 재테스트·커밋 대기 |

---

[문제 — 사장님 지적]
DEV 상세(`index-dev.html`)의 신청 CTA `href="./apply/"` → 디렉토리 기본문서 `apply/index.html`(PRD 신청폼)으로 연결됨.
→ DEV 상세에서 신청 눌러도 PRD 폼이 열려 운영 admin-api로 POST → 404 → 사장님 테스트 실패(완료화면X·DB적재X·"No message available" 에러).
→ 사장님이 본 증상 1·2·3 전부 이 라우팅 오류 하나에서 파생.

[처방]
- `index-dev.html` 상세 CTA: `href="./apply/"` → `href="./apply/index-dev.html"` (DEV 상세 → DEV 신청폼)
- PRD 상세(`index.html`)는 `href="./apply/"`(=index.html PRD) 유지 — 정상, 무수정

[검증]
- DEV 상세 CTA = `./apply/index-dev.html` ✅ / PRD 상세 CTA = `./apply/` ✅
- 재테스트: `http://localhost:5502/2026-06/worldcup-challenge/index-dev.html` → 신청 → DEV 폼 → dev-admin-api → DB 적재 (사장님 재확인 예정, ※localhost로 접속)

[커밋·푸시·PR — ✅ 완료]
- 로컬 커밋: `210a1f3`(코드 T-029/030) + `766380d`(기록 T-025~030)
- 푸시: `feature/T-001-jun-loan-landing` (`8199d4b..766380d`, 8커밋)
- **PR #10** (`feature → main`): https://github.com/sirjuseyo/monthly-loan/pull/10

### 📤 깃 & 배포 관리자 작업요청서 (Phase 2 — 보관, 양식 6-⑥)
```
[개발자 -> 깃 관리자 전달]

monthly-loan T-018~T-030 작업 완료했습니다.
`feature/T-001-jun-loan-landing` 원격 푸시 완료했고 PR은 `#10`입니다.

작업 내용:
- 감다살🐙문어 챌린지 상세 페이지 구현 (T-018~022, DEV/PRD)
- 감다살🐙문어 챌린지 신청 폼 구현 (T-029, DEV/PRD) — API Base 분기(admin-api/dev-admin-api), FINAL_RESULT_CD·POINT_CD 매핑, fetch POST /open/challenge/worldcup-challenge-2026/applications, 오류처리 §7-5, 히어로 이미지
- 상세 CTA 라우팅 정합 (T-030) — DEV상세→DEV신청폼, PRD상세→PRD신청폼

검증:
- DEV 로컬 실테스트: 신청 → dev-admin-api 201 → DEV DB 적재 (id=2 개발자테스트, id=3 사장님 재테스트)
- 코드값 매핑 정상: 있습니다→Y / 16강 진출 (16강 탈락)→R16 / 우승→WIN
- DEV 상세 CTA → DEV 신청폼 연결 정상 확인

커밋:
- `a30eefd` `feat(T-018): 감다살문어 챌린지 상세+신청 폴더 골격 생성`
- `37fb69e` `fix(T-018): 챌린지 히어로 이미지 파일명 확정 + JPG 변환`
- `6d93dc1` `feat(T-019): 감다살문어 챌린지 상세 페이지 코딩 (DEV/PRD)`
- `8ef6521` `fix(T-021): 챌린지 상세 페이지 수정 8건 (DEV/PRD)`
- `93eb6fc` `fix(T-022): 챌린지 상세 페이지 2차 수정 7건 + 기획서·와이어프레임`
- `d2bd3ea` `docs(T-022): 챌린지 기획서·와이어프레임 2차 수정 반영`
- `210a1f3` `feat(challenge): 감다살문어 챌린지 신청 폼 DEV/PRD 구현 + 상세 CTA 라우팅 [T-029/T-030]`

문서:
- `project-docs` (코드와 동일 레포·동일 브랜치)
- 브랜치: `feature/T-001-jun-loan-landing`
- PR: `#10` (코드와 동일 PR)
- 문서 커밋: `766380d` `docs(challenge): Phase1~2 기록 + 산출물 [T-025~T-030]`

한 줄 버전:
- `monthly-loan T-018~T-030 완료, feature/T-001-jun-loan-landing 푸시 및 PR #10 생성 완료, DEV 로컬 실테스트(201·DB적재) 검증 했습니다. 깃 & 배포 관리자님 feature → main 검토 부탁드립니다.`
```

[배포 완료 — 깃&배포 관리자 PR #10 main 병합 + 운영 배포]
- merge commit `1938b0e` / GitHub Pages run `26805706474` success / 상세·신청폼·히어로 운영 200

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 (보관 — 정책 201~205, 마지막 WT-ID 밑)
> monthly-loan T-018~T-030 PR #10 main 반영 + 운영 배포 검증. 원문 그대로 보관.

```
[깃 & 배포 관리자 → 개발자]
monthly-loan T-018~T-030 감다살문어 챌린지 상세/신청폼 PR #10 main 반영 및 운영 배포 검증 완료했습니다.

작업 내용:
- PR #10 feature/T-001-jun-loan-landing → main 병합 완료
- merge commit: 1938b0ec6060b40789ebfdacbbcf4f400c676d5d
- GitHub Pages 운영 배포 완료
- 상세 페이지 DEV/PRD 운영 URL 확인 / 신청폼 DEV/PRD 운영 URL 확인 / 히어로 이미지 운영 URL 확인
- DEV/PRD API base 분기 확인: DEV dev-admin-api.sirjuseyo.com / PRD admin-api.sirjuseyo.com
- 상세 CTA 라우팅 확인: DEV 상세 → ./apply/index-dev.html / PRD 상세 → ./apply/

검증:
- GitHub Pages run 26805706474 → success
- 운영 URL: 상세 PRD/DEV HTTP/2 200 / 신청폼 PRD/DEV HTTP/2 200 / 히어로 JPG HTTP/2 200
- live HTML: FINAL_RESULT_CD 매핑 확인 / POINT_CD 매핑 확인 / DEV 신청폼 dev-admin-api base 확인
  / PRD 신청폼 admin-api base 확인 / DEV·PRD CTA 라우팅 정상 확인

주의:
- 관리자 검증에서는 추가 신청 POST 미수행 (DB write 회피). 개발자 완료보고서의 DEV 로컬 201 및 DB 적재 검증 결과를 인수 기준으로 기록.

문서:
- GitDeployOps TODO_BOARD / WORK_THROUGH WT-008 완료보고서 반영 완료
- 문서 커밋: 380aada docs(gitdeploy): record monthly-loan challenge pages deployment

한 줄: monthly-loan T-018~T-030 PR #10 main merge 완료, merge commit 1938b0e, GitHub Pages run 26805706474 success, 운영 상세/신청폼/히어로 200 및 API base/CTA live HTML 확인 완료.
```

---

## WT-029 · T-029 [Phase 2] 클라 신청 폼 구현 (DEV+PRD 동시)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 파일 | `2026-06/worldcup-challenge/apply/index.html`(PRD) + `index-dev.html`(DEV) |
| 상태 | 진행중(In-Progress) — 구현+DEV 로컬 실테스트 완료, 커밋·푸시·PR 대기 |

---

[작업 목표]
와이어프레임(`apply-감다살문어챌린지-worldcup_20260602.html`)을 PRD/DEV 실파일로 구현, TECHSPEC §7 연동.

[처방 — 구현]
- 원본(와이어프레임) 그대로 복사 후 정밀 수정 (전사오류 방지). 두 파일 차이 = title·주석·ENV·API_URL 4줄뿐(API Base만 분기).
- API_URL: PRD `https://admin-api.sirjuseyo.com/open/challenge/worldcup-challenge-2026/applications` / DEV `https://dev-admin-api...`
- payload(§7-4): `event_cd` 제거, `point_confirmed_cd`/`predict_final_result_cd` 등 `_cd` 필드, `FINAL_RESULT_CD`(7종)·`POINT_CD`(Y/N) 매핑 추가
- 오류처리(§7-5): 400(서버 message)/429/500/network → 인라인 안내(`err-privacy`), 기존 `alert` 대체
- 히어로 이미지: placeholder div → `<img src="../assets/worldcup-challenge-jun-001.jpg">`
- 클라 검증(이름`^[가-힣]{2,5}$`·휴대폰·이메일·골0~20·동의)은 원본 유지

[검증 — DEV 로컬 실테스트 (A안)]
- 로컬 서버 `http://localhost:5500`(CORS 허용 포트 — AdminCorsFilter 등록 확인) 기동, 실제 Chrome으로 구동
- 랜딩/히어로이미지/완료화면 정상 렌더링 (스크린샷 증빙)
- 폼 실제 함수로 13스크린 진행 → 검증 통과 → 동의 클릭 → **실 fetch → 완료화면(s-done) 도달**
- 매핑 동작 확인: `있습니다→Y`, `16강 진출 (16강 탈락)→R16`
- **DB 실적재 확인: id=2 / name=쮸티로컬 / point_confirmed_cd=Y / predict_final_result_cd=R16 / status_cd=RECEIVED**
- CORS 통과(localhost:5500), 에러 없음 / DB 총 2건(id=1 #18, id=2 로컬폼) 보존

[남은 작업]
1. TODO_BOARD 작업현황 요약표 갱신 + 로컬 커밋(웹 레포 feature 브랜치)
2. 원격 푸시 + PR
> ⚠️ 종합 `테스트완료` 판정은 최종 클라 테스트(사장님) 후 — 본 항목은 개발자 로컬검증까지.

---

## WT-028 · T-028 [Phase 1 #18] 개발자 API 테스트 (DEV API↔DB 연동·적재 확인)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 대상 | `dev-admin-api.sirjuseyo.com` (curl) + DEV `nano` DB (SELECT) |
| 상태 | 개발자 테스트 완료(DONE) — ※ 최종 `테스트완료` 판정은 최종 클라 테스트 몫 |

---

[목표]
클라 없이 개발자가 직접 DEV API를 호출해 정상/오류 동작 + DB 실적재를 실증. (거짓 보고 금지 — 실제 데이터 보존)

[A. 정상 신청 — ✅ 201]
- `POST /open/challenge/worldcup-challenge-2026/applications` (정상 payload)
- 응답: `{"data":{"challenge_worldcup_2026_application_id":1,"success":true},"error":{"code":"0000"}}` / HTTP 201
- DB 적재 검증(SELECT): id=1 / phone `01012120001`(하이픈제거✅) / point_confirmed_cd Y / predict 5종 정상 / status_cd `RECEIVED`(기본값✅) / is_deleted 0 / created_at 자동
- 한글 무결성: name=`쮸티테스트`, predict_group_result=`2승 1무 0패` (HEX `ECAEB8`=쮸 일치, utf8mb4 정상 저장 — CLI `?` 표시는 출력 charset 이슈)

[B. 오류 검증 — ✅ 400 3종 (TECHSPEC §5-1 메시지 일치)]
- 필수누락(name) → 400 `필수 항목 누락: name`
- 포인트 미보유(point_confirmed_cd=N) → 400 `감다살미션 10,000P 적립이 필요합니다.`
- 중복 phone(01012120001) → 400 `이미 신청 내역이 있습니다.`

[C. DB 오염 없음 — ✅]
- 최종 row_count = 1 (정상 1건만, 400 케이스는 미적재)
- **테스트 데이터 id=1 보존** (삭제 안 함 — 사장님 최종 클라 테스트 시 1번으로 노출)

[결론]
- DEV에서 API↔DB 연동·적재·검증·중복방지 전부 정상 동작 실증.
- Phase 1 #18(개발자 테스트) 완료. **단, T-025/026/027의 종합 `테스트완료`는 최종 클라(신청 폼) 테스트 후 결정.**

---

## WT-027 · T-027 [Phase 1 핫픽스2] 챌린지 PK BIGINT 정합 (DB ALTER)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 대상 | DEV `nano` DB + TECHSPEC §4-3 / DDL 문서 (서버 코드 변경 없음) |
| 상태 | 진행중(In-Progress) — DEV ALTER+문서반영 완료, 재배포 요청 대기 |

---

[문제 — 깃&배포 관리자 2차 재배포 보고]
- T-026 hotfix(`ee8d8ee`) dev 반영(merge `073fb21`), Java8 compile·Deploy 성공, ECR image `dev-20260602T021207UTC`
- 그러나 신규 image 기동 시 **Hibernate schema-validation 실패**:
  `wrong column type ... [challenge_worldcup_2026_application_id]; found [int (INTEGER)], but expecting [bigint (BIGINT)]`
- 원인: DDL(§4-3)이 PK를 `int`로 정의했는데 JPA Entity는 `Long`(=bigint 기대) → 타입 불일치
- 조치(관리자): 직전 image `dev-20260523T233949UTC` 롤백, DEV 정상

[결정 — 관리자 의견 + 사장님 지시]
- **②안 채택: DB column을 BIGINT로 맞춤** (Entity `Long` 유지, 코드 무변경)
- 사유: 신규 테이블·PK·row 0건·Long ID 패턴 일반적/확장성·PRD 전 DEV schema 교정이 안전

[처방]
1. DEV/PRD 분리 + 현황 확인(읽기): host=`sjy-nano-develop`(DEV 확실), DB=`nano`, PK=`int auto_increment`, **row_count=0(안전)**
2. `ALTER TABLE challenge_worldcup_2026_application MODIFY COLUMN challenge_worldcup_2026_application_id BIGINT NOT NULL AUTO_INCREMENT` 실행
3. 검증: PK타입 `bigint`, NOT NULL, auto_increment, PRI ✅ (Entity Long 정합)
4. 문서 반영: TECHSPEC §4-3 + DDL `.sql`의 PK 정의 `int`→`bigint` (PRD 대비)

[서버 코드]
- 변경 없음 (Entity는 이미 `Long`). 기존 푸시된 커밋 `ee8d8ee` 그대로 재배포하면 schema-validation 통과.

[남은 작업]
1. 깃&배포 관리자께 재배포 요청 (코드 변경 없음, DB schema만 교정됨 → 기존 브랜치/image 재배포)
2. 재배포 후 DEV API 동작 확인 (#18: curl POST → DB 적재 확인)

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 (보관 — 정책 201~205, 마지막 WT-ID 밑)
> T-025/T-026/T-027 DEV 반영 전체 이력. 원문 그대로 보관.

```
[DEV : 깃 & 배포 관리자 → 개발자]
sirjuseyo-admin 감다살문어 챌린지 신청 접수 API DEV 반영 최종 완료했습니다.

대상: sirjuseyo-admin / PR #24 / feature/worldcup-challenge-2026-api → dev
API: POST /open/challenge/worldcup-challenge-2026/applications

[1차 반영: T-025]
- PR #24 dev 병합, merge commit 8533c05a7f8dd239ec5c4c8319c2356f15824b6d
- Java8 compileJava 성공 / GitHub Actions Deploy 성공 / ECR image dev-20260602T015104UTC
- DEV 배포 시 Spring startup 실패: ChallengeWorldcup2026ApplicationRepository bean 미등록
  (challenge repository/domain package가 NanoDataSourceConfig scan 범위 미포함)
- 조치: 직전 정상 image dev-20260523T233949UTC 롤백, liveness 200

[2차 반영: T-026]
- hotfix commit ee8d8ee dev 반영, dev merge commit 073fb211498fa31d4becdcbfcd76c7d9098799cc
- 수정: NanoDataSourceConfig repository scan에 repository.challenge / entity scan에 domain.challenge 추가
- Java8 compileJava 성공 / Deploy 성공 / ECR image dev-20260602T021207UTC
- 재배포 시 startup validation 실패: DB column id=int vs Entity Long(expected bigint)
- 조치: 직전 정상 image dev-20260523T233949UTC 롤백, liveness 200

[3차 반영: T-027]
- DEV DB schema 교정 확인 / row_count=0 확인 / id column bigint·PRI·auto_increment 확인
- 코드 추가 커밋 없음 / 기존 image dev-20260602T021207UTC 재적용

[최종 DEV 배포 결과]
- sirjuseyo-eks commit: 532f17e / kubectl apply -k admin/dev
- admin-dev-deploy rollout success / image dev-20260602T021207UTC
- pod admin-dev-deploy-59b98d5cc9-c86mg / Ready 1/1 / restart 0
- liveness https://dev-admin-api.sirjuseyo.com/liveness HTTP/2 200

[최종 확인]
- Repository bean 미등록 오류 미재발 / DB int vs bigint validation 오류 미재발
- DEV 서버 정상 기동 / /open/** permitAll 기존 설정 확인
- Ingress / Route53 / CORS / 인증 설정 변경 없음

문서: GitDeployOps TODO_BOARD/WORK_THROUGH 업데이트(WT-005,006,007) / project-docs commit ab52ee9

한 줄: 감다살문어 챌린지 신청 접수 API는 PR#24 dev 병합, bean scan hotfix, DEV DB BIGINT 교정 후
image dev-20260602T021207UTC로 최종 DEV 배포 완료. rollout success, pod 1/1 restart 0, liveness 200.
```

---

## WT-026 · T-026 [Phase 1 핫픽스] challenge Repository/Entity Spring bean 미등록 수정

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 레포 | `Claude_Server_20260413/sirjuseyo-admin` |
| 브랜치 | `feature/worldcup-challenge-2026-api` (T-025와 동일, PR #24에 추가 커밋) |
| 상태 | 진행중(In-Progress) |

---

[문제 — 깃&배포 관리자 보고]
- PR #24 dev 병합 완료 (merge commit `8533c05`), Java8 compileJava·GitHub Actions Deploy 성공, ECR image `dev-20260602T015104UTC`
- 그러나 신규 DEV image 기동 시 **Spring startup 실패**: `ChallengeWorldcup2026ApplicationService`가 주입받는 `ChallengeWorldcup2026ApplicationRepository`가 Spring bean 미등록 → ApplicationContext 기동 실패
- 조치(관리자): 직전 정상 image `dev-20260523T233949UTC`로 롤백 완료, DEV 정상(rollout success, ready 1/1, liveness 200)

[원인 — 진단]
- admin 앱은 **다중 datasource** 구조. `NanoDataSourceConfig`가 `@EnableJpaRepositories(basePackages=...)`와 EntityManagerFactory `.packages(...)`로 **스캔 패키지를 명시 지정**.
- 기존 목록: `...repository.nano`, `...repository.review` / `...domain.nano`, `...domain.review`
- 내 신규 패키지 `...repository.challenge`, `...domain.challenge`가 **양쪽 목록에서 누락** → Repository bean·Entity 미등록 → 주입 실패.
- (4차 심사 때 `review`를 동일하게 명시 추가했던 선례 존재 — 같은 방식으로 누락된 것)

[처방 — 수정]
- `NanoDataSourceConfig.java` 2곳에 challenge 패키지 1줄씩 추가:
  - `@EnableJpaRepositories.basePackages` += `"com.sirjuseyo.albit.support.repository.challenge"`
  - EntityManagerFactory `.packages(...)` += `"com.sirjuseyo.albit.support.domain.challenge"`
- 그 외 datasource/도메인/인증/CORS 무수정 (TECHSPEC §0 준수)

[검증]
- `./gradlew compileJava --offline` → BUILD SUCCESSFUL
- 정상 작동 중인 `review` 등록과 기계적으로 동일한 패턴 → bean 등록 결정적 보장

[커밋·푸시 — ✅ 완료]
- 커밋 `ee8d8ee` → `feature/worldcup-challenge-2026-api` 푸시 (PR #24 자동 갱신, 2커밋 누적: `50f1b02`+`ee8d8ee`)

[남은 작업]
1. 깃&배포 관리자께 재배포 요청 (T-026 반영분)
2. 재배포 후 DEV API 동작 확인 (#18: curl POST → DB 적재 확인)

---

## WT-025 · T-025 [Phase 1] 서버 — DB + 신청 API (sirjuseyo-admin 한정)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-025 |
| 레포 | `Claude_Server_20260413/sirjuseyo-admin` (서버 레포 — 웹 레포 아님) |
| 브랜치 | `feature/worldcup-challenge-2026-api` (origin/dev 최신화 후 분기) |
| 로컬 커밋 | `50f1b02` (challenge 소스 7개) — **원격 미푸시** |
| 상태 | 진행중(In-Progress) — 코드+컴파일+DEV DB 테이블생성 완료, 푸시·배포요청 대기 |

---

[작업 목표]
TECHSPEC v105 §4-3/§5-1 기준, 감다살🐙문어 챌린지 신청 접수 API를 `sirjuseyo-admin`에 구현.
POST `/open/challenge/worldcup-challenge-2026/applications` (비회원·비인증).

[진단(수정 이유)]
4차 심사 `review-application`이 동일 유스케이스(/open 신청 접수)의 검증된 최신 패턴 → 그대로 복제하여 위험 최소화(§0).

[처방(작성 코드 — 신규 7파일 + DDL 1)]
- Enum: `ChallengeWorldcup2026StatusCode`(접수~만료), `ChallengeWorldcup2026FinalResultCode`(GROUP_FAIL~WIN) — 검증(`isValid`)·표시(`labelOf`)용
- Entity: `ChallengeWorldcup2026Application` (테이블 매핑, 코드값 평문 String 저장 → §4-2 충족)
- Repository: `ChallengeWorldcup2026ApplicationRepository` (`existsByPhoneAndIsDeletedFalse` 중복체크 포함)
- VO: `ChallengeWorldcup2026ApplicationRequestVO` (`@JsonNaming` snake_case 자동매핑)
- Service: `ChallengeWorldcup2026ApplicationService` — §5-1 처리순서 1~9 (동의→포인트→필수값→하이픈제거→Enum검증→골0~20→중복→INSERT)
- Controller: `ChallengeWorldcup2026ApplicationController` — POST 비인증, 201 응답
- DDL: `project-docs/00_plan/DDL_challenge_worldcup_2026_application_20260602.sql` (§4-3 그대로, 내 워크스페이스 보관)

[설계 결정]
- 코드값 저장: **평문 String** 채택 (TECHSPEC §8-1.4 'Converter' 언급 대비). 사유: review 벤치마크 동일·§4-2 동일충족·서버다운위험 최소. Converter 전환은 지시 시 즉시 가능.

[검증]
- `./gradlew compileJava --offline` (JAVA_HOME=Temurin8 / Gradle5.6.4) → **BUILD SUCCESSFUL**
- challenge 7개 `.class` 전부 `build/classes/java/main/` 생성 확인

[DEV DB 테이블 생성 — ✅ 완료]
- 실접속 검증: host=`sjy-nano-develop`(DEV 확실), db=`nano`, 동일테이블수=0 → 안전 확인
- 사장님 승인 후 `CREATE TABLE` 실행 → 테이블존재=1, 25컬럼·5인덱스, 기본값 정상(status_cd=RECEIVED 등)

[원격 푸시 — ✅ 완료]
- `git push -u origin feature/worldcup-challenge-2026-api` → origin 새 브랜치 생성 (`50f1b02`)

[깃&배포 관리자 배포 요청(PR) — ✅ 완료]
- PR **#24** 생성: `feature/worldcup-challenge-2026-api → dev`
- URL: https://github.com/sirjuseyo/sirjuseyo-admin/pull/24

[작업요청서 원문 — 보관 (양식 6-⑥, 정책 201~205)]
```
[클로드 앱 코드(쮸티12호) → 깃 & 배포 관리자]

sirjuseyo-admin T-025 작업 완료했습니다.
`feature/worldcup-challenge-2026-api` 원격 푸시 완료했고 PR은 `#24`입니다.

작업 내용:
- 감다살🐙문어 챌린지 신청 접수 API 신규 구현 (POST /open/challenge/worldcup-challenge-2026/applications, 비인증)
- 신규 테이블 challenge_worldcup_2026_application + Enum 2종 + Entity/Repository/VO/Service/Controller (4차 심사 review 패턴 복제)
- DEV nano DB에 테이블 생성 완료 (25컬럼·5인덱스, 기존 스키마 무손상)

검증:
- ./gradlew compileJava → BUILD SUCCESSFUL (Java8/Gradle5.6.4)
- DEV(sjy-nano-develop) 실접속 검증: 테이블존재=1, 기본값(status_cd=RECEIVED 등) 정상
- TECHSPEC §0 준수: 도메인/Ingress/인증/CORS 무수정, 신규 테이블만 추가

커밋:
- 50f1b02 feat(challenge): 감다살문어 챌린지 신청 접수 API 구현 [T-025/Phase1]

한 줄 버전:
- sirjuseyo-admin T-025 완료, feature/worldcup-challenge-2026-api 푸시 및 PR #24 생성 완료, 컴파일·DEV DB 검증 했습니다. 깃 & 배포 관리자님 feature → dev 검토 부탁드립니다.
```

[남은 작업]
1. 깃&배포 관리자 PR #24 검토·머지 → DEV 서버 반영
2. DEV 서버 반영 후 API 동작 확인

---

## WT-024 · T-024 [Phase 0] 착수 전 안전 점검 (코드 0줄)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-024 |
| 로컬 커밋 | (코드 미수정 — 점검 + 보고서 문서만) |
| 상태 | 테스트 완료(DONE) — 점검 완료 |

---

[작업 목표]
TECHSPEC v105 §0-5 착수 전 차단 지시 4개 항목을 서버 레포(`Claude_Server_20260413`, 읽기 전용)에서 확인.

[처방(점검 결과)]
- ① DEV/PRD DB 분리: ✅ DEV=`sjy-nano-develop` / PRD=`sjy-nano-production` 별도 RDS (application yml datasource 확인)
- ② admin-api 라우팅: ✅ `sirjuseyo-eks/ingress/` — admin-api→admin-svc / nano-api→nano-svc (테크스펙 §0-5 정합)
- ③ 인증 경계: ✅ `ResourceServerConfig.java` `/open/**` permitAll(4차 심사 T-019) + anyRequest authenticated
- ④ CORS: ✅ `AdminCorsFilter.java` monthly-loan.sirjuseyo.com + 로컬 5500~5503 등록됨
- 결론: **4차 심사 작업으로 인프라/보안 기충족. Phase 1은 신규 테이블+컨트롤러만 추가.**
- ⚠️ 서버 레포는 **읽기만, 수정·침범 0건** (선배 WT-026 침범 사고 교훈 준수)
- 완료 보고서 생성: `COMPLETION_REPORT_감다살문어챌린지_클라서버연동_쮸티12호_20260602.md`

---

## WT-023 · T-023 감다살🐙문어 챌린지 클라+서버 연동 마스터 (Phase 0~7)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-023 |
| 로컬 커밋 | (Phase 추적 마스터 — 페이지별 작업 W-024~ 별도 커밋) |
| 상태 | 진행중(In-Progress) |

---

[작업 목표]
감다살🐙문어 챌린지 신청 폼(`apply-감다살문어챌린지-worldcup_20260602.html`)을 클라+서버 연동으로 실제 구현. TECHSPEC v105 기준 Phase 0~7 단계별 진행.

[진단(수정 이유)]
규모가 크므로 W-023은 Phase 구분(마스터)으로만 사용하고, 실제 페이지/작업은 페이지 하나하나를 별도 W-ID(W-024~)로 생성하여 진행한다. (댄디어빠쮸너야님 지시 2026-06-02)

[처방(수정 코드)]
- TODO_BOARD에 🗺️ Phase 추적 섹션 신설 (Phase 0~7 + 상태값)
- 작업할 때마다 Phase 표 출력 + 상태(`대기`/`진행중`/`완료`) 갱신
- 구(舊) T-020(신청 페이지 단독 등록, 실작업 0)은 W-023 마스터 Phase 2로 통합

**Phase 현황 (2026-06-02 기준):**
| Phase | 상태 |
|---|---|
| Phase 0 (안전 점검) | 대기 |
| Phase 1 (서버 DB+API) | 대기 |
| Phase 2 (클라 신청폼) | 대기 |
| Phase 3 (어드민) | 대기 |
| Phase 4 (CTA 연결) | ✅ 완료 (T-021 선반영) |
| Phase 5 (통합 검증+회귀) | 대기 |
| Phase 6 (CTO/사장님 승인) | 대기 |
| Phase 7 (PRD 배포) | 대기 |

> ⚠️ 절대 원칙: 인프라·도메인 무손상 / admin-api는 sirjuseyo-admin에만 / nano에 구현 금지.

---

## WT-022 · T-022 챌린지 상세 2차 수정 7건 + 기획서·와이어프레임 (가이드라인 선반영)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-022 |
| 로컬 커밋 | 93eb6fc (코드+상세WF) / d2bd3ea (기획서+WF) |
| 상태 | 테스트 완료(DONE) |

---

[문제 위치]
파일: `2026-06/worldcup-challenge/index.html` + `index-dev.html` / 기획서 / 와이어프레임 2종

[증상(문제 설명)]
검수 결과 폰트 작게/회색 처리된 요소 반복 지적 + 텍스트 7건 수정. **다음 작업 가이드라인으로 문서 먼저 반영 요청.**

[처방(수정 코드)]
**문서 먼저 (가이드라인):**
- 기획서 §3-1 **폰트·스타일 가이드라인 신설** (후배 AI 필독): 기본 1.1rem, 본문 1.05rem↑, 회색 남용 금지, 핵심·경고 크게, 유의사항 검정
- 기획서 §7-5(채널)·§7-6(사용방법/티켓)·§8(유의사항 이벤트→챌린지) 텍스트 반영
- 와이어프레임 2종 동일 반영

**코드 (DEV/PRD):**
- ① `.match-venue` `.ticket-condition small`: 작게+회색 → 1.05rem + 검정
- ② 최종성적 괄호 `(16강·…)` → `(32강·16강·8강·4강·결승·우승)`
- ③ 발표채널 → "써주세요. 앱 & 웹 공지"
- ④ `.usage-label` 0.95rem → 1.15rem (티켓 사용방법 라벨 확대)
- ⑤ 사용방법 번호+들여쓰기 재구성 + "대출 신청 및 승인/입금 후 사용 가능" 추가
- ⑥ 사용가능티켓 "모든 대출(일반+추가) 상환 후 재대출" 문구
- ⑦ 유의사항 제목 + 본문 "이벤트"→"챌린지" 4곳 + "다수인 경우"→"다수인 경우에도"
- 브라우저 모바일 실측 검증 완료 (전 섹션 정상)
- 로컬 커밋: `93eb6fc`, `d2bd3ea`

---

## WT-021 · T-021 챌린지 상세 페이지 수정 8건 + 기획서·와이어프레임

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-021 |
| 로컬 커밋 | 8ef6521 |
| 상태 | 테스트 완료(DONE) |

---

[문제 위치]
파일: `2026-06/worldcup-challenge/index.html` + `index-dev.html` / 기획서 / 와이어프레임 2종

[증상(문제 설명)]
댄디어빠쮸너야님 검수 결과 8건 수정 요청 (텍스트 2건 + 폰트/스타일 5건 + 폼 제거 1건).

[처방(수정 코드)]
**코드 (DEV/PRD):**
- ① step3: `이벤트 페이지 진입` → `챌린지 페이지 진입`
- ② 당첨자 발표: `16강 이상 진출 시` → `32강 진출 시`
- ③ 기본 폰트 6월 호국보훈 수준(`body font-size:1.1rem`)으로 확대 (전 본문 1.05~1.1rem)
- ④ 핵심·경고 문구 기본보다 크게: `.method-highlight` 1.18rem / `.warning-box` 1.12rem
- ⑤ 티켓 사용방법: `.usage-*` 1.1rem + 회색 제거(`color: var(--text)`)
- ⑥ 유의사항: `.notice-list` 1.05rem + 검정(`var(--text)`)
- ⑦ 하단 인라인 신청 폼(`.form-section` + 폼 + selectPoint JS) 전체 삭제
- ⑧ 하단 신청 CTA 섹션(`.apply-cta-*`) 신설 — 골드 버튼 `감다살🐙 챌린지 신청하기 →` → `./apply/`
- 브라우저 모바일 실측 검증 완료 (전 섹션 폰트/스타일/폼제거/버튼 정상)
- 로컬 커밋: `8ef6521`

**문서 (기획서 + 와이어프레임 2종):**
- 기획서: ①② 텍스트 반영 + §4 구조도 "신청 폼" → "신청 CTA → /apply/" + 신청 폼 분리 정책 추가
- 상세 와이어프레임: ①② 텍스트 + 폼 섹션 → CTA 버튼 교체 + JS 제거 + 우측 패널 ⑫ 갱신

---

## WT-020 · T-019 감다살🐙문어 챌린지 상세 페이지 코딩 (DEV/PRD)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-019 |
| 로컬 커밋 | 6d93dc1 |
| 상태 | 테스트 완료(DONE) |

---

[문제 위치]
파일: `2026-06/worldcup-challenge/index.html` + `index-dev.html`
라인: 신규 (빈 골격 → 풀 페이지)

[증상(문제 설명)]
챌린지 상세 페이지가 빈 골격 상태. 기획서+와이어프레임 기준 실제 코딩 필요.

[진단(수정 이유)]
글로벌 규칙 "원본 그대로" → 와이어프레임 좌측 `page-content`를 자의적 해석 없이 그대로 구현 (인라인 폼 포함).

[처방(수정 코드)]
- `wireframe-감다살문어-worldcup` 좌측 page-content 100% 이식
- 구현 섹션:
  - 히어로 이미지: `./assets/worldcup-challenge-jun-001.jpg`
  - 히어로 텍스트: 빨강 그라데이션 + 🐙 워터마크 + 골드 태그 + "응원하다 50만 원 줍줍?"
  - 이벤트 소개 / 신청 기간(6.1~6.11) / 한국 A조 경기 3건
  - 혜택(감다살🐙티켓 5장, 총 50만 원) / 신청 조건(無)
  - 신청 방법(5스텝 + 경고) / 당첨자 발표 / 티켓 사용 방법 / 유의사항 10개
  - 인라인 간략 신청 폼 (3그룹: 기본정보·포인트확인·예측5종)
- JS: `selectPoint()` 포인트 검증 (없음→제출 비활성화), 제출 시 `./apply/` 이동
- CSS: 컬러 팔레트(한국레드·골드·보라), 모바일 max-width 480px 중앙, Pretendard 폰트
- 와이어프레임 전용 래퍼(phone-frame·info-panel·캡션) 제외
- DEV/PRD 동일 (정적 페이지), diff 0건
- 브라우저 모바일 뷰 실측 검증 완료 (히어로~유의사항~폼 전 섹션 정상)
- 로컬 커밋: `6d93dc1`

---

## WT-019 · T-018 감다살🐙문어 챌린지 상세+신청 폴더 골격 생성

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-018 |
| 로컬 커밋 | a30eefd |
| 상태 | 테스트 완료(DONE) |

---

[문제 위치]
파일: `2026-06/worldcup-challenge/` (신규 폴더)

[증상(문제 설명)]
감다살🐙문어 챌린지 상세+신청 페이지를 담을 디렉토리 없음. 기획서 코딩 전 골격 선행 필요.

[원인/진단]
기획서 §11 경로가 `event-worldcup/`였으나 "이벤트 대출" 옵션과 혼동 + 글로벌 표준 미준수. → kebab-case 영문 슬러그 `worldcup-challenge/`로 확정 (댄디어빠쮸너야님 결정).

[처방(수정 코드)]
- 폴더 네이밍 정책 (글로벌 GitHub Pages 표준):
  - 폴더명: kebab-case 영문 슬러그 (한글/이모지/언더스코어 금지)
  - 파일명: `index.html` 통일 (URL `/apply/` 자동 접근)
  - DEV/PRD: `index.html` + `index-dev.html`
- 생성 골격:
  - `2026-06/worldcup-challenge/index.html` (상세 PRD)
  - `2026-06/worldcup-challenge/index-dev.html` (상세 DEV)
  - `2026-06/worldcup-challenge/apply/index.html` (신청 PRD)
  - `2026-06/worldcup-challenge/apply/index-dev.html` (신청 DEV)
  - `2026-06/worldcup-challenge/assets/`
- URL: `/2026-06/worldcup-challenge/` , `/2026-06/worldcup-challenge/apply/`
- 기획서 §11 경로/네이밍 정책 수정 반영
- ⚠️ assets/에 `worldcup-challenge_.png`(2.4MB, 댄디어빠쮸너야님 사전 배치) 함께 커밋됨 — 본 코딩 시 JPG 변환·적용 예정
- 로컬 커밋: `a30eefd`

### WT-019 2회차 — 히어로 이미지 확정 + JPG 변환 + 문서 반영

| 항목 | 내용 |
|---|---|
| 회차 | 2회차 |
| 작성일시 | 2026-06-02 |
| 로컬 커밋 | 37fb69e |
| 상태 | 테스트 완료(DONE) |

[처방(수정 코드)]
- 이미지 파일명 확정: `worldcup-challenge_.png` → `worldcup-challenge-jun-001.png`
- JPG 변환: `worldcup-challenge-jun-001.jpg` (2.4MB → **328KB**, 기획서 §10 사양 200~400KB 충족)
  - 히어로는 풀배경(투명 불필요) → JPG OK (gift-box 투명 PNG와 다름)
- 기획서 반영:
  - §5-3 히어로 이미지: TBD → ✅ 확정
  - §10/§10-1 이미지 자산: 파일명·용량 확정
  - §11 경로: `event-worldcup/` → `worldcup-challenge/` + 폴더 네이밍 정책 추가
  - §13-1/§13-2: 히어로 이미지 완료 처리
- 와이어프레임 2종 경로 통일:
  - `wireframe-감다살문어-worldcup`: event-worldcup→worldcup-challenge (8건)
  - `apply-감다살문어-worldcup`: 동일 (2건)
- 로컬 커밋: `37fb69e`

---

## WT-018 · T-017 gift-box 모바일 텍스트 침범 보정 (미디어쿼리)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-017 |
| 로컬 커밋 | 0a81b5c |
| 상태 | 검증완료 (PR #9 MERGED) |

---

[문제 위치]
파일: `index.html` + `index-dev.html`
라인: CSS 106~108 (`@media(max-width:767px)` 신규)

[증상(문제 설명)]
모바일(실기기)에서 gift-box(Battlefield Cross 총 이미지)가 "🪖 호국보훈의 달" 메인 타이틀을 침범. 데스크탑은 정상.

[원인]
6월 총 이미지 비율 **1.5:1**(1536×1024)이 5월 박스장미 **1.83:1**(2816×1536)보다 세로가 길어, 동일 `width`에서도 세로로 더 늘어져 텍스트 영역까지 내려옴. (CSS는 5월과 동일했으나 이미지 구도 차이로 결과 상이)

[진단(수정 이유)]
기획서 §7-5-1 "CSS 절대 변경 금지"이나 실제 침범 발생 → **모바일 한정** 보정. 데스크탑은 정상이므로 미건드림.

[처방(수정 코드)]
- `@media(max-width:767px)` 신규 블록 추가 (데스크탑 `@media(min-width:768px)`와 경계 비충돌)
- `.gift-box` 모바일 override:
  - width: `min(341px,90vw)` → `min(250px,68vw)` (①축소)
  - top: `-110px` → `-125px` (②상향)
  - right: `-55px` → `-25px`
- 검증 방법: `getBoundingClientRect`로 모바일(360px) 시뮬레이션 측정
  - 보정 전: gift 하단이 타이틀보다 38px 아래 (침범)
  - 보정 후: 타이틀 상단까지 여백 26px 확보 (침범 해소)
- 데스크탑(1792px) computed style: 341/-110/-55 기존값 유지 확인
- 브라우저 시각 검증 완료 (텍스트 깨끗)
- 로컬 커밋: `0a81b5c`

---

## WT-017 · T-016 월드컵 카드 → 예언 챌린지 코드 반영 (DEV/PRD)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-016 |
| 로컬 커밋 | cc6960d |
| 상태 | 검증완료 (PR #9 MERGED) |

---

[문제 위치]
파일: `index.html` + `index-dev.html`
라인: CSS 95~96 / HTML 191~194 (worldcup-card)

[증상(문제 설명)]
홈 페이지 월드컵 카드 문구가 "월드컵⚽️대출 / 이벤트 보기"로 표기 → 월별 대출 3옵션 중 하나인 "이벤트 대출"과 혼동.

[원인]
순수 참여형 예측 챌린지인데 "이벤트 / 대출" 단어를 그대로 사용.

[진단(수정 이유)]
대출 옵션과 완전 분리 → "이벤트 / 대출" 단어 제거, 예언 챌린지 컨셉으로 전환. (와이어프레임·기획서 확정안 기준)

[처방(수정 코드)]
DEV/PRD 동시 적용. 텍스트만 교체 (이미지 src·테두리·레이아웃 불변):
- 태그: `⚽ 6월 한정 이벤트` → `🔮 예언 챌린지`
- 메인: `2026 북중미 월드컵` → `추가 대출, 최대 50만 원의 행운을!`
- 보조: `🇰🇷 대한민국 대표팀 응원!` → `"나는야 문어🐙 파울, 감다살!"` (`.worldcup-subcopy` 신규)
- 설명: `월드컵⚽️대출` → `2026 북중미 월드컵 / 🇰🇷대한민국 축구 국가대표팀의 성적을 맞추세요.` (`.worldcup-desc` 신규)
- 버튼: `이벤트 보기 →` → `⚽ 몇승 몇무 몇패 신청하기 →`
- 이미지 `2026_worldcup_type102.jpg` 불변 확인 / 버튼 링크 `./2026-06/` 불변
- DEV 브라우저 실측 검증 완료
- 로컬 커밋: `cc6960d`

### WT-017 2회차 — 버튼 문구 변경

| 항목 | 내용 |
|---|---|
| 회차 | 2회차 |
| 작성일시 | 2026-06-02 |
| 로컬 커밋 | 2e2bf3b |
| 상태 | 검증완료 (PR #9 MERGED) |

[처방(수정 코드)]
- 버튼: `⚽ 몇승 몇무 몇패 신청하기 →` → `🐙 승무패 예언하기 →`
- 사유: 예언 챌린지 + 문어 파울 컨셉 일관성 (수정구슬🔮 태그 + 문어🐙 캐릭터 → 버튼까지 문어로 통일)
- 적용: `index.html` + `index-dev.html` + 와이어프레임 + 기획서 동시
- DEV 브라우저 실측 검증 완료
- 로컬 커밋: `2e2bf3b`

---

## WT-016 · T-015 월드컵 카드 → 예언 챌린지 기획서·와이어프레임 수정

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-015 |
| 로컬 커밋 | 문서전용(Untracked 와이어프레임/기획서) |
| 상태 | 검증완료 (PR #9 MERGED) |

---

[문제 위치]
파일: `project-docs/00_plan/wireframe-monthly-loan-home-jun-v2.html` / `PLAN_2026-06_호국보훈의달대출_기획서.md`

[처방(수정 코드)]
- 와이어프레임: 월드컵 카드 본문 텍스트 5요소 교체 + `.worldcup-subcopy`/`.worldcup-desc` CSS 추가 + 우측 패널에 [증상/원인/진단/처방] 형식 + 기존→변경 대조표 기록
- 기획서 §7-7 제목: "월드컵 이벤트 카드" → "월드컵 예언 챌린지 카드"
- 기획서 §7-7-2: 기존→변경 대조표 + [증상/원인/진단/처방]
- 기획서 §7-7-4: "이벤트 대출 연결" → "⚠️ 컨셉 구분" (이벤트 대출 vs 예언 챌린지 구분표)
- 기획서 작업 이력 2026-06-02 추가
- 브라우저 출력 검증 완료

---

## WT-015 · T-014 대출 가능성 검사기 DEV 파일 신규 생성

---

### [개발자 → 깃 & 배포 관리자 전달] 작업 완료 보고서 원문

```
monthly-loan T-001~T-014 작업 완료했습니다.
`feature/T-001-jun-loan-landing` 원격 푸시 완료했고 PR은 `#7`입니다.

작업 내용:
- 6월 호국보훈의 달 대출 랜딩 페이지 신규 생성 (2026-06/index.html, DEV/PRD 분리)
- 신청하기 폼 6월 업데이트 (apply.html / apply-dev.html)
- 월별 대출 홈 페이지 6월 업데이트 + 월드컵 이벤트 카드 신설 (index.html, index-dev.html)
- 대출 가능성 검사기 5월 아카이브 + 6월 업데이트 + month-config.js 자동화 신설

검증:
- 6월 랜딩 페이지 로컬 브라우저 테스트 완료
- 홈 랜딩 페이지 Battlefield Cross 투명배경 정상 확인
- loan-checker 자동 감지 로직 검증 완료 (오늘=2026-05-31 → 6월 config 자동 선택)

커밋:
- `976dd8e` feat(T-001): 6월 호국보훈의 달 대출 랜딩 페이지 신규 생성
- `8f094b0` fix(T-001): 6월 페이지 날짜 잔존 수정
- `d802957` fix(T-001): 이미지 확장자 .jpg → .png 수정
- `4a54730` feat(T-002,003): 이미지 PNG→JPG 변환 및 HTML 순서 교체
- `46d035e` fix(T-005): 나노크레딧 섹션 텍스트 3건 수정
- `03bb5b5` feat(T-006,007): 신청하기 버튼 링크 변경 및 apply.html 6월 업데이트
- `cc0ae69` fix(T-007): apply-dev.html 6월 업데이트 4건 추가
- `bcfaa6f` feat(T-008,009): 홈 페이지 이미지 변환 및 index-dev.html 6월 업데이트
- `4eb9f5a` fix(T-009): gift-box 이미지 .jpg → .png 수정 및 규칙 문서화
- `69e0439` feat(T-010): index.html(PRD) 6월 호국보훈의 달 업데이트
- `552e222` feat(T-011): 6월 랜딩 이벤트 문구 교체 및 DEV/PRD 분리
- `8eab44b` feat(T-012): 대출 가능성 검사기 5월 버전 아카이브
- `f0bd4a7` feat(T-013): 대출 가능성 검사기 6월 업데이트 + month-config 분리
- `01627b3` feat(T-014): 대출 가능성 검사기 DEV 파일 신규 생성
- `56b15ac` feat(T-014): month-config 활성 기간 정책 명시 (매월 26일~익월 25일)
- `6fa91e9` docs(T-001~T-014): 쮸티12호 작업 문서 최종 반영

문서:
- `project-docs`
- 브랜치: `feature/T-001-jun-loan-landing` (코드 레포와 동일 브랜치에 포함)
- PR: `#7`
- 문서 커밋: `6fa91e9` docs(T-001~T-014): 쮸티12호 작업 문서 최종 반영

한 줄 버전:
- `monthly-loan T-001~T-014 완료, feature/T-001-jun-loan-landing 푸시 및 PR #7 생성 완료, 로컬 테스트 완료했습니다. 깃 & 배포 관리자님 feature → dev 검토 부탁드립니다.`
```

---

### [GitHub Pages PRD : 깃 & 배포 관리자 → 개발자] 완료 보고서

```
monthly-loan T-001~T-014 반영 완료했습니다.

- 원격 머지:
  - feature/T-001-jun-loan-landing -> main
  - PR: #7
  - merge commit: 0612e09a16bf2c8cbaf2470dd803d8c3b7142b90

- 배포:
  - GitHub Pages pages build and deployment 성공
  - run: 26730186641
  - 서버/ECR/Argo/Kubernetes 배포 대상 아님
  - 사유: 월별 대출 홈 정적 GitHub Pages 레포

- 확인:
  - PR #7 MERGED
  - https://monthly-loan.sirjuseyo.com/ HTTP/2 200
  - https://monthly-loan.sirjuseyo.com/2026-06/ HTTP/2 200
  - https://monthly-loan.sirjuseyo.com/apply/apply.html HTTP/2 200
  - https://monthly-loan.sirjuseyo.com/loan-checker/ HTTP/2 200
  - loan-checker JS 문법 검증 성공
  - 2026-05-31 기준 6월 config 자동 선택 확인

- 주의:
  - monthly-loan 원격에는 dev 브랜치가 없어 PR #7 base main 기준으로 반영했습니다.
  - GitHub Pages CDN cache-control은 max-age=600으로 확인했습니다.

- 문서:
  - GitDeployOps TODO/WORK_THROUGH 업데이트 완료
  - 완료 보고서 WT-001에 기록 완료
  - project-docs 문서 커밋/푸시 완료: df07887

한 줄 버전:
- monthly-loan T-001~T-014 feature/T-001-jun-loan-landing -> main 반영 완료, GitHub Pages 배포 성공 및 주요 운영 URL HTTP 200 확인했습니다.
```

---

### [GitHub Pages PRD : 깃 & 배포 관리자 → 개발자] 핫픽스 완료 보고서 (PR #8)

```
monthly-loan Battlefield-Cross PNG 누락 핫픽스 반영 완료했습니다.

원격 머지:
- feature/T-001-jun-loan-landing -> main
- PR: #8
- merge commit: bc6cbc2e43d4f322141086b7f3a834509cd89394

배포:
- GitHub Pages pages build and deployment 성공
- run: 26730714029
- 서버/ECR/Argo/Kubernetes 배포 대상 아님
- 사유: 월별 대출 홈 정적 GitHub Pages 레포

확인:
- PR #8 MERGED
- https://monthly-loan.sirjuseyo.com/ HTTP/2 200
- https://monthly-loan.sirjuseyo.com/2026-06/ HTTP/2 200
- https://monthly-loan.sirjuseyo.com/2026-06/assets/Battlefield-Cross_Jun-Loan.png HTTP/2 200
- https://monthly-loan.sirjuseyo.com/2026-06/assets/Battlefield-Cross_Jun-Loan.jpg HTTP/2 404

주의:
- .jpg 삭제는 의도된 변경으로 확인했습니다.
- GitHub Pages CDN cache-control은 max-age=600입니다.

문서:
- GitDeployOps W-002, T-002, WT-002 기록 완료
- 완료 보고서 WT-002에 기록 완료
- project-docs 문서 커밋/푸시 완료:
  - 기록 커밋 be9500a
  - 최종 정정 커밋 1db187b

한 줄 버전:
- monthly-loan Battlefield-Cross PNG 누락 핫픽스 PR #8 feature/T-001-jun-loan-landing -> main 반영 완료, GitHub Pages 배포 성공 및 PNG asset HTTP 200 확인했습니다.
```

---

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-014 |
| 로컬 커밋 | 01627b3 |
| 상태 | 진행중(In-Progress) |

---

[처방(수정 코드)]
- `loan-checker/index.html`(PRD) 복제 → `loan-checker/index-dev.html`(DEV) 생성
- diff 0건 확인 완료
- 로컬 커밋: `01627b3`

---

## WT-014 · T-013 대출 가능성 검사기 6월 업데이트 + month-config 분리

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-013 |
| 로컬 커밋 | f0bd4a7 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `loan-checker/month-config.js`(신규) / `app.js` / `index.html` / `styles.css`

[처방(수정 코드)]

**month-config.js (신설 — §10)**
- 5월·6월 설정 객체 등록
- `new Date()` 기반 자동 감지 → `MONTH_CONFIG` 전역 노출
- 이후 신규 월 추가 시 이 파일에만 객체 추가

**app.js 리팩토링 (§7-2, §10)**
- `LOAN_CONFIG` 이벤트 히스토리: `"4월 한정 스페셜티"/"벚꽃 🌸 대출"` → `MONTH_CONFIG.event.period/name`
- `WAITING_SEAT_RANGES`: `_generateSeatRanges(MONTH_CONFIG.applyPeriod.start)` 자동 생성
- `LOAN_OPTION_STATUS_TABLE` 이벤트: MONTH_CONFIG 참조
- `LOAN_REVIEW_SCHEDULE` 날짜: `MONTH_CONFIG.reviewPeriod.start/end` 참조
- `POINT_SUMMARY_RAW` 이벤트 4행: template literal `${}` 동적 치환

**index.html (§7-1, §7-3, §7-4, §10)**
- 대출 상품명 / santaApply 라벨 / 결과 헤더 / step1 텍스트 6월로 교체
- 디폴트값: `waitingDateText·waitingPeriod·reviewPeriod·step5Deadline·subscribeStart` 6월 기준
- CTA: 이미지 버튼 → 텍스트 버튼 `.script-cta-button-text`
- `month-config.js` 스크립트 태그 추가 + `DOMContentLoaded` 자동 주입

**styles.css**
- `.script-cta-button-text` 신규 (오렌지 풀컬러, 호버 효과)

- 로컬 커밋: `f0bd4a7`

---

## WT-013 · T-012 대출 가능성 검사기 5월 아카이브

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-012 |
| 로컬 커밋 | 8eab44b |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `loan-checker/2026-05/` (신규 폴더)

[증상(문제 설명)]
기존에는 파일을 월별로 덮어썼으나, 히스토리 추적 및 광고 이미지 관리를 위해 아카이브 체계 도입.

[처방(수정 코드)]
- `loan-checker/2026-05/` 폴더 신규 생성
- 복제 대상: `index.html`, `app.js`, `styles.css`, `assets/img/` (이미지 8개)
- 로컬 커밋: `8eab44b`

---

## WT-012 · T-011 6월 랜딩 이벤트 문구 교체 (DEV/PRD 분리)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-011 |
| 로컬 커밋 | 552e222 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/index.html`, `2026-06/index-dev.html` (신규)
라인: 1038

[처방(수정 코드)]
- `2026-06/index.html` 복제 → `2026-06/index-dev.html` 신규 생성
- line 1038 (DEV/PRD 동시):
  `'월드컵⚽️대출' 이벤트` → `'감다살🐙문어' 이벤트`
  `국대팀 예상 성적을 맞추는` → `대한민국 축구 국가대표팀 예선전 최종 성적을 맞추는`
- 로컬 커밋: `552e222`

---

## WT-011 · T-010 index.html(PRD) 6월 업데이트

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-010 |
| 로컬 커밋 | 69e0439 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `index.html`
라인: 88~96(CSS), 171, 181, 183~184, 186, 188~197

[처방(수정 코드)]
- index-dev.html 테스트 완료본을 index.html(PRD)로 그대로 복사 적용
- diff 확인 후 완전 동일 검증 완료
- 로컬 커밋: `69e0439`

---

## WT-010 · T-009 index-dev.html 신규 생성 + 6월 업데이트

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-009 |
| 로컬 커밋 | bcfaa6f |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `index-dev.html` (신규 생성)
라인: 171, 181, 183, 184, 186, 188~195 (월드컵 카드)

[처방(수정 코드)]
- `index.html` 복제 → `index-dev.html` 생성
- line 171: `5월 대출` → `6월 대출`
- line 181: `Gift-Box-Rose_May-Loan.png` → `Battlefield-Cross_Jun-Loan.jpg`
- line 183: `🌹 이달의 대출` → `🪖 이달의 대출`
- line 184: `5️⃣🈷️은 ❤️가정의 달` → `6️⃣🈷️은 🪖호국보훈의 달`
- line 186: `href="./2026-05/"` → `href="./2026-06/"`
- line 188~195: 월드컵 이벤트 카드 신설 (`.worldcup-card` CSS + HTML)
  - 위치: main-card ↔ checker-card 사이
  - 이미지: `2026_worldcup_type102.jpg`
  - 버튼 링크: `./2026-06/` (메인카드 동일)
- ⚠️ gift-box CSS (`top:-110px / right:-55px / width:min(341px,90vw)`) 변경 없음 준수
- 로컬 커밋: `bcfaa6f`

---

## WT-009 · T-008 홈 페이지용 이미지 PNG→JPG 변환

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-008 |
| 로컬 커밋 | bcfaa6f |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/assets/Battlefield-Cross_Jun-Loan.png`, `2026_worldcup_type102.png`
라인: -

[처방(수정 코드)]
- `sips -s format jpeg -s formatOptions 60 Battlefield-Cross_Jun-Loan.png --out Battlefield-Cross_Jun-Loan.jpg` → **124KB** ✅
- `sips -s format jpeg -s formatOptions 42 2026_worldcup_type102.png --out 2026_worldcup_type102.jpg` → **252KB** ✅
- 로컬 커밋: `bcfaa6f`

---

## WT-008 · T-007 apply.html 6월 업데이트 4건

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-007 |
| 로컬 커밋 | 03bb5b5 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `apply/apply.html`
라인: 508, 511, 592, 754, 756, 1170

[증상(문제 설명)]
apply.html에 5월 대출명·심사일·개인정보 문구가 그대로 잔존.

[처방(수정 코드)]
- line 508, 511, 1170: `5️⃣🈷️은 ❤️가정의 달 대출` → `6️⃣🈷️은 🪖호국보훈의 달 대출` (3곳)
- line 592: `단, 심사는 5/1 ~ 5/5에 진행돼요.` → `단, 심사는 7/1 ~ 7/5에 진행돼요.`
- line 754: `[2026년 5월] 포인트를 적립하는` → `[월별 대출] 포인트를 적립하는`
- line 756: `2026년 5월 포인트를 적립하는 모든 대출 상품과` → `[월별 대출] 포인트를 적립하는 모든 대출 상품과`
- 로컬 커밋: `03bb5b5`

### WT-008 2회차 — apply-dev.html 동일 수정 추가

| 항목 | 내용 |
|---|---|
| 회차 | 2회차 |
| 작성일시 | 2026-05-31 |
| 로컬 커밋 | cc0ae69 |
| 상태 | 진행중(In-Progress) |

[문제 위치]
파일: `apply/apply-dev.html`
라인: 513, 516, 597, 759, 761, 1207

[증상(문제 설명)]
apply.html(PRD)만 수정하고 apply-dev.html(DEV)은 누락. DEV/PRD 두 파일 동기화 필요.

[처방(수정 코드)]
apply.html과 동일 4건 적용. 로컬 커밋: `cc0ae69`

---

## WT-007 · T-006 6월 랜딩 신청하기 버튼 링크 변경

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-006 |
| 로컬 커밋 | 03bb5b5 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/index.html`
라인: 3296

[증상(문제 설명)]
하단 신청하기 버튼이 외부 tally.so URL로 연결되어 있어 자체 apply.html로 유도 불가.

[처방(수정 코드)]
- `href="https://tally.so/r/mBvDvR"` → `href="https://monthly-loan.sirjuseyo.com/apply/apply.html"`
- 로컬 커밋: `03bb5b5`

---

## WT-006 · T-005 나노크레딧 섹션 텍스트 3건 수정

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-005 |
| 로컬 커밋 | 46d035e |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/index.html`
라인: 1247, 1250, 1251, 1252

[증상(문제 설명)]
테스트 중 댄디어빠쮸너야님이 발견. 나노크레딧 섹션에 5월 이모지 잔존, 마침표 이중 표기, 불필요한 `-` 기호 존재.

[원인]
초기 복제 시 해당 문구의 `5️⃣🈷️` 이모지가 전체 치환 패턴에 포함되지 않았음. `-` 기호는 5월 원본에도 있었던 잔존 오류.

[진단(수정 이유)]
6월 페이지인데 5월 이모지 노출 → 사용자 혼란 야기. 마침표 이중/`-` 기호는 UI 오류.

[처방(수정 코드)]
- line 1247: `5️⃣🈷️ 대출이예요` → `6️⃣🈷️ 대출이예요`
- line 1250: `5️⃣🈷️ 대출부터 신청해야` → `6️⃣🈷️ 대출부터 신청해야`
- line 1251: `5️⃣🈷️ 대출을 신청하지 … 않습니다..❌` → `6️⃣🈷️ … 않습니다.❌`
- line 1252: `</ul>-` → `</ul>` (불필요 `-` 및 공백 제거)
- 로컬 커밋: `46d035e`

---

## WT-005 · T-004 기획서 이미지 순서 업데이트

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-004 |
| 로컬 커밋 | 문서 전용 — 별도 커밋 없음 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `project-docs/00_plan/PLAN_2026-06_호국보훈의달대출_기획서.md`
라인: §4-1 와이어프레임, §4-2, §4-3, §4-4, 무드 흐름 주석

[증상(문제 설명)]
기획서 원본의 이미지 순서(①월드컵→②호국보훈)가 댄디어빠쮸너야님의 지시(①호국보훈→②월드컵)와 다름.

[원인]
클로드 채팅 쮸리가 작성한 기획서 원본의 무드 흐름 설계가 변경됨.

[진단(수정 이유)]
실제 적용 순서에 맞게 기획서도 동기화 필요.

[처방(수정 코드)]
- §4-1 와이어프레임: ① `worldcup-jun-001.jpg`(활기) → `memorial-jun-001.jpg`(차분/호국보훈) / ② `memorial-jun-001.jpg` → `worldcup-jun-001.jpg`(활기/월드컵)
- §4-2: 이미지① 도입부 히어로 (활기/월드컵) → (차분/호국보훈), 파일명·alt·HTML 예시 모두 memorial로 수정
- §4-3: 이미지② 신청 절차 종결 (차분/호국보훈) → (활기/월드컵), 파일명·HTML 예시 worldcup으로 수정
- §4-4 제작 방식 테이블: ①②순서 교체
- 무드 흐름 주석: 초반 호국보훈 추모(경건) → 마무리 월드컵 응원(활기)으로 수정

---

## WT-004 · T-003 HTML 이미지 순서 교체 및 .jpg 참조 수정

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-003 |
| 로컬 커밋 | 4a54730 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/index.html`
라인: 1031 (이미지①), 1959 (이미지②)

[증상(문제 설명)]
이미지 순서 및 확장자가 최종 방향과 불일치.

[처방(수정 코드)]
- line 1031: `worldcup-jun-001.png` → `memorial-jun-001.jpg` / alt `6월 호국보훈 추모`
- line 1959: `memorial-jun-001.png` → `worldcup-jun-001.jpg` / alt `대출 신청 절차 안내`
- 로컬 커밋: `4a54730`

---

## WT-003 · T-002 이미지 PNG → JPG 압축 변환

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-002 |
| 로컬 커밋 | 4a54730 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/assets/memorial-jun-001.png`, `worldcup-jun-001.png`
라인: -

[증상(문제 설명)]
기획서 권장 용량(150~250KB) 대비 원본 PNG가 각 2.2MB / 2.5MB로 과대 용량.

[원인]
기획서에 `.jpg` 포맷/용량 기준이 명시되어 있었으나 실제 에셋은 `.png`로 납품됨.

[진단(수정 이유)]
웹 페이지 로딩 성능 및 기획서 사양 준수를 위해 JPG 변환 + 압축 필요.

[처방(수정 코드)]
- `sips -s format jpeg -s formatOptions 55 memorial-jun-001.png --out memorial-jun-001.jpg` → **249KB** ✅
- `sips -s format jpeg -s formatOptions 40 worldcup-jun-001.png --out worldcup-jun-001.jpg` → **235KB** ✅
- 로컬 커밋: `4a54730`

---

## WT-002 · T-001 6월 호국보훈의 달 대출 랜딩 페이지 신규 생성

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-001 |
| 로컬 커밋 | 976dd8e |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/index.html`
라인: 신규 생성 (3304라인)

[증상(문제 설명)]
`2026-06/` 폴더에 `assets/`만 있고 랜딩 페이지(`index.html`)가 없어 6월 대출 신청자 접근 불가.

[원인]
6월 페이지 미생성. 이미지 에셋(worldcup-jun-001.jpg, memorial-jun-001.jpg, Battlefield-Cross_Jun-Loan.png, 2026_worldcup_type102.png)은 사전 준비 완료 상태.

[진단(수정 이유)]
5월 페이지(`2026-05/index.html`)를 원본으로 복제 후 6월 호국보훈의 달 컨셉(컬러·텍스트·이미지·날짜)으로 전환. 기획서 `PLAN_2026-06_호국보훈의달대출_기획서.md` 기준 적용.

[처방(수정 코드)]
- `2026-05/index.html` → `2026-06/index.html` 복제
- CSS 컬러 팔레트 전환 (기획서 §3-3 하드코딩 대응표 전체 적용):
  - `#880E4F` → `#0D47A1` (딥로즈 → 딥네이비)
  - `#7F0000` → `#0A2E5C` (다크레드 → 다크네이비)
  - `#C62828` → `#B71C1C` (장미레드 → 태극레드)
  - `#FFF9F0` → `#FFFBF0` (크림 → 아이보리)
  - `#FFEBEE` → `#E3F2FD` (연로즈 → 연블루)
  - `#FFF3E0` → `#FFF8E1` (웜크림 → 페일골드)
  - `#FFCDD2` → `#BBDEFB` (소프트로즈 → 라이트블루)
  - `#EF9A9A` → `#90CAF9` (미디엄로즈 → 미디엄블루)
  - `#FFB300` → `#FFC107` (웜앰버 → 골드앰버)
  - h1 원본 `#B71C1C` → `#0D47A1` (헤더 h1 배경: 진한로즈레드 → 딥네이비, C62828→B71C1C 치환 전 먼저 처리)
- h1 타이틀: `[신청중] 5️⃣🈷️은 ❤️가정의 달 대출` → `[신청중] 6️⃣🈷️은 🪖호국보훈의 달 대출`
- 도입부 blockquote: 기획서 §2 인용구/핵심 멘트로 교체
- 이미지① src: `./assets/fanmily-may-003.jpg` → `./assets/worldcup-jun-001.jpg`
- 이미지② src: `./assets/lover-may.jpg` → `./assets/memorial-jun-001.jpg`
- 이벤트명: `장미🌹대출` → `월드컵⚽️대출` (전체 치환)
- 이벤트 섹션 타이틀: `5️⃣🈷️ 한정 스페셜티` → `6️⃣🈷️ 한정 스페셜티`
- 신청/운영 기간: `2026년 5월 1일(금) ~ 2026년 5월 25일(월)` → `2026년 6월 1일(월) ~ 2026년 6월 25일(목)`
- 심사 기간: `2026년 5월 1일(금) ~ 2026년 5월 5일(화)` → `2026년 7월 1일(수) ~ 2026년 7월 5일(일)`
- 신청하기 버튼 aria-label 6월 텍스트로 교체 (href tally URL 유지)
- 로컬 커밋: `976dd8e feat(T-001): 6월 호국보훈의 달 대출 랜딩 페이지 신규 생성`
- 브랜치: `feature/T-001-jun-loan-landing`

### WT-002 2회차 — 날짜 잔존 수정

| 항목 | 내용 |
|---|---|
| 회차 | 2회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| 로컬 커밋 | 8f094b0 |
| 상태 | 진행중(In-Progress) |

[문제 위치]
파일: `2026-06/index.html`
라인: 1144 (웨이팅 설명), 2038~3243 (웨이팅 테이블 날짜 50개소)

[증상(문제 설명)]
1회차 치환 시 `YYYY/MM/DD` 슬래시 포맷 날짜(웨이팅 대출 테이블)와 웨이팅 설명 문구 날짜(`5/1 ~ 5/25`) 누락.

[원인]
기획서에 해당 날짜 포맷 명시 없었음. 실제 파일 그렙 후 발견.

[진단(수정 이유)]
웨이팅 대출 주차별 신청 기간 테이블이 5월 기준으로 남아 있어 사용자에게 잘못된 정보 노출.

[처방(수정 코드)]
- `5/1 ~ 5/25` → `6/1 ~ 6/25` (웨이팅 설명)
- `2026년 6월 1일~5일` → `2026년 7월 1일~5일` (웨이팅 심사 기간)
- `2026/05/01 ~ 2026/05/25` 5주차 구간 전체 → `2026/06/01 ~ 2026/06/25` (총 50개소)
- 로컬 커밋: `8f094b0 fix(T-001): 6월 페이지 날짜 잔존 수정`

### WT-002 3회차 — 이미지 확장자 불일치 수정

| 항목 | 내용 |
|---|---|
| 회차 | 3회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| 로컬 커밋 | d802957 |
| 상태 | 진행중(In-Progress) |

[문제 위치]
파일: `2026-06/index.html`
라인: 1031 (이미지①), 1959 (이미지②)

[증상(문제 설명)]
이미지 src가 `.jpg`로 참조되어 실제 파일을 불러오지 못하는 상태. 기획서에 `.jpg`로 표기되어 있었으나 실제 에셋은 `.png`.

[원인]
기획서 §4 이미지 사양에 `.jpg`로 명시되어 있었고, 실제 저장된 파일은 `.png`였음. 파일 실존 확인 없이 기획서 표기를 그대로 적용한 오류.

[진단(수정 이유)]
`2026-06/assets/` 폴더 직접 확인 결과 `worldcup-jun-001.png`, `memorial-jun-001.png`로 존재 확인. `.jpg` → `.png` 교체 필요.

[처방(수정 코드)]
- `./assets/worldcup-jun-001.jpg` → `./assets/worldcup-jun-001.png` (line 1031)
- `./assets/memorial-jun-001.jpg` → `./assets/memorial-jun-001.png` (line 1959)
- 로컬 커밋: `d802957 fix(T-001): 이미지 확장자 .jpg → .png 수정`

---

## WT-001 · 프로젝트 분석 및 목차 수립

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 03:00 |
| 작성자 | 쮸티121호 |
| T-ID | T-001 |
| 로컬 커밋 | adfgedfg |
| 상태 | 테스트 완료(DONE) |

---

[문제 위치]
파일: (신규 프로젝트 — 기존 파일 없음)
라인: -

[증상(문제 설명)]
탈리(Tally) 대출 신청 폼을 월 6만원 비용을 지불하며 사용 중.
데이터 주권 없음, 커스터마이징 불가, 관리자 기능 부재.

[원인]
외부 SaaS 의존. 내재화 필요.

[진단(수정 이유)]
써주세요 자체 인프라(HTML+JS + AWS)로 이전하여 비용 절감 및 데이터 주권 확보.

[처방(수정 코드)]
- 탈리 폼(tally.so/r/mBvDvR) 분석 완료
- 수집 항목: 이름/생년월일/휴대폰/이메일/대출금액/기간/경험/방법/용도/기기
- A~F 작업 목차 수립 및 컨펌 완료
- CLAUDE.md 생성

---

### WT-001: 6월 대출 프로모션 페이지 상단·하단 `legal-shared.js` 연결

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-18 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html` |
| 연관 W-ID | W-001 |
| 연관 T-ID | T-001 |
| 커밋 해시 | `165a165` |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

**변경 (2건):**
- ① `<main class="max-w-4xl mx-auto ...">` → `<main class="wrap max-w-4xl mx-auto ...">` 추가 (1024라인) — `legal-shared.js`가 `.wrap` 컨테이너를 감지하여 상단·하단 법적고지 자동 주입하도록
- ② `<script src="/footer.js"></script>` → `<script src="/js/legal-shared.js"></script>` 교체 (3302라인) — 구형 footer.js(About Us/Contact 구형 콘텐츠) 제거, legal-shared.js로 교체

**주의사항:**
- `legal-shared.js`는 `.page` 또는 `.wrap` 클래스 감지 후 상단·하단 주입 (`if (!page) return;`)
- 기존 `footer.js`가 주입하던 구형 하단 콘텐츠(About us, Contact 등)는 이 교체로 자동 제거됨
- 로컬 브라우저(127.0.0.1:5502) 검증: `index.html` PRD 테스트 완료 ✅

---

**2차 작업 — 2026-06-18, 쮸티12-1호**

| 항목 | 내용 |
|------|------|
| 작업 이력 | 2차 작업 |
| 커밋 해시 | `1339e07` |
| 대상 파일 | `2026-06/index-dev.html` |
| 상태 | 진행중(In-Progress) |

**변경 (2건):**
- ① `<main class="max-w-4xl mx-auto ...">` → `<main class="wrap max-w-4xl mx-auto ...">` 추가 (1030라인)
- ② `<script src="/footer.js"></script>` → `<script src="/js/legal-shared.js"></script>` 교체 (3308라인)

---

### WT-002: 6월 대출 페이지 PC 좌우 너비 480px 고정

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-18 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-002 |
| 연관 T-ID | T-002 |
| 커밋 해시 | `c21ccdd` |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

**변경 (2건):**
- ① `2026-06/index.html` `<style>` 최상단에 `.wrap { max-width: 480px; margin: 0 auto; }` 추가 (17라인)
- ② `2026-06/index-dev.html` 동일 적용 (17라인)
- 루트 `index.html`의 `.wrap` 방식과 동일 — PC에서도 480px 1열 고정

---

**2차 작업 — 2026-06-18, 쮸티12-1호**

| 항목 | 내용 |
|------|------|
| 작업 이력 | 2차 작업 (수정) |
| 커밋 해시 | `6fa6dbb` |
| 상태 | 진행중(In-Progress) |

**변경 (1건):**
- `.wrap { max-width: 480px; margin: 0 auto; }` → `!important` 추가
- 원인: Tailwind CDN `max-w-4xl(896px)`이 `.wrap` CSS를 오버라이드하여 480px 고정이 적용되지 않음
- index.html, index-dev.html 양쪽 모두 수정

---

### WT-003: 6월 대출 페이지 상단 법적고지 하단 여백 추가

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-18 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-003 |
| 연관 T-ID | T-003 |
| 커밋 해시 | `632e98c` |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

**변경 (2건):**
- ① `2026-06/index.html` 18라인: `.legal-top { margin-bottom: 20px; }` 추가
- ② `2026-06/index-dev.html` 18라인: 동일 적용
- `legal-shared.js` 미수정 — sirjuseyo.com 전 페이지 영향 없음, 이 페이지에만 적용

---

### WT-004: 6월 대출 페이지 본문 폰트 18px 일괄 통일

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-004 |
| 연관 T-ID | T-004 |
| 커밋 해시 | `90e5ae6` |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

**변경 (5건 × 2파일):**
- ① `h1` CSS에 `font-size: 18px !important` 추가 (Tailwind `text-[1.2rem]/sm:text-3xl` 오버라이드)
- ② `h2.section-title`: `1.4em(22.4px)` → `18px`
- ③ `h3.sub-section-title`: `1.5em(24px)` → `18px`
- ④ `.SpringMarch-waiting-button`: `1.6em(25.6px)` → `18px`
- ⑤ `.section-box`: `1.75rem(28px)` → `18px`
- index.html, index-dev.html 양쪽 동일 적용

---


### WT-005: 6월 대출 페이지 .card-title 폰트 18px 수정

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-18 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-005 |
| 연관 T-ID | T-005 |
| 커밋 해시 | `6b0e53a` (index-dev), 이전 커밋 (index.html) |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

**변경 (2건 × 2파일):**
- ① `.card-title { font-size: 1.5rem(24px) }` → `18px` (565라인)
- ② 반응형 `.card-title { font-size: 1.35rem }` → `18px` (752라인)
- 대상: 블랙찬스 티켓, 한도상향 카드 섹션 타이틀
- index.html, index-dev.html 양쪽 동일 적용

---

### WT-006: 6월 대출 페이지 신청절차 step-icon 빨간 원 크기 축소

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-006 |
| 연관 T-ID | T-006 |
| 커밋 해시 | `a9fdac0` |
| 작업 이력 | 1차 작업 |
| 상태 | 완료(Done) |

**변경 (2건 × 2파일):**
- ① `.step-box .step-icon { font-size: 1.5em }` → `1em`
- ② `.step-box .step-icon { width/height: 2.2em }` → `1.8em`
- 원인: 빨간 원(~40px)이 법적고지 텍스트(24px)보다 시각적으로 커 보이는 착시
- index.html, index-dev.html 양쪽 동일 적용

---

### WT-007: 6월 대출 페이지 procedure-list 파란 원 크기 축소

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-007 |
| 연관 T-ID | T-007 |
| 커밋 해시 | `e69d2b8` |
| 작업 이력 | 1차 작업 |
| 상태 | 완료(Done) |

**변경 (2건 × 2파일):**
- ① `.procedure-list li::before { font-size: 1.4em }` → `1em` (파란 원 ~44px → ~29px)
- ② `.procedure-list li { padding-left: 3em }` → `2.5em` (원 크기 축소에 맞춰 여백 조정)
- index.html, index-dev.html 양쪽 동일 적용

---

---

## 깃 관리자 전달 작업 완료 보고서 (T-001~T-007)

monthly-loan T-001~T-007 작업 완료했습니다.
`feature/T-001-jun-loan-landing` 원격 푸시 완료했고 PR은 `#16`입니다.

작업 내용:
- `legal-shared.js` 연결 — 상단·하단 법적고지 자동 주입, `<main>`에 `wrap` 클래스 추가 (T-001)
- PC 좌우 너비 480px 고정 — `.wrap { max-width: 480px !important; margin: 0 auto !important; }` (T-002)
- 상단 법적고지 하단 여백 20px — `.legal-top { margin-bottom: 20px; }` (T-003)
- 본문 폰트 18px 일괄 통일 — h1/h2/h3/버튼/section-box/card-title 6개 항목 (T-004, T-005)
- 신청절차 빨간 원(step-icon) 크기 축소 — font-size 1.5em→1em, 크기 2.2em→1.8em (T-006)
- 웨이팅 파란 원(procedure-list li::before) 크기 축소 — font-size 1.4em→1em, padding-left 3em→2.5em (T-007)

검증:
- index.html 브라우저 로컬 확인 완료 (상단·하단 법적고지 주입, 480px 레이아웃, 폰트/원 크기)
- index-dev.html 동일 수정 적용 + DEV 배너 정상 표시 확인 완료

커밋:
- `165a165` T-001: 6월 대출 프로모션 페이지 legal-shared.js 연결
- `1339e07` T-001: 6월 DEV 페이지 legal-shared.js 연결
- `c21ccdd` T-002: 6월 대출 페이지 PC 좌우 너비 480px 고정
- `6fa6dbb` T-002: .wrap max-width !important 추가 — Tailwind 오버라이드 수정
- `632e98c` T-003: 상단 법적고지 하단 여백 20px 추가
- `90e5ae6` T-004: 본문 폰트 18px 일괄 통일 (법적고지 24px 규정 준수)
- `6b0e53a` T-005: index-dev.html .card-title 폰트 18px 수정
- `a9fdac0` T-006: step-icon 빨간 원 크기 축소
- `e69d2b8` T-007: procedure-list 파란 원 크기 축소

문서:
- `project-docs` (monthly-loan-repo 내 포함)
- 브랜치: `feature/T-001-jun-loan-landing`
- PR: `#16`
- 문서 커밋: `642244d` [T-007] WT-007 작성, T-007 완료 처리

한 줄 버전:
- `monthly-loan T-001~T-007 완료, feature/T-001-jun-loan-landing 푸시 및 PR #16 업데이트 완료, 브라우저 로컬 검증했습니다. 깃 & 배포 관리자님 feature → dev 검토 부탁드립니다.`


---

## 깃 & 배포 관리자 완료 보고서 (T-001~T-007)

[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-001~T-007 반영 완료했습니다.
`feature/T-001-jun-loan-landing`의 누적형 PR #16 전체 병합은 하지 않았고, 요청 범위에 해당하는
`2026-06/index.html`, `2026-06/index-dev.html`만 `e69d2b8` 기준으로 `main`에 선별 반영했습니다.

반영 내용:
- T-001 legal-shared.js 연결
- T-002 .wrap max-width 480px !important
- T-003 상단 법적고지 하단 여백 20px
- T-004 본문 폰트 18px 일괄 통일
- T-005 card-title 18px
- T-006 step-icon 빨간 원 축소
- T-007 procedure-list 파란 원 축소

실반영 커밋:
- `8af7421` fix(loan): apply T-001~T-007 June page updates [Ser7-1]

검증:
- 원격 `main` HEAD = `8af7421` 확인
- GitHub Pages live 응답 `HTTP/2 200` 확인
- live header `last-modified` 갱신 확인

판단:
- `monthly-loan` 레포는 `dev` 브랜치가 없고, PR #16 base도 `main`입니다.
- 또한 PR #16은 누적형 open PR이라 전체 병합 시 요청 범위 밖 변경까지 함께 들어갈 수 있어 전체 병합하지 않았습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `monthly-loan main` HEAD와 원격 `origin/main`이 동일한 `8af7421`로 확인되어 최신화 완료했습니다.


### WT-008: 홈 화면 18px 초과 폰트 18px 통일

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `index.html`, `index-dev.html` |
| 연관 W-ID | W-008 |
| 연관 T-ID | T-008 |
| 커밋 해시 | `062433f` |
| 브랜치 | `feature/T-008-home-font-18px` (신규) |
| PR | #17 |
| 상태 | 완료(Done) |

**변경 (4건 × 2파일):**
- ① `.nav-menu { font-size: 1.3rem(20.8px) }` → `18px`
- ② `.main-title { font-size: 1.4rem(22.4px) }` → `18px`
- ③ `.checker-icon { font-size: 1.2rem(19.2px) }` → `18px`
- ④ `.worldcup-title { font-size: 1.2rem(19.2px) }` → `18px`
- 법적고지 규정 준수: 본문 최대 18px
- index.html, index-dev.html 양쪽 동일 적용

---

## 깃 & 배포 관리자 완료 보고서 (T-008)

[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-008 반영 완료했습니다.
`feature/T-008-home-font-18px`의 PR #17 전체 병합은 하지 않았고, 요청 범위에 해당하는
`index.html`, `index-dev.html`만 `062433f` 기준으로 `main`에 선별 반영했습니다.

반영 내용:
- `.nav-menu` `1.3rem(20.8px)` → `18px`
- `.main-title` `1.4rem(22.4px)` → `18px`
- `.checker-icon` `1.2rem(19.2px)` → `18px`
- `.worldcup-title` `1.2rem(19.2px)` → `18px`

실반영 커밋:
- `a4e3d45` fix(home): apply T-008 18px font updates [Ser7-1]

검증:
- 원격 `main` HEAD = `a4e3d45` 확인
- GitHub Pages deploy run `27775132030` success 확인
- live 응답 `HTTP/2 200` 확인
- live header `last-modified` 갱신 확인

판단:
- `monthly-loan` 레포는 `dev` 브랜치가 없고, PR #17 base도 `main`입니다.
- 또한 PR #17 diff에는 문서 변경이 함께 섞여 있어 전체 병합하지 않고 루트 홈 2개 파일만 선별 반영했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `monthly-loan main` HEAD와 원격 `origin/main`이 동일한 `a4e3d45`로 확인되어 최신화 완료했습니다.

---

### WT-009: 월드컵 챌린지 페이지 18px 초과 폰트 18px 통일

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/worldcup-challenge/index-dev.html` |
| 연관 W-ID | W-009 |
| 연관 T-ID | T-009 |
| 커밋 해시 | `d783299` |
| 브랜치 | `feature/T-009-worldcup-font-18px` (신규) |
| PR | #18 |
| 상태 | 진행중(In-Progress) |

**변경 (9건):**
- ① `.section-title { font-size: 1.3rem(20.8px) }` → `18px`
- ② `.period-date { font-size: 1.3rem(20.8px) }` → `18px`
- ③ `.match-teams { font-size: 1.25rem(20px) }` → `18px`
- ④ `.total-box { font-size: 1.2rem(19.2px) }` → `18px`
- ⑤ `.no-condition { font-size: 2.4rem(38.4px) }` → `18px`
- ⑥ `.method-highlight { font-size: 1.18rem(18.88px) }` → `18px`
- ⑦ `.usage-label { font-size: 1.15rem(18.4px) }` → `18px`
- ⑧ `.apply-cta-title { font-size: 1.45rem(23.2px) }` → `18px`
- ⑨ `.apply-cta-button { font-size: 1.25rem(20px) }` → `18px`
- 히어로 영역(이미지·텍스트) 제외, 본문 전체 18px 이하 준수
- index-dev.html(DEV)만 대상

---

### WT-010: 월드컵 챌린지 페이지 legal-shared.js 연결

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/worldcup-challenge/index-dev.html`, `2026-06/worldcup-challenge/index.html` |
| 연관 W-ID | W-010 |
| 연관 T-ID | T-010 |
| 커밋 해시 | `d783299` (T-009와 동일 커밋) |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| PR | #18 |
| 상태 | 진행중(In-Progress) |

**변경 (3건 × 2파일):**
- ① `<div class="page-card">` → `<div class="page-card page">` (legal-shared.js 감지용 클래스 추가)
- ② 하드코딩 `<footer class="page-footer">...</footer>` 제거
- ③ `<script src="/footer.js"></script>` → `<script src="/js/legal-shared.js"></script>` 교체
- DEV(`index-dev.html`) + PRD(`index.html`) 양쪽 동일 적용

---

---

### WT-020: legal-shared.js 서비스 링크 절대경로 수정

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-26 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `js/legal-shared.js` |
| 연관 W-ID | W-020 |
| 연관 T-ID | T-020 |
| 커밋 해시 | `ab9eac8` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**문제:**
`legal-shared.js` Contact 섹션 서비스 카드의 링크가 루트 상대경로(`/privacy/...`)로 되어 있어 monthly-loan 도메인에서 404 발생.
- `monthly-loan.sirjuseyo.com/privacy/...` → 파일 없음 → 404
- privacy 파일은 `sirjuseyoWeb` 레포에만 존재 (`www.sirjuseyo.com/privacy/`)

**처방:**
서비스 카드 링크 3개를 절대경로로 변경 + `target="_blank" rel="noopener"` 추가

| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| 서비스 이용약관 | `/privacy/01_terms.html` | `https://www.sirjuseyo.com/privacy/01_terms.html` |
| 개인정보 처리방침 | `/privacy/index002.html` | `https://www.sirjuseyo.com/privacy/index002.html` |
| 대부거래 표준약관 | `/privacy/08_standard-terms.html` | `https://www.sirjuseyo.com/privacy/08_standard-terms.html` |

**검증:**
- `http://127.0.0.1:5502/index-dev.html` → 서비스 이용약관 클릭 → `www.sirjuseyo.com/privacy/01_terms.html` 정상 오픈 확인 (사장님 로컬 테스트 완료)
- `sirjuseyoWeb/js/legal-shared.js`는 별도 파일로 미수정 → www.sirjuseyo.com 영향 없음

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-020 (보관, 정책 201~205 · WT-020 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-020 반영 완료했습니다.
`feature/T-009-worldcup-font-18px`의 PR #18 전체 병합은 하지 않았고, 요청 범위에 해당하는
`js/legal-shared.js`만 `ab9eac8` 기준으로 `main`에 선별 반영했습니다.

반영 내용:
- `/privacy/01_terms.html` → `https://www.sirjuseyo.com/privacy/01_terms.html`
- `/privacy/index002.html` → `https://www.sirjuseyo.com/privacy/index002.html`
- `/privacy/08_standard-terms.html` → `https://www.sirjuseyo.com/privacy/08_standard-terms.html`
- 세 링크 모두 `target="_blank" rel="noopener"` 추가

실반영 커밋:
- `b112c62` fix(legal): apply T-020 service links [Ser7-1]

검증:
- 원격 `main` HEAD = `b112c62` 확인
- GitHub Pages deploy run `28282393428` success 확인
- `https://monthly-loan.sirjuseyo.com/js/legal-shared.js` live 응답 `HTTP/2 200` 확인
- live JS header `last-modified` 갱신 확인

판단:
- `monthly-loan` 레포는 `dev` 브랜치가 없고, PR #18 base도 `main`입니다.
- 실제 `ab9eac8` 커밋은 `js/legal-shared.js` 단일 변경이지만, PR #18에는 다른 코드/문서 변경도 누적되어 있어 전체 병합하지 않고 해당 파일만 선별 반영했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `monthly-loan main` HEAD와 원격 `origin/main`이 동일한 `b112c62`로 확인되어 최신화 완료했습니다.
```

---

### WT-021: [monthly-loan] 하단 법적고지 연체금리 문구 수정

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-27 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `js/legal-shared.js` |
| 연관 W-ID | W-021 |
| 연관 T-ID | T-021 |
| 커밋 해시 | `d586839` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 검증완료 |

**문제:**
하단 법적고지 그룹1 타이틀의 연체금리 수치가 구버전(+6%P·18%)으로 기재되어 있어 수정 필요.

**처방:**
| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| 연체금리 | `+6%P 이내, 연 18%이내` | `+3%P 이내, 연 15%이내` |

**수정 위치:** `js/legal-shared.js` 60번줄 `.legal-group-title`

---

### WT-022: [sirjuseyoWeb] 하단 법적고지 연체금리 문구 수정

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-27 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `sirjuseyoWeb/js/legal-shared.js` |
| 연관 W-ID | W-022 |
| 연관 T-ID | T-022 |
| 커밋 해시 | `a1660d1` |
| 브랜치 | `feature/T-014-hero-slider-cleanup` (sirjuseyoWeb 레포) |
| 상태 | 검증완료 |

**처방:**
| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| 연체금리 | `+6%P 이내, 연 18%이내` | `+3%P 이내, 연 15%이내` |

**수정 위치:** `sirjuseyoWeb/js/legal-shared.js` 60번줄 `.legal-group-title`

---

### WT-023: [monthly-loan] footer.js → legal-shared.js 교체 + deprecated 처리

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-27 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `footer.js`, `apply/apply.html`, `apply/apply-dev.html`, `loan-checker/index.html`, `2026-06/worldcup-challenge/apply/index.html`, `2026-06/worldcup-challenge/apply/index-dev.html` |
| 연관 W-ID | W-023 |
| 연관 T-ID | T-023 |
| 커밋 해시 | `05a34aa` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 검증완료 |

**처방:**
1. `footer.js` 파일 상단에 DEPRECATED 코멘트 추가 (구버전 보관용)
2. 5개 HTML 파일에서 `<script src="/footer.js">` 주석처리 + `/js/legal-shared.js` 교체
3. `loan-checker/index.html` — `.app-main`에 `page` 클래스 추가 (legal-shared.js 감지 대응)

| 파일 | 처리 내용 |
|---|---|
| `footer.js` | DEPRECATED 코멘트 추가 |
| `apply/apply.html` | footer.js 주석처리 → legal-shared.js 교체 |
| `apply/apply-dev.html` | 동일 |
| `loan-checker/index.html` | `.page` 클래스 추가 + 교체 |
| `2026-06/worldcup-challenge/apply/index.html` | footer.js 주석처리 → legal-shared.js 교체 |
| `2026-06/worldcup-challenge/apply/index-dev.html` | 동일 |

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-021/T-023 (보관, 정책 201~205 · WT-023 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-021/T-023 반영 완료했습니다.
`feature/T-009-worldcup-font-18px`의 PR #18 전체 병합은 하지 않았고, 요청 범위에 해당하는
`js/legal-shared.js`, `footer.js`, `apply/apply.html`, `apply/apply-dev.html`, `loan-checker/index.html`,
`2026-06/worldcup-challenge/apply/index.html`, `2026-06/worldcup-challenge/apply/index-dev.html`
7개 파일만 선별 반영했습니다.

반영 내용:
- T-021: `js/legal-shared.js` 연체금리 문구 `+6%P·18%` → `+3%P·15%`
- T-023: `footer.js` 상단 DEPRECATED 코멘트 추가
- T-023: 5개 HTML 파일 `footer.js` 주석처리 + `/js/legal-shared.js` 교체
  - `apply/apply.html`
  - `apply/apply-dev.html`
  - `loan-checker/index.html` (`.app-main`에 `page` 클래스 추가 포함)
  - `2026-06/worldcup-challenge/apply/index.html`
  - `2026-06/worldcup-challenge/apply/index-dev.html`

실반영 커밋:
- `16835ad` fix(legal): apply T-021 T-023 updates [Ser7-1]

검증:
- 원격 `main` HEAD = `16835ad` 확인
- GitHub Pages deploy run `28295021232` success 확인
- `https://monthly-loan.sirjuseyo.com/js/legal-shared.js` live 응답 `HTTP/2 200` 확인
- live JS header `last-modified` 갱신 확인

판단:
- `monthly-loan` 레포는 `dev` 브랜치가 없고, PR #18 base도 `main`입니다.
- `d586839`, `05a34aa` 외 다른 변경도 feature 브랜치에 누적되어 있어 전체 병합하지 않고 요청 파일만 선별 반영했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `monthly-loan main` HEAD와 원격 `origin/main`이 동일한 `16835ad`로 확인되어 최신화 완료했습니다.
```

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-022 (보관, 정책 201~205 · WT-022 연동)
```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

sirjuseyo-web T-022 반영 완료했습니다.
`feature/T-014-hero-slider-cleanup`의 누적 변경 전체 병합은 하지 않았고, 요청 범위에 해당하는
`js/legal-shared.js`만 `a1660d1` 기준으로 `main`에 선별 반영했습니다.

반영 내용:
- `js/legal-shared.js` 연체금리 문구 `+6%P·18%` → `+3%P·15%`

실반영 커밋:
- `ee5b8e3` fix(legal): apply T-022 overdue copy [Ser7-1]

검증:
- 원격 `main` HEAD = `ee5b8e3` 확인
- GitHub Pages deploy run `28295021225` success 확인
- `https://www.sirjuseyo.com/js/legal-shared.js` live 응답 `HTTP/2 200` 확인
- live JS header `last-modified` 갱신 확인

판단:
- `feature/T-014-hero-slider-cleanup`에는 T-022 외 다른 변경도 누적되어 있어 전체 병합하지 않고 `js/legal-shared.js`만 선별 반영했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `sirjuseyo-web main` HEAD와 원격 `origin/main`이 동일한 `ee5b8e3`로 확인되어 최신화 완료했습니다.
```

---

### WT-011: 월드컵 챌린지 페이지 법적고지↔콘텐츠 영역 시각적 구분

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/worldcup-challenge/index-dev.html`, `2026-06/worldcup-challenge/index.html` |
| 연관 W-ID | W-011 |
| 연관 T-ID | T-011 |
| 커밋 해시 | `af8d679` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 인라인 `<style>` 블록에 `.legal-top { margin-bottom: 20px; }` 추가 (DEV+PRD 양쪽 동일 적용)
- 상단 법적고지 영역과 페이지 콘텐츠 영역 사이 시각적 여백 구분

---

### WT-012: 대출 가능성 검사기 모바일 앱 사이즈 변경

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-012 |
| 연관 T-ID | T-012 |
| 커밋 해시 | `5297575` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 인라인 `<style>` 블록에 `.app-main { max-width: 480px !important; margin: 0 auto !important; }` 추가 (`loan-checker/styles.css`의 1100px 오버라이드)
- `<main class="app-main">` → `<main class="app-main page">` (.page 클래스 추가 — legal-shared.js 감지)

---

### WT-013: 대출 가능성 검사기 법적고지 연결 (상단+하단)

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-013 |
| 연관 T-ID | T-013 |
| 커밋 해시 | `5297575` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- `<script src="/footer.js"></script>` → `<script src="/js/legal-shared.js"></script>` 교체
- 상단 법적고지 자동 주입 + 하단 콘텐츠 자동 주입

---

### WT-014: 대출 가능성 검사기 법적고지↔콘텐츠 간격

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-014 |
| 연관 T-ID | T-014 |
| 커밋 해시 | `5297575` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 인라인 `<style>` 블록에 `.legal-top { margin-bottom: 20px; }` 추가 (다른 페이지와 동일)

---

### WT-015: 대출 가능성 검사기 폼 패널 2열 → 1열 변경

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-015 |
| 연관 T-ID | T-015 |
| 커밋 해시 | `15592a9` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 인라인 `<style>` 블록에 `.form-grid { grid-template-columns: 1fr !important; }` 추가
- `styles.css`의 `@media(min-width:960px)` 내 `repeat(2,1fr)` 2열 → 1열 오버라이드

---

### WT-016: 대출 가능성 검사기 뚝딱 버튼 → 하단 법적고지 위로 이동

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-016 |
| 연관 T-ID | T-016 |
| 커밋 해시 | `8bac5d8` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- `div.action-area`가 `</main>` 밖에 있어 legal-shared.js `beforeend` 주입 후 하단 콘텐츠 아래로 밀리던 문제 해결
- `div.action-area`를 `</main>` 닫기 태그 바로 앞으로 이동
- 인라인 `<style>` 블록에 `.action-area { margin-top: 24px; padding-top: 24px; border-top: 2px solid #E5E0F0; }` 추가 (구분선)

---

### WT-017: 대출 가능성 검사기 두 번째 이미지 숨김 처리

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-017 |
| 연관 T-ID | T-017 |
| 커밋 해시 | `bd47edb` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 상단 이미지 4개 중 두 번째 `loan-eligibility-checker-02.jpg` ('대출이 필요하신 분 주목') `section.hero-banner`에 `style="display:none;"` 추가

---

### WT-018: 대출 가능성 검사기 4번째 이미지 → 텍스트 박스 교체

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-018 |
| 연관 T-ID | T-018 |
| 커밋 해시 | `e16b96f` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- `loan-eligibility-checker-title.jpg` 이미지 제거
- 퍼플 그라디언트 텍스트 박스 교체:
  ```html
  <div class="title-text-box">
    <p class="title-text-main">대출 가능성 검사기</p>
    <p class="title-text-sub">지금 바로 확인해 보세요.</p>
  </div>
  ```
- 인라인 `<style>`: `.title-text-box { background: linear-gradient(135deg,#380097,#5a00cc); color:#fff; text-align:center; padding:40px 24px; width:100%; }` / `.title-text-main { font-size:18px; font-weight:900; }` / `.title-text-sub { font-size:14px; opacity:.88; }`

---

### WT-019: 대출 가능성 검사기 ①~⑤ 패널 폰트 18px 초과 통일

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-019 |
| 연관 T-ID | T-019 |
| 커밋 해시 | `e86d599` (재수정) |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 인라인 `<style>` 블록에 `.result-panel h2 { font-size: 18px !important; }` 추가
- 브라우저 기본 `h2` = 24px → CSS 명시 없으면 18px 규정 위반 → 오버라이드
- 1차 수정(`ec9a3d6`): `.page-intro h1`, `.title-bar-text` 셀렉터 → 해당 요소 HTML에 미존재 → 무효
- 재수정(`e86d599`): `.result-panel h2` 셀렉터로 정확히 타겟팅 → 사장님 검증 완료

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-011~T-019 (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-011~T-019 반영 완료했습니다.
`feature/T-009-worldcup-font-18px`의 PR #18 전체 병합은 하지 않았고, 요청 범위에 해당하는
`2026-06/worldcup-challenge/index.html`, `2026-06/worldcup-challenge/index-dev.html`, `loan-checker/index-dev.html`
3개 파일만 `origin/feature/T-009-worldcup-font-18px` 기준으로 `main`에 선별 반영했습니다.

반영 내용:
- [T-011] 월드컵 챌린지 `.legal-top { margin-bottom: 20px; }` 추가
- [T-012] 대출 검사기 `.app-main` 480px 오버라이드 + `.page` 클래스 추가
- [T-013] 대출 검사기 `footer.js` → `legal-shared.js` 교체
- [T-014] 대출 검사기 `.legal-top { margin-bottom: 20px; }` 추가
- [T-015] 대출 검사기 `.form-grid` 2열 → 1열 오버라이드
- [T-016] 대출 검사기 `action-area`를 `</main>` 안으로 이동 + 구분선 추가
- [T-017] 대출 검사기 두 번째 이미지 `display:none` 처리
- [T-018] 대출 검사기 4번째 이미지 → 퍼플 그라디언트 텍스트 박스 교체
- [T-019] 대출 검사기 `.result-panel h2` 18px 오버라이드

실반영 커밋:
- `c3063b3` fix(checker): apply T-011~T-019 updates [Ser7-1]

검증:
- 원격 `main` HEAD = `c3063b3` 확인
- GitHub Pages deploy run `27898271068` success 확인
- `https://monthly-loan.sirjuseyo.com/2026-06/worldcup-challenge/` live 응답 `HTTP/2 200` 확인
- `https://monthly-loan.sirjuseyo.com/loan-checker/index-dev.html` live 응답 `HTTP/2 200` 확인
- 두 URL 모두 live header `last-modified` 갱신 확인

판단:
- `monthly-loan` 레포는 `dev` 브랜치가 없고, PR #18 base도 `main`입니다.
- 또한 PR #18 diff에는 문서 변경이 함께 섞여 있어 전체 병합하지 않고 요청서 마지막 줄에 명시된 3개 파일만 선별 반영했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `monthly-loan main` HEAD와 원격 `origin/main`이 동일한 `c3063b3`로 확인되어 최신화 완료했습니다.
```

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-009+T-010 (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-009+T-010 반영 완료했습니다.
`feature/T-009-worldcup-font-18px`의 PR #18 전체 병합은 하지 않았고, 요청 범위에 해당하는
`2026-06/worldcup-challenge/index.html`, `2026-06/worldcup-challenge/index-dev.html`만 `d783299` 기준으로 `main`에 선별 반영했습니다.

반영 내용:
- [T-009] 월드컵 챌린지 페이지 본문 18px 초과 폰트 항목 18px 통일
  - `.section-title`
  - `.period-date`
  - `.match-teams`
  - `.benefit-amount`
  - `.no-condition`
  - `.result-box`
  - `.usage-label`
  - `.apply-cta-title`
  - `.apply-cta-button`
- [T-010] `.page-card`에 `page` 클래스 추가
- [T-010] 하드코딩 footer 제거
- [T-010] `footer.js` → `legal-shared.js` 교체

실반영 커밋:
- `21f6ed0` fix(challenge): apply T-009 T-010 updates [Ser7-1]

검증:
- 원격 `main` HEAD = `21f6ed0` 확인
- GitHub Pages deploy run `27777530437` success 확인
- live 응답 `HTTP/2 200` 확인
- live header `last-modified` 갱신 확인

판단:
- `monthly-loan` 레포는 `dev` 브랜치가 없고, PR #18 base도 `main`입니다.
- 또한 PR #18 diff에는 문서 변경이 함께 섞여 있어 전체 병합하지 않고 월드컵 챌린지 2개 파일만 선별 반영했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `monthly-loan main` HEAD와 원격 `origin/main`이 동일한 `21f6ed0`로 확인되어 최신화 완료했습니다.
```

---

## WT-024 · T-024 [monthly-loan] 홈 강제 고지 팝업 추가

| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-06-29 | 작성자 | 쮸티12-1호 |
| 상태 | ✅ 테스트 완료 — 커밋 `47e7965`, 원격 푸시 완료, PR #19 오픈 |

[배경] W-024: 월별대출 홈(`index.html`, `index-dev.html`)에 강제 고지형 팝업 추가. 탈리 신청 폼 내재화 직전 단계로 법적 고지 의무 이행 목적. 팝업 소스: `project-docs/130_handover/sirjuseyo-web-popup-v6_20260628.html`.

[대상] `monthly-loan-repo/index.html`(PRD), `monthly-loan-repo/index-dev.html`(DEV)

[처방]
① `index.html`(PRD): `</style></head>` 직전에 팝업 전용 CSS `<style>` 블록 주입 (`@import pretendard`, 전역 리셋, `body` 스타일, `.mock.*`, `.reopen`, `.sub` 제거)
② `index.html`(PRD): `<script src="/js/legal-shared.js"></script>` 앞에 팝업 HTML + PRD Script 주입 (localStorage 재노출 방지 — key `sjy_popup_hidden`, 값 `YYYY-MM-DD`, 하루 1회)
③ `index-dev.html`(DEV): CSS 주입 동일
④ `index-dev.html`(DEV): 팝업 HTML + DEV Script 주입 (재노출 방지 비활성화 — 매 진입마다 팝업 표시)

[충돌 방지]
- `.overlay{z-index:9999}` — legal-shared.js 상단 고지 위에 표시
- `.wrap{overflow:hidden}` 영향 없음 — `position:fixed`는 transform/filter 없는 경우 viewport 기준
- CSS 변수 충돌 없음 — 팝업 `--brand` vs 사이트 `--purple/--orange` 별도

[회차]

| 회차 | 날짜 | 내용 | 상태 |
|---|---|---|---|
| 1 | 2026-06-29 | CSS 주입 (index.html PRD) | 완료 |
| 2 | 2026-06-29 | 팝업 HTML+Script 주입 (index.html PRD) | 완료 |
| 3 | 2026-06-29 | CSS 주입 (index-dev.html DEV) | 완료 |
| 4 | 2026-06-29 | 팝업 HTML+Script 주입 (index-dev.html DEV) | 완료 |

---

## WT-025 · T-025 [sirjuseyoWeb] 홈 강제 고지 팝업 추가 + index-dev.html 신규생성

| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-06-29 | 작성자 | 쮸티12-1호 |
| 상태 | ✅ 테스트 완료 — 커밋 `5043427`, 원격 푸시 완료, PR #12 오픈 |

[배경] W-025: sirjuseyoWeb 홈(`index.html`, `index-dev.html`)에 강제 고지형 팝업 추가. W-024(monthly-loan)와 동일 팝업. `index-dev.html` 미존재로 신규 생성 포함.

[대상] `sirjuseyoWeb/index.html`(PRD, 팝업 주입), `sirjuseyoWeb/index-dev.html`(DEV, 신규생성)

[처방]
① `index.html`(PRD): CSS 주입 + 팝업 HTML + PRD Script 주입 (localStorage 재노출 방지)
② `index-dev.html`(DEV): `index.html` 기반 전체 복사 → `<body>` 직후 orange DEV 배너 추가 (`🚧 DEV 테스트 환경 — 실사용자 접근 금지`, `background:#FF5400`, `position:sticky;top:0;z-index:10000`) → DEV Script (재노출 방지 비활성화) 사용
③ `index-origin.html` 파일명 변경 완료 (`index101.html` → `index-origin.html`) — 상하단 법적고지 붙이기 전 오리지널 파일, 수정 금지

[회차]

| 회차 | 날짜 | 내용 | 상태 |
|---|---|---|---|
| 1 | 2026-06-29 | CSS 주입 (index.html PRD) | 완료 |
| 2 | 2026-06-29 | 팝업 HTML+Script 주입 (index.html PRD) | 완료 |
| 3 | 2026-06-29 | index-dev.html 신규생성 (DEV 배너+팝업+DEV Script) | 완료 |

---

## WT-026 · T-026 [팝업 전체] 예시 플로우 문구 2건 수정

| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-06-29 | 작성자 | 쮸티12-1호 |
| 상태 | ✅ 테스트 완료 — `47e7965`(monthly-loan PR #19) / `5043427`(sirjuseyoWeb PR #12) 포함 |

[배경] W-026: 팝업 내 예시 플로우 섹션 문구 2곳 사장님 지시 수정. 전체 팝업 파일(4개 HTML + 원본 문서 2개) 동일 반영.

[대상] `monthly-loan/index.html`, `monthly-loan/index-dev.html`, `sirjuseyoWeb/index.html`, `sirjuseyoWeb/index-dev.html`, `popup-v6_20260628.html`, `HANDOVER_써주세요_웹팝업_v6_20260628.md`

[처방]
① `선적립하면` → `선적립(예치)하면` — 6개 파일 전체 (v6 html에는 있으나 v5는 해당 문구 없어 HANDOVER md + v6 html + 4개 HTML 적용)
② `한도가 발생하지 않을 수 있으며, 불승인 시 활용 포인트는 전액 환전해 드립니다.` → `한도가 발생하지 않으면(불승인) 활용 포인트는 전액 환전해 드립니다.` — 6개 파일 전체

[검증] grep 검색 결과 0건 — 구버전 문구 6개 파일 전체 소거 확인

[회차]

| 회차 | 날짜 | 내용 | 상태 |
|---|---|---|---|
| 1 | 2026-06-29 | 수정 1·2 — monthly-loan/index.html | 완료 |
| 2 | 2026-06-29 | 수정 1·2 — monthly-loan/index-dev.html | 완료 |
| 3 | 2026-06-29 | 수정 1·2 — sirjuseyoWeb/index.html | 완료 |
| 4 | 2026-06-29 | 수정 1·2 — sirjuseyoWeb/index-dev.html | 완료 |
| 5 | 2026-06-29 | 수정 1·2 — popup-v6.html | 완료 |
| 6 | 2026-06-29 | 수정 1·2 — HANDOVER_v6.md | 완료 |

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-024/T-026 monthly-loan (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-024 / T-026 반영 완료했습니다.

처리 결과:
- 대상 PR: `#19`
- PR 상태: `OPEN`, `CLEAN`, `MERGEABLE`
- 다만 PR diff에 홈 외 누적 변경이 함께 섞여 있어 전체 병합은 진행하지 않았습니다.

선별 반영 내용:
- `index.html`
- `index-dev.html`
- 기준 커밋: `47e7965`

원격 main 반영:
- GitDeployOps 선별 반영 커밋: `7954d662d8ca780adb1b4794400b8314529071b3`
- 반영 완료: `main`

판단:
- 요청서 범위대로 홈 강제 고지 팝업 관련 루트 홈 2개 파일만 반영했습니다.
- `js/legal-shared.js` 및 기타 누적 파일은 이번 요청 범위에서 제외했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 원격 `main` 반영 후 로컬 `monthly-loan` 작업본도 최신 상태로 확인 완료
```

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-025/T-026 sirjuseyo-web (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[PRD : 깃 & 배포 관리자 -> 개발자]

sirjuseyo-web T-025 / T-026 반영 완료했습니다.

처리 결과:
- 대상 PR: `#12`
- PR 상태: `OPEN`, `DIRTY`, `CONFLICTING`
- 따라서 전체 PR 병합은 진행하지 않았습니다.

선별 반영 내용:
- `index.html`
- `index-dev.html`
- `index-origin.html`
- 기준 커밋: `5043427`

원격 main 반영:
- GitDeployOps 선별 반영 커밋: `b8305248c3e58b6aabe9ec043823c6a9da009ff2`
- 반영 완료: `main`

판단:
- `PR #12`는 충돌 상태라 전체 병합이 불가능했습니다.
- 개발자 요청 범위인 루트 홈 3개 파일만 `main`에 선별 반영했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 원격 `main` 반영 후 로컬 `sirjuseyo-web` 작업본도 최신 상태로 확인 완료
```

---

## WT-027 · T-027 [팝업 가이드라인] 활용% 개편 + 예시 수치 변경

**작업일시:** 2026-06-30  
**작업자:** 쮸티12-1호  
**W-ID:** W-027

### 수정 파일

- `project-docs/130_handover/sirjuseyo-web-popup-v6_20260628.html`
- `project-docs/130_handover/HANDOVER_써주세요_웹팝업_v6_20260628.md`

### 변경 내용

| 항목 | 구버전 | 신버전 |
|------|--------|--------|
| 최소 이율 | 3.5% | 0.9% |
| 신용조회비용 | 10,000원 | 4,500원 |
| 10만 웨이팅/블랙찬스 현금 | 활용 4% = 크레딧 4% | 활용 4.5% = 크레딧 4.5% |
| 10만 롸잇나우 | 활용 15% = 크레딧 4% + 이자 1% + 원금 10% | 활용 15.5% = 크레딧 4.5% + 이자 1% + 원금 10% |
| 10만 블랙찬스 이자 | 활용 5% = 크레딧 4% + 이자 1% | 활용 5.5% = 크레딧 4.5% + 이자 1% |
| 10만 블랙찬스 원금 | 활용 15% = 크레딧 4% + 이자 1% + 원금 10% | 활용 9.5% = 크레딧 4.5% + 이자 1% + 원금 4% |
| 10만 이벤트 | 이자만 포인트/활용 6% = 크레딧 5% + 이자 1% | 활용 3% = 크레딧 1% + 이자 1% + 원금 1% (opt__way 제거) |
| 20만 웨이팅 | 활용 3.5% = 크레딧 2.5% + 이자 1% | 활용 3.25% = 크레딧 2.25% + 이자 1% |
| 20만 롸잇나우 | 활용 13.5% = 크레딧 2.5% + 이자 1% + 원금 10% | 활용 13.25% = 크레딧 2.25% + 이자 1% + 원금 10% |
| 20만 블랙찬스 현금 | 활용 2.5% = 크레딧 2.5% | 활용 2.25% = 크레딧 2.25% |
| 20만 블랙찬스 이자 | 활용 3.5% = 크레딧 2.5% + 이자 1% | 활용 3.25% = 크레딧 2.25% + 이자 1% |
| 20만 블랙찬스 원금 | 활용 13.5% = 크레딧 2.5% + 이자 1% + 원금 10% | 활용 6.25% = 크레딧 2.25% + 이자 1% + 원금 4% |
| 20만 이벤트 | 이자만 포인트/활용 4.5% = 크레딧 3.5% + 이자 1% | 활용 3% = 크레딧 1% + 이자 1% + 원금 1% |
| 30만 웨이팅/롸잇나우 | 활용 13% = 크레딧 2% + 이자 1% + 원금 10% | 활용 12.5% = 크레딧 1.5% + 이자 1% + 원금 10% |
| 30만 블랙찬스 현금 | 활용 2% = 크레딧 2% | 활용 1.5% = 크레딧 1.5% |
| 30만 블랙찬스 이자 | 활용 3% = 크레딧 2% + 이자 1% | 활용 2.5% = 크레딧 1.5% + 이자 1% |
| 30만 블랙찬스 원금 | 활용 13% = 크레딧 2% + 이자 1% + 원금 10% | 활용 6.5% = 크레딧 1.5% + 이자 1% + 원금 4% |
| 30만 이벤트 | 이자만 포인트/활용 4% = 크레딧 3% + 이자 1% | 활용 3% = 크레딧 1% + 이자 1% + 원금 1% |
| 50만 웨이팅/롸잇나우 | 활용 13% = 크레딧 2% + 이자 1% + 원금 10% | 활용 11.9% = 크레딧 0.9% + 이자 1% + 원금 10% |
| 50만 블랙찬스 현금 | 활용 2% = 크레딧 2% | 활용 0.9% = 크레딧 0.9% |
| 50만 블랙찬스 이자 | 활용 3% = 크레딧 2% + 이자 1% | 활용 1.9% = 크레딧 0.9% + 이자 1% |
| 50만 블랙찬스 원금 | 활용 13% = 크레딧 2% + 이자 1% + 원금 10% | 활용 5.9% = 크레딧 0.9% + 이자 1% + 원금 4% |
| 크레딧 테이블 10만 | 활용 4 ~ 5% | 활용 4.5% |
| 크레딧 테이블 20만 | 활용 2.5 ~ 3% | 활용 2.25% |
| 크레딧 테이블 30만 | 활용 2 ~ 3% | 활용 1.5% |
| 크레딧 테이블 50만 | 활용 2 ~ 3% | 활용 0.9% |
| 예시 활용 | 39,000P | 15,000P |
| 예시 대출 | 300,000원 | 100,000원 |
| 예시 상환 | 270,000원 | 90,000원 |
| 예시 내역 캡션 | 활용 39,000P는 이렇게 쓰여요 | 활용 15,500P는 이렇게 쓰여요 |
| 예시 원금 | 30,000P | 10,000P |
| 예시 이자 | 3,000P | 1,000P |
| 예시 신용조회 | 6,000P | 4,500P |

### 커밋

- `bb3ae48` [W-027] 팝업 가이드라인 활용% 수치 전면 개편 및 예시 수치 변경

---

## WT-028 · T-028 [팝업 HTML 4개] 활용% 개편 + 예시 수치 변경 반영

**작업일시:** 2026-06-30  
**작업자:** 쮸티12-1호  
**W-ID:** W-028

### 수정 파일

- `monthly-loan-repo/index.html` (PRD)
- `monthly-loan-repo/index-dev.html` (DEV)
- `sirjuseyoWeb/index.html` (PRD)
- `sirjuseyoWeb/index-dev.html` (DEV)

### 변경 내용

W-027 가이드라인과 동일한 수치 변경 내용을 실제 팝업 HTML 4개 파일에 적용.
Python 스크립트로 4개 파일 일괄 교체 후 구버전 문구 0건 검증 완료.

### 검증

- 구버전 특정 패턴 (`크레딧 3.5%`, `크레딧 5% + 이자 1%` 등) 0건 확인 ✅
- 신버전 수치 20개 항목 4개 파일 모두 확인 ✅

### 추가 수정 (사장님 테스트 중 발견)

**① DEV 바 z-index 버그** (monthly-loan/index-dev.html만 해당)
- 수정 전: DEV 배너가 팝업 오버레이(z-index:9999)에 가려짐
- 수정 후: `position:sticky;top:0;z-index:10000` 추가 → DEV 바가 팝업 위 항상 표시
- sirjuseyoWeb/index-dev.html은 이미 올바르게 설정되어 있었음

**② 20만 블랙찬스 원금 수정**
- `활용 6.25% = 크레딧 2.25% + 이자 1% + 원금 4%` → `활용 7.25% = 크레딧 2.25% + 이자 1% + 원금 4%`
- 가이드라인 2개 파일 + HTML 4개 파일 전체 반영

**③ 한도 상향 기준 수정**
- `한도 상향 신청은 활용 포인트 최소 13%입니다.` → `한도 상향 신청은 활용 포인트 최소 11.9% 이상입니다.`
- 가이드라인 2개 파일 + HTML 4개 파일 전체 반영

### 커밋 (monthly-loan)

- `bbd6d7f` feat(T-028): 팝업 HTML 4개 활용% + 예시 수치 전면 개편
- `0bbc367` docs: T-028 커밋 해시 업데이트
- `0e64d9d` fix: DEV 바 z-index 10000 적용
- `98774e5` fix(T-028): 20만 블랙찬스 원금 6.25%→7.25% + 한도상향 13%→11.9%
- `ecc796a` docs(T-028): 투두 목록 검증완료 + 작업현황 요약표 리스트업

### 커밋 (sirjuseyoWeb)

- `feb46dd` feat(T-028): 팝업 HTML 활용% + 예시 수치 전면 개편 (sirjuseyoWeb)
- `3e0cb64` fix(T-028): 20만 블랙찬스 원금 6.25%→7.25% + 한도상향 13%→11.9%

---

## 📬 깃 & 배포 관리자 전달 작업 요청서

### ① monthly-loan T-027, T-028

monthly-loan T-027, T-028 작업 완료했습니다.
`feature/T-028-popup-code-only` 원격 푸시 완료했고 PR은 `#21`입니다.

작업 내용:
- 팝업 활용% 수치 전면 개편 (최소 0.9%, 10만 3% / 20만 7.25% / 30만 3% / 50만 11.9%)
- DEV 바 z-index:10000 적용 (index-dev.html — 팝업 오버레이 위 항상 표시)
- 20만 블랙찬스 원금 6.25%→7.25% + 한도 상향 기준 13%→11.9%

검증:
- 사장님 DEV 직접 테스트 완료
- 구버전 수치 패턴 (크레딧 3.5%, 크레딧 5%+이자 1%) 0건 확인

커밋:
- `0f7fb1c` feat(T-028): 팝업 활용% 개편 + DEV z-index + 20만 원금 7.25% (코드만)

문서:
- `project-docs`
- 브랜치: `feature/T-028-popup-html-content-update`
- PR: `#20`
- 문서 커밋: `bb3ae48` docs(W-027): 팝업 가이드라인 수치 전면 개편
- 문서 커밋: `ecc796a` docs(T-028): 투두 목록 검증완료 + 작업현황 요약표 리스트업
- 문서 커밋: `6781de8` docs(T-028): 원격푸시 PR 반영 + WT-028 보완

한 줄 버전:
- `monthly-loan T-027/T-028 완료, feature/T-028-popup-code-only 푸시 및 PR #21 생성 완료, 팝업 활용% 전면 개편 + DEV z-index 수정 + 20만 원금 7.25% + 한도 11.9% 사장님 테스트 완료했습니다. 깃 & 배포 관리자님 feature -> dev 검토 부탁드립니다.`

---

### ② sirjuseyoWeb T-028

sirjuseyoWeb T-028 작업 완료했습니다.
`feature/T-028-popup-html-content-update` 원격 푸시 완료했고 PR은 `#13`입니다.

작업 내용:
- 팝업 활용% 수치 전면 개편 (최소 0.9%, 10만 3% / 20만 7.25% / 30만 3% / 50만 11.9%)
- 20만 블랙찬스 원금 6.25%→7.25% + 한도 상향 기준 13%→11.9%

검증:
- 사장님 DEV 직접 테스트 완료
- 구버전 수치 패턴 (크레딧 3.5%, 크레딧 5%+이자 1%) 0건 확인

커밋:
- `feb46dd` feat(T-028): 팝업 HTML 활용% + 예시 수치 전면 개편 (sirjuseyoWeb)
- `3e0cb64` fix(T-028): 20만 블랙찬스 원금 6.25%→7.25% + 한도상향 13%→11.9%

문서:
- PR은 별도 생성 안 했습니다. (문서는 monthly-loan 레포 통합 관리)

한 줄 버전:
- `sirjuseyoWeb T-028 완료, feature/T-028-popup-html-content-update 푸시 및 PR #13 생성 완료, 팝업 활용% 전면 개편 + 20만 원금 7.25% + 한도 11.9% 사장님 테스트 완료했습니다. 깃 & 배포 관리자님 feature -> dev 검토 부탁드립니다.`

---

## 📩 깃 & 배포 관리자 완료 보고서 — monthly-loan T-027/T-028

[운영 : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-027 / T-028 반영 완료했습니다.

처리 결과:
- 대상 PR: `#21`
- PR 상태는 `DIRTY / CONFLICTING`이어서 전체 병합은 진행하지 않았습니다.
- 대신 코드 전용 브랜치 `feature/T-028-popup-code-only`의 최종 commit `0f7fb1c` 기준으로
  `index.html`, `index-dev.html` 2개 파일만 `main`에 선별 반영했습니다.

원격 main 반영:
- reflect commit: `cdb522c`
- push 결과: `7954d66..cdb522c  main -> main`

선별 반영 내용:
- 팝업 활용% 수치 전면 개편
- 최소 활용 기준 `0.9%` 반영
- DEV 바 `z-index:10000` 적용
- 20만 블랙찬스 원금 `6.25% -> 7.25%`
- 한도 상향 기준 `13% -> 11.9%`

비고:
- 이번 건은 `monthly-loan`이 `main` 운영 반영 레포이므로 `feature -> dev`가 아니라 `main` 선별 반영으로 처리했습니다.
- 운영 도메인 응답에서 새 문자열 즉시 확인은 아직 안 되어 GitHub Pages 반영 지연 또는 캐시 구간으로 판단합니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 제 워크스페이스 기준 `monthly-loan` 로컬은 `main...origin/main` 일치 상태 확인 완료

---

## 📩 깃 & 배포 관리자 완료 보고서 — sirjuseyoWeb T-028 PRD 선별 반영

[운영 : 깃 & 배포 관리자 -> 개발자]
sirjuseyoWeb T-028 PRD 선별 반영 완료했습니다.
처리 방식:
전체 dev -> main 병합은 하지 않았습니다.
dev 검증 완료 커밋 2ffcb98 기준으로 index.html, index-dev.html 2개 파일만 main에 선별 반영했습니다.

반영 내용:
- 팝업 활용% 수치 전면 개편
- 최소 0.9%
- 20만 블랙찬스 원금 활용 7.25%
- 한도 상향 최소 11.9%

반영 커밋:
- `df6c140` feat(web): selectively apply popup rate update on main [T-028]

원격 반영:
- `b830524..df6c140  main -> main`

로컬 최신화:
- 제 워크스페이스 sirjuseyo-web도 main...origin/main 기준으로 최신화 완료했습니다.

비고:
- 라이브 본문 문자열은 즉시 응답에서 확인되지 않아, 현재는 캐시 또는 GitHub Pages 반영 지연 구간으로 판단합니다.

한 줄 버전:
- sirjuseyoWeb T-028 PRD 선별 반영 완료, dev 커밋 2ffcb98 기준 index.html, index-dev.html만 main에 반영했고 원격 main commit df6c140 및 제 로컬 워크스페이스 최신화까지 완료했습니다.

---

## WT-040 · W-030 [7월 index-dev.html + 기획서] 크레딧 미션 4,500포 통일 반영

**작업일:** 2026-07-01
**작업자:** 쮸티12-1호
**상태:** 코딩완료 (사장님 테스트 대기)

### 변경 배경
- 실사(신용조회) 시가 기준 4,500원 통일
- 기존: 대출 금액별 차등 (10만 5,000포 / 20만 8,000포 / 30만 12,000포 / 50만 20,000포)
- 변경: 금액 관계없이 4,500포 단일 통일

### 작업 대상 파일
1. `2026-07/index-dev.html`
2. `2026-07/PLAN_7월_썸머베케이션대출_기획서.md`

### 수정 내용 (index-dev.html)

#### 섹션 1 — 🎊 이벤트 대출 ::: 7️⃣🈷️ 한정 스페셜티 (크레딧 미션 + 합계 4개)
| 금액 | 크레딧 Before | After | 합계 Before | After |
|------|-------------|-------|------------|-------|
| 50만 | 20,000포 | 4,500포 | 25,000포 | 9,500포 |
| 30만 | 12,000포 | 4,500포 | 15,000포 | 7,500포 |
| 20만 | 8,000포 | 4,500포 | 10,000포 | 6,500포 |
| 10만 | 5,000포 | 4,500포 | 6,000포 | 5,500포 |

#### 섹션 2 — ❗ 한도상향 신청은 무조건 원리포 상품
| 항목 | Before | After |
|------|--------|-------|
| 웨이팅 30만 크레딧 | 6,000포 | 4,500포 |
| 웨이팅 30만 최대 50% 할인 | 3,000포까지 | 2,250포까지 |
| 롸잇나우 30만 크레딧 | 12,000포 | 4,500포 |

#### 섹션 3 — 🔍 비교하세요. ::: 이벤트 🆚 웨이팅 🆚 롸잇나우
| 금액 | 이벤트 크레딧 | 이벤트합계 | 웨이팅 크레딧 | 웨이팅합계 | 롸잇나우 크레딧 | 롸잇나우합계 |
|------|------------|--------|------------|--------|------------|--------|
| 10만 | 5,000→4,500 | 6,000→5,500 | 2,000↓→2,250↓ | 2,000→2,250 | 4,000→4,500 | 15,000→15,500 |
| 20만 | 8,000→4,500 | 10,000→6,500 | 2,500↓→2,250↓ | 4,500→4,250 | 5,000→4,500 | 27,000→26,500 |
| 30만 | 12,000→4,500 | 15,000→7,500 | 3,000↓→2,250↓ | 9,000→8,250 | 6,000→4,500 | 39,000→37,500 |
| 50만 | 20,000→4,500 | 25,000→9,500 | 6,000↓→2,250↓ | 16,000→12,250 | 12,000→4,500 | 67,000→59,500 |

#### 섹션 4 — 💝 웨이팅 대출 보상 — 첫 번째 보상: 크레딧 미션 할인
- orig 80개: 4,000/5,000/6,000/12,000포 → 모두 **4,500포** (Python 일괄 처리)
- discounted 80개: 할인율(0~50%) × 4,500포 기준 재계산 (Python 일괄 처리)

| 할인율 | 새 discounted 값 |
|--------|----------------|
| 50% | 2,250포 |
| 45% | 2,475포 |
| 40% | 2,700포 |
| 35% | 2,925포 |
| 30% | 3,150포 |
| 25% | 3,375포 |
| 20% | 3,600포 |
| 15% | 3,825포 |
| 10% | 4,050포 |
| 5% | 4,275포 |
| 0% | 4,500포 |

### 수정 내용 (기획서)
- v0.3: 섹션 8 크레딧 미션 변경 사항 + 반영 섹션 목록 + discounted 기준표 추가

---

## WT-041 · W-031 [7월 index-dev.html] 이벤트 섹션 개편 + 용어 통일

**작업일:** 2026-07-01
**작업자:** 쮸티12-1호
**상태:** 코딩완료 (사장님 테스트 대기)

### 수정 내용 (index-dev.html)

#### (1) 용어 통일
| 위치 | 변경 전 | 변경 후 |
|------|--------|--------|
| 1081번 `specialty-info` | 신용정보조회비용으로 사용됩니다. | **신용조회비용**으로 사용됩니다. |
| 1892번 (나노크레딧 안내) | 신용정보조회 비용을 현금 부담 없이 | **신용조회비용**을 현금 부담 없이 |

#### (2) 워터밤💦대출 이벤트 섹션 개편
- `<li>원금 미션 감면</li>` 항목 삭제 (specialty-benefits ul)
- 50만 원 amount-box 삭제
- 원금 미션 감면 → 원금 미션(1%) 포인트 명시, 합계 재계산

| 금액 | 변경 전 | 변경 후 |
|------|--------|--------|
| 50만 | 존재 | **삭제** |
| 30만 | 원금 미션 감면, 총 7,500포 | 원금 미션(1%) 3,000포, 총 **10,500포** |
| 20만 | 원금 미션 감면, 총 6,500포 | 원금 미션(1%) 2,000포, 총 **8,500포** |
| 10만 | 원금 미션 감면, 총 5,500포 | 원금 미션(1%) 1,000포, 총 **6,500포** |

#### (3) ❗️ 신용조회비용 인상 안내 박스 삭제
- `<div class="notice-box">` 전체 삭제

---

## WT-042 · W-032 [7월 index-dev.html] 워터밤💦대출 specialty-info 원금 미션 안내 추가

**작업일:** 2026-07-01
**작업자:** 쮸티12-1호
**상태:** 코딩완료 (사장님 테스트 대기)

### 수정 내용
- 위치: 워터밤💦대출 섹션 specialty-info (1079번 줄 아래)
- 추가: `<p class="specialty-info">* 원금 미션은 원금 상환에 사용됩니다.</p>`
- 기획서 v0.5 반영 완료

---

---

## WT-043 · W-033 [7월 index-dev.html] 이벤트 대출 이포→원리포 상품 전환

**작업일:** 2026-07-01
**작업자:** 쮸티12-1호
**상태:** 코딩완료 (사장님 테스트 대기)

### 수정 내용 (index-dev.html)

| 항목 | 변경 전 | 변경 후 |
|------|--------|--------|
| 상품 종류 | 이포 상품 | **원리포 상품** |
| 상품 설명 | 원금은 현금으로 이자는 포인트로 상환합니다. | **원금 중 일부와 이자 전부를 포인트로 상환합니다.** |
| 미션 구성 | 크레딧 미션 + 이자 미션 (1%) | **크레딧 미션 4,500포 + 이자 미션 (1%) + 원금 미션 (1%)** |
| 안내 문구 li | 위에 워터밤💦대출에서 안내드린 바와 같이… | **삭제** |

---

#### 미처리 발견 사항 (사장님 확인 필요)
- 1951번 줄: 신청 절차 안내 예시 ❸ 에 `신청하면 → 원금 미션 감면 + 이자 미션(1%) 필수` 문구 잔존
- 위치: 이벤트 대출 섹션 외부 (신청 절차 안내 섹션의 예시 설명)
- 50만 원도 예시에 포함되어 있음 (`10만 원, 20만 원, 30만 원, 50만 원`)
- → 사장님 확인 후 별도 수정 여부 결정 필요

---

## WT-044 · W-034 [7월 비교테이블] 이벤트 대출 이포→원리포 + 원금 미션 재계산 (10만~50만)

**작업일:** 2026-07-01
**작업자:** 쮸티12-1호
**상태:** 코딩완료 (사장님 테스트 대기)
**커밋:** `6d7015c`

### 수정 내용 (2026-07/index-dev.html — 비교 테이블 섹션)

| 금액 | 항목 | 변경 전 | 변경 후 |
|------|------|--------|--------|
| 전체 | 상환 방식 | 이포 상품 | **원리포 상품** |
| 10만 | 원금 미션 | 감면 | **1,000포(1%)** |
| 10만 | 합계 | 5,500포 | **6,500포** |
| 20만 | 원금 미션 | 감면 | **2,000포(1%)** |
| 20만 | 합계 | 6,500포 | **8,500포** |
| 30만 | 원금 미션 | 감면 | **3,000포(1%)** |
| 30만 | 합계 | 7,500포 | **10,500포** |
| 50만 | 원금 미션 | 감면 | **5,000포(1%)** |
| 50만 | 합계 | 9,500포 | **14,500포** |

### 기획서
- `2026-07/PLAN_7월_썸머베케이션대출_기획서.md` 섹션 11 (W-034) 추가 완료 (v0.7)

### TODO_BOARD
- W-034 작업 대기열 등록 완료 → 투두 목록 T-034 등록은 작업 착수 시 처리

---

## WT-045 · W-035 [7월 예시❸] 신청 절차 원금 미션 감면→원금 미션(1%) 수정

**작업일:** 2026-07-01
**작업자:** 쮸티12-1호
**상태:** 코딩완료 (사장님 테스트 대기)
**커밋:** `2b598b7`

### 수정 내용 (2026-07/index-dev.html)

| 항목 | 변경 전 | 변경 후 |
|------|--------|--------|
| 예시 ❸ 1951번 줄 | `신청하면 → 원금 미션 감면 + 이자 미션(1%) 필수` | `신청하면 → 원금 미션(1%) + 이자 미션(1%) 필수` |

### 배경
- W-033 작업 시 발견된 미처리 사항 (사장님 확인 후 W-035로 별도 처리)

---

## WT-046 · W-036 [홈 페이지] index-dev.html 7월 전환

**작업일:** 2026-07-01
**작업자:** 쮸티12-1호
**상태:** 코딩완료 (사장님 테스트 대기)
**커밋:** `a9668d5`

### 수정 내용 (index-dev.html)

| # | 항목 | 변경 전 | 변경 후 |
|---|------|--------|--------|
| A-1 | live-badge | `6월 대출` | `7월 대출` |
| A-2 | gift-box 이미지 | `2026-06/assets/Battlefield-Cross_Jun-Loan.png` | `2026-07/assets/summer-jul-001.jpg` |
| A-3 | 이달의 대출 태그 | `🪖 이달의 대출` | `☀️ 이달의 대출` |
| A-3 | 이달의 대출 제목 | `6️⃣🈷️은 🪖호국보훈의 달` | `7️⃣🈷️ 썸머 🏖️베케이션` |
| A-4 | 이달의 대출 링크 | `./2026-06/index-dev.html` | `./2026-07/index-dev.html` |
| A-5 | 월드컵 카드 | 표시 중 | `display:none` 숨김 |
| B-1 | 10만 이벤트 팝업 | `활용 3%` | `활용 6.5%` (크레딧 4.5%+이자 1%+원금 1%) |
| B-2 | 20만 이벤트 팝업 | `활용 3%` | `활용 4.25%` (크레딧 2.25%+이자 1%+원금 1%) |
| B-3 | 30만 이벤트 팝업 | `활용 3%` | `활용 3.5%` (크레딧 1.5%+이자 1%+원금 1%) |
| B-4 | 50만 이벤트 팝업 | 대출 상품 없음 | 유지 |

---

## WT-047 · W-037 [홈 페이지] 대출 가능성 검사기 카드 숨김

**작업일:** 2026-07-01
**작업자:** 쮸티12-1호
**상태:** 코딩완료 (사장님 테스트 대기)
**커밋:** `86307cd`

### 수정 내용 (index-dev.html)

| 항목 | 변경 전 | 변경 후 |
|------|--------|--------|
| checker-card 블록 | 표시 중 | `display:none` 숨김 |

---

## WT-048 · W-038 [문서 정리] project-docs 폴더 구조 변경 git 반영

**작업일:** 2026-07-01
**작업자:** 쮸티12-1호
**상태:** 코딩완료 (사장님 테스트 대기)
**커밋:** `3291e62`

### 작업 배경

사장님 지시: "모든 문서는 `project-docs/120_plan`으로 이동해놔"  
사장님이 직접 파일시스템 이동을 완료하셨고, git 반영만 진행.

### 변경 내용

| 작업 | 대상 | 내용 |
|------|------|------|
| 폴더 삭제 | `project-docs/00_plan/` | 기존 기획서 폴더 전체 삭제 |
| 폴더 신규 | `project-docs/120_plan/` | 통합 기획서 보관 폴더 생성 |
| 파일 이동 | `project-docs/00_plan/*` → `project-docs/120_plan/` | 전체 파일 이동 (기획서, 기술문서, wireframe 등) |
| 파일 이동 | `2026-07/PLAN_7월_썸머베케이션대출_기획서.md` → `project-docs/120_plan/PLAN_2026-07_썸머베케이션대출_기획서.md` | 7월 기획서 이동 |
| 파일 삭제 | `PLAN_홈페이지_7월전환_기획서.md` (루트) | 사장님 직접 삭제 |
| 파일 신규 | `project-docs/120_plan/팝업배너콘텐츠.md` | 사장님 직접 추가 |

### 비고

- `PLAN_홈페이지_7월전환_기획서.md`는 루트에서 삭제됨 → 사장님 휴지통에서 복원 후 `PLAN_2026-07_홈페이지_7월전환_기획서.md`로 120_plan 이동 완료

---

## WT-049 · W-039 [홈 페이지] gift-box 서핑 이미지 교체

**작업일:** 2026-07-01
**작업자:** 쮸티12-1호
**상태:** 테스트 완료(DONE)
**커밋:** `0ee40b0`

### 수정 내용 (index-dev.html)

| 항목 | 변경 전 | 변경 후 |
|------|--------|--------|
| gift-box 이미지 (269번 줄) | `./2026-07/assets/summer-jul-001.jpg` | `./2026-07/assets/Palm-Surf_Jul-Loan.png` |

### 기획서

`PLAN_2026-07_홈페이지_7월전환_기획서.md` v0.4 반영

---

## WT-050 · W-040 [6월 페이지] 마감 처리

**작업일:** 2026-07-02
**작업자:** 쮸티12-1호
**상태:** 테스트 완료(DONE)
**커밋:** `2d5cb5c`

### 작업 배경

실사 방문일. 앱에서 `2026-06/index-dev.html`로 다이렉트 진입 경로가 존재하나 앱 수정 불가 → 페이지 자체를 마감 처리.

### 수정 내용 (2026-06/index-dev.html)

| 항목 | 내용 |
|------|------|
| 마감 문구 추가 | `<body>` 직후 — "6월 호국보훈 대출은 마감됐습니다." (화면 중앙 표시) |
| 기존 내용 숨김 | 기존 body 전체를 `<div style="display:none">` 으로 감싸기 |
| 방식 선택 이유 | 기존 HTML 주석 27개 존재 → 중첩 주석 깨짐 방지 |

---

---

## WT-051 · W-041 [6월 PRD] index.html 마감 처리

**작업일:** 2026-07-02
**작업자:** 쮸티12-1호
**상태:** 테스트 완료(DONE)
**커밋:** `2e08459`

### 작업 배경

T-040에서 `index-dev.html`만 수정하고 PRD(`index.html`) 미반영 — 누락 보완.  
앞으로 DEV + PRD 동시 작업, 작업 요청서는 PRD 기준으로 작성.

### 수정 내용 (2026-06/index.html)

| 항목 | 내용 |
|------|------|
| 마감 문구 추가 | `<body>` 직후 — "6월 호국보훈 대출은 마감됐습니다." (화면 중앙 표시) |
| 기존 내용 숨김 | 기존 body 전체를 `<div style="display:none">` 으로 감싸기 |

---

### 깃 & 배포 관리자 완료 보고서 (Ser7-1호 · 2026-07-02)

```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-041 반영 완료했습니다.

- 대상 PR: #23
- 처리 방식:
  - monthly-loan은 dev 브랜치가 없고 PR #23 base도 main이라 feature -> main 반영으로 처리했습니다.
  - 변경 파일은 2026-06/index.html 1개이며 PR #23는 CLEAN, MERGEABLE 상태로 확인했습니다.
  - reported checks는 없었습니다.

- 반영 커밋:
  - merge commit: 7d957808

- 배포 확인:
  - GitHub Pages deploy run: 28561178724
  - status: completed / success
  - live URL: https://monthly-loan.sirjuseyo.com/2026-06/index.html

- 로컬 최신화:
  - 로컬 monthly-loan main을 origin/main과 동일한 최신 상태로 맞췄습니다.

문서:
- TODO_BOARD_GitDeployOps_Ser7-1호_2026071.md
- WORK_THROUGH_GitDeployOps_Ser7-1호_2026071.md

한 줄 버전:
- monthly-loan T-041 완료, PR #23 feature/T-041-jun-prd-page-close -> main merge 완료,
  merge commit 7d957808, GitHub Pages deploy run 28561178724 success,
  로컬 monthly-loan main 최신화까지 완료했습니다.
```

---

### 깃 & 배포 관리자 완료 보고서 (Ser7-1호 · 2026-07-02)

```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-040 반영 완료했습니다.

- 대상 PR: #22
- 처리 방식:
  - monthly-loan은 dev 브랜치가 없고 PR #22 base도 main이라 feature -> main 반영으로 처리했습니다.
  - 변경 파일은 2026-06/index-dev.html 1개이며 PR #22는 CLEAN, MERGEABLE 상태로 확인했습니다.
  - reported checks는 없었습니다.

- 반영 커밋:
  - merge commit: 92e118da

- 배포 확인:
  - GitHub Pages deploy run: 28560557018
  - status: completed / success
  - live URL: https://monthly-loan.sirjuseyo.com/2026-06/index-dev.html
  - HTTP/2 200, last-modified 갱신 확인

- 로컬 최신화:
  - 로컬 monthly-loan main을 origin/main과 동일한 최신 상태로 맞췄습니다.

문서:
- TODO_BOARD_GitDeployOps_Ser7-1호_2026071.md
- WORK_THROUGH_GitDeployOps_Ser7-1호_2026071.md

한 줄 버전:
- monthly-loan T-040 완료, PR #22 feature/T-040-jun-page-close -> main merge 완료,
  merge commit 92e118da, GitHub Pages deploy run 28560557018 success,
  로컬 monthly-loan main 최신화까지 완료했습니다.
```

---

## WT-052 · W-042 [7월 썸머 베케이션] PRD 파일 생성/업데이트

**작업일:** 2026-07-02
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)
**커밋:** `815964b`

### 작업 배경

---

## WT-053 · W-043 [T-039 자산 보완] Palm-Surf_Jul-Loan.png 이미지 파일 커밋 추가

**작업일:** 2026-07-02
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)
**커밋:** `84b62f4`

### 작업 배경

Ser7-1호 보류 보고 수신 — `2026-07/assets/Palm-Surf_Jul-Loan.png` 파일이 로컬에는 있었으나 git 커밋에 포함되지 않아 원격 404.  
PR #24 배포 보류 상태에서 자산 파일 커밋 추가 → 푸시로 보완.

### 처리 내용

| 항목 | 내용 |
|------|------|
| 파일 추가 | `2026-07/assets/Palm-Surf_Jul-Loan.png` (2.4MB) |
| 커밋 | `84b62f4` |
| 작업 요청서 | Ser7-1호 재전달 완료 |

---

---

## WT-054 · W-044 [7월 대출 페이지] 상단 메인 이미지 교체

**작업일:** 2026-07-03
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 배경

ChatGPT로 생성한 서핑 일몰 이미지(PNG)를 7월 대출 페이지 상단 메인 이미지로 적용.  
`summer-jul-001.jpg`(미존재 파일) → `Surfer-Sunset_Jul-Loan.jpg`로 교체.

### 처리 내용

| 항목 | 내용 |
|------|------|
| 원본 PNG | `2026-07/assets/Surfer-Sunset_Jul-Loan.png` (2,287KB) |
| 변환 JPG | `2026-07/assets/Surfer-Sunset_Jul-Loan.jpg` (298KB / 1686×933px) |
| src 교체 | `2026-07/index-dev.html` 줄 1041 + `2026-07/index.html` 줄 1036 |
| 변경 내용 | `./assets/summer-jul-001.jpg` → `./assets/Surfer-Sunset_Jul-Loan.jpg` |

---

### 깃 & 배포 관리자 완료 보고서 (Ser7-1호 · 2026-07-02)

```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-030~T-039 + W-042/W-043 반영 완료했습니다.

- 대상 PR: #24
- 처리 방식:
  - PR #24는 끝까지 DIRTY/CONFLICTING 상태라 전체 병합은 하지 않았습니다.
  - 대신 요청하신 아래 5개 파일만 origin/feature/T-030-credit-mission-4500 최신 상태 기준으로 main에 선별 반영했습니다.
    - index.html
    - index-dev.html
    - 2026-07/index.html
    - 2026-07/index-dev.html
    - 2026-07/assets/Palm-Surf_Jul-Loan.png

- 반영 커밋:
  - cf89006 fix(july): selectively apply T-030~T-039 W-042 W-043 updates [Ser7-1]

- 배포 확인:
  - GitHub Pages deploy run: 28564430240
  - status: completed / success
  - live URL:
    - https://monthly-loan.sirjuseyo.com/2026-07/index.html → 200
    - https://monthly-loan.sirjuseyo.com/2026-07/assets/Palm-Surf_Jul-Loan.png → 200

- 로컬 최신화:
  - 로컬 monthly-loan main은 push 완료 후 origin/main 기준 최신 상태를 유지하고 있습니다.

한 줄 버전:
- monthly-loan T-030~T-039 + W-042/W-043 완료, PR #24는 충돌 상태라 전체 병합 없이 요청 파일 5개만 선별 반영했고,
  main 커밋 cf89006, GitHub Pages deploy run 28564430240 success, 7월 페이지와 이미지 200까지 확인했습니다.
```

---
### 작업 배경

T-030~T-039 작업이 모두 DEV(`index-dev.html`, `2026-07/index-dev.html`)에만 반영됨.  
"앞으로는 dev.html, prd.html 모두 같이 처리해야 돼!" 지시에 따라 PRD 파일도 신규 생성/업데이트.

### 수정/생성 내용

| 파일 | 변경 유형 | 내용 |
|------|---------|------|
| `index.html` (루트 PRD) | 수정 | T-036: live-badge 7월, gift-box Palm-Surf, ☀️ 태그, 썸머 베케이션 제목, 2026-07 링크, worldcup-card 숨김 |
| `index.html` (루트 PRD) | 수정 | T-036: 팝업 이벤트 활용% — 10만 6.5% / 20만 4.25% / 30만 3.5% (크레딧+이자+원금 1%) |
| `index.html` (루트 PRD) | 수정 | T-037: checker-card display:none 숨김 |
| `index.html` (루트 PRD) | 수정 | T-039: gift-box 서핑 이미지 Palm-Surf_Jul-Loan.png |
| `2026-07/index.html` | 신규 생성 | T-030~T-035: index-dev.html 기반, DEV 배너 제거, href apply.html 변경 |

---

## WT-055 · W-045 [7월 대출 페이지] 두 번째 이미지 교체 — Waterbomb-Jul

**작업일:** 2026-07-03
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 배경

ChatGPT로 생성한 워터밤 페스티벌 이미지(PNG)를 7월 대출 페이지 두 번째 이미지로 적용.  
DEV·PRD 모두 이미 `./assets/waterbomb-jul-001.jpg` src 설정되어 있으나 JPG 파일 미존재 상태였음.

### 처리 내용

| 항목 | 내용 |
|------|------|
| 원본 PNG | `2026-07/assets/waterbomb-jul-001.png` (2,696KB / 1686×933px) |
| 변환 JPG | `2026-07/assets/waterbomb-jul-001.jpg` (408KB / 1686×933px) |
| DEV src | `2026-07/index-dev.html` 줄 1957 — 이미 `waterbomb-jul-001.jpg` 설정됨 (수정 불필요) |
| PRD src | `2026-07/index.html` 줄 1952 — 이미 `waterbomb-jul-001.jpg` 설정됨 (수정 불필요) |
| 로컬 커밋 | `fcc7847` |

---

### 깃 & 배포 관리자 완료 보고서 (Ser7-1호 · 2026-07-03)

```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-042/T-043 반영 완료했습니다.

- 대상 PR: `#24`
- 처리 방식:
  - `PR #24`는 계속 `DIRTY/CONFLICTING` 상태라 전체 병합하지 않았습니다.
  - 요청 범위 중 아래 4개 파일만 `origin/feature/T-030-credit-mission-4500` 기준으로 `main`에 선별 반영했습니다.
    - `2026-07/index.html`
    - `2026-07/index-dev.html`
    - `2026-07/assets/Surfer-Sunset_Jul-Loan.jpg`
    - `2026-07/assets/waterbomb-jul-001.jpg`

- 코드 반영:
  - `c07d4d8` `fix(july): apply T-042 T-043 image updates [Ser7-1]`
  - 최종 Pages 재트리거 커밋: `717b55f`

- 배포 확인:
  - GitHub Pages run: `28667028129`
  - status: `completed / success`

- live 확인:
  - `https://monthly-loan.sirjuseyo.com/2026-07/index.html` -> `200`
  - `https://monthly-loan.sirjuseyo.com/2026-07/assets/Surfer-Sunset_Jul-Loan.jpg` -> `200`
  - `https://monthly-loan.sirjuseyo.com/2026-07/assets/waterbomb-jul-001.jpg` -> `200`

- 로컬 최신화:
  - 로컬 `monthly-loan main`은 `origin/main` 최신 상태입니다.

한 줄 버전:
- monthly-loan T-042/T-043 완료, `PR #24` 전체 병합 없이 요청 파일 4개만 `main`에 선별 반영했고,
  커밋 `c07d4d8` 및 최종 재트리거 커밋 `717b55f` 반영 후 GitHub Pages run `28667028129` success,
  7월 페이지와 신규 JPG 2개 `200`까지 확인했습니다.
```

---

## WT-056 · W-046 [신청 폼] apply.html + apply-dev.html 7월 대출 문구 전환

**작업일:** 2026-07-03
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 배경

신청 폼(`apply/apply.html`, `apply/apply-dev.html`)에 6월 대출 문구가 잔존.  
7월 썸머 베케이션 대출 전환에 맞춰 DEV·PRD 동시 교체.

### 처리 내용

| 파일 | 줄 | 변경 전 | 변경 후 |
|------|---|--------|--------|
| `apply-dev.html` | 513 | `[6️⃣🈷️은 🪖호국보훈의 달 대출 OPEN] 지금 신청하세요!` | `[7️⃣🈷️ 썸머 🏖️베케이션 대출 OPEN] 지금 신청하세요!` |
| `apply-dev.html` | 516 | `[6️⃣🈷️은 🪖호국보훈의 달 대출]을 신청중입니다.` | `[7️⃣🈷️ 썸머 🏖️베케이션 대출]을 신청중입니다.` |
| `apply-dev.html` | 1207 | `4. 대출 상품 : 6️⃣🈷️은 🪖호국보훈의 달 대출` | `4. 대출 상품 : 7️⃣🈷️ 썸머 🏖️베케이션 대출` |
| `apply.html` | 508 | 동일 | 동일 |
| `apply.html` | 511 | 동일 | 동일 |
| `apply.html` | 1170 | 동일 | 동일 |

| 항목 | 내용 |
|------|------|
| 호국보훈 잔존 | 없음 (grep 검증 완료) |
| 로컬 커밋 | `527d79e` |

---

### 깃 & 배포 관리자 완료 보고서 (Ser7-1호 · 2026-07-04)

```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-044 반영 완료했습니다.

- 대상 PR: `#24`
- 처리 방식:
  - PR #24는 현재 `MERGEABLE`이지만 과거 누적 커밋이 많아서 전체 병합하지 않았습니다.
  - 요청 범위인 코드 파일 2개만 `main`에 선별 반영했습니다.
    - `apply/apply-dev.html`
    - `apply/apply.html`
  - 문서 파일/문서 커밋은 운영 반영에서 제외했습니다.

- 코드 반영:
  - main commit: `ab2c334` `fix(apply): apply July loan wording updates [T-044]`
  - Pages 재트리거 commit: `bf871c9`

- 배포 결과:
  - 최초 Pages run `28673932429`: build success, deploy 단계 일시 실패
  - 재트리거 Pages run `28674000011`: success

- live 확인:
  - `https://monthly-loan.sirjuseyo.com/apply/apply.html` -> `HTTP/2 200`
  - `https://monthly-loan.sirjuseyo.com/apply/apply-dev.html` -> `HTTP/2 200`
  - 두 파일 모두 `7️⃣🈷️ 썸머 🏖️베케이션 대출` 문구 3곳 반영 확인

한 줄 버전:
monthly-loan T-044 완료, PR #24 전체 병합 없이 `apply/apply-dev.html`, `apply/apply.html` 2개 파일만 main에 선별 반영했고,
GitHub Pages run `28674000011` success 및 live 신청 폼 DEV/PRD 7월 문구 반영 확인 완료했습니다.
```

---

## WT-094 · W-085 [챌린지 대표 페이지] challenge/index.html + index-dev.html 신규 생성

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-22
- **작업자:** 쮸티12-1호
- **연관 W-ID:** W-085

### 작업 내용

**[배경]** 챌린지 메뉴 링크(`/challenge/`)에 해당하는 대표 페이지가 없음. 현재 챌린지는 월드컵 챌린지 1개뿐이므로, `2026-06/index-dev.html`(월드컵 챌린지 내용 포함)을 소스로 챌린지 대표 페이지 생성.

**[변경 내역]**
- `challenge/` 폴더 신규 생성
- `challenge/index-dev.html` (DEV) — 소스 기반 + DEV 배너(`#FF5400`, sticky) + `menu-dev.js` 적용
- `challenge/index.html` (PRD) — 소스 기반 + DEV 배너 없음 + `menu.js` 적용
- 마감 처리 div 제거 + `display:none` wrapper 제거 → 실제 콘텐츠만 사용
- 이미지 경로 절대 경로 변환: `./assets/` → `/2026-06/assets/`
- 신청 링크: DEV `/apply/apply-dev.html`, PRD `/apply/apply.html`
- `<title>` → `챌린지 | 써주세요.`

### 커밋 정보

- 로컬 커밋: `5af84d6`(초기) → `d049be8`(소스 교체 수정) `[W-085 수정] worldcup-challenge 기반으로 재생성`
- 브랜치: `feature/T-028-popup-html-content-update`
- **상태: ✅ 테스트 완료(DONE)**

---

## WT-111 · T-098 / W-103 [메뉴 드로어] 드로어 본체 480px 제한 — PC 전체 화면 덮음 수정 (B안)

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-26
- **상태: ✅ 테스트 완료(DONE)** — 코드 커밋 `95b6cf0`(회차수정), 문서 커밋 `b18976c`

### 배경
- T-097로 드로어 헤더(480px)는 수정했으나, 드로어 본체(`#sjy-drawer`)가 여전히 PC 뷰포트 전체(`left:0;right:0;top:0;bottom:0`)를 덮음.
- 사장님 지시: 드로어 자체를 480px 앱 영역으로 제한(B안), 양옆은 반투명 오버레이.

### 처방
```js
// Before
'#sjy-drawer{...top:0;left:0;right:0;bottom:0;...transform:translateX(100%)...}'
'#sjy-drawer.sjy-open{transform:translateX(0)}'

// After
'#sjy-drawer{...top:0;bottom:0;left:50%;width:100%;max-width:480px;...transform:translateX(200%)...}'
'#sjy-drawer.sjy-open{transform:translateX(-50%)}'
```
- `left:50%` + `translateX(-50%)` → 480px 드로어 중앙 정렬
- 닫힌 상태 `translateX(200%)` → 드로어 폭(480px) × 2 = 960px 오른쪽으로 밀어 숨김
- 오버레이(`#sjy-menu-overlay`)는 기존 뷰포트 전체 유지 — 양옆 어둡게 처리

### 검증
- PC 브라우저에서 ≡ 클릭 → 드로어가 480px 앱 영역에만 슬라이드 인, 양옆은 반투명 어두운 오버레이.
- 모바일(375px 미만)에서 드로어가 전체 폭으로 정상 표시.

### ⚠️ 회차 수정 — 커밋 `95b6cf0`
- **증상:** 1920px 모니터에서 `translateX(200%)`(=960px)로는 드로어가 완전히 숨겨지지 않고 화면 오른쪽 경계에 노출됨("대기실 현상").
- **원인:** `left:50%(960px) + translateX(960px) = 1920px` → 뷰포트 끝과 정확히 일치해 왼쪽 끝이 걸림.
- **수정:** `translateX(200%)` → `translateX(calc(50vw + 10px))` — `left:50% + 50vw + 10px = 100vw + 10px` → 모든 해상도에서 완전 off-screen 보장.

---

## WT-110 · T-097 / W-102 [메뉴 드로어] 헤더 풀사이즈 → 앱 사이즈(480px) 고정

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-26
- **상태: ✅ 테스트 완료(DONE)** — 코드 커밋 `2ffda52`, 문서 커밋 `7241026`

### 배경
- PC에서 햄버거 메뉴 클릭 시 드로어 헤더(보라 배경 "메뉴를 선택하세요.")가 풀사이즈로 표시됨.
- 드로어 내 `#sjy-drawer-nav`(메뉴 리스트)는 이미 `max-width:480px;margin:0 auto` 적용돼 앱 사이즈이나, `#sjy-drawer-head`에 해당 속성 누락.

### 처방
```css
/* menu.js:42 / menu-dev.js:42 — Before */
#sjy-drawer-head { ... background:#380097 }
/* After */
#sjy-drawer-head { ... background:#380097; max-width:480px; margin:0 auto; width:100% }
```

### 검증
- PC 브라우저에서 햄버거 메뉴(≡) 클릭 → 드로어 헤더와 메뉴 리스트가 모두 480px 폭으로 중앙 정렬되는지 확인.

---

## WT-109 · T-096 / W-101 [디렉토리 개편 3단계] apply-review·loan-checker·unsuspend → tip/ 하위 통합

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-26
- **상태: ✅ 테스트 완료(DONE)** — 코드 커밋 `69e20e2`, 문서 커밋 `f257a26`

### 배경
- 홈페이지 상단 메뉴 구조(꿀정보/tip)와 워크스페이스 폴더 위치 일치 **3단계 디렉토리 개편**.
- 사장님 스크린샷 검토 후 `apply-review/`, `loan-checker/`, `unsuspend/`가 루트에 남아 있음을 확인.

### 작업 내용
1. **폴더 이동 (git mv, 히스토리 보존)**
   - `apply-review/` → `tip/apply-review/`
   - `loan-checker/` → `tip/loan-checker/`
   - `unsuspend/` → `tip/unsuspend/`
2. **참조 경로 수정 (7건)**
   - `index.html:146` — `./loan-checker/` → `./tip/loan-checker/`
   - `index-dev.html:151` — `./loan-checker/index-dev.html` → `./tip/loan-checker/index-dev.html`
   - `tip/index.html:129` — `/loan-checker/` → `/tip/loan-checker/`
   - `tip/index.html:168` — `/apply-review/apply-review.html` → `/tip/apply-review/apply-review.html`
   - `tip/index-dev.html:134` — `/loan-checker/index-dev.html` → `/tip/loan-checker/index-dev.html`
   - `tip/index-dev.html:173` — `/apply-review/apply-review.html` → `/tip/apply-review/apply-review.html`
   - `tip/unsuspend/index.html` — `../imgs/unsuspend/` → `../../imgs/unsuspend/` (4곳, 상위 1단계 추가)
3. **무수정 확인** — `loan-checker/index(-dev).html` `data-back="/index(-dev).html"` 루트 절대경로로 변경 불필요

### 검증
- `http://localhost:8080/` → 꿀정보 → 대출 가능성 검사기 진입.
- `http://localhost:8080/tip/loan-checker/` 직접 접근.
- `http://localhost:8080/tip/apply-review/apply-review.html` 직접 접근.
- `http://localhost:8080/tip/unsuspend/index.html` → 이미지(007·008·009·006) 정상 표시.

---

## WT-108 · T-095 / W-100 [잠복 버그 수정] menu.js·menu-dev.js `history.back()` → `window.history.back()` 한정

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-26
- **상태: ✅ 테스트 완료(DONE)** — 코드 커밋 `af48274`, 문서 커밋 `f9d6e75`

### 배경
- 사장님 테스트 중 발견: 홈 > 월별 대출 신청하기 > 7월 대출 상세 > 신청하기(apply.html)에서 상단 좌측 ← 네비 클릭 무반응.
- "월별 대출 신청 페이지의 상단 ←는 모두 작동 안 하는 것 같다"고 보고.
- 이번 Step 1 재배치로 생긴 것이 아닌 apply.html이 menu 스크립트를 로드하던 시점부터 존재하던 **잠복 버그**임(테스트 중 최초 발견).

### 원인 분석 (코드 근거)
- `monthly-loan/apply/apply.html:884` / `apply-dev.html` 동일: `const history = [];` — 마법사 스텝 추적용 배열, `<script>` **최상위** 선언.
- 클래식 `<script>` 최상위 `const`는 **전역 렉시컬 바인딩**이라 같은 페이지의 모든 클래식 스크립트가 공유.
- `js/menu.js:105` / `js/menu-dev.js:105`: `history.back();` — **한정자 없는(bare) 참조** → 이 배열로 해석됨.
- 배열에 `.back()` 없음 → `TypeError: history.back is not a function` → 클릭 핸들러 예외 중단 → ← 무반응.
- 104행 `window.history.length`는 한정돼 있어 정상 통과(true) → 105행에서 터짐.

### 영향 범위
| 페이지 | menu 스크립트 | `const history` | ← 상태 |
|---|---|---|---|
| `monthly-loan/apply/apply.html` | menu.js | 있음 | **깨짐** |
| `monthly-loan/apply/apply-dev.html` | menu-dev.js | 있음 | **깨짐** |
| worldcup apply 2개 | 미로드 | 있음 | 무관 |
| 월별 랜딩 pages | menu(-dev).js | 없음 | 정상 |

### 처방 (파일 2개, 각 1행)
```js
// js/menu.js:105 / js/menu-dev.js:105
history.back();        // Before
window.history.back(); // After — 명시적 전역 window 한정
```
- apply 배열(`const history`)은 **의도된 코드**이므로 무수정. 상단 ←(페이지 이탈)과 마법사 스텝 뒤로(goBack) 독립 공존.

### 검증
- PRD: `http://localhost:8080/` → 월별 대출 신청 → 7월 대출 상세 → 신청하기 → 상단 ← 클릭 → 7월 대출 페이지 복귀.
- DEV: 동일 동선 index-dev.html 계열.
- 콘솔 `TypeError: history.back is not a function` 오류 없음.
- 마법사 스텝 뒤로(goBack) 회귀 없음.

---

## WT-107 · T-094 / W-099 [디렉토리 개편 1단계] 월별대출 2026-04~07 + apply → monthly-loan/ 하위 통합

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-25 22:45
- **상태: ✅ 테스트 완료(DONE)** — 코드 커밋 `bc93486`, 진행중 문서 커밋 `96161ff`

### 배경
- 홈페이지 상단 메뉴 구조(월별 대출 / 챌린지 / 꿀정보)와 워크스페이스 폴더 위치를 일치시키는 **3단계 디렉토리 개편의 1단계**.
- 이 `sirjuseyoWeb`(CNAME `www.sirjuseyo.com`)가 새 통합 운영 워크스페이스. 구 `monthly-loan` 레포/도메인은 방치.
- 1단계 대상: 월별 대출 폴더(`2026-04`~`2026-07`) + 신청 폼(`apply/`)을 신규 `monthly-loan/` 하위로 통합.
- (2단계: 챌린지 worldcup-challenge → `challenge/` / 3단계: 꿀정보 loan-checker·apply-review → `tip/` — 예정)

### 작업 내용
1. **폴더 이동 (git mv, 히스토리 보존)**: `2026-04/`,`2026-05/`,`2026-06/`,`2026-07/`,`apply/` → `monthly-loan/` 하위
2. **참조 경로 전수 수정 (라이브 파일)**
   - `index.html`·`index-dev.html`: `./2026-0X/…` → `./monthly-loan/2026-0X/…` (각 4곳)
   - `js/menu.js`·`js/menu-dev.js`: `'/'+CURRENT_MONTH+'/'` → `'/monthly-loan/'+CURRENT_MONTH+'/'`
   - `loan-checker/index-dev.html`: `../2026-07/…` → `../monthly-loan/2026-07/…`, DEV CTA replace 로직의 죽은 스테일 도메인 문자열 제거(동작 동일)
   - `loan-checker/index.html`: 정적 CTA href → `/monthly-loan/2026-07/` (런타임은 `cfg.detailUrl` 사용, 정합)
   - `loan-checker/month-config.js`: `detailUrl` 3곳 `https://monthly-loan.sirjuseyo.com/2026-0X/` → `/monthly-loan/2026-0X/`
   - `challenge/index.html`·`index-dev.html`: worldcup 이미지·신청 링크 `/2026-06/…` → `/monthly-loan/2026-06/…`
   - `monthly-loan/apply/apply.html`·`apply-dev.html`: `data-back="/2026-07/…"` → `/monthly-loan/2026-07/…`
   - `monthly-loan/2026-06/index.html`: apply 링크 풀 URL → `/monthly-loan/apply/apply.html`
   - `nanocredit/index.html`·`index-dev.html`·`10·20·30·50/index.html`: 스테일 도메인 링크 → 사이트 내부 경로(`/`·`/index-dev.html`·`/monthly-loan/apply/apply.html`)
3. **스테일 구 도메인 정리**: 라이브 파일 내 `https://monthly-loan.sirjuseyo.com/…` 풀 URL(기능 링크) 전량 → 사이트 내부 루트 상대경로 통일

### 검증
- 이동 대상 5개 폴더 + 링크 대상 파일 12종 새 경로 존재 확인 ✅
- 이동 폴더 내부 `../apply/`·`./assets/` 상대경로: apply·자산이 함께 이동해 정상 resolve ✅
- 라이브 파일 스테일 도메인 잔존 = santaApply `<option>` **표시 텍스트 3곳만**(폴더 이동 무관), 기능 링크 잔존 0 ✅
- git rename(R) 추적으로 히스토리 보존 확인 ✅

### 커밋
- 코드 커밋: `bc93486` (62 files — git mv rename + 참조 수정)
- 브랜치: `feature/T-028-popup-html-content-update`

### 미결 / 보고 사항
- **santaApply 셀렉트 플레이스홀더** `<option>` 표시 텍스트에 구 도메인 문자열 잔존(`loan-checker/index.html:258`, `index-dev.html:281`, `2026-05/index.html:234`) — 폴더 이동과 무관한 기존 콘텐츠 이상. 수정 여부 사장님 결정 대기.
- **계획 외 확장 반영분**(근거: 사장님 "새 워크스페이스에 맞춰라" 지시): nanocredit 스테일 링크 6곳 + DEV replace 로직 정리 — 이견 시 조정 가능.

---

## WT-106 · T-093 / W-098 [DEV 배너 정합] nanocredit·loan-match DEV 바 앱 사이즈(480px) 고정

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-25 22:05
- **상태: 테스트 완료(DONE)** — 사장님 테스트 완료 (2026-07-25)

### 배경

W-097(loan-checker) 처리 중 발견 — `nanocredit`·`loan-match` DEV 배너도 웹 풀사이즈. 사장님 지시로 loan-checker와 분리해 별도 W-098로 처리.

### 원인 (코드 근거)

- 두 파일 배너 `<div>`는 `position:sticky;top:52px;z-index:10000;`는 이미 있으나 `max-width:480px;margin:0 auto;`가 누락되어 풀사이즈.
- W-097(loan-checker)은 5속성 전부 누락이었으나, 이 두 파일은 폭 2속성만 누락 (차이점).

### 작업 내용 (커밋 `4fef5cf`)

| 파일 | 변경 내용 |
|---|---|
| `nanocredit/index-dev.html` (배너 div, 420번 줄) | style 끝에 `max-width:480px;margin:0 auto;` 2속성 추가 |
| `loan-match/index-dev.html` (배너 div, 130번 줄) | style 끝에 `max-width:480px;margin:0 auto;` 2속성 추가 |

> 결과적으로 tip/challenge/sirjuseyo/loan-checker와 완전 동일 규격(480px + 스크롤 고정). DEV 전용 배너라 PRD 영향 없음, `styles.css` 무관.

### 검증 (사장님 테스트 항목)

1. `nanocredit/index-dev.html` DEV 바가 풀사이즈 → 480px 앱 사이즈로 좁혀졌는지
2. `loan-match/index-dev.html` DEV 바가 풀사이즈 → 480px 앱 사이즈로 좁혀졌는지

---

## WT-105 · T-092 / W-097 [DEV 배너 정합] loan-checker DEV 바 앱 사이즈(480px) + 스크롤 고정

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-25 21:50
- **상태: 테스트 완료(DONE)** — 사장님 테스트 완료 (2026-07-25)

### 배경

`loan-checker/index-dev.html` DEV 배너(🚧 DEV 테스트 환경)가 웹 풀사이즈로 표시됨. tip/challenge/sirjuseyo DEV 페이지는 앱 사이즈(480px)+스크롤 고정인데 loan-checker만 어긋남. 사장님 지시: 다른 페이지와 동일 규격으로 통일(A안 5속성 전부).

### 원인 (코드 근거)

- DEV 배너 `<div>`는 `.app-main`(480px) 밖 형제 요소인데 자체 폭 제한이 없어 브라우저 전체 너비로 늘어남.
- 앞부분(`background`~`letter-spacing:0.5px`)은 tip/challenge(`tip/index-dev.html:121`)와 완전 동일, 뒤 5속성만 누락.

### 작업 내용 (커밋 `b549c35`)

| 파일 | 변경 내용 |
|---|---|
| `loan-checker/index-dev.html` (배너 div, 30번 줄) | style 끝에 `position:sticky;top:52px;z-index:10000;max-width:480px;margin:0 auto;` 5속성 추가 |

- **효과 ①** `max-width:480px;margin:0 auto;` → 앱 사이즈 폭 고정 (사장님 요청)
- **효과 ②** `position:sticky;top:52px;z-index:10000;` → 스크롤 시 나비바(52px) 아래 고정 (tip/challenge와 동일 규격)

> DEV 전용 배너라 PRD(`index.html`)에는 배너 자체가 없음 → 단일 파일, 단일 라인 수정. `styles.css` 무관.

### 검증 (사장님 테스트 항목)

1. PC 브라우저에서 DEV 바가 화면 꽉 참(풀사이즈) → 480px 앱 사이즈로 좁혀져 콘텐츠와 폭 일치하는지
2. 페이지를 아래로 스크롤할 때 DEV 바가 나비바 밑에 붙어 계속 보이는지 (tip/challenge와 동일)

### 참고 (별도 작업)

- `nanocredit`·`loan-match` DEV 배너도 동일 풀사이즈 문제 → **W-098 별도 대기** 등록 완료 (이번 범위 제외)

---

## WT-104 · T-091 / W-096 [PRD 정합] 대출 가능성 검사기 PRD → DEV 정합 (이미지 제거 + 1열)

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-25 21:14
- **상태: 테스트 완료(DONE)** — 사장님 테스트 완료 (2026-07-25)

### 배경

대출 가능성 검사기 PRD(`loan-checker/index.html`)가 DEV(`index-dev.html`)와 화면 차이 2가지. 사장님 지시: **PRD를 DEV와 똑같이 만들 것.** 직전 W-095에서 `.app-main` 480px 인라인만 반영한 상태의 연장선.

### 작업 내용 (커밋 `aee1e72`)

| 파일 | 변경 내용 |
|---|---|
| `loan-checker/index.html` | ① `loan-eligibility-checker-02.jpg`("대출이 필요하신 분, 주목") `<section class="hero-banner">` → `style="display:none;"` 추가로 숨김 (DEV `index-dev.html:38-40`과 동일) |
| `loan-checker/index.html` | ② `<head>` 인라인 `<style>` 블록에 `.form-grid { grid-template-columns: 1fr !important; }` 추가 → `styles.css:237-241` `@media(min-width:960px)` 2열을 1열로 강제 (DEV `index-dev.html:12`와 동일) |

> `styles.css`(공용 파일) 무수정. DEV와 동일한 인라인 override 방식 유지.

### 검증 (사장님 테스트 항목)

1. PRD 브라우저에서 상단 이미지 밑 "대출이 필요하신 분, 주목" 이미지가 사라지는지 (DEV와 동일)
2. PC(960px↑) 화면에서 콘텐츠 박스가 1열 세로 배치되는지

---

## WT-103 · T-090 / W-095 [PRD 레이아웃] loan-checker PRD 앱 사이즈 480px 적용

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-25 20:54
- **상태: 테스트 완료(DONE)**

### 작업 내용 (커밋 `412c3c2`)

| 파일 | 변경 내용 |
|---|---|
| `loan-checker/index.html` | `<head>` 인라인 `<style>` 추가 — `.app-main { max-width:480px !important; margin:0 auto !important; }` |

> PRD `.app-main`이 `styles.css` 기준 max-width:1100px → 웹 너비 full-width로 표시됨
> DEV(`index-dev.html`)와 동일한 인라인 override 방식 적용, `styles.css` 무수정

---

## WT-102 · T-088 / W-094 [UI 통일] 상단 고지↔콘텐츠 간격 통일

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-25 07:59
- **상태: 테스트 완료(DONE)**

### 작업 내용 (커밋 `c69f2c9`)

| 파일 | 변경 내용 |
|---|---|
| `js/legal-shared.js` | `.legal-top` CSS에 `margin-bottom:20px` 추가 |

> 적용 범위: legal-shared.js를 사용하는 전 페이지 일괄 적용
> 이미 파일 내 override 있는 페이지(2026-07·challenge·loan-checker-DEV)는 동일값이므로 무해
> B 작업(중복 제거) 불필요 — grep-c 2 카운트는 주석 내 텍스트 포함이었음

### 회차수정 (커밋 `c401d33`)

| 파일 | 변경 내용 |
|---|---|
| `js/legal-shared.js` | `.legal-top` CSS `margin-bottom:20px` → `margin-bottom:40px` |
| `index.html` | h1 CSS `padding-top:20px` → `padding-top:0` |

> 배경: legal-shared.js margin-bottom 하나의 값만으로는 박스 페이지와 텍스트 페이지의 실제 gap이 달라짐
> - 텍스트 페이지(홈): margin-bottom 20px + h1 padding-top 20px = gap 40px → h1 padding-top 0으로 제거
> - 박스 페이지: margin-bottom만 → 40px로 올려야 동일한 40px gap 확보
> 결과: 전 페이지 실제 gap 정확히 40px로 규격 통일

---

## WT-101 · T-087 / W-092 [UI 통일] PRD footer.js → legal-shared.js 교체

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-25
- **상태: 테스트 완료(DONE)**

### 작업 내용 (커밋 `c88a8ad`)

| 파일 | 변경 내용 |
|---|---|
| `loan-match/index.html` | `<script src="/footer.js">` 주석 처리 + `<script src="/js/legal-shared.js">` 추가 |
| `nanocredit/index.html` | `<script src="/footer.js">` 주석 처리 + `<script src="/js/legal-shared.js">` 추가 |

> DEV 2개(`loan-match/index-dev.html`, `nanocredit/index-dev.html`)는 W-089(T-084) 에서 기처리 완료

### 회차수정 (커밋 `d4ec4a9`)

| 파일 | 변경 내용 |
|---|---|
| `loan-match/index.html` | `<body data-back>` → `<body class="page" data-back>` |
| `nanocredit/index.html` | `<body data-back>` → `<body class="page" data-back>` |

> 원인: `legal-shared.js`가 `.page` 클래스 감지 후 고지 삽입 — PRD body에 클래스 누락으로 미표시

---

## WT-100 · T-086 / W-091 [UI 통일] ← 버튼 통합 + 회차수정 (크기·센터·apply)

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-25
- **상태: 테스트 완료(DONE)**

### 1차 작업 내용 (커밋 `95a9815`)

| 항목 | 내용 |
|---|---|
| menu.js / menu-dev.js | `#sjy-nav-back` ← 버튼 추가 + `data-back` 감지 + history.back() fallback |
| 하위 PRD 7개 | `data-back="/index.html"` 추가 |
| 하위 DEV 7개 | `data-back="/index-dev.html"` 추가 |
| nanocredit PRD·DEV | 기존 `.back-btn` CSS + `<a class="back-btn">` 제거 |
| loan-match PRD·DEV | 기존 `.back-btn`, `.bottom-back`, SEC-01·SEC-07 div 제거 |

### 회차수정 (커밋 `e671798`)

| 항목 | 변경 내용 |
|---|---|
| `#sjy-nav-back` 크기 | `font-size:1.4rem` → `1.8rem` |
| 로고 센터 이동 CSS | `#sjy-nav-bar.sjy-has-back #sjy-nav-logo{position:absolute;left:50%;transform:translateX(-50%)}` 추가 |
| `sjy-has-back` 클래스 | `data-back` 감지 시 `#sjy-nav-bar`에 추가 |
| `apply/apply.html` | `<body data-back="/2026-07/index.html">` 추가 |
| `apply/apply-dev.html` | `<body data-back="/2026-07/index-dev.html">` 추가 |

---

## WT-099 · T-085 / W-090 [UI 통일] tip→loan-checker DEV 링크 수정

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-25
- **상태: 테스트 완료(DONE)**

### 작업 내용

- **파일:** `tip/index-dev.html` line 134
- **변경:** `href="/loan-checker/"` → `href="/loan-checker/index-dev.html"`
- **커밋:** `3d9e7e4`
- **이유:** 꿀정보 페이지에서 대출 가능성 검사기 클릭 시 PRD(index.html)로 연결되던 버그 수정 → DEV(index-dev.html) 경로로 수정

---

## WT-098 · T-084 / W-089 [UI 통일] 상단 고지 풀사이즈 통일 — legal-shared.js

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-22
- **상태: 테스트 완료(DONE)**

### 회차 1

| 항목 | 내용 |
|------|------|
| 수정 파일 | `js/legal-shared.js` |
| 수정 내용 | `.legal-top` CSS에 `width:100vw; margin-left:calc(50% - 50vw)` 추가 |
| 커밋 해시 | `9c117ea` |
| 커밋 메시지 | [T-084] legal-shared.js 상단 고지 풀사이즈 통일 |

### 회차 수정 (사장님 피드백 반영)

| 항목 | 내용 |
|------|------|
| 수정 배경 | 회차 1에서 `width:100vw; margin-left:calc(50% - 50vw)` 추가가 역효과 — 웹 보기에서 상단 고지 더 넓어지고 홈에서는 `.wrap`의 `overflow:hidden`으로 잘려 안 보임. 근본 원인: DEV 바·상단 고지가 컨테이너 밖에 있어 웹 보기에서 풀사이즈 렌더링됨. nanocredit·loan-match는 구버전 `footer.js` 사용 중 (연체금리 +6%P·18% 법적 오류 상태) |
| A. legal-shared.js | `.legal-top` CSS `width:100vw; margin-left:calc(50% - 50vw)` 제거 + DEV 바 감지 로직 추가 (`firstElementChild.style.position === 'sticky'` → `afterend` 삽입) |
| B. DEV 바 5개 파일 | 컨테이너 안 첫 번째 자식으로 이동 + `top:0 → top:52px` — `index-dev.html`, `sirjuseyo/index-dev.html`, `2026-07/index-dev.html`, `challenge/index-dev.html`, `tip/index-dev.html` |
| C. nanocredit | `<body class="page">` 추가 + DEV 바 `top:52px` + `footer.js` 주석처리 + `legal-shared.js` 추가 (popup.js → menu-dev.js → legal-shared.js 순) |
| D. loan-match | C와 동일 |
| 수정 파일 | `js/legal-shared.js`, `index-dev.html`, `sirjuseyo/index-dev.html`, `2026-07/index-dev.html`, `challenge/index-dev.html`, `tip/index-dev.html`, `nanocredit/index-dev.html`, `loan-match/index-dev.html` |
| 커밋 해시 | `e73d94b` |

### 회차 수정 2 (사장님 테스트 피드백 반영)

| 항목 | 내용 |
|------|------|
| 수정 배경 | 홈·챌린지: 컨테이너(`overflow:hidden`) 안에서 `position:sticky` 비작동 → DEV 바가 상단 고지 침범. 월별 대출: 컨테이너 `p-8` 패딩으로 DEV 바-메뉴바 사이 공간 + 상단·하단 고지 좌우 여백 발생 |
| 근본 원인 | `overflow:hidden` 조상 안 `position:sticky` CSS 스펙 비작동. 해결: DEV 바를 body 직하위로 이동 |
| A. legal-shared.js | DEV 바 감지 로직 제거 → 항상 `afterbegin`으로 상단 고지 삽입. 컨테이너 `paddingLeft/Right` 감지 → padding > 0이면 `.legal-top`·`.legal-bottom`에 negative margin 동적 보정 |
| B. DEV 바 5개 파일 | 컨테이너 밖(body 직하위)으로 이동 + `max-width:480px;margin:0 auto;` 추가 — `index-dev.html`, `sirjuseyo/index-dev.html`, `2026-07/index-dev.html`, `challenge/index-dev.html`, `tip/index-dev.html` |
| 변경 없는 파일 | `nanocredit/index-dev.html`, `loan-match/index-dev.html` — body 자체가 480px 컨테이너 + DEV 바 이미 body 직하위 |
| 커밋 해시 | `222ce6d` |

### 회차 수정 3 (사장님 테스트 피드백 반영)

| 항목 | 내용 |
|------|------|
| 수정 배경 | nanocredit·loan-match: `body class="page"` + `afterbegin` → 상단 고지가 DEV 바 **앞**에 삽입 → 렌더링 순서 역전([상단 고지]→[DEV 바]). 월별 대출: main `p-8`의 padding-top(32px)이 DEV 바와 상단 고지 사이 빈 공간 생성 |
| 수정 1 | `js/legal-shared.js` — DEV 바 감지 로직 재추가: `page.firstElementChild.style.position === 'sticky'` → `afterend` 삽입. nanocredit·loan-match body 직하위 DEV 바 정확 감지 |
| 수정 2 | `2026-07/index-dev.html` — `p-8` → `px-8 pb-10` (padding-top 제거, 빈 공간 해소) |
| 커밋 해시 | `fad4793` |

---

## WT-097 · T-083 / W-088 [꿀정보] tip/index.html + index-dev.html 신규 생성

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-22
- **작업자:** 쮸티12-1호
- **연관 W-ID:** W-088
- **상태:** 테스트 완료(DONE)
- **최종 커밋:** `38da632`

### 작업 내용

**[배경]** 꿀정보 대표 페이지(`/tip/`) 신규 제작. 목업(`목업_tip_index_20260722.html`) 기반 PRD + DEV 2파일 생성.

**[변경 파일]**
- `tip/index.html` (신규)
- `tip/index-dev.html` (신규)

**[변경 내용]**
- 목업 그대로 배치, 최소 수정만 적용
  - `<main class="tip-page">` → `<main class="tip-page page">` (legal-shared.js `.page` 감지 클래스)
  - `<div id="legal-top">`, `<div id="footer">` 불필요 div 제거
  - `<script src="/footer.js">` 제거 (deprecated)
  - `<script src="/js/popup.js">` 추가
- DEV: menu-dev.js + 오렌지 배너(`#FF5400`) 삽입

### 테스트 완료

- 2026-07-22 KST 09:50 댄디어빠쮸너야님 테스트 완료
- 팝업 정상 표시·3체크+닫기 동작 확인
- 다른 페이지(index-dev.html 등) 팝업 미표시 확인 (localStorage `sjy_popup_hidden` 저장 확인)

---

## WT-096 · T-081 / W-087 [팝업 오버레이] 내비바 가림 문제 수정 — top:52px

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-22
- **작업자:** 쮸티12-1호
- **연관 W-ID:** W-087

### 작업 내용

**[배경]** 팝업 오버레이(`#sjy-overlay`)가 `z-index:9999`로 내비바(`z-index:1000`)를 전체 덮어 햄버거 버튼이 안 보이는 문제. 오버레이 시작점을 내비바 높이(52px) 아래로 내려 내비바가 항상 보이도록 수정.

**[변경 파일]**
- `js/popup.js`

**[변경 내용]**
- `#sjy-overlay` CSS: `inset:0` → `inset:52px 0 0 0`

---

## WT-095 · W-086 [공통 팝업 JS] popup.js 신규 생성 + 전체 페이지 적용 + KST 날짜 수정

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-22
- **작업자:** 쮸티12-1호
- **연관 W-ID:** W-086

### 작업 내용

**[배경]** 기존 팝업은 홈(`index.html`, `index-dev.html`) 인라인에만 존재 → 서브 페이지 직접 진입 시 팝업 미노출. 어떤 경로로 진입해도 하루 1회 팝업이 표시되도록 공통 JS 파일로 분리 + 전체 페이지 적용.

**[변경 내역]**
- `js/popup.js` **신규 생성** — IIFE 패턴, CSS `#sjy-overlay` 스코핑, HTML 동적 주입, KST 날짜 계산
  - CSS 변수: `:root{}` → `#sjy-overlay{}`로 이동 (스코프 격리)
  - ID 충돌 방지: `overlay`→`sjy-overlay`, `bar`→`sjy-bar`, `body`→`sjy-body`, `cta`→`sjy-cta`, `status`→`sjy-status`, `statusTxt`→`sjy-status-txt`, `coreKey`→`sjy-coreKey`
  - 애니메이션 이름 충돌 방지: `fade`→`sjyfade`, `pop`→`sjypop`
  - KST 날짜: `new Date().toISOString().slice(0,10)` → `new Date(new Date().getTime() + 9*60*60*1000).toISOString().slice(0,10)`
  - localStorage 키: `sjy_popup_hidden` (기존 동일)
- `index.html` — 인라인 팝업 CSS(98~221줄) + HTML(279~388줄) + JS(389~409줄) 3블록 제거 → `<script src="/js/popup.js"></script>` 추가
- `index-dev.html` — 동일 처리
- 서브 페이지 12개 파일에 `<script src="/js/popup.js"></script>` 추가:
  - `sirjuseyo/index.html`, `sirjuseyo/index-dev.html`
  - `nanocredit/index.html`, `nanocredit/index-dev.html`
  - `loan-match/index.html`, `loan-match/index-dev.html`
  - `2026-07/index.html`, `2026-07/index-dev.html`
  - `challenge/index.html`, `challenge/index-dev.html`
  - `loan-checker/index.html`, `loan-checker/index-dev.html`
- `apply/` 폴더 제외 (신청 폼은 팝업 불필요)

### 커밋 정보

- 로컬 커밋: `b5abdc7` `[W-086] popup.js 신규 생성 + 전체 페이지 적용 + KST 날짜 수정`
- 브랜치: `feature/T-028-popup-html-content-update`
- **상태: ⏳ 테스트 대기**

---

## WT-093 · T-080 / W-084 [menu-dev.js] DEV 전용 메뉴 JS 신규 생성 + 전체 DEV 파일 적용

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-21
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-080
- **연관 W-ID:** W-084

### 작업 내용

**[이슈]** menu.js 드로어 링크가 모두 PRD 절대경로(`/sirjuseyo/` 등)를 가리켜, DEV 페이지에서 메뉴 클릭 시 PRD(DEV 배너 없음)로 이동

**[해결]** `js/menu-dev.js` 신규 생성 — 모든 링크를 DEV 버전으로 변경

**변경 내역:**
| 항목 | menu.js (PRD) | menu-dev.js (DEV) |
|---|---|---|
| 로고 | `/` | `/index-dev.html` |
| 써주세요.가 뭔데? | `/sirjuseyo/` | `/sirjuseyo/index-dev.html` |
| 인기 상품은 나노크레딧 | `/nanocredit/` | `/nanocredit/index-dev.html` |
| 나에게 맞는 대출 방식 | `/loan-match/` | `/loan-match/index-dev.html` |
| 월별 대출 신청하기 | `/2026-07/` | `/2026-07/index-dev.html` |
| 챌린지 | `/challenge/` | `/challenge/index-dev.html` |
| 꿀정보 | `/tip/` | `/tip/index-dev.html` |
| 공지사항 | `/notice/` | `/notice/index-dev.html` |

**교체/추가 대상 파일 (7개):**
- `index-dev.html` — 교체
- `sirjuseyo/index-dev.html` — 추가 (기존 미적용)
- `nanocredit/index-dev.html` — 교체
- `loan-match/index-dev.html` — 교체
- `2026-07/index-dev.html` — 교체
- `apply/apply-dev.html` — 교체
- `loan-checker/index-dev.html` — 교체

### 커밋 정보

- 로컬 커밋: `6015e2b` `[T-080] menu-dev.js 신규 생성 + 전체 DEV 파일 적용`
- 브랜치: `feature/T-028-popup-html-content-update`
- **상태: ✅ 테스트 완료(DONE)**

---

## WT-092 · T-079 / W-083 [나에게 맞는 대출 방식] loan-match/index-dev.html 신규 생성

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-21
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-079
- **연관 W-ID:** W-083

### 작업 내용

**파일:** `loan-match/index-dev.html` (신규 생성)

**변경 사항:**
1. PRD(`loan-match/index.html`) 복사
2. `<body>` 태그 직후 DEV 배너 삽입:
   - `background:#FF5400` 오렌지 배너
   - `position:sticky; top:0; z-index:10000`
   - 문구: `🚧 DEV 테스트 환경 — 실사용자 접근 금지`

### 커밋 정보

- 로컬 커밋: `954c9ad` `[T-078/T-079] nanocredit, loan-match index-dev.html 신규 생성`
- 브랜치: `feature/T-028-popup-html-content-update`

---

## WT-091 · T-078 / W-082 [나노크레딧] nanocredit/index-dev.html 신규 생성

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-21
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-078
- **연관 W-ID:** W-082

### 작업 내용

**파일:** `nanocredit/index-dev.html` (신규 생성)

**변경 사항:**
1. PRD(`nanocredit/index.html`) 복사
2. `<body>` 태그 직후 DEV 배너 삽입:
   - `background:#FF5400` 오렌지 배너
   - `position:sticky; top:0; z-index:10000`
   - 문구: `🚧 DEV 테스트 환경 — 실사용자 접근 금지`

### 커밋 정보

- 로컬 커밋: `954c9ad` `[T-078/T-079] nanocredit, loan-match index-dev.html 신규 생성`
- 브랜치: `feature/T-028-popup-html-content-update`

---

## WT-090 · T-077 / W-076 [나에게 맞는 대출 방식] 레이아웃 앱 사이즈 전환

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-21
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-077
- **연관 W-ID:** W-076

### 작업 내용

**파일:** `loan-match/index.html`

**변경 사항:** body에 `max-width:480px; margin:0 auto` 추가 — 웹 와이드 레이아웃 → 앱 사이즈(모바일 폭 480px) 전환

---

## WT-089 · T-076 / W-075 [나노크레딧] 레이아웃 앱 사이즈 전환

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-21
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-076
- **연관 W-ID:** W-075

### 작업 내용

**파일:** `nanocredit/index.html`

**변경 사항:** body에 `max-width:480px; margin:0 auto` 추가 — 웹 와이드 레이아웃 → 앱 사이즈(모바일 폭 480px) 전환

---

## WT-088 · T-075 / W-080 [햄버거 메뉴] menu.js 햄버거 버튼 CSS span 방식 변경 + 크기 확대

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-20
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-075
- **연관 W-ID:** W-080

### 작업 내용

**파일:** `js/menu.js`

**변경 사항:**
- 햄버거 버튼 방식 변경: `≡` 유니코드 문자 → CSS `<span>` 3개 (나노크레딧 방식과 동일)
- 버튼 CSS: `font-size:2rem` 방식 → `flex-direction:column; gap:6px` 방식으로 전환
- 선 규격: `width:28px; height:3px; background:#380097; border-radius:2px`
- 기존보다 크고 또렷하게 — 나노크레딧(`24px/2px`) 대비 조금 더 크게 설정

**Before:**
```css
#sjy-nav-btn { font-size:2rem; color:#380097; padding:6px 10px; display:flex; align-items:center }
```
```html
<button id="sjy-nav-btn">≡</button>
```

**After:**
```css
#sjy-nav-btn { cursor:pointer; padding:8px 10px; display:flex; flex-direction:column; align-items:center; gap:6px }
#sjy-nav-btn span { display:block; width:28px; height:3px; background:#380097; border-radius:2px }
```
```html
<button id="sjy-nav-btn"><span></span><span></span><span></span></button>
```

---

## WT-087 · T-074 / W-079 [햄버거 메뉴] menu.js B안 디자인 적용

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-17
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-074
- **연관 W-ID:** W-079

### 작업 내용

- `js/menu.js` B안 디자인 전면 적용
  - 드로어 배경 #F5F3FF (연보라), width 288px
  - 드로어 헤더: 보라(#380097) 배경 + "메뉴를 선택하세요." + 반투명 원형 ✕ 버튼
  - 카드 타일 아이템: 흰 카드(border-radius:14px, shadow) + 이모지 박스(#EDE9FF, 40px) + 텍스트(700) + 보라 화살표(›, 1.3rem)
  - 메뉴명 변경: "써주세요. 소개" → "써주세요.가 뭔데?"
  - ITEMS에 emoji 필드 추가

### 커밋

- `1ac1630` `feat(T-074): menu.js B안 디자인 적용 — 카드 타일, 보라 헤더, 이모지, 메뉴명 변경`
- `3361227` `fix(T-074): 드로어 카드 CSS 목업 B안과 동일하게 수정 (1회차 수정)` — 카드 간격·세로·화살표 목업과 일치 시도 (480px 폭 미반영으로 효과 미흡)
- `1c6f032` `fix(T-074): 카드 사이즈 480px 전체폭 기준으로 확대 (2회차 수정)` — nav padding 16px, 카드 padding 20px, 아이콘 52px, 간격 12px, 화살표 padding-right 4px

### 3회차 수정 (2026-07-20) — 코덱스 리뷰 기반

**핵심 원인 (코덱스 발견):** `#sjy-menu *{margin:0;padding:0}` 리셋 선택자가 ID 우선순위로 인해 `.sjy-item`의 `padding:13px 14px`와 `margin-bottom:6px`를 전부 0으로 덮어쓰고 있었음 → 카드가 납작하고 간격 없이 보이던 근본 원인

**수정 내용:**
- `#sjy-menu *` 리셋에서 margin/padding 제거, box-sizing + font-family만 유지
- 폰트 패밀리 명시: `'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif`
- 드로어 전체화면 덮기: `left:0; right:0; bottom:0`
- `#sjy-drawer-nav` max-width:480px; margin:0 auto 추가
- 헤더 padding 목업 일치: `20px 20px 18px`
- 카드 margin-bottom: 6px (목업 일치)
- 닫기 버튼 padding:0 명시
- 스크롤바 보정 코드 추가 (openMenu 함수)

**커밋:** `e833bdc` `fix(T-074): #sjy-menu * 리셋 선택자 충돌 수정 — 카드 padding/margin 0 덮어쓰기 버그 해결 (3회차)`

---

## WT-086 · T-073 / W-078 [메인 DEV 팝업] 재노출 방지 활성화 (하루 1회)

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-17
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-073
- **연관 W-ID:** W-078

### 작업 내용

- `index-dev.html` 팝업 스크립트에 localStorage 하루 1회 제한 로직 추가 (PRD와 동일)
  - 오픈 시: `sjy_popup_hidden` 키 오늘 날짜 체크 → 이미 봤으면 overlay hidden
  - 닫을 때: `closePopup()` 함수에 `localStorage.setItem('sjy_popup_hidden', 오늘날짜)` 추가
- 주석 `DEV(재노출 방지 비활성화)` → `DEV` 로 변경

### 커밋

- `9bf803d` `feat(T-073): index-dev.html 팝업 하루 1회 재노출 방지 활성화 (localStorage)`

---

## WT-085 · T-072 / W-077 [햄버거 메뉴] menu.js + 1Depth 메뉴 UI 구현

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-17
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-072
- **연관 W-ID:** W-077

### 작업 내용

- `js/menu.js` 신규 생성 — IIFE 패턴, CURRENT_MONTH 단일 소스, 1Depth 7개 메뉴 항목, 드로어 슬라이드 UI
- `home/` → `sirjuseyo/` 폴더명 변경 (git mv)
- `index-dev.html` 기존 `/* nav */` CSS 블록 + `<nav class="nav">` HTML 제거 + `<script src="/js/menu.js"></script>` 추가
- overlay z-index 1010 → 10001, drawer z-index 1020 → 10002 (DEV 배너 z-index:10000 위로 조정)
- 햄버거 버튼 font-size 1.5rem → 2rem, padding 4px 6px → 6px 10px

### 커밋

- `0d26a54` `feat(T-072): 햄버거 메뉴 menu.js 신규 + 1Depth 드로어 UI 구현 (index-dev.html 적용)`

---

## WT-084 · T-071 / W-073 [레포 통합] sirjuseyoWeb에 monthly-loan-repo 파일 복사

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-17
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-071
- **연관 W-ID:** W-073

### 작업 내용

- STEP 2: 기존 sirjuseyoWeb 홈 3개 파일(`index.html`, `index-dev.html`, `index-origin.html`) → `/home/` 이동 커밋 `826ba57`
- STEP 3: rsync로 monthly-loan-repo 파일 복사 (CNAME·.git·.vscode 제외)
  - G1 판정: `js/legal-shared.js`, `footer.js` → monthly-loan 버전 채택
  - 루트 `index.html` / `index-dev.html` → 월별 대출 PRD/DEV 화면으로 교체
  - 신규 폴더: `2026-04~07/`, `apply/`, `apply-review/`, `loan-checker/`
- 커밋: `826ba57` (STEP 2) + `f9c63d4` (STEP 3)
- 대표이사 로컬 테스트 완료 (G2)
- 원격 피처 브랜치 푸시 완료 → PR #13 (선별반영 후 close)

### 📤 깃 & 배포 관리자 작업요청서 (보관, 양식 6-⑥)

[개발자 -> 깃 관리자 전달]

sirjuseyo-web T-071 작업 완료했습니다.
`feature/T-028-popup-html-content-update` 원격 푸시 완료했고 PR은 `#13`입니다.

작업 내용:
- STEP 2: `index.html`, `index-dev.html`, `index-origin.html` 3개 → `/home/` 이동 (`826ba57`)
- STEP 3: monthly-loan-repo rsync 복사 — 루트 메인 PRD/DEV 교체, `2026-04~07/`, `apply/`, `apply-review/`, `loan-checker/` 신규 반영, `js/legal-shared.js`·`footer.js` monthly-loan 버전 채택, `CNAME`·`.nojekyll` 유지 (`f9c63d4`)

검증:
- DEV 브라우저 확인 완료 (사장님 로컬 테스트 완료 / G2)
- `www.sirjuseyo.com/` → 월별 대출 화면, `/home/` → 써주세요. 소개 확인

커밋:
- `826ba57` `feat(T-071/STEP2): 기존 sirjuseyoWeb 홈 3개 파일 /home/ 이동 (W-073)`
- `f9c63d4` `feat(T-071/STEP3): monthly-loan-repo rsync 복사 — 루트 메인 교체 + 신규 폴더 반영 (W-073)`

문서:
- `project-docs`
- 브랜치: `feature/T-028-popup-html-content-update`
- PR: `#13`

한 줄 버전:
- `sirjuseyo-web T-071 완료, feature/T-028-popup-html-content-update 푸시 및 PR #13 포함 완료, 대표이사 로컬 테스트 완료. 깃 & 배포 관리자님 T-071 운영 파일 main 선별 반영 부탁드립니다.`

### 📥 완료 보고서 (Ser7-1호 → 개발자)

[GitHub Pages PRD : 깃 & 배포 관리자 → 개발자]

sirjuseyo-web T-071 반영 완료했습니다.

작업 내용:
- PR #13은 T-028 팝업 작업과 T-071 레포 통합 작업이 같은 브랜치에 혼재되어 있어 전체 merge하지 않았습니다.
- `main...feature/T-028-popup-html-content-update`가 diverged 상태라 전체 branch merge도 하지 않았습니다.
- T-071 운영 배포에 필요한 파일만 `main`에 선별 반영했습니다.

반영 내용:
- 루트 `index.html`, `index-dev.html`을 monthly-loan PRD/DEV 화면으로 교체
- 기존 sirjuseyo-web 홈 3개 파일을 `/home/`으로 이동
- `2026-04~07/`, `apply/`, `apply-review/`, `loan-checker/` 반영
- `footer.js`, `js/legal-shared.js` monthly-loan 버전 반영
- `CNAME`은 기존 `www.sirjuseyo.com` 그대로 유지
- `.nojekyll` 유지

제외:
- `.DS_Store`, `.claude/`, `CLAUDE.md`, `project-docs/`, `.gitignore`

커밋:
- sirjuseyo-web main: `9ee3371`
- project-docs 문서 커밋: `b4dc759`

배포:
- GitHub Pages run: `29523973769`
- 결과: success

검증:
- `https://www.sirjuseyo.com/` → HTTP/2 200
- `https://www.sirjuseyo.com/home/` → HTTP/2 200
- `https://www.sirjuseyo.com/2026-07/` → HTTP/2 200
- 앞서 `/loan-checker/`, `/apply/apply.html`, `.nojekyll`, `CNAME`도 200/정상 확인 완료

후속 처리:
- PR #13은 main 선별 반영 완료 및 혼재 PR 재병합 방지를 위해 close 처리했습니다.
- GitDeployOps TODO/WORK_THROUGH에 `W-036 / T-036 / WT-036` 기록 완료했습니다.
- `sirjuseyo-web` 로컬은 main `9ee3371` 기준 clean 상태입니다.
- `project-docs` 원격은 `b4dc759`까지 최신화했습니다. 로컬 project-docs에는 기존 무관 미정리 변경들이 남아 있어 이번 작업 커밋에는 포함하지 않았습니다.

한 줄 버전:
- `sirjuseyo-web T-071 완료, PR #13 전체 merge 없이 운영 파일만 main에 선별 반영했고 main commit은 \`9ee3371\`입니다. GitHub Pages 배포 success 및 주요 라이브 URL 200 확인 완료했습니다.`

---

## WT-083 · T-070 / W-072 [메인 페이지] 대출 가능성 검사기 박스 숨김 해제 (DEV+PRD)

- **브랜치:** `feature/T-030-credit-mission-4500`
- **작업일시:** 2026-07-04
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-070
- **연관 W-ID:** W-072

### 작업 내용

- 대상 파일: `index-dev.html`, `index.html`
- `checker-card` div `style="display:none"` 제거 (대출 실사 대응 숨김 해제)

### 📤 깃 & 배포 관리자 작업요청서 (보관, 양식 6-⑥)

[개발자 -> 깃 관리자 전달]

monthly-loan T-070 작업 완료했습니다.
`feature/T-030-credit-mission-4500` 원격 푸시 완료했고 PR은 `#24`입니다.

작업 내용:
- `index-dev.html`, `index.html` — `checker-card` div `style="display:none"` 제거 (대출 실사 대응 숨김 처리 해제, 대출 가능성 검사기 박스 노출 복구)

검증:
- DEV 브라우저 확인 완료 (사장님 테스트 완료)
- DEV+PRD 동일 내용 적용 확인

커밋:
- `be22aee` `feat(T-070): 메인 페이지 대출 가능성 검사기 박스 숨김 해제 (DEV+PRD)`

문서:
- `project-docs`
- 브랜치: `feature/T-030-credit-mission-4500`
- PR: `#24`
- 문서 커밋: `ce0c8ed` `docs: T-070 테스트 완료(DONE) + 작업현황 요약표 리스트업 + WT-083 작업 요청서 보관`

한 줄 버전:
- `monthly-loan T-070 완료, feature/T-030-credit-mission-4500 푸시 및 PR #24 포함 완료, DEV+PRD 브라우저 검증했습니다. 깃 & 배포 관리자님 feature -> dev 검토 부탁드립니다.`

### 📥 완료 보고서 (Ser7-1호 → 개발자)

[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-070 반영 완료했습니다.

- 대상 PR: `#24`
- 처리 방식: PR #24 전체 병합 없이 `index.html`, `index-dev.html` 2개 파일만 main 선별 반영
- main commit: `78bb8fa` `fix(home): show loan checker card [T-070]`
- GitHub Pages run: `28699720665` success

라이브 확인:
- `checker-card` `display:none` 없이 표시, 대출 가능성 검사기 문구·링크 확인

문서:
- GitDeployOps `W-014 / T-014 / WT-014` 등록 및 완료 보고서 보관 완료
- 로컬 `monthly-loan main`은 `origin/main` 최신 상태입니다.

---

## WT-082 · T-069 / W-071 [신청 폼] apply-dev.html 결과 페이지 카톡 버튼 아래 ⚠️ 대표 거절 사유 박스 추가

- **브랜치:** `feature/T-030-credit-mission-4500`
- **작업일시:** 2026-07-04
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-069
- **연관 W-ID:** W-071

### 작업 내용

- 대상 파일: `apply/apply-dev.html`
- 삽입 위치: `.kakao-row` div 닫는 태그 다음
- 팝업 UI 톤&매너 (`block/eyebrow/reject/reject__ic/reject__t` 클래스) 적용
- `<style>` 태그에 reject 계열 CSS 추가 (apply-dev.html 미존재 확인)

### 📤 깃 & 배포 관리자 작업요청서 (보관, 양식 6-⑥)

[개발자 -> 깃 관리자 전달]

monthly-loan T-069 작업 완료했습니다.
`feature/T-030-credit-mission-4500` 원격 푸시 완료했고 PR은 `#24`입니다.

작업 내용:
- `apply/apply-dev.html`, `apply/apply.html` — 결과 페이지 카톡 버튼(`kakao-row`) 아래 ⚠️ 대표 거절 사유 박스 추가 (팝업 톤&매너: `rejection-section/rejection-eyebrow/reject/reject__ic/reject__t` 클래스)
- `<style>` 태그에 reject 계열 CSS 신규 추가 (DEV+PRD 각각)

검증:
- DEV 브라우저 확인 완료 (사장님 테스트 완료)
- DEV+PRD 동일 내용 적용 확인

커밋:
- `3aaabc6` `feat(T-069): 신청 폼 결과 페이지 카톡 버튼 아래 ⚠️ 대표 거절 사유 박스 추가`
- `87a35da` `feat(T-069): apply.html PRD 결과 페이지 대표 거절 사유 박스 추가 + T-069 테스트 완료(DONE) + WT-082 작업요청서 보관`

문서:
- `project-docs`
- 브랜치: `feature/T-030-credit-mission-4500`
- PR: `#24`
- 문서 커밋: `87a35da`

한 줄 버전:
- `monthly-loan T-069 완료, feature/T-030-credit-mission-4500 푸시 및 PR #24 포함 완료, DEV+PRD 브라우저 검증했습니다. 깃 & 배포 관리자님 feature -> dev 검토 부탁드립니다.`

### 📥 완료 보고서 (Ser7-1호 → 개발자)

[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-069 반영 완료했습니다.

- 대상 PR: `#24`
- 처리 방식: PR #24 전체 병합 없이 아래 2개 파일만 main 선별 반영
  - `apply/apply.html`
  - `apply/apply-dev.html`
- main commit: `f92c181` `fix(apply): add rejection reasons to result page [T-069]`
- GitHub Pages run: `28699397803` success

라이브 확인:
- 카톡 버튼 아래 대표 거절 사유 박스와 `reject__ic`, `reject__t` 구조 반영 확인

문서:
- GitDeployOps `W-013 / T-013 / WT-013` 등록 및 완료 보고서 보관 완료
- 로컬 `monthly-loan main`은 `origin/main` 최신 상태입니다.

---

## WT-081 · T-068 / W-070 [대출 검사기] ⑦ 대표 거절 사유 3개 항목 불릿 → 번호 박스 형식 변경 (DEV+PRD)

- **브랜치:** `feature/T-030-credit-mission-4500`
- **작업일시:** 2026-07-04
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-068
- **연관 W-ID:** W-070

### 작업 내용

- 대상 파일: `loan-checker/index-dev.html`, `loan-checker/index.html`
- 변경 위치 ①: form 내 `<section class="panel">` ⑦ 섹션 (line 403~412)
- 변경 위치 ②: result-panel `#rejectionBox` (line 581~588)
- `<ul>` 불릿 리스트 → `reject/reject__ic/reject__t` 번호 박스 클래스로 교체
- `<style>` 태그에 reject 계열 CSS 하드코딩 색상으로 추가 (loan-checker에 미존재)
- ⑦ ⚠️ 대표 거절 사유 타이틀 문장은 변경하지 않음

### 📤 깃 & 배포 관리자 작업요청서 (보관, 양식 6-⑥)

[개발자 -> 깃 관리자 전달]

monthly-loan T-068 작업 완료했습니다.
`feature/T-030-credit-mission-4500` 원격 푸시 완료했고 PR은 `#24`입니다.

작업 내용:
- `loan-checker/index-dev.html`, `loan-checker/index.html` — ⑦ 대표 거절 사유 form 섹션 + result-panel rejectionBox 두 곳 `<ul>` 불릿 리스트 → reject 번호 박스(`reject/reject__ic/reject__t` 클래스) 변경
- `loan-checker/styles.css` — reject 계열 CSS 신규 추가 (PRD 외부 스타일 시트)
- `loan-checker/index-dev.html` `<style>` 태그 — reject 계열 CSS 신규 추가 (DEV 인라인)

검증:
- DEV 브라우저 확인 완료 (사장님 테스트 완료)
- DEV+PRD 동일 내용 적용 확인

커밋:
- `d212422` `feat(T-068): 대출 검사기 ⑦ 대표 거절 사유 불릿 리스트 → 번호 박스 형식 변경 (DEV+PRD)`

문서:
- `project-docs`
- 브랜치: `feature/T-030-credit-mission-4500`
- PR: `#24`
- 문서 커밋: `f9cfbcb` `docs: T-068 테스트 완료(DONE) + 작업현황 요약표 리스트업 + WT-081 작업 요청서 보관`

한 줄 버전:
- `monthly-loan T-068 완료, feature/T-030-credit-mission-4500 푸시 및 PR #24 포함 완료, DEV+PRD 브라우저 검증했습니다. 깃 & 배포 관리자님 feature -> dev 검토 부탁드립니다.`

### 📥 완료 보고서 (Ser7-1호 → 개발자)

[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-068 반영 완료했습니다.

- 대상 PR: `#24`
- 처리 방식: PR #24 전체 병합 없이 아래 3개 파일만 main 선별 반영
  - `loan-checker/index.html`
  - `loan-checker/index-dev.html`
  - `loan-checker/styles.css`
- main commit: `742e478` `fix(loan-checker): convert rejection reasons to numbered boxes [T-068]`
- GitHub Pages run: `28698860397` success

라이브 확인:
- `reject__ic`, `reject__t` 번호 박스 구조와 CSS 반영 확인

문서:
- GitDeployOps `W-012 / T-012 / WT-012` 등록 및 완료 보고서 보관 완료
- 로컬 `monthly-loan main`은 `origin/main` 최신 상태입니다.

---

## WT-080 · T-067 / W-069 [7월 대출 페이지] 더블제로🆓챌린지 출시 예정 안내 문구 추가 (DEV+PRD)

- **브랜치:** `feature/T-030-credit-mission-4500`
- **작업일시:** 2026-07-04
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-067
- **연관 W-ID:** W-069

### 작업 내용

- 대상 파일: `2026-07/index-dev.html`, `2026-07/index.html`
- 삽입 위치: 본문 `더블제로🆓챌린지를 준비했습니다. 🌊⛱️` 직후
- 추가 내용: `<br><small>* 더블제로🆓챌린지 : 2026년 7월 15일 이후 출시 예정</small>`

---

## WT-079 · T-066 / W-068 [7월 대출 페이지] 웨이팅 섹션 CTA 위 ⚠️ 대표 거절 사유 박스 추가 (DEV+PRD)

- **브랜치:** `feature/T-030-credit-mission-4500`
- **작업일시:** 2026-07-04
- **작업자:** 쮸티12-1호
- **연관 T-ID:** T-066
- **연관 W-ID:** W-068

### 작업 내용

- 대상 파일: `2026-07/index-dev.html`, `2026-07/index.html`
- 삽입 위치: 🔻 웨이팅 대출은 대신에 이거 하나만 해주세요! 섹션 `</ol>` 다음 · CTA 버튼(`<a class="SpringMarch-waiting-button">`) 전
- 팝업 UI 동일 구조 (`block/eyebrow/reject/reject__ic/reject__t` 클래스) ⚠️ 대표 거절 사유 박스 삽입
  - ① 통신비 2개월 이상 미납·연체
  - ② 신용정보상 단순 CB 연체 또는 채무불이행으로 등록된 경우
  - ③ 채무조정 중 미납 3회 초과
- 2026-07 `<style>` 태그에 팝업 CSS 클래스 하드코딩 색상 값으로 추가

### 📤 깃 & 배포 관리자 작업요청서 (보관, 양식 6-⑥)

[개발자 -> 깃 관리자 전달]

monthly-loan T-066, T-067 작업 완료했습니다.
`feature/T-030-credit-mission-4500` 원격 푸시 완료했고 PR은 `#24`입니다.

작업 내용:
- [T-066] `2026-07/index-dev.html`, `2026-07/index.html` — 웨이팅 섹션 `</ol>` 다음 · CTA 버튼 전 ⚠️ 대표 거절 사유 박스 삽입 (section-title h2 + reject 클래스 3항목: 통신비 미납·CB 연체·채무조정)
- [T-067] `2026-07/index-dev.html`, `2026-07/index.html` — 본문 `더블제로🆓챌린지를 준비했습니다. 🌊⛱️` 다음 `* 더블제로🆓챌린지 : 2026년 7월 15일 이후 출시 예정` 문구 추가

검증:
- DEV 브라우저 확인 완료 (사장님 테스트 완료)
- DEV+PRD 동일 내용 적용 확인

커밋:
- `5da6d10` `feat(T-066): 7월 페이지 웨이팅 섹션 CTA 위 ⚠️ 대표 거절 사유 박스 추가 (DEV+PRD)`
- `67d7575` `fix(T-066): 대표 거절 사유 타이틀 section-title h2로 교체, block 래퍼 제거`
- `edfe923` `feat(T-067): 7월 페이지 더블제로챌린지 출시 예정 안내 문구 추가 (DEV+PRD)`

문서:
- `project-docs`
- 브랜치: `feature/T-030-credit-mission-4500`
- PR: `#24`
- 문서 커밋: `702fc1f` `docs: T-066/T-067 테스트 완료(DONE) 처리 + 작업현황 요약표 리스트업`

한 줄 버전:
- `monthly-loan T-066/T-067 완료, feature/T-030-credit-mission-4500 푸시 및 PR #24 포함 완료, DEV+PRD 브라우저 검증했습니다. 깃 & 배포 관리자님 feature -> dev 검토 부탁드립니다.`

### 📥 완료 보고서 (Ser7-1호 → 개발자)

[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-066/T-067 반영 완료했습니다.

- 대상 PR: `#24`
- 처리 방식: PR #24 전체 병합 없이 `2026-07/index.html`, `2026-07/index-dev.html` 2개 파일만 main 선별 반영
- main commit: `03f4532` `fix(july-loan): add rejection reasons and double-zero notice [T-066-T-067]`
- GitHub Pages run: `28698224571` success

라이브 확인:
- `https://monthly-loan.sirjuseyo.com/2026-07/index.html`
- `https://monthly-loan.sirjuseyo.com/2026-07/index-dev.html`
- 대표 거절 사유, CB 연체, 채무조정, 더블제로🆓챌린지 출시 예정 문구 반영 확인

문서:
- GitDeployOps `W-011 / T-011 / WT-011` 등록 및 완료 보고서 보관 완료
- 로컬 `monthly-loan main`은 `origin/main` 최신 상태입니다.

---

## WT-078 · T-046~T-065 [대출 검사기] 7월 썸머 베케이션 전환 20건 일괄 작업 요청서

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 선별반영 요청 대기

### 📤 깃 & 배포 관리자 작업요청서 (보관, 양식 6-⑥)
```
[개발자 -> 깃 관리자 전달]

monthly-loan T-046~T-065 (대출 검사기 7월 썸머 베케이션 전환 20건) 작업 완료했습니다.
`feature/T-030-credit-mission-4500` 원격 푸시 완료했고 PR은 `#24`입니다.

작업 내용:
- [T-046] 대출 검사기 7월 썸머 베케이션 전환 — month-config.js 2026-07 설정, 이벤트 대출 원리포 전환, 경험 패널 신규, updateAmountWarnings() JS, 7월 텍스트
- [T-047] 히어로 배너 이미지 2장 추가 — waterbomb-jul-002.png + loan-checker-options-guide.png
- [T-048] 블랙찬스 재대출 전용 안내 문구 추가 (DEV+PRD)
- [T-049] 이벤트 대출 안내 문구 변경 — 원리포 상품 원금 미션(1%) → 모든 미션이 인하! (DEV+PRD)
- [T-050] 악성 연체자 여부 → 악성 연체 여부 문구 수정 (DEV+PRD)
- [T-051] 신용정보조회 비용 → 신용조회비용 문구 수정 (DEV+PRD)
- [T-052] 이모지 포인트의 매직 → 포인트의 매직 문구 수정 (DEV+PRD)
- [T-053] 체크리스트 1단계 4️⃣잔인한 달 → 7️⃣썸머🏖️베케이션 대출 신청 문구 수정
- [T-054] 이벤트 대출 혜택 설명 — 빠른 대출과 크레딧 미션 할인 & 원금 미션 파격 인하(1%)!
- [T-055] 크레딧 미션 0% 할인 시 "할인 없음" → "인하" 레이블 변경
- [T-056] ⓸ 검토 시작 경고 — 매일→익일(평일 18:00~22:00), ⚠️⚠️⚠️→⚠️⚠️
- [T-057] ⓹ 포인트 상환 미션 경고 — 앱에선→앱에서는, ⚠️⚠️⚠️→⚠️⚠️
- [T-058] 웨이팅 대출 안내 — 포인트 적립이 가장 안 빡셉니다! → 가장 널널합니다!
- [T-059] CTA 신청하기 버튼 — 🏖️ 썸머 베케이션 대출 신청하기 → 7️⃣🈷️ 썸머🏖️ 베케이션 대출 신청하기
- [T-060] 웨이팅/롸잇나우/블랙찬스 크레딧 미션 기본값 4,500포 통일 (parsePointSummaryTable)
- [T-061] result-panel 위치 이동 — </main> 이전으로, 법적 고지 앞 배치 (DEV+PRD)
- [T-062] form 내 ⑦ ⚠️ 대표 거절 사유 섹션 신규 추가 (DEV+PRD)
- [T-063] 이벤트 대출 시 summaryCredit 크미 인하 % 비율 동적 표시 (금액별)
- [T-064] result-panel pointHintBox 아래 ⑦ 대표 거절 사유 박스 추가 (DEV+PRD)
- [T-065] 이벤트 대출 시 principalRateLine·step5Principal·summaryPrincipal → "파격 인하, 1%" 표시

검증:
- loan-checker/index-dev.html (DEV) — 7월 UI 전환, 이벤트 대출 파격 인하, 거절 사유 박스 표시 확인
- loan-checker/index.html (PRD) — DEV와 동일 항목 확인

커밋:
- `feff328` `[T-046] 대출 검사기 7월 썸머 베케이션 전환 (DEV+PRD)`
- `0d35869` `[T-046] 대출 검사기 경험없음 → 50만원·블랙찬스 숨기기 + 라벨 띄어쓰기 수정`
- `7771f31` `[T-046] 경험없음 → 50만원·블랙찬스 hidden → disabled 변경 (회색 비활성)`
- `ada199a` `[T-046] 50만원 선택 시 이벤트 대출 hidden → disabled 변경 (회색 비활성)`
- `bd10089` `[T-046] 대출 검사기 히어로 배너 이미지 2장 추가 (waterbomb-jul-002 + options-guide)`
- `97d309d` `[T-047] 중복 options-guide 삭제 + waterbomb 03.jpg 아래로 이동 (DEV+PRD)`
- `f075184` `[T-048] 대출 옵션 안내 블랙찬스 재대출 전용 안내 문구 추가 (DEV+PRD)`
- `9be63f3` `[T-049] 이벤트 대출 안내 문구 변경 — 원리포 상품 원금 미션(1%) → 모든 미션이 인하! (DEV+PRD)`
- `402cfcb` `[T-050] 대출 검사기 악성 연체자 여부 → 악성 연체 여부 문구 수정 (DEV+PRD)`
- `14858ff` `[T-051] 대출 검사기 신용정보조회 비용 → 신용조회비용 문구 수정 (DEV+PRD)`
- `05364a5` `[T-052] 대출 검사기 이모지 포인트의 매직 → 포인트의 매직 문구 수정 (DEV+PRD)`
- `c9a20db` `[T-053~T-060] 대출 검사기 문구/로직 일괄 수정`
- `4e89da1` `feat(loan-checker): T-054/T-061~T-065 — 이벤트 대출 파격 인하·거절 사유·결과 위치`

문서:
- `project-docs`
- 브랜치: `feature/T-030-credit-mission-4500`
- PR: `#24` (코드와 동일 PR)
- 문서 커밋: `50dc432` `docs: WT-078 등록 + T-046~T-065 원격푸시 PR#24 반영 + 작업 요청서 작성`

한 줄 버전:
- monthly-loan T-046~T-065 완료, feature/T-030-credit-mission-4500 푸시 및 PR #24 업데이트, 대출 검사기 7월 썸머 베케이션 전환 20건 완료했습니다. 깃 & 배포 관리자님 feature → main 선별반영 검토 부탁드립니다.
```

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-046~T-065 (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-046~T-065 반영 완료했습니다.

- 대상 PR: `#24` `feature/T-030-credit-mission-4500 -> main`
- 처리 방식: PR #24 전체 병합 없이 `loan-checker` 관련 6개 파일만 main에 선별 반영
- 반영 파일:
  - `loan-checker/app.js`
  - `loan-checker/index.html`
  - `loan-checker/index-dev.html`
  - `loan-checker/month-config.js`
  - `loan-checker/assets/img/loan-checker-options-guide.png`
  - `loan-checker/assets/img/waterbomb-jul-002.png`

코드 반영:
- main commit: `7149ee2` `fix(loan-checker): apply July summer vacation update [T-046-T-065]`

배포 결과:
- GitHub Pages run `28696555200`: `success`

라이브 확인:
- `https://monthly-loan.sirjuseyo.com/loan-checker/index.html`
- `https://monthly-loan.sirjuseyo.com/loan-checker/index-dev.html`
- 7월 썸머 베케이션, 원리포, 대표 거절 사유, 파격 인하, `updateAmountWarnings()` 반영 확인
- 신규 이미지 2개 모두 `HTTP/2 200` 확인

문서:
- GitDeployOps `W-010 / T-010 / WT-010` 등록 및 완료 보고서 보관 완료
- 로컬 `monthly-loan main`은 `origin/main` 최신 상태입니다.

한 줄 버전:
monthly-loan T-046~T-065 완료, PR #24 전체 병합 없이 `loan-checker` 6개 파일만 main 선별 반영했고, commit `7149ee2` / Pages run `28696555200` success / live 반영 확인까지 완료했습니다.
```

---

## WT-077 · W-066 [대출 검사기] result-panel pointHintBox 아래 대표 거절 사유 박스 추가 (DEV+PRD)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/index-dev.html`, `loan-checker/index.html`

- `pointHintBox` 닫는 `</div>` 직후, `script-cta` 앞에 `#rejectionBox` 삽입
- 내용: `⑦ ⚠️ 대표 거절 사유` — 통신비 미납, CB 연체, 채무조정 중 미납 3회 초과
- DEV·PRD 동시 적용

### 커밋 정보

- `4e89da1` (T-054/T-061~T-065 통합 커밋)
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-076 · W-065 [대출 검사기] 이벤트 대출 summaryCredit 크미 인하 % 비율 표시

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/app.js`

- `summaryCredit` 업데이트 로직에 `isEventLoan` 분기 추가
- 이벤트 대출 시: `Math.round(creditDiscountPoints / amountValue * 1000) / 10` 으로 % 산출
- 표시 예시: `크미 인하 (4.5%) : 4,500🅿` (10만) / `크미 인하 (2.25%) : 4,500🅿` (20만) / `크미 인하 (1.5%) : 4,500🅿` (30만)
- 비이벤트 대출은 기존 로직 유지

### 커밋 정보

- `4e89da1` (T-054/T-061~T-065 통합 커밋)
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-075 · W-064 [대출 검사기] ⑥ 개인 정보 아래 ⑦ 대표 거절 사유 박스 추가 (DEV+PRD)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/index-dev.html`, `loan-checker/index.html`

- `⑥ ℹ️ 개인 정보` `</section>` 직후, `</form>` 앞에 `⑦ ⚠️ 대표 거절 사유` 섹션 삽입
- 내용: 통신비 2개월 이상 미납·연체 / 단순 CB 연체·채무불이행 / 채무조정 중 미납 3회 초과
- `<section class="panel">` 구조로 기존 섹션과 동일 스타일 적용
- DEV·PRD 동시 적용

### 커밋 정보

- `4e89da1` (T-054/T-061~T-065 통합 커밋)
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-074 · W-063 [대출 검사기] result-panel 위치 이동 (main 내부, 법적 고지 앞)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/index-dev.html`, `loan-checker/index.html`

- DEV: `</main>` 위치를 action-area 직후에서 result-panel `</section>` 직후로 이동 → legal-shared.js의 `beforeend` 삽입 앞에 배치
- PRD: `</main>` 제거(기존 line 384), action-area와 result-panel을 main 안으로 이동, result-panel `</section>` 이후에 `</main>` 추가
- 결과 시각 순서: 뚝딱 버튼 → 결과값 → 법적 고지(legal-shared.js 주입)

### 커밋 정보

- `4e89da1` (T-054/T-061~T-065 통합 커밋)
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-073 · W-067 [대출 검사기] 이벤트 대출 원금 미션 "파격 인하" 텍스트 추가

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/app.js`

- `principalRateLine`: 이벤트 대출 시 `formatChangedRate` 대신 `파격 인하, 1%` 표시
- `step5Principal`: `원금 미션, 원미 (파격 인하, 1%) : 1,000🅿` 형태
- `summaryPrincipal`: `원금 미션, 원미 (파격 인하, 1%) : 1,000🅿` 형태
- T-054 회차 수정: `LOAN_BENEFITS["이벤트 대출"]` — `원금 미션(1%)!` → `원금 미션 파격 인하(1%)!`

### 커밋 정보

- `4e89da1` (T-054/T-061~T-065 통합 커밋)
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-072 · W-062 [대출 검사기] 웨이팅/롸잇나우/블랙찬스 크레딧 미션 기본값 4,500포 통일

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/app.js` (`parsePointSummaryTable` 함수)

- `FLAT_CREDIT_OPTIONS = ['웨이팅 대출', '롸잇나우 대출', '블랙찬스 티켓']` 정의
- `isFlat` 여부에 따라 `baseCreditPoints` → 4,500 동적 오버라이드
- `creditDiscountPoints = Math.round(4500 * (1 - discountPct/100))` 동적 재계산
- `totalPoints = isFlat ? 0 : (기존값)` → 0일 때 `credit + interest + principal` fallback 사용

기존 TSV 데이터(10만 4,000 / 20만 5,000 / 30만 6,000 / 50만 12,000) 수정 없이 파서에서 오버라이드.

### 커밋 정보

- `c9a20db` (T-053~T-060 통합 커밋)
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-071 · W-061 [대출 검사기] CTA 신청하기 버튼 문구 7월 전환

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/month-config.js`, `loan-checker/index-dev.html`, `loan-checker/index.html`

```
🏖️ 썸머 베케이션 대출 신청하기 →  →  7️⃣🈷️ 썸머🏖️ 베케이션 대출 신청하기 →
```

3곳 동시 반영 (config + DEV + PRD).

### 커밋 정보

- `c9a20db` (T-053~T-060 통합 커밋)

---

## WT-070 · W-060 [대출 검사기] 웨이팅 대출 안내 — 안 빡셉니다 → 널널합니다

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/index-dev.html` (line 570), `loan-checker/index.html` (line 551)

```
포인트 적립이 가장 안 빡셉니다!  →  포인트 적립이 가장 널널합니다!
```

### 커밋 정보

- `c9a20db` (T-053~T-060 통합 커밋)

---

## WT-069 · W-059 [대출 검사기] ⓹ 포인트 상환 미션 경고 문구 수정

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/app.js` (line 1483), `loan-checker/index-dev.html`, `loan-checker/index.html`

```
⚠️⚠️⚠️앱에선 포인트 상환 미션이 따로 보이지 않으니, 포인트 적립소에서 적립하시면 됩니다.⚠️⚠️⚠️
→ ⚠️⚠️앱에서는 포인트 상환 미션이 따로 보이지 않으니, 포인트 적립소에서 적립하시면 됩니다.⚠️⚠️
```

변경: ⚠️×3→×2, `앱에선`→`앱에서는` / app.js(동적) + DEV+PRD HTML(정적) 동시 반영.

### 커밋 정보

- `c9a20db` (T-053~T-060 통합 커밋)

---

## WT-068 · W-058 [대출 검사기] ⓸ 검토 시작 경고 문구 수정 (익일 명시)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/app.js` (line 1428), `loan-checker/index-dev.html`, `loan-checker/index.html`

```
⚠️⚠️⚠️...완료해야 ${periodText}에 검토 시작됩니다.⚠️⚠️⚠️
→ ⚠️⚠️...완료해야 익일(평일 18:00 ~ 22:00)에 검토 시작됩니다.⚠️⚠️
```

변경: ⚠️×3→×2, `${periodText}` 동적변수→`익일(평일 18:00 ~ 22:00)` 하드코딩 / app.js+DEV+PRD 동시 반영.

### 커밋 정보

- `c9a20db` (T-053~T-060 통합 커밋)

---

## WT-067 · W-057 [대출 검사기] 크레딧 미션 할인 없음 → 인하 레이블 변경

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/app.js` (line 1290, 1491)

```js
// Before
creditRateValue > 0 ? `${creditRate} 할인` : "할인 없음";
// After
creditRateValue > 0 ? `${creditRate} 할인` : "인하";
```

0% 할인 시 표시 레이블: "할인 없음" → "인하" (2곳 replace_all 적용)

### 커밋 정보

- `c9a20db` (T-053~T-060 통합 커밋)

---

## WT-066 · W-056 [대출 검사기] 이벤트 대출 혜택 설명 문구 수정

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/app.js` (line 228)

```js
// Before
"이벤트 대출": "빠른 대출과 원리포 상품 원금 미션(1%)!",
// After
"이벤트 대출": "빠른 대출과 크레딧 미션 할인 & 원금 미션(1%)!",
```

### 커밋 정보

- `c9a20db` (T-053~T-060 통합 커밋)

---

## WT-065 · W-055 [대출 검사기] 체크리스트 1단계 4월 잔인한 달 → 7월 썸머 베케이션 문구 전환

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/app.js` (line 1376)

```js
// Before
"⓵ 4️⃣🈷️ 잔인한 달 🩸 대출 신청",
// After
"⓵ 4️⃣ 7️⃣🈷️ 썸머 🏖️베케이션 대출 신청",
```

`formatChecklistLine()` 첫 번째 인수 수정 → 완료 시 `✅ ⓵ 4️⃣ 7️⃣🈷️ 썸머 🏖️베케이션 대출 신청 완료` 로 표시.

### 커밋 정보

- `7c94986` `[T-053] 대출 검사기 체크리스트 1단계 문구 7월 전환`
- 브랜치: `feature/T-030-credit-mission-4500`

### 2회차 (회차 수정)

`⓵ 4️⃣ 7️⃣🈷️ 썸머 🏖️베케이션 대출 신청` → `⓵ 7️⃣🈷️ 썸머 🏖️베케이션 대출 신청` (4️⃣ 제거)

- `c9a20db` (T-053~T-060 통합 커밋)

---

## WT-064 · W-054 [대출 검사기] 이모지 포인트의 매직 → 포인트의 매직 문구 수정 (DEV+PRD)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/index-dev.html` (line 363), `loan-checker/index.html` (line 344)

```
✨ 이모지 포인트의 매직!  →  ✨ 포인트의 매직!
```

DEV+PRD 동시 반영.

### 커밋 정보

- `05364a5` `[T-052] 대출 검사기 이모지 포인트의 매직 → 포인트의 매직 문구 수정 (DEV+PRD)`
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-063 · W-053 [대출 검사기] 신용정보조회 비용 → 신용조회비용 문구 수정 (DEV+PRD)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/index-dev.html` (line 319), `loan-checker/index.html` (line 300)

```
👍 신용정보조회 비용을 현금 부담 없이 포인트로 해결해요!
→ 👍 신용조회비용을 현금 부담 없이 포인트로 해결해요!
```

DEV+PRD 동시 반영.

### 커밋 정보

- `14858ff` `[T-051] 대출 검사기 신용정보조회 비용 → 신용조회비용 문구 수정 (DEV+PRD)`
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-062 · W-052 [대출 검사기] 악성 연체자 여부 → 악성 연체 여부 문구 수정 (DEV+PRD)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/index-dev.html` (line 314), `loan-checker/index.html` (line 295)

```
악성 연체자 여부를 확인합니다. (악성 연체자는 대출이 거절됩니다.)
→ 악성 연체 여부를 확인합니다. (악성 연체자는 대출이 거절됩니다.)
```

괄호 안 `악성 연체자는 대출이 거절됩니다.` 는 그대로 유지. DEV+PRD 동시 반영.

### 커밋 정보

- `402cfcb` `[T-050] 대출 검사기 악성 연체자 여부 → 악성 연체 여부 문구 수정 (DEV+PRD)`
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-061 · W-051 [대출 검사기] 이벤트 대출 안내 문구 변경 (DEV+PRD)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/index-dev.html`, `loan-checker/index.html`

`eventGuideName` 텍스트 4곳 (정적 fallback 2 + JS textContent 2):

- `워터밤💦대출 : 원리포 상품 원금 미션(1%)` → `워터밤💦대출 : 모든 미션이 인하!`

### 커밋 정보

- `9be63f3` `[T-049] 이벤트 대출 안내 문구 변경 — 원리포 상품 원금 미션(1%) → 모든 미션이 인하! (DEV+PRD)`
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-060 · W-050 [대출 검사기] 블랙찬스 재대출 전용 안내 문구 추가 (DEV+PRD)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 내용

**적용 파일:** `loan-checker/index-dev.html`, `loan-checker/index.html`

`✅ 대출 옵션이 뭔가요?` 섹션 내 블랙찬스 티켓 사용 항목 아래 안내 문구 추가:

```html
<p class="option-guide-note">
  * 블랙찬스 티켓을 보유하고 계신 재대출 고객님 전용 상품입니다.
</p>
```

스타일: 기존 이벤트 대출 `option-guide-note`(`* 10만 원, 20만 원...`) 와 동일 클래스

### 커밋 정보

- `f075184` `[T-048] 대출 옵션 안내 블랙찬스 재대출 전용 안내 문구 추가 (DEV+PRD)`
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-059 · W-049 [대출 검사기] 히어로 배너 이미지 2장 추가 (DEV+PRD)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 배경

대출 가능성 검사기 히어로 배너에 이미지 2장 추가.
- 워터밤 페스티벌 사진 → 7월 이벤트 분위기 강조
- 대출 옵션 안내 픽셀아트 → 옵션별 안내 이미지

### 작업 내용

**적용 파일:** `loan-checker/index-dev.html`, `loan-checker/index.html`

**이미지 배치 위치 (title-text-box 또는 타이틀 이미지 섹션 바로 아래, page-intro 위):**

```html
<section class="hero-banner">
  <img src="assets/img/waterbomb-jul-002.png" alt="워터밤💦 이벤트" />
</section>
<section class="hero-banner">
  <img src="assets/img/loan-checker-options-guide.png" alt="대출 옵션 안내" />
</section>
```

**추가 에셋:**
- `loan-checker/assets/img/waterbomb-jul-002.png` (기존 에셋, HTML 신규 등록)
- `loan-checker/assets/img/loan-checker-options-guide.png` (신규 에셋 추가)

### 1회차 커밋

- `bd10089` `[T-047] 대출 검사기 히어로 배너 이미지 2장 추가 (waterbomb-jul-002 + options-guide)`

---

### 2회차 작업 내용 (회차 수정 — 원복)

**문제:** 이미지가 개판으로 노출됨 → 전체 원복

**원복 내용:**
- `index-dev.html`: waterbomb-jul-002 + options-guide 히어로 배너 섹션 2개 제거
- `index.html`: 동일 제거
- 에셋 파일은 git에 남겨두고 HTML 참조만 제거

### 2회차 커밋

- `90820f7` `[T-047] 히어로 배너 이미지 2장 추가 원복 (개판 노출 수정)`

---

### 3회차 작업 내용 (회차 수정)

**사장님 지시:** 배치 위치 명확화

**삽입 순서 (위→아래):**
```
[기존] typeB.jpg
[기존] -02.jpg (hidden)
[신규] waterbomb-jul-002.png  ← 이미지 1
[신규] loan-checker-options-guide.png  ← 이미지 2
[기존] -03.jpg  ← 지금 링크 이미지
[기존] title-text-box / title.jpg  ← 박스
```

**삽입 위치:** `-02.jpg`(hidden) 섹션과 `-03.jpg` 섹션 사이

### 3회차 커밋

- `6d25b97` `[T-047] 히어로 배너 waterbomb + options-guide 이미지 03.jpg 위에 삽입 (DEV+PRD)`

---

### 4회차 작업 내용 (회차 수정)

**문제 발견:** `loan-checker-options-guide.png`(신규)와 `loan-eligibility-checker-03.jpg`(기존)가 동일한 픽셀아트 콘텐츠 → 중복 노출

**처리:**
1. 위쪽 중복(`loan-checker-options-guide.png`) HTML에서 삭제
2. `waterbomb-jul-002.png` → `-03.jpg`(남은 픽셀아트) 아래로 이동

**최종 배너 순서:**
```
typeB.jpg
-02.jpg (hidden)
-03.jpg  ← 픽셀아트 (유지)
waterbomb-jul-002.png  ← 이동
title-text-box / title.jpg  ← 박스
```

### 4회차 커밋

- `97d309d` `[T-047] 중복 options-guide 삭제 + waterbomb 03.jpg 아래로 이동 (DEV+PRD)`
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-058 · W-048 [대출 검사기] 7월 썸머 베케이션 전환 (DEV+PRD)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 배경

대출 가능성 검사기를 6월 호국보훈의 달 → 7월 썸머 베케이션 대출로 전환.
이벤트 대출 상품(이포→원리포)·결과값·혜택 문구 변경 반영 + 첫 이용 로직(경험 패널) 신규 추가.

### 1회차 작업 내용

**적용 파일:** `loan-checker/month-config.js`, `loan-checker/app.js`, `loan-checker/index-dev.html`, `loan-checker/index.html`

#### A. month-config.js — 2026-07 설정 추가

- `activePeriod`: `2026-06-26` ~ `2026-07-25`
- `loan.name`: `7️⃣🈷️ 썸머 🏖️베케이션 대출`
- `event.name`: `워터밤💦대출`
- `event.period`: `7월 한정 스페셜티`
- `pointDeadline`: `2026년 8월 25일`
- `reviewPeriod.display`: `2026년 8월 1일 ~ 5일 / 매일`
- 나머지 날짜/텍스트 7월 기준 전체 반영

#### B. app.js — 이벤트 대출 결과값 변경

- `POINT_SUMMARY_RAW` 이벤트 대출 행:
  - 이포 → 원리포 상품 (10/20/30만 원)
  - 크레딧 미션 4,500포 통일
  - 원금 미션 1% 추가 (이자 미션과 동일)
  - 합계 재계산: 10만 6,500 / 20만 8,500 / 30만 10,500포
  - **50만 원 이벤트 행 삭제**
- 혜택 문구: `"이벤트 대출": "빠른 대출과 원금 미션 감면!"` → `"이벤트 대출": "빠른 대출과 원리포 상품 원금 미션(1%)!"`

#### C. index-dev.html + index.html — HTML 7월 전환 + 경험 패널 신규

패널 순서 재배치 (기존 ①→③):
- ① 월별 대출 (기존과 동일)
- **② 대출 경험 (신규)** — `loanExperience` 선택 (경험 있음 / 아직 없음)
- ③ 신청 금액 (기존 ②에서 번호 변경)
- ④ 대출 정보 / ⑤ 신청 정보 / ⑥ 개인 정보

신청 금액 패널 내 인라인 경고 div 추가:
- `id="warn-amount-experience"`: 50만 원 + 첫 이용 조합 → 표시 (첫 이용 최대 30만 원)

JS `updateAmountWarnings()` 함수 추가:
- 50만 원 선택 시 이벤트 대출 옵션 숨김
- 50만 원 + 첫 이용 조합 → `warn-amount-experience` 표시

텍스트 7월 전환:
- loanProductName fallback: 6월 → `7️⃣🈷️ 썸머 🏖️베케이션 대출`
- eventGuideName: `워터밤💦대출 : 원리포 상품 원금 미션(1%)`
- eventAmountNote: `(50만 원 제외)`
- 신청/심사/포인트 날짜 7월/8월 전환
- ctaButton, santaApplyLabel, resultInfoHeader, step1 7월 전환

### 1회차 커밋

- `feff328` `[T-046] 대출 검사기 7월 썸머 베케이션 전환 (DEV+PRD)`

---

### 2회차 작업 내용 (회차 수정)

**사장님 추가 지시:**
1. ② 경험 없음 선택 → ③ 신청 금액에서 **50만 원 옵션 숨기기**
2. ② 경험 없음 선택 → ④ 대출 옵션에서 **블랙찬스 티켓 사용 옵션 숨기기**
3. 라벨 띄어쓰기: `대출 받아 본` → `대출받아 본` 수정

**`updateAmountWarnings()` 재구조화:**
- 기존 `is50` 먼저 계산 방식 → `isNew` 먼저 처리 후 `is50` 재계산 방식으로 변경
- 처리 순서: ①isNew → opt50 숨기기+리셋 → ②isNew → 블랙찬스 숨기기+리셋 → ③is50 재계산 → 이벤트대출 숨기기+리셋 → ④경고 표시
- 이유: 50만 원 선택 후 경험 없음으로 바꾸면 50만 원이 리셋되어야 is50 = false가 정확히 계산됨

### 2회차 커밋

- `0d35869` `[T-046] 대출 검사기 경험없음 → 50만원·블랙찬스 숨기기 + 라벨 띄어쓰기 수정`

---

### 3회차 작업 내용 (회차 수정)

**사장님 추가 지시:** 숨기기(`hidden`) 가 아니라 100·90·70만 원처럼 **흐릿한 회색 비활성** 처리

**대상:** 경험 없음 선택 → 50만 원 / 블랙찬스 티켓 사용

**변경:**
- `opt50.hidden = isNew` → `opt50.disabled = isNew`
- `blackOpt.hidden = isNew` → `blackOpt.disabled = isNew`
- `disabled` 속성 = 브라우저 기본 회색(dimmed) 표시 + 선택 불가 / 기존 `100·90·70만 원 disabled` 와 동일한 UX

### 3회차 커밋

- `7771f31` `[T-046] 경험없음 → 50만원·블랙찬스 hidden → disabled 변경 (회색 비활성)`

---

### 4회차 작업 내용 (회차 수정)

**사장님 추가 지시:** 50만 원 선택 시 이벤트 대출도 동일하게 회색 비활성 처리 (기존은 `hidden` 이었음)

**대상:** 50만 원 선택 → 이벤트 대출

**변경:**
- `eventOpt.hidden = is50` → `eventOpt.disabled = is50`
- 3회차와 동일 원칙: 숨기기 대신 회색 비활성

### 4회차 커밋

- `ada199a` `[T-046] 50만원 선택 시 이벤트 대출 hidden → disabled 변경 (회색 비활성)`
- 브랜치: `feature/T-030-credit-mission-4500`

---

## WT-057 · W-047 [신청 폼] 50만 원 선택 시 인라인 경고 2종 추가 (DEV+PRD)

**작업일:** 2026-07-04
**작업자:** 쮸티12-1호
**상태:** 코딩완료(TEST WAIT)

### 작업 배경

신청 폼에서 50만 원 + 이벤트 대출 또는 50만 원 + 첫 이용(경험 없음) 조합 선택 시
다음 화면으로 넘어가기 전 인라인 경고를 표시하고 진행을 차단해야 함.

### 작업 내용

**적용 파일:** `apply/apply-dev.html`, `apply/apply.html`

1. **CSS `.inline-warn` 클래스** (이미 이전 단계에서 추가 완료)
2. **S3 경험 화면 — 경고② (첫 이용 30만 원 제한)**
   - B옵션 onclick: `selectOpt('opts-experience',this,'s4')` → `selectExperienceNo(this)`
   - 경고② div `id="warn-experience"` 추가 (opts-experience 바로 아래)
   - 문구: `⚠️ 대출 경험이 없는 첫 이용은 최대 30만 원까지 신청 가능합니다. / 단, 신청 금액이 심사 후 승인 금액이 아닐 수도 있습니다. / 뒤로 이동해서 금액을 변경해 주시기 바랍니다.`
3. **S4 대출방법 화면 — 경고① (이벤트 대출 금액 제한)**
   - A옵션 onclick: `selectOpt('opts-method',this,'s-q1')` → `selectMethodEvent(this)`
   - 경고① div `id="warn-method-amount"` 추가 (opts-method 바로 아래)
   - 문구: `⚠️ 이벤트 대출은 10, 20, 30만 원만 신청 가능합니다. / 뒤로 이동해서 금액을 변경해 주시기 바랍니다.`
4. **JS `selectExperienceNo(el)` 함수 추가**
   - `state.amount === '50만 원'` → 경고② 표시 + 화면 이동 없음 (차단)
   - 그 외 → 경고② 숨김 + 200ms 후 s4 이동
5. **JS `selectMethodEvent(el)` 함수 추가**
   - `state.amount === '50만 원'` → 경고① 표시 + 화면 이동 없음 (차단)
   - 그 외 → 경고① 숨김 + 200ms 후 s-q1 이동

### 커밋 정보

- 로컬 커밋: `39781dd` `[T-045] 신청 폼 50만 원 인라인 경고 2종 추가 (DEV+PRD)`
- 브랜치: `feature/T-030-credit-mission-4500`

---

```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-045 반영 완료했습니다.

- 대상 PR:
  - PR #24 `feature/T-030-credit-mission-4500 -> main`

- 처리 방식:
  - PR #24는 현재 `MERGEABLE`이지만 과거 누적 커밋이 많아 전체 병합하지 않았습니다.
  - 요청 범위인 T-045 코드 파일 2개만 `main`에 선별 반영했습니다.
    - `apply/apply-dev.html`
    - `apply/apply.html`
  - 문서 파일/문서 커밋은 운영 반영에서 제외했습니다.

- 코드 반영:
  - main commit: `c240672` `fix(apply): add 500k inline warnings [T-045]`
  - Pages 재트리거 commit: `c78ff75`

- 배포 결과:
  - 최초 Pages run `28677160186`: build success, deploy 단계 일시 실패
  - 재트리거 Pages run `28677221045`: success

- live 확인:
  - `https://monthly-loan.sirjuseyo.com/apply/apply.html` -> `HTTP/2 200`
  - `https://monthly-loan.sirjuseyo.com/apply/apply-dev.html` -> `HTTP/2 200`
  - 두 파일 모두 아래 항목 반영 확인:
    - `selectExperienceNo`
    - `selectMethodEvent`
    - `warn-experience`
    - `warn-method-amount`
    - `뒤로 이동해서 금액을 변경해 주시기 바랍니다.`

문서도 반영했습니다.
- GitDeployOps `W-009 / T-009 / WT-009` 검증완료 처리
- 완료 보고서 WT-009 하단 보관

로컬 최신화 확인:
- `monthly-loan main = origin/main`
- 현재 HEAD: `c78ff75`

한 줄 버전:
monthly-loan T-045 완료, PR #24 전체 병합 없이 `apply/apply-dev.html`, `apply/apply.html` 2개 파일만 main에 선별 반영했고, GitHub Pages run `28677221045` success 및 live 신청 폼 DEV/PRD 50만 원 인라인 경고 2종 반영 확인 완료했습니다.
```

---

## WT-112 · T-099 / W-104 [나노크레딧] 상품 상세 페이지 전면 개편 (10/20/30/50 — 4개 파일)

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-26
- **상태: ⏳ 진행중(In-Progress)** — 본 커밋 + 회차 수정 커밋 완료, 사장님 테스트 대기

### 배경
- 나노크레딧 상품 상세 페이지 4개(`10/`, `20/`, `30/`, `50/`)가 써주세요 통합 구조로 전환되지 않은 채 방치됨.
- 문제: ①구 nanocredit 자체 `<nav>` 헤더 ②menu.js 미포함 ③PC 풀화면(max-width 없음) ④data-back 없음.
- 사장님 지시: 최소 수정 금지, 기존 페이지들처럼 똑같은 구조로 전면 개편.

### 처방 (4개 파일 동일)

| 항목 | Before | After |
|---|---|---|
| title | `nanocredit` | `써주세요.` |
| body CSS | `overflow-x:hidden` | + `max-width:480px;margin:0 auto` 추가 |
| nav CSS | `nav/.nav-logo/.nav-hamburger` 블록 | 전체 제거 |
| `<body>` 태그 | `<body>` | `<body class="page" data-back="/nanocredit/">` |
| `<nav>` HTML | `<nav>...</nav>` 블록 | 전체 제거 |
| CTA href | `/monthly-loan/apply/apply.html` | `/monthly-loan/2026-07/` |
| script | `<script src="/footer.js">` | popup.js → menu.js → legal-shared.js (3개) |

### 수정 파일
- `nanocredit/10/index.html`
- `nanocredit/20/index.html`
- `nanocredit/30/index.html`
- `nanocredit/50/index.html`

### 회차 수정 (2회차)
- **원인:** 초기 구현 시 `class="page"`, `popup.js`, `legal-shared.js` 3가지 누락.
- **발견:** 사장님 확인 — "상단과 하단에 법적 고지 안 넣는 이유가 뭐야?"
- **조치:** `<body class="page" ...>` 추가 + 스크립트 3개(popup.js/menu.js/legal-shared.js)로 교체.
- **회차 수정 커밋:** `b50cd97`

---

## WT-113 · T-100 / W-105 [나노크레딧] "이 달의 대출 신청하러 가기" 링크 수정 (PRD+DEV)

- **브랜치:** `feature/T-028-popup-html-content-update`
- **작업일시:** 2026-07-26
- **상태: ⏳ 진행중(In-Progress)** — 코드 수정 완료, 커밋 대기

### 배경
- 나노크레딧 메인 페이지 하단 CTA 버튼 "이 달의 대출 신청하러 가기"의 href가 홈("/", "/index-dev.html")으로 잘못 연결되어 있었음.
- 클릭 시 월별 대출 신청 페이지가 아닌 홈으로 이동하는 UX 결함.

### 처방

| 파일 | Before | After |
|---|---|---|
| `nanocredit/index.html` | `href="/"` | `href="/monthly-loan/2026-07/"` |
| `nanocredit/index-dev.html` | `href="/index-dev.html"` | `href="/monthly-loan/2026-07/index-dev.html"` |

---
