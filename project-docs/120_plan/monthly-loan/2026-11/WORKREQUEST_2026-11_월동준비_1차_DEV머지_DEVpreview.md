# [개발자 -> 깃 & 배포 관리자 전달]

**작성일:** 2026-11-03
**작성자:** 쮸티12-4호 (ClaudeCode Web)
**레포:** `sirjuseyo-web` (`https://github.com/sirjuseyo/sirjuseyo-web.git`)
**단계:** **1차 — DEV 반영(`feature -> dev` 머지) + DEV preview 배포(`main` 선별 반영)**

---

`sirjuseyoWeb` **T-182~T-200 11월 든든한 월동준비 대출 전환** 작업 완료했습니다.

`feature/T-182-nov-loan-plan` 원격 푸시 완료했고 PR은 `#34`(`feature/T-182-nov-loan-plan` → `dev`)입니다.

## 작업 내용

11월 월별 대출 전환 15개 T-ID, 댄디어빠쮸너야님 로컬 테스트 완료(2026-11-03).

- **T-182** 11월 월별 대출 기획서 작성(`PLAN_2026-11_월동준비_기획서.md` v0.10, 전체 10회차)
- **T-183** `js/popup.js` 이벤트 20만원 원금 미션 1%→2% 수정 — 사이트 전역 공유 스크립트(59개 파일 참조)
- **T-184** `tip/loan-checker` `defaultWaitingDate`/`defaultWaitingPeriod` 죽은 코드 제거
- **T-185** 검사기 웨이팅 정보박스 HTML 정적 초기값(6월 잔존) 월 중립화
- **T-187** `monthly-loan/2026-11/` 월별 대출 페이지 신규 생성(DEV/PRD, 3회차 — 생성/CTA 앱링크 전환/DEV CTA 정정)
- **T-188** 홈 화면 전환(라이브뱃지 / gift-box / 이달의 대출 카드·링크)
- **T-189** 신청 폼(`apply.html`/`apply-dev.html`) → 앱링크 즉시 리다이렉트 전환(비인증 웹 신청 경로 차단)
- **T-190** 검사기 `month-config.js` `'2026-11'` 객체 신규 추가
- **T-191** `menu.js`/`menu-dev.js` `CURRENT_MONTH` → `'2026-11'`
- **T-192** 신청 폼 `data-back`/`data-breadcrumb` 11월 전환
- **T-193** 이미지 에셋 4종 배치·압축(`formatOptions 65`)
- **T-194** 과거 월 워딩 전수조사 — 11월 페이지 잔존 1건 발견·수정
- **T-196** 검사기 CTA 앱링크 전환(`calculateButton` → 즉시 앱 이동)
- **T-199** 앱(Android/iOS) 팀 11월 콘텐츠 인수인계 문서 작성(`project-docs/130_handover/`, CTA 내용 제외)
- **T-200** Notion 첨부용 단독(standalone) HTML 4종 제작(`project-docs/120_plan/`, 라이브 배포 대상 아님)

## ⚠️ DEV preview 선별 반영 요청 파일 (`main`)

이 파일들이 `main`에 올라가야 `https://www.sirjuseyo.com/index-dev.html` 등이 실제로 바뀝니다.

**DEV 전용 파일**
- `index-dev.html`
- `monthly-loan/2026-11/index-dev.html` (신규)
- `monthly-loan/apply/apply-dev.html`
- `tip/loan-checker/index-dev.html`
- `js/menu-dev.js`

**DEV/PRD 공유 파일** (DEV 페이지도 참조하므로 DEV preview에 필수)
- `tip/loan-checker/month-config.js` — `'2026-11'` 객체 추가 + `defaultWaitingDate` 필드 제거. 없으면 검사기 DEV가 10월로 폴백됩니다.
- `tip/loan-checker/app.js` — T-196 CTA 앱링크 전환분
- `js/popup.js` — T-183 이벤트 20만원 원금 미션 1%→2% 수정분. **사이트 전역 공유 파일**(홈·로안매치·나노크레딧·tip 전체가 DEV/PRD 공통 로드)이라 DEV preview에도 반드시 필요합니다.

