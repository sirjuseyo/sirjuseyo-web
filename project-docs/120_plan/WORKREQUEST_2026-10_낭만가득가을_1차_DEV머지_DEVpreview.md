# [개발자 -> 깃 & 배포 관리자 전달]

**작성일:** 2026-09-30
**작성자:** 쮸티12-3호 (ClaudeCode Web)
**레포:** `sirjuseyo-web` (`https://github.com/sirjuseyo/sirjuseyo-web.git`)
**단계:** **1차 — DEV 반영(`feature -> dev` 머지) + DEV preview 배포(`main` 선별 반영)**

---

`sirjuseyoWeb` **T-168~T-175 10월 낭만가득 가을 대출 전환** 작업 완료했습니다.

`feature/T-168-oct-loan-page` 원격 푸시 완료했고 PR은 `#{PR번호}`입니다.

## 작업 내용

10월 월별 대출 전환 8개 T-ID, 댄디업빠쮸너야님 로컬 DEV 테스트 전 항목 완료.

- **T-168** `monthly-loan/2026-10/` 월별 대출 페이지 신규 생성 (DEV/PRD) — 기획서 §7-1 명세 18개 항목
- **T-169** 홈 화면 전환 (라이브뱃지 / gift-box / 이달의 대출 카드·링크)
- **T-170** 신청 폼 상품명 4곳 교체
- **T-171** 검사기 `month-config.js` `'2026-10'` 객체 신규 추가
- **T-172** `menu.js` / `menu-dev.js` `CURRENT_MONTH` → `'2026-10'`
- **T-173** 신청 폼 `data-back` / `data-breadcrumb` 10월 전환
- **T-174** 과거 월 워딩 노출 제거 4건 — `MONTH_CONFIG` 참조 전환 (설날 대출 / 루돌프 스페셜티 / `alt="8월 썸머 베케이션 Ⅱ"` / 9월 상품명)
- **T-175** 이미지 에셋 4종 배치·압축 (`formatOptions 65`)

## ⚠️ DEV preview 선별 반영 요청 파일 (`main`)

이 파일들이 `main`에 올라가야 `https://www.sirjuseyo.com/index-dev.html` 등이 실제로 바뀝니다.

**DEV 전용 파일**
- `index-dev.html`
- `monthly-loan/2026-10/index-dev.html` (신규)
- `monthly-loan/apply/apply-dev.html`
- `tip/loan-checker/index-dev.html`
- `js/menu-dev.js`

**DEV/PRD 공유 파일** (DEV 페이지도 참조하므로 DEV preview에 필수)
- `tip/loan-checker/month-config.js` — `'2026-10'` 객체. 없으면 검사기 DEV가 9월로 폴백됩니다.
- `tip/loan-checker/app.js` — T-174 `MONTH_CONFIG` 참조 전환분

**이미지 자산 7개** (DEV/PRD 동일 경로 참조 + 앱 팀이 GitHub Raw로 가져갑니다)
- `monthly-loan/2026-10/assets/Maple-Road_Oct-Loan-001.jpg` (593KB)
- `monthly-loan/2026-10/assets/Maple-Road_Oct-Loan-001.png` (원본 백업 3.06MB)
- `monthly-loan/2026-10/assets/Maple-Picnic_Oct-Loan-001.jpg` (353KB)
- `monthly-loan/2026-10/assets/Maple-Picnic_Oct-Loan-001.png` (원본 백업 2.31MB)
- `monthly-loan/2026-10/assets/Basket-Maple_Oct-Loan.png` (투명 PNG 2.35MB — **압축 금지**)
- `monthly-loan/2026-10/assets/banner_maple-oct-001_gitlab.jpg` (437KB)
- `monthly-loan/2026-10/assets/banner_maple-oct-001_gitlab.png` (원본 백업 2.45MB)

## 🚫 주의 — PRD 운영 파일은 이번에 반영하지 말아 주십시오

아래 5개는 **2차(PRD 운영 배포) 요청서**에서 별도로 요청드립니다.
댄디업빠쮸너야님이 라이브 DEV URL에서 테스트를 마치신 **후에만** 나갑니다.

- `index.html`
- `monthly-loan/2026-10/index.html`
- `monthly-loan/apply/apply.html`
- `tip/loan-checker/index.html`
- `js/menu.js`

## DEV preview 확인 URL

