# [개발자 -> 깃 & 배포 관리자 전달]

**작성일:** 2026-11-03
**작성자:** 쮸티12-4호 (ClaudeCode Web)
**레포:** `sirjuseyo-web`
**단계:** **2차 — PRD 운영 배포 (`main` 선별 반영)**

---

`sirjuseyo-web` **T-182~T-200 11월 든든한 월동준비 대출** PRD 운영 배포 요청드립니다.

**댄디어빠쮸너야님 라이브 DEV 테스트 완료했습니다 (2026-11-03, 카카오톡 비즈니스 채널 인앱 브라우저 환경).**
1차 요청서(DEV 머지 + DEV preview)는 PR #34 / PR #35로 반영 완료 확인했습니다(Ser7-5호 완료보고 WT-201 접수).

## 선행 완료 상태

- DEV merge commit: `c99c9d3` (PR #34 `feature/T-182-nov-loan-plan -> dev`)
- DEV preview main merge commit: `9194264` (PR #35, 선별 15개 파일)
- 라이브 DEV URL 테스트 완료 — 홈/소개/이벤트 포인트 표(10,500P)/CTA 앱링크 2건 전부 정상 확인

## ⚠️ PRD 운영 배포 요청 파일 — 8개 (10월 5개 패턴과 다릅니다, 아래 참고)

```
index.html
monthly-loan/2026-11/index.html
monthly-loan/apply/apply.html
tip/loan-checker/index.html
js/menu.js
js/popup.js
tip/loan-checker/month-config.js
tip/loan-checker/app.js
```

| 파일 | 관련 T-ID | 관련 커밋 |
|---|---|---|
| `index.html` | T-188 | `c2c0a4f` |
| `monthly-loan/2026-11/index.html` | T-187, T-194 | `85bca7e`, `74eae39`, `3e0381c`, `de33ba1` |
| `monthly-loan/apply/apply.html` | T-189, T-192 | `be90036`, `0a14ddf` |
| `tip/loan-checker/index.html` | T-185 | `fcceafc` |
| `js/menu.js` | T-191 | `f851dcd` |
| `js/popup.js` | T-183 | `1314137` |
| `tip/loan-checker/month-config.js` | T-184, T-190 | `9653989`, `0eb2f6f` |
| `tip/loan-checker/app.js` | T-196 | `8af7b02` |

### ⚠️ 왜 10월과 달리 8개인지(공유 JS 3개 추가 사유)

1차 DEV preview(PR #35)에서 `js/popup.js` / `tip/loan-checker/month-config.js` / `tip/loan-checker/app.js`를 **그대로 `main`에 올리지 않고** `popup-dev.js` / `month-config-dev.js` / `app-dev.js`로 포크해 DEV 전용으로만 분리하셨습니다(10월 때 `month-config.js`·`app.js`를 그대로 올려 PRD와 공유했던 패턴과 다름). 그 결과 **이 3개 파일의 11월 변경분(20만원 원금 1%→2%, `'2026-11'` 객체, CTA 앱링크)이 아직 `main`에 전혀 반영되지 않은 상태**임을 직접 확인했습니다.

```
origin/main:js/popup.js            → "활용 4.25%"(10월 그대로, 미반영 확인)
feature/T-182-nov-loan-plan:js/popup.js → "활용 5.25%"(11월 변경분)
origin/main:tip/loan-checker/month-config.js → '2026-11' 객체 0건
origin/main:tip/loan-checker/app.js          → screen=loan_checker 0건
```

PRD HTML(`index.html`, `tip/loan-checker/index.html`)은 `-dev` 접미사 없는 원본 경로(`/js/popup.js`, `month-config.js`, `app.js`)를 그대로 참조하고 있어, 이번에 원본 3개 파일을 `main`에 반영하면 **DEV용 `-dev.js` 3개는 건드리지 않고도** PRD에 바로 적용됩니다.

## ✅ 이미 `main`에 반영된 것 — 재반영 불필요

1차 DEV preview(PR #35)에서 이미 올라갔습니다. **확인만** 해주시면 됩니다.

- `monthly-loan/2026-11/assets/*` 이미지 7개(T-193)

## 🚫 반영하지 말아 주십시오

- `project-docs/**` — `dev`까지만. `main` 반영 대상 아님
- DEV 전용 파일(`*-dev.html`, `menu-dev.js`, `popup-dev.js`, `month-config-dev.js`, `app-dev.js`) — 이미 1차에서 반영 완료, 추가 작업 없음
- ⚠️ **DEV 전용 `-dev.js` 3개(`popup-dev.js`/`month-config-dev.js`/`app-dev.js`)를 이번에 삭제·정리할지 여부는 깃 & 배포 관리자님 판단에 맡깁니다.** PRD 반영 후에는 DEV와 PRD 내용이 같아지므로 포크본이 더는 필요 없을 수 있으나, Web 레포 쪽에서 강제할 사항은 아니라고 판단해 요청에서 제외했습니다.

## ⚠️ 브랜치 정합 상태

```
origin/main ↔ origin/dev :  main only 64 / dev only 512  → diverged
origin/main 최신 : 9194264 (PR #35 DEV preview merge)
origin/dev  최신 : c99c9d3 (PR #34)
```

- **전체 `dev -> main` 병합 금지.** 위 8개 파일만 선별 반영해 주십시오.
- 1차 때(main only 62 / dev only 429)보다 격차가 더 커진 상태입니다.

## PRD 운영 확인 URL

- `https://www.sirjuseyo.com/`
- `https://www.sirjuseyo.com/monthly-loan/2026-11/`
- `https://www.sirjuseyo.com/monthly-loan/apply/apply.html` (즉시 `app/go/?screen=monthly_loan`로 리다이렉트되는지 확인)
- `https://www.sirjuseyo.com/tip/loan-checker/` (계산 버튼 클릭 시 `app/go/?screen=loan_checker`로 즉시 이동하는지 확인)
- `https://www.sirjuseyo.com/js/menu.js` → `CURRENT_MONTH = '2026-11'`
- `https://www.sirjuseyo.com/js/popup.js` → "활용 5.25%" 문구 확인

## 반영 후 확인 요청 항목

- 홈 라이브뱃지 `11월 대출`, 이달의 대출 카드 `1️⃣1️⃣🈷️ 든든한 🫙월동준비`, 링크 `/monthly-loan/2026-11/`
- 홈 gift-box 이미지 `Jar-Cabbage_Nov-Loan.png` 표시(투명 PNG)
- 11월 페이지 h1 `[신청중] 1️⃣1️⃣🈷️ 든든한 🫙월동준비 대출`, 슬로건 "겨울은 춥고, 준비는 미리니까"
- 11월 페이지 이벤트명 `김장🥬대출`, 운영 `11/1(일)~11/25(수)`, 심사 `12/1(화)~12/5(토)`(웨이팅·블찬현 한정)
- 신청 폼 접속 시 앱링크(`?screen=monthly_loan`)로 즉시 리다이렉트
- 검사기 접속 시 콘텐츠 정상 노출 + 계산 버튼 클릭 시 앱링크(`?screen=loan_checker`)로 즉시 이동
- 검사기 웨이팅 정보박스 정적 초기값 월 중립화(`-`) 확인
- **사이트 전역 공통 팝업 — 20만원 이벤트 "활용 5.25% = 크레딧 2.25% + 이자 1% + 원금 2%" 표기**(홈·로안매치·나노크레딧 등 전체 페이지 영향)
- `menu.js` `CURRENT_MONTH = '2026-11'`
- 과거 10월 워딩 잔존 0건

## 검증 (개발자 측 완료분)

- 전환 대상 파일 전수 grep — 과거 10월 워딩 잔존 **0건**
- `monthly-loan/2026-11/index.html` 구조 검증 — `html.parser` 파싱 에러 0건
- `node --check` 통과 — `menu.js` / `popup.js` / `month-config.js` / `app.js`
- origin/main 실측 확인 — 8개 파일 전부 11월 변경분 **미반영 상태임을 직접 grep으로 확인**(위 표 참조), PRD 요청 누락 없음
- 댄디어빠쮸너야님 **로컬 테스트 + 라이브 DEV(카카오톡 인앱 브라우저) 테스트 전 항목 완료**

## 커밋

- `c2c0a4f` `feat(home): T-188 홈 화면 이달의 대출 카드 11월 전환`
- `85bca7e` `feat(monthly-loan): T-187 11월 월동준비 대출 페이지 신규 생성(DEV/PRD)`
- `74eae39` `feat(monthly-loan): T-187 2차 — 소개 페이지 CTA 앱링크 전환(W-195 포함)`
- `3e0381c` `fix(monthly-loan): T-187 3차 — DEV CTA를 PRD와 동일한 앱링크로 되돌림`
- `de33ba1` `fix(monthly-loan): T-194 11월 페이지 과거 워딩 전수조사 — 10월 잔존 발견/수정`
- `be90036` `feat(apply): T-189 apply.html/apply-dev.html 앱링크 리다이렉트 전환`
- `0a14ddf` `feat(apply): T-192 apply.html/apply-dev.html data-back/breadcrumb 11월 전환`
- `fcceafc` `fix(loan-checker): T-185 웨이팅 정보박스 HTML 정적 초기값 6월 잔존 제거`
- `f851dcd` `feat(menu): T-191 menu.js CURRENT_MONTH 11월 전환`
- `1314137` `fix(popup): T-183 포인트 활용 설정 20만원 이벤트 원금 1%->2% 수정`
- `9653989` `fix(loan-checker): T-184 defaultWaitingDate/Period 죽은 코드 제거`
- `0eb2f6f` `feat(loan-checker): T-190 month-config.js 2026-11 객체 추가`
- `8af7b02` `feat(loan-checker): T-196 검사기 CTA 앱링크 전환`

> 전체 15개 T-ID는 1차 요청서 및 PR #34 참조. 위는 PRD 대상 8개 파일에 해당하는 커밋만 발췌했습니다.

## 문서

- `project-docs` — 코드와 같은 레포·같은 브랜치(`feature/T-182-nov-loan-plan`), PR #34에 포함되어 `dev` 반영 완료
- ⚠️ `main` 선별 반영 대상 **아님**
- 1차 요청서: `project-docs/120_plan/WORKREQUEST_2026-11_월동준비_1차_DEV머지_DEVpreview.md`
- 1차 완료보고(원문): `project-docs/00_core_ops/WORK_THROUGH_클로드코드_쮸티12-4호_20261018.md` WT-201 하단

## 한 줄 버전

`sirjuseyo-web T-182~T-200 11월 든든한 월동준비 대출, 대표님 로컬+라이브 DEV 테스트 완료했습니다. PRD 운영 파일 8개(index.html, monthly-loan/2026-11/index.html, apply.html, tip/loan-checker/index.html, js/menu.js, js/popup.js, month-config.js, app.js)를 main에 선별 반영 부탁드립니다. 10월엔 5개였지만 이번엔 1차에서 공유 JS 3개가 -dev.js로 포크되고 원본은 반영 안 된 상태라 8개로 늘었습니다(origin/main 실측으로 미반영 확인 완료). 이미지 7개는 PR #35에서 이미 main 반영됐으니 확인만 해주시면 되고, main/dev가 diverged(main 64 / dev 512)이므로 전체 dev -> main 병합은 금지입니다.`