**이미지 자산 7개** (DEV/PRD 동일 경로 참조 + 앱 팀이 GitHub Raw로 가져갑니다)
- `monthly-loan/2026-11/assets/Kimjang-Yard_Nov-Loan-001.jpg` (440KB)
- `monthly-loan/2026-11/assets/Kimjang-Yard_Nov-Loan-001.png` (원본 백업 2.7MB)
- `monthly-loan/2026-11/assets/Kimjang-Hands_Nov-Loan-001.jpg` (359KB)
- `monthly-loan/2026-11/assets/Kimjang-Hands_Nov-Loan-001.png` (원본 백업 2.4MB)
- `monthly-loan/2026-11/assets/Jar-Cabbage_Nov-Loan.png` (투명 PNG 2.5MB — **압축 금지**)
- `monthly-loan/2026-11/assets/banner_kimjang-nov-001_gitlab.jpg` (413KB)
- `monthly-loan/2026-11/assets/banner_kimjang-nov-001_gitlab.png` (원본 백업 2.4MB)

## 🚫 주의 — PRD 운영 파일은 이번에 반영하지 말아 주십시오

아래 5개는 **2차(PRD 운영 배포) 요청서**에서 별도로 요청드립니다.
댄디어빠쮸너야님이 라이브 DEV URL에서 실기기 테스트를 마치신 **후에만** 나갑니다.

- `index.html`
- `monthly-loan/2026-11/index.html`
- `monthly-loan/apply/apply.html`
- `tip/loan-checker/index.html`
- `js/menu.js`

## DEV preview 확인 URL

- `https://www.sirjuseyo.com/index-dev.html`
- `https://www.sirjuseyo.com/monthly-loan/2026-11/index-dev.html`
- `https://www.sirjuseyo.com/monthly-loan/apply/apply-dev.html` (즉시 `app/go/?screen=monthly_loan`로 리다이렉트되는 동작 확인)
- `https://www.sirjuseyo.com/tip/loan-checker/index-dev.html` (계산 버튼 클릭 시 `app/go/?screen=loan_checker`로 즉시 이동 확인)
- 이미지 자산 7개 200 확인

## ⚠️ 브랜치 정합 상태 (반영 전 확인 필요)

```
origin/main ↔ origin/dev :  main only 62 / dev only 429  → diverged
```

- **전체 `dev -> main` 병합 금지.** 위 선별 반영 파일만 `main`에 올려 주십시오.
- 10월(T-168~T-175) 때(main only 44 / dev only 354)보다 격차가 더 커진 상태입니다. PRD 선별 반영(2차) 때도 전체 병합 대신 대상 커밋만 cherry-pick 또는 GitHub API 방식으로 반영 부탁드립니다.
- PR #34는 `dev` 기준 `MERGEABLE`/`CLEAN` 확인했습니다(충돌 없음).

## 검증 (로컬)

- 전환 대상 파일 전수 grep — 10월 워딩(`🔟🈷️`/`낭만가득`/`단풍놀이`/`autumn-header`/구 hex/`2026-10`) 잔존 0건, 11월 페이지 내 "10월 1일~5일 심사" 1건 발견·수정 확인(T-194)
- `monthly-loan/2026-11/index.html` 구조 검증 — `div`/`section` 태그 개수 일치, `python html.parser` 파싱 에러 0건
- `node --check` 통과 — `month-config.js` / `app.js` / `popup.js` / `menu.js` / `menu-dev.js`
- `month-config.js` — `'2026-11'` activePeriod(10/26~11/25)이 오늘 날짜를 포함해 자동 선택 확인, `defaultWaitingDate` 필드는 죽은 코드 추적 확인 후 미추가
- CTA 앱링크 전환 2건(소개 페이지/검사기) — DEV·PRD 동일한 `https://www.sirjuseyo.com/app/go/?screen=...` URL로 통일 확인(DEV 전용 스킴 분기는 근거 없는 패턴으로 확인돼 되돌림)
- 이미지 4종 규격·투명도 실측, `file` 명령으로 진짜 JPEG 확인
- 댄디어빠쮸너야님 **로컬 테스트 완료**(2026-11-03)