- `https://www.sirjuseyo.com/index-dev.html`
- `https://www.sirjuseyo.com/monthly-loan/2026-10/index-dev.html`
- `https://www.sirjuseyo.com/monthly-loan/apply/apply-dev.html`
- `https://www.sirjuseyo.com/tip/loan-checker/index-dev.html`
- 이미지 자산 7개 200 확인

## ⚠️ 브랜치 정합 상태 (반영 전 확인 필요)

```
origin/main ↔ origin/dev :  main only 44 / dev only 354  → diverged
```

- **전체 `dev -> main` 병합 금지.** 위 선별 반영 파일만 `main`에 올려 주십시오.
- 9월(T-157~T-163) 때와 동일한 diverged 상태입니다.

## 검증 (로컬)

- 전환 대상 **12개 파일 전수 grep — 과거 월 워딩 잔존 0건**
  (`9️⃣🈷️` / `풍성한 🍂한가위` / `보름달` / `monthly-loan/2026-09` / `>9월 대출<` / `CURRENT_MONTH='2026-09'` / `설날 대출` / `alt="8월`)
- `monthly-loan/2026-10/index.html` 구조 diff — 10월 토큰을 9월로 되돌려 9월 원본과 비교, **의도된 3곳(h1 CSS·h1 마크업·슬로건)만 차이**
- `node --check` 통과 — `menu.js` / `menu-dev.js` / `month-config.js` / `app.js`
- `month-config.js` — 9월 객체와 필드 구조 12/12 동일, 오늘(09-30) 자동 감지가 `'2026-10'` 선택 확인
- DEV/PRD 차이 패턴 유지 확인 (DEV 배너 / `menu-dev.js` / `apply-dev.html`)
- 이미지 4종 규격·투명도 실측, `file` 명령으로 진짜 JPEG 확인
- 댄디업빠쮸너야님 **로컬 DEV 테스트 전 항목 완료** (2026-09-30)

## 커밋 (코드)

- `87f395e` `fix(loan-checker): T-174 과거 월 워딩 노출 제거 — MONTH_CONFIG 참조 전환 (4건)`
- `51690fd` `feat(oct-loan): T-175 이미지 에셋 4종 배치·압축 (항목 ⑥)`
- `a84ddd3` `feat(oct-loan): T-168 monthly-loan/2026-10 월별 대출 페이지 신규 생성 (DEV/PRD)`
- `605e264` `feat(home): T-169 홈 화면 10월 전환 (라이브뱃지/gift-box/이달의대출 카드)`
- `a9c32c0` `feat(apply): T-170 신청 폼 상품명 10월 교체 (4곳 x 2파일)`
- `c7501c5` `feat(loan-checker): T-171 month-config '2026-10' 객체 추가`
- `a5b8299` `feat(menu): T-172 menu.js CURRENT_MONTH 10월 전환`
- `650a6e2` `feat(apply): T-173 apply data-back / data-breadcrumb 10월 전환`

## 문서

- `project-docs` (같은 레포·같은 브랜치에 포함, 커밋 21건)
- 브랜치: `feature/T-168-oct-loan-page` (코드와 동일 브랜치)
- 기획서: `project-docs/120_plan/PLAN_2026-10_낭만가득가을_기획서.md` (v0.5)
- 2대 문서: `project-docs/00_core_ops/TODO_BOARD_클로드코드_쮸티12-3호_20260904.md`, `WORK_THROUGH_클로드코드_쮸티12-3호_20260904.md`
- ⚠️ `project-docs`는 **`main` 선별 반영 대상이 아닙니다.** `dev` 머지까지만 반영해 주십시오.
- ⚠️ 이번 브랜치에 **10월 작업과 무관한 선행 문서 정리 커밋 `a5c364f`**가 포함돼 있습니다 (`10_plan → 120_plan` 이동 15건, `structure.txt` 이동, 지침서 개명 — 전부 `R100` 동일 내용 이동). 소스 변경 0건입니다.

## 한 줄 버전

`sirjuseyo-web T-168~T-175 10월 낭만가득 가을 대출 전환 완료, feature/T-168-oct-loan-page 푸시 및 PR #{PR번호} 생성 완료, 과거 월 워딩 잔존 0건·구조 diff 의도된 3곳만 차이·node --check 전 통과 검증했습니다. 깃 & 배포 관리자님 feature -> dev 머지 + DEV preview 파일 main 선별 반영 부탁드립니다. PRD 운영 파일 5개는 대표님 라이브 DEV 테스트 완료 후 2차 요청서로 별도 요청드리겠습니다.`
