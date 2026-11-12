# [개발자 -> 깃 & 배포 관리자 전달]

**작성일:** 2026-10-01
**작성자:** 쮸티12-3호 (ClaudeCode Web)
**레포:** `sirjuseyo-web`
**단계:** **2차 — PRD 운영 배포 (`main` 선별 반영)**

---

`sirjuseyo-web` **T-168~T-175 10월 낭만가득 가을 대출** PRD 운영 배포 요청드립니다.

**댄디업빠쮸너야님 라이브 DEV 테스트 완료했습니다 (2026-10-01).**
1차 요청서(DEV 머지 + DEV preview)는 PR #19 / PR #20으로 반영 완료 확인했습니다.

## 선행 완료 상태

- DEV merge commit: `633c115` (PR #19 `feature/T-168-oct-loan-page -> dev`)
- DEV preview main merge commit: `d8b7f6c` (PR #20, 선별 14개 파일)
- 라이브 DEV URL 4개 테스트 완료

## ⚠️ PRD 운영 배포 요청 파일 — 5개만

```
index.html
monthly-loan/2026-10/index.html
monthly-loan/apply/apply.html
tip/loan-checker/index.html
js/menu.js
```

| 파일 | 관련 T-ID | 관련 커밋 |
|---|---|---|
| `index.html` | T-169 | `605e264` |
| `monthly-loan/2026-10/index.html` | T-168 | `a84ddd3` |
| `monthly-loan/apply/apply.html` | T-170, T-173 | `a9c32c0`, `650a6e2` |
| `tip/loan-checker/index.html` | T-174 | `87f395e` |
| `js/menu.js` | T-172 | `a5b8299` |

## ✅ 이미 `main`에 반영된 것 — 재반영 불필요

1차 DEV preview(PR #20)에서 이미 올라갔습니다. **확인만** 해주시면 됩니다.

- `tip/loan-checker/month-config.js` (`'2026-10'` 객체)
- `tip/loan-checker/app.js` (T-174 `MONTH_CONFIG` 참조 전환)
- `monthly-loan/2026-10/assets/*` 이미지 7개

## 🚫 반영하지 말아 주십시오

- `project-docs/**` — `dev`까지만. `main` 반영 대상 아님
- DEV 전용 파일(`*-dev.html`, `menu-dev.js`) — 이미 1차에서 반영 완료, 추가 작업 없음

## ⚠️ 브랜치 정합 상태

```
origin/main ↔ origin/dev :  main only 46 / dev only 385  → diverged
origin/main 최신 : d8b7f6c (PR #20 DEV preview merge)
origin/dev  최신 : 633c115 (PR #19)
```

- **전체 `dev -> main` 병합 금지.** 위 5개 파일만 선별 반영해 주십시오.
- 9월(T-157~T-163) PRD 배포 때와 동일한 diverged 상태입니다.

## PRD 운영 확인 URL

- `https://www.sirjuseyo.com/`
- `https://www.sirjuseyo.com/monthly-loan/2026-10/`
- `https://www.sirjuseyo.com/monthly-loan/apply/apply.html`
- `https://www.sirjuseyo.com/tip/loan-checker/`
- `https://www.sirjuseyo.com/js/menu.js` → `CURRENT_MONTH = '2026-10'`

## 반영 후 확인 요청 항목

- 홈 라이브뱃지 `10월 대출`, 이달의 대출 카드 `🔟🈷️ 낭만가득 🍂가을`, 링크 `/monthly-loan/2026-10/`
- 홈 gift-box 이미지 `Basket-Maple_Oct-Loan.png` 표시 (투명 PNG)
- 10월 페이지 h1 `[신청중] 🔟🈷️ 낭만가득 🍂가을 대출`, 슬로건 "가을은 짧고, 낭만은 급하니까"
- 10월 페이지 이벤트명 `단풍놀이🍁대출`, 운영 `10/1(목)~10/25(일)`, 심사 `11/1(일)~11/5(목)`
- 신청 폼 상품명 4곳 + `data-back` `/monthly-loan/2026-10/index.html`
- 검사기 상품명·체크리스트·상담톡 스크립트에 과거 월 워딩(설날·루돌프) 없음
- `menu.js` `CURRENT_MONTH = '2026-10'`

## 검증 (개발자 측 완료분)

- 전환 대상 12개 파일 전수 grep — 과거 월 워딩 잔존 **0건**
- `monthly-loan/2026-10/index.html` 구조 diff — 의도된 3곳(h1 CSS·h1 마크업·슬로건)만 차이
- `node --check` 통과 — `menu.js` / `menu-dev.js` / `month-config.js` / `app.js`
- 댄디업빠쮸너야님 **로컬 DEV + 라이브 DEV 테스트 전 항목 완료**

## 커밋

- `a84ddd3` `feat(oct-loan): T-168 monthly-loan/2026-10 월별 대출 페이지 신규 생성 (DEV/PRD)`
- `605e264` `feat(home): T-169 홈 화면 10월 전환 (라이브뱃지/gift-box/이달의대출 카드)`
- `a9c32c0` `feat(apply): T-170 신청 폼 상품명 10월 교체 (4곳 x 2파일)`
- `a5b8299` `feat(menu): T-172 menu.js CURRENT_MONTH 10월 전환`
- `650a6e2` `feat(apply): T-173 apply data-back / data-breadcrumb 10월 전환`
- `87f395e` `fix(loan-checker): T-174 과거 월 워딩 노출 제거 — MONTH_CONFIG 참조 전환 (4건)`

> 전체 30건은 1차 요청서 및 PR #19 참조. 위는 PRD 대상 5개 파일에 해당하는 커밋만 발췌했습니다.

## 문서

- `project-docs` — 코드와 같은 레포·같은 브랜치(`feature/T-168-oct-loan-page`), PR #19에 포함되어 `dev` 반영 완료
- ⚠️ `main` 선별 반영 대상 **아님**

## 한 줄 버전

`sirjuseyo-web T-168~T-175 10월 낭만가득 가을 대출, 대표님 라이브 DEV 테스트 완료했습니다. PRD 운영 파일 5개(index.html, monthly-loan/2026-10/index.html, apply.html, tip/loan-checker/index.html, js/menu.js)만 main에 선별 반영 부탁드립니다. month-config.js·app.js·이미지 7개는 PR #20에서 이미 main 반영됐으니 확인만 해주시면 되고, main/dev가 diverged(main 46 / dev 385)이므로 전체 dev -> main 병합은 금지입니다.`