## 커밋 (코드)

- `9653989` `fix(loan-checker): T-184 defaultWaitingDate/Period 죽은 코드 제거`
- `fcceafc` `fix(loan-checker): T-185 웨이팅 정보박스 HTML 정적 초기값 6월 잔존 제거`
- `1314137` `fix(popup): T-183 포인트 활용 설정 20만원 이벤트 원금 1%->2% 수정`
- `85bca7e` `feat(monthly-loan): T-187 11월 월동준비 대출 페이지 신규 생성(DEV/PRD)`
- `74eae39` `feat(monthly-loan): T-187 2차 — 소개 페이지 CTA 앱링크 전환(W-195 포함)`
- `3e0381c` `fix(monthly-loan): T-187 3차 — DEV CTA를 PRD와 동일한 앱링크로 되돌림`
- `98b5018` `feat(monthly-loan): T-193 11월 이미지 에셋 4종 배치·압축 완료`
- `c2c0a4f` `feat(home): T-188 홈 화면 이달의 대출 카드 11월 전환`
- `be90036` `feat(apply): T-189 apply.html/apply-dev.html 앱링크 리다이렉트 전환`
- `0eb2f6f` `feat(loan-checker): T-190 month-config.js 2026-11 객체 추가`
- `f851dcd` `feat(menu): T-191 menu.js CURRENT_MONTH 11월 전환`
- `0a14ddf` `feat(apply): T-192 apply.html/apply-dev.html data-back/breadcrumb 11월 전환`
- `de33ba1` `fix(monthly-loan): T-194 11월 페이지 과거 워딩 전수조사 — 10월 잔존 발견/수정`
- `8af7b02` `feat(loan-checker): T-196 검사기 CTA 앱링크 전환`

## 문서

- `project-docs` (같은 레포·같은 브랜치에 포함)
- 브랜치: `feature/T-182-nov-loan-plan` (코드와 동일 브랜치), PR `#34`
- 기획서: `project-docs/120_plan/monthly-loan/2026-11/PLAN_2026-11_월동준비_기획서.md` (v0.10)
- 구현작업일체: `project-docs/120_plan/monthly-loan/2026-11/PLAN_2026-11_월동준비_구현작업일체.md`
- 앱 팀 인수인계: `project-docs/130_handover/HANDOVER_11월_든든한월동준비대출_sirjuseyoWeb_Android&iOS_20261101.md`(CTA/앱링크 내용 제외, Web 레포 전달용 — 앱 팀에는 별도 채널로 전달 예정)
- Notion 첨부용 단독 HTML 4종: `project-docs/120_plan/monthly-loan/2026-11/STANDALONE_2026-11_월동준비_*.html`(라이브 배포 대상 아님, `main` 반영 불필요)
- 2대 문서: `project-docs/00_core_ops/TODO_BOARD_클로드코드_쮸티12-4호_20261018.md`, `WORK_THROUGH_클로드코드_쮸티12-4호_20261018.md`
- ⚠️ `project-docs`는 **`main` 선별 반영 대상이 아닙니다.** `dev` 머지까지만 반영해 주십시오.

## 한 줄 버전

`sirjuseyo-web T-182~T-200 11월 든든한 월동준비 대출 전환 완료, feature/T-182-nov-loan-plan 푸시 및 PR #34 생성 완료(MERGEABLE/CLEAN), 과거 10월 워딩 잔존 0건·html.parser 파싱 에러 0건·node --check 전 통과 검증했습니다. 깃 & 배포 관리자님 feature -> dev 머지 + DEV preview 파일 main 선별 반영 부탁드립니다. main↔dev는 main only 62 / dev only 429로 diverged 상태이니 전체 dev->main 병합은 피해 주시고, PRD 운영 파일 5개는 대표님 라이브 DEV 테스트 완료 후 2차 요청서로 별도 요청드리겠습니다.`
