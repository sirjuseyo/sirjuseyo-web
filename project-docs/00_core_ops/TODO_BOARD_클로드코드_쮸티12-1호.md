**최초 작성일:** 2026-06-18
**작성자:** 댄디어빠쮸너야님
**대상:** ClaudeCode 쮸티12-1호

---

## 🤝 후배 쮸티(12-1호~12-9호)를 위한 인수인계 — 깃 운영 Q&A

> 작성자: 쮸티12호 / 작성일: 2026-05-31
> 이 레포(`monthly-loan-repo`)에서 작업 시작 전 반드시 읽을 것!

---

### Q1. 이 레포에 `dev` 브랜치가 없는데, 만들어야 하나요?

**댄디어빠쮸너야님 답변:**
> "내가 잘 모르는데, 웹 페이지이기 때문에 아마 원격에 데브가 없는 것으로 알고 있어"

**쮸티12호 조사 결과:**
- 원격(`origin`)에 `dev` 브랜치 **없음** 확인 (`git fetch origin --prune` 결과)
- 깃 운영 매뉴얼 §3: **"모든 레포는 3단계 체계(`main → dev → feature/*`)를 기본으로 사용"** 명시

**결론 (확정):**
> 원칙대로 `dev` 브랜치를 **새로 만들고** 진행한다.
> 순서: `main` 체크아웃 → `dev` 브랜치 신규 생성 → `feature/*` 분기

```bash
git checkout main
git checkout -b dev
git checkout -b feature/T-001-jun-loan-landing
```

---

### Q2. 피처 브랜치 네이밍 규칙이 어떻게 되나요?

**댄디어빠쮸너야님 답변:**
> "원칙을 이해했고, 원칙대로 할 수 있으면 원칙대로 해"

**쮸티12호 조사 결과:**
- 기존 이 레포의 브랜치 패턴: `feature/T-{번호}-{작업설명}` (예: `feature/T-042-birth-date`)
- 깃 운영 매뉴얼 §4: 기능개발 → `feature/{프로젝트번호}-{작업설명}`

**결론 (확정):**
> 이 레포는 **`feature/T-{T-ID번호}-{작업설명}`** 패턴 사용
> 예: `feature/T-001-jun-loan-landing`, `feature/T-002-image-convert`

---

### Q3. 작업 시작 전 원격과 로컬 동기화가 필요한가요?

**댄디어빠쮸너야님 답변:**
> "코드가 원격과 최신으로 이미 동기화 되어 있으면 굳이 최신화 할 필요 있어? 그냥 작업해"

**결론 (확정):**
> - `git fetch origin --prune` 으로 원격 상태 먼저 확인
> - 코드 파일(HTML 등)에 **로컬 변경사항이 없으면** pull 없이 바로 `feature/*` 브랜치 생성 후 작업
> - `project-docs` 변경사항은 **코드 동기화 판단에서 제외** (문서는 push-only 정책)

---

### Q4. `project-docs` 폴더는 pull 해야 하나요?

**댄디어빠쮸너야님 답변:**
> "문서는 푸시만 하고 풀은 안 한다"

**근거 (TODO_BOARD 깃 운영 정책):**
> `project-docs`는 **pull/merge/rebase 금지** 대상. 문서 레포는 **작성/커밋/푸시만** 수행.

**결론 (확정):**
> `project-docs` 폴더는 절대 pull 하지 않는다. 작성 → 커밋 → 푸시만.

---

### Q5. 이 레포의 현재 브랜치 구조는?

**쮸티12호 기준 시점(2026-05-31) 확인 결과:**

| 브랜치 | 로컬 | 원격 |
|---|---|---|
| `main` | ✅ | ✅ |
| `dev` | ✅ (쮸티12호가 신규 생성) | ❌ (원격 미생성) |
| `feature/T-001-jun-loan-landing` | ✅ (현재 작업 브랜치) | ❌ (원격 미푸시) |
| `feature/T-039-*` ~ `feature/T-042-*` | ✅ | ✅ |
| `feature/apply-review-form` | ✅ | ✅ |

> ⚠️ `dev` 브랜치는 로컬에만 있고 원격에는 아직 없음. 원격 푸시는 깃 관리자(Ser2호) 통해 진행.

---

### Q6. 기획서 파일이 git 추적이 안 되는데?

**원인:**
> 기획서(`PLAN_2026-06_*.md`)는 클로드 채팅의 쮸리가 작성 후 댄디어빠쮸너야님이 직접 폴더에 저장한 파일. git add 된 적 없음 → **Untracked 파일**.

**결론 (확정):**
> git checkout으로 복구 불가. 잘못 수정했을 경우 **직접 수동 원복**해야 함.
> 기획서 수정 시 특히 신중하게 작업할 것.

---

**작업대기열: 작업의 시작, W-ID(Wating) 생성**  
↓
**투두 목록: 작업 내용에 대한 한 줄 이력, T-ID 생성**
↓
**작업현황 요약표: DEV/PRD, 로컬/원격 깃 커밋/푸시, 운영배포 등 관리 개념** 

---

## 🔄 워크플로우

```
1. 댄디어빠쮸너야님 이슈 제기
   ↓
2. 분석 출력 (출력 양식 강제 보고) 및 작업 대기열에 W-ID 생성 
   ↓
3. 댄디어빠쮸너야님 승인   
   ↓
4. 작업 착수 
   ↓
   ① 투두 목록에 T-ID 생성
   ↓
   ② 로컬 개발 (T-ID 상태는 In-Progress)
   ↓
   ③ 로컬 깃 커밋
   ↓
   ④ 워크스루에 WT-ID 생성, WT-ID에 T-ID 연동, 로컬 깃 커밋 해시 표기, WT-ID와 T-ID 상태는 In-Progress
   ↓
     → 수정 시에 ④번 작업 반복, 단 WT-ID 회차 테이블 반드시 작성
   ↓   
5. 빌드 & 테스트 : 웹은 빌드 없이, 댄디업빠쮸너야님의 DEV html에서 직접 테스트
   ↓   
6. 테스트 완료
   ↓
   ⑤ T-ID & WT-ID 상태값 '테스트 완료' 변경, T-ID에 최종 커밋 해시 표기, 작업현황 요약표 리스트업 & 컬럼 상태값 표기, PRD 반영 
   ↓
   ⑥ 원격 깃 피처 브랜치 커밋 / 푸시, New PR 생성, 깃 관리자에게 작업 협조 요청서 제출. 단, 원격 feature - dev - main 머지 요청 

 
```

---

## ⚠️ 워크플로우 [Phase / 내용 / 상태] 체크리스트 테이블(표)

| Phase | 내용 | 상태 |
| Phase 1 | T-ID 생성 | ✅ 완료 또는 ⏳ 대기 |
| Phase 2 | 코드 수정 | ✅ 완료 또는 ⏳ 대기 |
| Phase 3 | 로컬 커밋 | ✅ 완료 또는 ⏳ 대기 |
| Phase 4 | WT-ID 생성 | ✅ 완료 또는 ⏳ 대기 |

- [ ] 작업 일시를 `YYYY-MM-DD HH:MM` 형식으로 기록했는가?
- [ ] 상태값 변경했는가?
- [ ] 사용자님(댄디업빠쮸너야님)의 테스트 완료 전에. ❶T-ID에 테스트 완료 표기, ❷T-ID에최종 해시 표기, ❸작업현황 요약표 생성, ❹원격 깃 피처 브랜치 커밋 / 푸시 등 치명적인 실수를 저지르지 않았는가? 

---

## ⚠️ 깃 운영 정책

### 작업 시작 전 코드 레포 원격 최신화 정책

- 작업 시작 전에는 항상 로컬 워크스페이스의 코드 레포 원격 상태를 확인한다.
- `project-docs`는 pull/merge/rebase 금지 대상이다. 문서 레포는 작성/커밋/푸시만 수행한다.
- 코드 레포는 `git fetch origin --prune`으로 원격 상태를 먼저 확인한다.
- 작업 대상이 될 가능성이 있는 코드 레포는 로컬 `dev`를 `origin/dev` 기준으로 맞춘 뒤 작업한다.
- 단, 로컬 변경/충돌/분기 상태가 있으면 임의로 merge/rebase/pull 하지 않고 먼저 보고한다.
- 최신화는 fast-forward 가능한 미반영 커밋만 반영하는 것을 원칙으로 한다.
- feature 작업 브랜치는 최신화된 `origin/dev` 기준으로 새로 만든다.
- 이후 순서는 로컬 컴파일/빌드 → 로컬 커밋 → 원격 feature 브랜치 푸시 → Open PR 생성 → 깃 관리자 전달 메시지 작성으로 진행한다.

### 6-⑥ 깃 관리자에게 작업 요청서 전달 형식(include Open PR 생성)  

[개발자 -> 깃 관리자 전달]

{레포명} {T-ID} 작업 완료했습니다.
`{feature 브랜치명}` 원격 푸시 완료했고 PR은 `#{PR번호}`입니다.
(PR이 없으면: `PR은 별도 생성 안 했습니다.`)

작업 내용:
- 핵심 수정 1
- 핵심 수정 2
- 핵심 수정 3

검증:
- 검증 항목 1
- 검증 항목 2

커밋:
- `{커밋해시}` `{커밋메시지}`
- `{커밋해시}` `{커밋메시지}`

문서:
- `project-docs`
- 브랜치: `{문서 feature 브랜치명}`
- PR: `#{문서 PR번호}`
- 문서 커밋: `{문서커밋해시}` `{문서커밋메시지}`

한 줄 버전:
- `{레포명} {T-ID} 완료, {feature 브랜치명} 푸시 및 PR #{PR번호} 생성 완료, {검증 요약} 했습니다. 깃 & 배포 관리자님 feature -> dev 검토 부탁드립니다.`

### 깃 관리자 작업 완료 보고서 보관 정책 

- 작업 완료 보고서 원문은 해당 `WT-ID`에 또는 (여러 개 일때에는) 마지막 WT-ID 밑에 붙여넣어 보관한다.
- TODO_BOARD에는 작업현황 요약표와 투두 목록의 상태값/머지 커밋/배포 결과만 요약 반영한다.
- 별도 전달 문서를 추가 생성하지 않는다.

### 깃 필독 문서

- 깃 운영 매뉴얼 : /Users/sirjuseyo/SirjuseyoOldApp/Codex_20260201/project-docs/110_git_deploy_ops/GIT_OPERATIONS_MANUAL_20260416.md 

---

## 📋 통합 테이블 구조

### 작업현황 요약표 (공통)

| T-ID | 작업 타이틀 | 로컬커밋 | 원격푸시 | DEV 빌드 | PRD 코드배포 | PRD 빌드 | PRD 운영배포 | PRD 스토어배포 | 작업자 | 작업일시(연월일 시분) | 비고 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T-ID | 작업 설명 | 상태값 | 상태값 | 상태값 | 상태값 | 상태값 | 상태값 | 상태값 | 담당자 | 연-월-일 시:분 | 메모 |
| **T-039** | 감다살 상세 카피·UI 일괄 수정(DEV+PRD) | ✅ `2e72d17` | ✅ | ✅ 반영완료 | ✅ **main merge `183ac46`** | - (웹) | ✅ **Pages 배포(run `26898681849`)** | - (웹) | 쮸티12호 | 2026-06-04 | **완료** — PR#14 main merge·GitHub Pages 운영배포 / PRD·DEV `HTTP 200` / 본문 `대한민국 운명`·`추가 대출 최대 50만 원`·`한국 시간`·`신청 전 필수 확인` 확인·`총 최대` 미검출 / `한국`은 `한국 시간`만 잔존 / 완료보고서 WT-039 하단 보관 |
| **T-101** | 나노크레딧 상세 수치 전면 업데이트 (10~50만 PRD+DEV 8개) | ✅ `8919686` | ✅ PR#14 dev fc97aae | ✅ 검증완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-28 | 7월 썸머베케이션 기준 / 옵션카드·크레딧미션이란?·주의사항·워딩 전면 업데이트 |
| **T-102** | 꿀정보 연체이력해제 New UI 통합 + DEV 신규 + 링크 연결 | ✅ `d81803a` | ✅ PR#14 dev fc97aae | ✅ 검증완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-28 | PRD·DEV 통합개편 + tip/index PRD·DEV 링크 연결 |
| **T-104** | 월별대출 apply-dev.html DEV 배너 풀사이즈 수정 | ✅ `c6e47dc` | ✅ PR#14 dev fc97aae | ✅ 검증완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-28 | apply-dev.html DEV 배너 sticky+480px 누락 추가 / 2026-07/index-dev.html !important 추가 |
| **T-105** | Deep Dive apply-review-dev.html UI 통합 | ✅ `684fc43` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-28 | old top-bar 제거 + popup.js 제거 + DEV 링크 정합 + DEV 배너 inline 이동 + 법적고지 480px |
| **T-106** | Deep Dive 보안코드 overlay — 항상 표시 | ✅ `461097e` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-28 | display:none 초기화 + inline script 무조건 표시 + sessionStorage 저장 제거 |
| **T-107** | [소통거리 제출 가이드] tip/submissions 이동 + 꿀정보 06번 + 나노크레딧 10~50 CTA | ✅ `9f450d9` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-28 | nanocredit/submissions→tip/submissions, index-dev.html 신규, tip/index×2 06번, nanocredit 4개 CTA / [회차수정] submissions 17개 back-btn·CSS 완전 제거 `9f450d9` |
| **T-108** | [소통거리 제출 가이드] 등·초본 → 초본 텍스트 수정 | ✅ `b37d348` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-28 | tip/submissions/index.html·index-dev.html SEC-14 / 섹션제목·소제목·③항목 "등본+초본"→"초본"만 |
| **T-109** | [소통거리 제출 가이드] phone-docs·job-income DEV 버전 15개 신규 생성 + index-dev.html 링크 연결 | ✅ `d21c053` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-28 | phone-docs 3개 + job-income 12개 *-dev.html 신규 / DEV 배너+menu-dev.js / index-dev.html SEC-07·10 링크 -dev.html 연결 |
| **T-110** | [소통거리 제출 가이드] SEC-12·SEC-13 타이틀 서브라인 추가 | ✅ `2880556` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-28 | index.html·index-dev.html / 👯 절친·🧑‍🧑‍🧒 부모님 h3 서브라인 "대안신용평가 항목 중 사회성 검증 대상 전용" B안(15px·700·#333) |
| **T-111** | [대출 가능성 검사기] Phase A 톤·비주얼 개편 | ✅ `2d5e3f2` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-29 | styles.css·index.html·index-dev.html·app.js / 기획안 §2·5·6·7 전면 적용 + 2~7회차 회차수정 완료 |
| **T-112** | [대출 가능성 검사기] Phase B 데이터 보정 (B-1~B-7) | - | 대기 | 대기(Pending) | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-28 | Phase A 승인 후 착수 / B-5 CEO 원본 제공 필요 |
| **T-113** | [홈 화면] 히어로 영역 문구 변경 (앱 동일) | ✅ `7fdde17` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-30 | index.html·index-dev.html h1+p.sub 앱 동일 변경 / 5회차: h1문구·면책문구·색상·min-height·padding-bottom 조정 |
| **T-114** | [브레드크럼] 전체 페이지 브레드크럼 추가 (menu.js·menu-dev.js + 71개 HTML) | ✅ `79e511c` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-30 | js/menu.js·menu-dev.js 브레드크럼 로직+CSS / 71개 HTML data-breadcrumb 속성 / PRD+DEV / 홈·개인정보 제외 |
| **T-115** | [한도 상향] 한도 상향 Coming Soon 페이지 신규 생성 | ✅ `43b70e2` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-30 | tip/credit-limit/index.html·index-dev.html 신규 / ✨ 곧 공개 예정 배지·예고 카드·앱 알림 안내 / tip/index 03번 href 연결 |
| **T-116** | [공지사항] 공지사항 안내 페이지 신규 생성 | ✅ `43b70e2` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-30 | notice/index.html·index-dev.html 신규 / 앱 공지사항 이용 안내 + Play Store 링크 + 웹 이전 예정 안내 |
| **T-118** | [대출 검사기] ⑤신청 정보 URL month-config.js 자동 주입 + CLAUDE.md 매월 체크리스트 추가 | ✅ `5846239` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | - (웹) | ✅ Pages d864ebc | - (웹) | 쮸티12-1호 | 2026-07-30 | tip/loan-checker/index.html·index-dev.html santaApply URL 동적 주입 / CLAUDE.md 매월 대출 전환 체크리스트 3단계 추가 |

### 프로젝트별 컬럼 사용 매트릭스

| 컬럼 | Server | Android | iOS | 비고 |
|------|--------|---------|-----|------|
| **프로젝트** | ✅ | ✅ | ✅ | 필수! (Server/Android/iOS) |
| **구분** | ✅ | ✅ | ✅ | 작업 설명 |
| **관련 투두** | ✅ | ✅ | ✅ | T-ID 또는 투두 번호 |
| **로컬커밋** | ✅ | ✅ | ✅ | 로컬 깃 커밋 완료 여부 |
| **원격푸시** | ✅ | ✅ | ✅ | 원격 깃헙/깃랩 푸시 완료 여부 |
| **DEV** | ✅ | ✅ | ✅ | DEV 환경 상태 |
| **PRD 코드배포** | ✅ | - | - | **서버 전용!** main 반영/트리거 |
| **PRD 빌드** | - | ✅ | ✅ | **클라 전용!** APK/IPA 빌드 |
| **PRD 운영배포** | ✅ | - | - | **서버 전용!** AWS/Lambda 배포 |
| **PRD 스토어배포** | - | ✅ | ✅ | **클라 전용!** 스토어 출시 |
| **작업자** | ✅ | ✅ | ✅ | Codex/쮸티/헤일리 등 |
| **작업일시** | ✅ | ✅ | ✅ | **필수!** YYYY-MM-DD HH:MM |
| **비고** | ✅ | ✅ | ✅ | 메모/링크 등 |

---

## 📝 매핑 규칙

### 클라이언트 매핑 규칙

| 작업 완료 상태 | 상태값 설정 |
|---|---|
| 로컬 깃 커밋 완료 | `로컬커밋=완료` |
| 원격 깃 푸시 완료 | `원격푸시=완료` |
| DEV 빌드 완료 | `DEV=반영완료` |
| DEV 실기기 검증 완료 | `DEV=검증완료` |
| PRD APK/IPA 빌드 완료 | `PRD 빌드=빌드완료` |
| Google Play / App Store 심사 제출 | `PRD 스토어배포=심사중` |
| APK/IPA 직접 배포 (테스터) | `PRD 스토어배포=APK배포` |
| Google Play / App Store 출시 완료 | `PRD 스토어배포=스토어배포` |
| 실사용자 검증 완료 | `PRD 스토어배포=검증완료` |

---

## 📚 작업 현황표 상태값 사전 

### 1️⃣ 공통 상태값

#### 로컬/원격 깃 단계
| 상태값 | 의미 | 사용 프로젝트 |
|---|---|---|
| `완료` | 로컬 깃 커밋 완료 | 전체 |
| `-` | 아직 미완료 또는 해당 없음 | 전체 |

#### 원격 푸시 단계
| 상태값 | 의미 | 사용 프로젝트 |
|---|---|---|
| `완료` | 원격 깃 푸시 완료 | 전체 |
| `-` | 아직 미푸시 | 전체 |

#### DEV 단계
| 상태값 | 의미 | 사용 프로젝트 |
|---|---|---|
| `미반영` | DEV 환경에 아직 미반영 | 전체 |
| `반영완료` | DEV 빌드/배포 완료 | 전체 |
| `검증완료` | DEV 실기기/실서버 검증 완료 (최종) | 전체 |
| `확인필요` | DEV 서버 오류로 검증 불가 | 전체 |

#### PRD 빌드 단계
| 상태값 | 의미 | 설명 |
|---|---|---|
| `미반영` | PRD 빌드 미완료 | DEV만 완료된 상태 |
| `빌드완료` | PRD APK/IPA 빌드 완료 (최종) | `assemblePrdRelease` / Xcode Archive 성공 |
| `확인필요` | 빌드 실패 또는 검증 필요 | 빌드 에러 발생 시 |

#### PRD 스토어배포 단계
| 상태값 | 의미 | 설명 |
|---|---|---|
| `미배포` | 아직 배포 전 | PRD 빌드만 완료 |
| `심사중` | Google Play / App Store 심사 제출 | 심사 대기 중 |
| `APK배포` | APK/IPA 직접 배포 | 테스터에게 직접 공유 (긴급 배포) |
| `스토어배포` | Google Play / App Store 출시 완료 | 일반 사용자 다운로드 가능 |
| `검증완료` | 실사용자 검증 완료 (최종) | 스토어 출시 후 정상 동작 확인 |
| `확인필요` | 배포 후 이슈 발생 | 사용자 신고/크래시 발견 시 |

---

### 4️⃣ 투두 목록 상태값 

| 상태값 | 의미 | 사용 시점 |
|---|---|---|
| `분석중` | 분석 출력 또는 구현 작업 중 | 아직 작업 시작 전 & 작업 대기열 등록 후 |
| `진행중(In-Progress)` | 코드 수정 / 로컬 커밋까지 완료 | 테스트 완료 전 |
| `테스트 완료(DONE)` | 테스트 완료 | 빌드 후 |
| `배포대기` | 코드 완료 후 배포 전 | 원격 푸시 완료, 배포 대기 |
| `검증중` | 배포/결과 테스트 진행 중 | DEV/PRD 배포 후 테스트 중 |
| `검증완료` | 검증까지 끝난 최종 완료 | 최종 검증 완료 후 |
| `보류` | 정책/우선순위 사유로 일시 중단 | 우선순위 낮춤 |
| `수정실패` | AI의 무능으로 수정 실페 | 우선순위 최고 |


---

## 👉  🎯 여기서 부터 작업 시작!❗️

**작업 순서: 작업대기열 W-ID 생성 → 투두 목록 T-ID 생성 & 작업대기열 W-ID 삭제 → 워크스루 WT-ID 생성 → 작업현황 요약표 리스트업**
**T-ID에 최종 해시 표기되면, 작업현황표에 리스트업**

### 작업현황 요약표

| T-ID | 작업 타이틀 | 로컬커밋 | 원격푸시 | DEV | PRD 코드배포 | PRD 운영배포 | 작업자 | 작업일시(연월일 시분) | 비고 |
|---|---|---|---|---|---|---|---|---|---|
| T-001 | legal-shared.js 연결 | ✅ `165a165` | ✅ | 검증완료 | ✅ 선별반영 `8af7421` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-18 23:00 | PR #16 선별반영, HTTP/2 200 확인 |
| T-002 | PC 480px 레이아웃 고정 | ✅ `6fa6dbb` | ✅ | 검증완료 | ✅ 선별반영 `8af7421` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-18 23:30 | PR #16 선별반영 |
| T-003 | 상단 법적고지 여백 20px | ✅ `632e98c` | ✅ | 검증완료 | ✅ 선별반영 `8af7421` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-18 23:50 | PR #16 선별반영 |
| T-004 | 본문 폰트 18px 일괄 통일 | ✅ `90e5ae6` | ✅ | 검증완료 | ✅ 선별반영 `8af7421` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-19 00:00 | PR #16 선별반영 |
| T-005 | card-title 18px 수정 | ✅ `6b0e53a` | ✅ | 검증완료 | ✅ 선별반영 `8af7421` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-19 00:10 | PR #16 선별반영 |
| T-006 | step-icon 빨간 원 축소 | ✅ `a9fdac0` | ✅ | 검증완료 | ✅ 선별반영 `8af7421` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-19 00:25 | PR #16 선별반영 |
| T-007 | procedure-list 파란 원 축소 | ✅ `e69d2b8` | ✅ | 검증완료 | ✅ 선별반영 `8af7421` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-19 00:40 | PR #16 선별반영, PR #16 종료 예정, 이후 신규 브랜치/PR |
| T-008 | 홈 화면 18px 초과 폰트 통일 | ✅ `062433f` | ✅ | 검증완료 | ✅ 선별반영 `a4e3d45` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-19 01:35 | PR #17 선별반영, HTTP/2 200 확인, run `27775132030` |
| T-009 | 월드컵 챌린지 폰트 18px 통일 | ✅ `d783299` | ✅ | 검증완료 | ✅ 선별반영 `21f6ed0` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-19 03:00 | PR #18 선별반영, HTTP/2 200 확인, run `27777530437` |
| T-010 | 월드컵 챌린지 legal-shared.js 연결 | ✅ `d783299` | ✅ | 검증완료 | ✅ 선별반영 `21f6ed0` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-19 03:00 | PR #18 선별반영, HTTP/2 200 확인, run `27777530437` |
| T-011 | 월드컵 챌린지 법적고지↔콘텐츠 구분 | ✅ `af8d679` | ✅ | 검증완료 | ✅ 선별반영 `c3063b3` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-20 16:00 | PR #18 선별반영, HTTP/2 200 확인, run `27898271068` |
| T-012 | 대출 검사기 모바일 사이즈 변경 | ✅ `5297575` | ✅ | 검증완료 | ✅ 선별반영 `c3063b3` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-20 16:40 | PR #18 선별반영, HTTP/2 200 확인, run `27898271068` |
| T-013 | 대출 검사기 법적고지 연결 (상단+하단) | ✅ `5297575` | ✅ | 검증완료 | ✅ 선별반영 `c3063b3` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-20 16:40 | PR #18 선별반영, HTTP/2 200 확인, run `27898271068` |
| T-014 | 대출 검사기 법적고지↔콘텐츠 간격 | ✅ `5297575` | ✅ | 검증완료 | ✅ 선별반영 `c3063b3` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-20 16:40 | PR #18 선별반영, HTTP/2 200 확인, run `27898271068` |
| T-015 | 대출 검사기 폼 패널 2열 → 1열 | ✅ `15592a9` | ✅ | 검증완료 | ✅ 선별반영 `c3063b3` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-20 16:45 | PR #18 선별반영, HTTP/2 200 확인, run `27898271068` |
| T-016 | 대출 검사기 뚝딱 버튼 법적고지 위로 이동 | ✅ `8bac5d8` | ✅ | 검증완료 | ✅ 선별반영 `c3063b3` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-20 16:55 | PR #18 선별반영, HTTP/2 200 확인, run `27898271068` |
| T-017 | 대출 검사기 두 번째 이미지 숨김 | ✅ `bd47edb` | ✅ | 검증완료 | ✅ 선별반영 `c3063b3` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-20 17:00 | PR #18 선별반영, HTTP/2 200 확인, run `27898271068` |
| T-018 | 대출 검사기 4번째 이미지 → 텍스트 박스 | ✅ `e16b96f` | ✅ | 검증완료 | ✅ 선별반영 `c3063b3` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-20 17:10 | PR #18 선별반영, HTTP/2 200 확인, run `27898271068` |
| T-019 | 대출 검사기 result-panel h2 24px → 18px | ✅ `e86d599` | ✅ | 검증완료 | ✅ 선별반영 `c3063b3` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-20 17:30 | PR #18 선별반영, HTTP/2 200 확인, run `27898271068` |
| T-020 | legal-shared.js 서비스 링크 절대경로 수정 | ✅ `ab9eac8` | ✅ | 검증완료 | ✅ 선별반영 `b112c62` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-26 | PR #18 선별반영, HTTP/2 200 확인, run `28282393428` |
| T-021 | [monthly-loan] 하단 법적고지 연체금리 수정 | ✅ `d586839` | ✅ | 검증완료 | ✅ 선별반영 `16835ad` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-27 | PR #18 선별반영, HTTP/2 200 확인, run `28295021232` |
| T-022 | [sirjuseyoWeb] 하단 법적고지 연체금리 수정 | ✅ `a1660d1` | ✅ | 검증완료 | ✅ 선별반영 `ee5b8e3` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-27 | PR #10 선별반영, HTTP/2 200 확인, run `28295021225` |
| T-023 | [monthly-loan] footer.js→legal-shared.js 교체 | ✅ `05a34aa` | ✅ | 검증완료 | ✅ 선별반영 `16835ad` | ✅ Pages 배포 | 쮸티12-1호 | 2026-06-27 | PR #18 선별반영, HTTP/2 200 확인, run `28295021232` |
| T-024 | [monthly-loan] 홈 강제 고지 팝업 추가 | ✅ `47e7965` | ✅ | 검증완료 | ✅ 선별반영 `7954d66` | - | 쮸티12-1호 | 2026-06-29 | PR #19 선별반영, Pages 배포 run 미제공 |
| T-025 | [sirjuseyoWeb] 홈 강제 고지 팝업 추가 + index-dev.html 신규생성 | ✅ `5043427` | ✅ | 검증완료 | ✅ 선별반영 `b830524` | - | 쮸티12-1호 | 2026-06-29 | PR #12 선별반영(DIRTY/충돌로 전체병합 불가), Pages 배포 run 미제공 |
| T-026 | [팝업 전체] 예시 플로우 문구 2건 수정 | ✅ `47e7965`/`5043427` | ✅ | 검증완료 | ✅ 선별반영 `7954d66` (monthly-loan) / `b830524` (sirjuseyoWeb) | - | 쮸티12-1호 | 2026-06-29 | T-024 PR #19 + T-025 PR #12 선별반영 완료 |
| T-027 | [monthly-loan] 팝업 가이드라인 활용% 개편 + 예시 수치 변경 | ✅ `bb3ae48` | ✅ PR#20 | 검증완료 | ✅ 선별반영 `cdb522c` | - | 쮸티12-1호 | 2026-06-30 | PR #21 선별반영 (0f7fb1c 기준) / Pages 배포 대기 |
| T-028 (monthly-loan) | [monthly-loan] 팝업 HTML 활용% 개편 + 예시 수치 변경 반영 | ✅ `98774e5` | ✅ PR#21 | 검증완료 | ✅ 선별반영 `cdb522c` | - | 쮸티12-1호 | 2026-06-30 | PR #21 선별반영 (0f7fb1c 기준) / Pages 배포 대기 |
| T-028 (sirjuseyoWeb) | [sirjuseyoWeb] 팝업 HTML 활용% 개편 + 예시 수치 변경 반영 | ✅ `3e0cb64` | ✅ PR#13 | 검증완료 | ✅ 선별반영 `df6c140` | - | 쮸티12-1호 | 2026-06-30 | dev 2ffcb98 → main df6c140 선별반영 완료 / b830524..df6c140 main->main |
| T-030 | [7월] 크레딧 미션 4,500포 통일 | ✅ `7389ee8` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `cf89006` | ✅ Pages run `28564430240` | 쮸티12-1호 | 2026-07-01 | PR#24 선별반영, live `monthly-loan.sirjuseyo.com/2026-07/index.html` 200 |
| T-031 | [7월] 이벤트 섹션 개편 + 신용조회비용 용어 통일 | ✅ `4ec2c42` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `cf89006` | ✅ Pages run `28564430240` | 쮸티12-1호 | 2026-07-01 | PR#24 선별반영 |
| T-032 | [7월] 워터밤💦대출 원금 미션 안내 추가 | ✅ `44f294a` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `cf89006` | ✅ Pages run `28564430240` | 쮸티12-1호 | 2026-07-01 | PR#24 선별반영 |
| T-033 | [7월] 이벤트 대출 이포→원리포 전환 | ✅ `29a2722` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `cf89006` | ✅ Pages run `28564430240` | 쮸티12-1호 | 2026-07-01 | PR#24 선별반영 |
| T-034 | [7월] 비교테이블 이벤트 대출 원금 미션 재계산 | ✅ `6d7015c` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `cf89006` | ✅ Pages run `28564430240` | 쮸티12-1호 | 2026-07-01 | PR#24 선별반영 |
| T-035 | [7월] 예시❸ 원금 미션(1%) 수정 | ✅ `2b598b7` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `cf89006` | ✅ Pages run `28564430240` | 쮸티12-1호 | 2026-07-01 | PR#24 선별반영 |
| T-036 | [홈] index-dev.html + index.html 7월 전환 (본문 + 팝업 이벤트 활용%) | ✅ `a9668d5` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `cf89006` | ✅ Pages run `28564430240` | 쮸티12-1호 | 2026-07-01 | PR#24 선별반영, 라이브 테스트 완료 2026-07-03 |
| T-037 | [홈] index-dev.html + index.html 검사기 카드 숨김 | ✅ `86307cd` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `cf89006` | ✅ Pages run `28564430240` | 쮸티12-1호 | 2026-07-01 | PR#24 선별반영, 라이브 테스트 완료 2026-07-03 |
| T-039 | [홈] index-dev.html + index.html gift-box 서핑 이미지 교체 | ✅ `0ee40b0` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `cf89006` | ✅ Pages run `28564430240` | 쮸티12-1호 | 2026-07-01 | PR#24 선별반영 |
| T-040 | [6월 페이지] 마감 처리 — 기존 내용 숨김 + 마감 문구 표시 | ✅ `261a656` | ✅ PR#22 | - | ✅ PR#22 merge `92e118da` | ✅ Pages run `28560557018` | 쮸티12-1호 | 2026-07-02 | PR#22 feature→main merge, HTTP/2 200 확인, live URL `monthly-loan.sirjuseyo.com/2026-06/index-dev.html` |
| T-041 | [6월 PRD] index.html 마감 처리 — T-040 누락 보완 | ✅ `46e0eab` | ✅ PR#23 | - | ✅ PR#23 merge `7d957808` | ✅ Pages run `28561178724` | 쮸티12-1호 | 2026-07-02 | PR#23 feature→main merge, live URL `monthly-loan.sirjuseyo.com/2026-06/index.html` |
| T-042 | [7월 대출] 상단 메인 이미지 교체 — Surfer-Sunset_Jul-Loan (DEV+PRD) | ✅ `3274675` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `c07d4d8` | ✅ Pages run `28667028129` | 쮸티12-1호 | 2026-07-03 | PR#24 선별반영, live `2026-07/assets/Surfer-Sunset_Jul-Loan.jpg` 200 확인 |
| **T-042** | WT-054 | W-044 | `3274675` | **테스트 완료(DONE)** | **[7월 대출 페이지] 상단 메인 이미지 교체 — Surfer-Sunset_Jul-Loan** | 쮸티12-1호 | 2026-07-03 | 【파일】`2026-07/index-dev.html`, `2026-07/index.html`, `2026-07/assets/Surfer-Sunset_Jul-Loan.jpg` / PNG→JPG 변환 + img src 교체 |
| T-043 | [7월 대출] 두 번째 이미지 교체 — Waterbomb-Jul (DEV+PRD) | ✅ `fcc7847` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `c07d4d8` | ✅ Pages run `28667028129` | 쮸티12-1호 | 2026-07-03 | PR#24 선별반영, live `2026-07/assets/waterbomb-jul-001.jpg` 200 확인 |
| **T-043** | WT-055 | W-045 | `fcc7847` | **테스트 완료(DONE)** | **[7월 대출 페이지] 두 번째 이미지 교체 — Waterbomb-Jul** | 쮸티12-1호 | 2026-07-03 | 【파일】`2026-07/assets/waterbomb-jul-001.jpg` / `waterbomb-jul-001.png` PNG→JPG 변환(1686×933px / 2696KB→408KB) — DEV·PRD img src 이미 `waterbomb-jul-001.jpg` 설정되어 있어 HTML 수정 불필요 |
| T-044 | [신청 폼] apply-dev.html + apply.html 7월 대출 문구 전환 (DEV+PRD) | ✅ `527d79e` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `ab2c334` | ✅ Pages run `28674000011` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, live DEV/PRD 7월 문구 3곳 반영 확인 200 |
| **T-044** | WT-056 | W-046 | `527d79e` | **테스트 완료(DONE)** | **[신청 폼] apply-dev.html + apply.html 7월 대출 문구 전환** | 쮸티12-1호 | 2026-07-03 | 【파일】`apply/apply-dev.html`(3곳), `apply/apply.html`(3곳) / `6️⃣🈷️은 🪖호국보훈의 달 대출` → `7️⃣🈷️ 썸머 🏖️베케이션 대출` 전체 교체 |
| T-045 | [신청 폼] 50만 원 인라인 경고 2종 추가 (DEV+PRD) | ✅ `e3b5e0c` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `c240672` | ✅ Pages run `28677221045` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, live DEV/PRD 경고 2종 반영 확인 200 |
| **T-045** | WT-057 | W-047 | `e3b5e0c` | **테스트 완료(DONE)** | **[신청 폼] 50만 원 선택 시 인라인 경고 2종 추가 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`apply/apply-dev.html`, `apply/apply.html` / S3 경험-없음 50만 원 조합 → 경고② 표시+차단, S4 이벤트 대출 50만 원 조합 → 경고① 표시+차단 / `.inline-warn` CSS + `selectExperienceNo()` + `selectMethodEvent()` 함수 추가 |
| T-046 | [대출 검사기] 7월 썸머 베케이션 전환 (DEV+PRD) | ✅ `bd10089` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-046** | WT-058 | W-048 | `bd10089` | **테스트 완료(DONE)** | **[대출 검사기] 7월 썸머 베케이션 전환 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/month-config.js`, `loan-checker/app.js`, `loan-checker/index-dev.html`, `loan-checker/index.html` / ①2026-07 설정 추가 ②이벤트 대출 원리포 전환+50만 행 삭제 ③경험 패널 신규+패널 재배치 ④`updateAmountWarnings()` JS ⑤7월 텍스트 전환 |
| T-047 | [대출 검사기] 히어로 배너 이미지 2장 추가 (DEV+PRD) | ✅ `97d309d` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-047** | WT-059 | W-049 | `97d309d` | **테스트 완료(DONE)** | **[대출 검사기] 히어로 배너 이미지 2장 추가 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/index-dev.html`, `loan-checker/index.html`, `loan-checker/assets/img/waterbomb-jul-002.png`, `loan-checker/assets/img/loan-checker-options-guide.png` / title-text-box 아래 히어로 배너 2개 추가 |
| T-048 | [대출 검사기] 블랙찬스 재대출 전용 안내 문구 추가 (DEV+PRD) | ✅ `f075184` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-048** | WT-060 | W-050 | `f075184` | **테스트 완료(DONE)** | **[대출 검사기] 블랙찬스 재대출 전용 안내 문구 추가 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/index-dev.html`, `loan-checker/index.html` / `✅ 대출 옵션이 뭔가요?` 섹션 블랙찬스 항목 아래 `option-guide-note` 스타일 문구 추가 |
| T-049 | [대출 검사기] 이벤트 대출 안내 문구 변경 (DEV+PRD) | ✅ `9be63f3` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-049** | WT-061 | W-051 | `9be63f3` | **테스트 완료(DONE)** | **[대출 검사기] 이벤트 대출 안내 문구 변경 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/index-dev.html`, `loan-checker/index.html` / `eventGuideName` 정적+JS 4곳 — `원리포 상품 원금 미션(1%)` → `모든 미션이 인하!` |
| T-050 | [대출 검사기] 악성 연체자 여부 → 악성 연체 여부 문구 수정 (DEV+PRD) | ✅ `402cfcb` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-050** | WT-062 | W-052 | `402cfcb` | **테스트 완료(DONE)** | **[대출 검사기] 악성 연체자 여부 → 악성 연체 여부 문구 수정 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/index-dev.html`, `loan-checker/index.html` / `악성 연체자 여부를 확인합니다.` → `악성 연체 여부를 확인합니다.` |
| T-051 | [대출 검사기] 신용정보조회 비용 → 신용조회비용 문구 수정 (DEV+PRD) | ✅ `14858ff` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-051** | WT-063 | W-053 | `14858ff` | **테스트 완료(DONE)** | **[대출 검사기] 신용정보조회 비용 → 신용조회비용 문구 수정 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/index-dev.html`, `loan-checker/index.html` / `👍 신용정보조회 비용을 현금 부담 없이 포인트로 해결해요!` → `👍 신용조회비용을 현금 부담 없이 포인트로 해결해요!` |
| T-052 | [대출 검사기] 이모지 포인트의 매직 → 포인트의 매직 문구 수정 (DEV+PRD) | ✅ `05364a5` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-052** | WT-064 | W-054 | `05364a5` | **테스트 완료(DONE)** | **[대출 검사기] 이모지 포인트의 매직 → 포인트의 매직 문구 수정 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/index-dev.html`, `loan-checker/index.html` / `✨ 이모지 포인트의 매직!` → `✨ 포인트의 매직!` |
| T-053 | [대출 검사기] 체크리스트 1단계 7월 썸머 베케이션 문구 수정 | ✅ `c9a20db` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-053** | WT-065 | W-055 | `c9a20db` | **테스트 완료(DONE)** | **[대출 검사기] 체크리스트 1단계 4월 잔인한 달 → 7월 썸머 베케이션 문구 수정** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/app.js` / `⓵ 4️⃣🈷️ 잔인한 달 🩸 대출 신청` → `⓵ 4️⃣ 7️⃣🈷️ 썸머 🏖️베케이션 대출 신청` (line 1376) |
| T-054 | [대출 검사기] 이벤트 대출 혜택 설명 문구 수정 (파격 인하 포함) | ✅ `4e89da1` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-054** | WT-066 | W-056 | `4e89da1` | **테스트 완료(DONE)** | **[대출 검사기] 이벤트 대출 혜택 설명 문구 수정** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/app.js` / `빠른 대출과 원리포 상품 원금 미션(1%)!` → `빠른 대출과 크레딧 미션 할인 & 원금 미션 파격 인하(1%)!` (회차 수정 반영) |
| T-055 | [대출 검사기] 크레딧 미션 할인 없음 → 인하 레이블 변경 | ✅ `c9a20db` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-055** | WT-067 | W-057 | `c9a20db` | **테스트 완료(DONE)** | **[대출 검사기] 크레딧 미션 할인 없음 → 인하 레이블 변경** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/app.js` / 0% 할인 시 "할인 없음" → "인하" (line 1290, 1491) |
| T-056 | [대출 검사기] ⓸ 검토 시작 경고 문구 수정 (익일 명시, ⚠️3개→2개) | ✅ `c9a20db` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-056** | WT-068 | W-058 | `c9a20db` | **테스트 완료(DONE)** | **[대출 검사기] ⓸ 검토 시작 경고 문구 수정 (익일 명시, ⚠️3개→2개)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/app.js`, `loan-checker/index-dev.html`, `loan-checker/index.html` / 매일→익일(평일 18:00~22:00), ⚠️⚠️⚠️→⚠️⚠️ |
| T-057 | [대출 검사기] ⓹ 포인트 상환 미션 경고 문구 수정 (⚠️3개→2개, 앱에서는) | ✅ `c9a20db` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-057** | WT-069 | W-059 | `c9a20db` | **테스트 완료(DONE)** | **[대출 검사기] ⓹ 포인트 상환 미션 경고 문구 수정 (⚠️3개→2개, 앱에서는)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/app.js`, `loan-checker/index-dev.html`, `loan-checker/index.html` / 앱에선→앱에서는, ⚠️⚠️⚠️→⚠️⚠️ |
| T-058 | [대출 검사기] 웨이팅 대출 안내 문구 수정 (안 빡셉니다 → 널널합니다) | ✅ `c9a20db` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-058** | WT-070 | W-060 | `c9a20db` | **테스트 완료(DONE)** | **[대출 검사기] 웨이팅 대출 안내 문구 수정 (안 빡셉니다 → 널널합니다)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/index-dev.html`, `loan-checker/index.html` / `포인트 적립이 가장 안 빡셉니다!` → `포인트 적립이 가장 널널합니다!` |
| T-059 | [대출 검사기] CTA 신청하기 버튼 문구 7월 전환 | ✅ `c9a20db` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-059** | WT-071 | W-061 | `c9a20db` | **테스트 완료(DONE)** | **[대출 검사기] CTA 신청하기 버튼 문구 7월 전환** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/month-config.js`, `loan-checker/index-dev.html`, `loan-checker/index.html` / `🏖️ 썸머 베케이션 대출 신청하기 →` → `7️⃣🈷️ 썸머🏖️ 베케이션 대출 신청하기 →` |
| T-060 | [대출 검사기] 웨이팅/롸잇나우/블랙찬스 크레딧 미션 기본값 4,500포 통일 | ✅ `c9a20db` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-060** | WT-072 | W-062 | `c9a20db` | **테스트 완료(DONE)** | **[대출 검사기] 웨이팅/롸잇나우/블랙찬스 크레딧 미션 기본값 4,500포 통일** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/app.js` / `parsePointSummaryTable` 내 비이벤트 대출 baseCreditPoints → 4,500 오버라이드, creditDiscountPoints·totalPoints 동적 재계산 |
| T-061 | [대출 검사기] result-panel 위치 이동 (CTA 버튼↔법적 고지 사이) | ✅ `4e89da1` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-061** | WT-074 | W-063 | `4e89da1` | **테스트 완료(DONE)** | **[대출 검사기] result-panel 위치 이동 (CTA 버튼↔법적 고지 사이)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/index-dev.html`, `loan-checker/index.html` / result-panel을 `</main>` 이전으로 이동 — legal-shared.js `beforeend` 삽입 앞 배치 (DEV+PRD) |
| T-062 | [대출 검사기] ⑥ 개인 정보 아래 ⑦ 대표 거절 사유 박스 추가 (DEV+PRD) | ✅ `4e89da1` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-062** | WT-075 | W-064 | `4e89da1` | **테스트 완료(DONE)** | **[대출 검사기] ⑥ 개인 정보 아래 ⑦ 대표 거절 사유 박스 추가 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/index-dev.html`, `loan-checker/index.html` / form 내 ⑥ 섹션 아래 ⑦ ⚠️ 대표 거절 사유 섹션 신규 추가 (통신비 미납·CB 연체·채무조정) |
| T-063 | [대출 검사기] 이벤트 대출 시 크미 인하 비율% 표시 | ✅ `4e89da1` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-063** | WT-076 | W-065 | `4e89da1` | **테스트 완료(DONE)** | **[대출 검사기] 이벤트 대출 시 크미 인하 비율% 표시** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/app.js` / 이벤트 대출 summaryCredit → "크미 인하 (X.X%) : 4,500🅿" 금액별 비율 (10만 4.5%, 20만 2.25%, 30만 1.5%) |
| T-064 | [대출 검사기] result-panel pointHintBox 아래 대표 거절 사유 박스 추가 (DEV+PRD) | ✅ `4e89da1` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-064** | WT-077 | W-066 | `4e89da1` | **테스트 완료(DONE)** | **[대출 검사기] result-panel pointHintBox 아래 대표 거절 사유 박스 추가 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/index-dev.html`, `loan-checker/index.html` / 😓 포인트 빡세다 섹션 아래 ⑦ ⚠️ 대표 거절 사유 박스 삽입 (통신비 미납·CB 연체·채무조정) |
| T-065 | [대출 검사기] 이벤트 대출 원금 미션 "파격 인하" 텍스트 추가 | ✅ `4e89da1` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `7149ee2` | ✅ Pages run `28696555200` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 6개 파일 main 반영, live 확인 완료 |
| **T-065** | WT-073 | W-067 | `4e89da1` | **테스트 완료(DONE)** | **[대출 검사기] 이벤트 대출 원금 미션 "파격 인하" 텍스트 추가** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/app.js` / 이벤트 대출 선택 시 principalRateLine·step5Principal·summaryPrincipal → "파격 인하, 1%" 표시 |
| T-066 | [7월 대출 페이지] 웨이팅 섹션 CTA 위 ⚠️ 대표 거절 사유 박스 추가 (DEV+PRD) | ✅ `67d7575` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `03f4532` | ✅ Pages run `28698224571` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, 2026-07 2개 파일 main 반영, live 확인 완료 |
| **T-066** | WT-079 | W-068 | `67d7575` | **테스트 완료(DONE)** | **[7월 대출 페이지] 웨이팅 섹션 CTA 위 ⚠️ 대표 거절 사유 박스 추가 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`2026-07/index-dev.html`, `2026-07/index.html` / 🔻 웨이팅 섹션 `</ol>` 다음 · CTA 버튼 전 ⚠️ 대표 거절 사유 삽입 — 팝업 UI(`block/eyebrow/reject/reject__ic/reject__t` 클래스) 동일 구조 |
| T-067 | [7월 대출 페이지] 더블제로🆓챌린지 출시 예정 안내 문구 추가 (DEV+PRD) | ✅ `edfe923` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `03f4532` | ✅ Pages run `28698224571` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, 2026-07 2개 파일 main 반영, live 확인 완료 |
| **T-067** | WT-080 | W-069 | `edfe923` | **테스트 완료(DONE)** | **[7월 대출 페이지] 더블제로🆓챌린지 출시 예정 안내 문구 추가 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`2026-07/index-dev.html`, `2026-07/index.html` / 본문 `더블제로🆓챌린지를 준비했습니다. 🌊⛱️` 다음 `<br><small>* 더블제로🆓챌린지 : 2026년 7월 15일 이후 출시 예정</small>` 추가 |
| T-068 | [대출 검사기] ⑦ 대표 거절 사유 불릿 리스트 → 번호 박스 형식 변경 (DEV+PRD) | ✅ `d212422` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `742e478` | ✅ Pages run `28698860397` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, loan-checker 3개 파일 main 반영, live 확인 완료 |
| **T-068** | WT-081 | W-070 | `d212422` | **테스트 완료(DONE)** | **[대출 검사기] ⑦ 대표 거절 사유 3개 항목 불릿 → 번호 박스 형식 변경 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`loan-checker/index-dev.html`, `loan-checker/index.html` / form 내 ⑦ 섹션 + result-panel rejectionBox 두 곳 `<ul>` 불릿 → reject 박스 클래스(`reject/reject__ic/reject__t`) 변경 + CSS 추가 |
| T-069 | [신청 폼] apply-dev.html 결과 페이지 카톡 버튼 아래 ⚠️ 대표 거절 사유 박스 추가 (DEV+PRD) | ✅ `3aaabc6` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `f92c181` | ✅ Pages run `28699397803` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, apply 2개 파일 main 반영, live 확인 완료 |
| **T-069** | WT-082 | W-071 | `3aaabc6` | **테스트 완료(DONE)** | **[신청 폼] apply-dev.html 결과 페이지 카톡 버튼 아래 ⚠️ 대표 거절 사유 박스 추가** | 쮸티12-1호 | 2026-07-04 | 【파일】`apply/apply-dev.html` / `.kakao-row` div 다음 ⚠️ 대표 거절 사유 박스 삽입 — 팝업 UI 톤&매너(`block/eyebrow/reject/reject__ic/reject__t` 클래스) |
| T-070 | [메인 페이지] 대출 가능성 검사기 박스 숨김 해제 (DEV+PRD) | ✅ `be22aee` | ✅ PR#24 | 검증완료 | ✅ 선별반영 `78bb8fa` | ✅ Pages run `28699720665` | 쮸티12-1호 | 2026-07-04 | PR#24 선별반영, index.html/index-dev.html main 반영, live 확인 완료 |
| **T-070** | WT-083 | W-072 | `be22aee` | **테스트 완료(DONE)** | **[메인 페이지] 대출 가능성 검사기 박스 숨김 해제 (DEV+PRD)** | 쮸티12-1호 | 2026-07-04 | 【파일】`index-dev.html`, `index.html` / `checker-card` div `style="display:none"` 제거 |
| T-071 | [레포 통합] monthly-loan → sirjuseyoWeb 파일 복사 (W-073) | ✅ `826ba57`+`f9c63d4` | ✅ PR#13 선별반영 closed | 검증완료 | ✅ 선별반영 `9ee3371` | ✅ Pages run `29523973769` | 쮸티12-1호 | 2026-07-17 | PR#13 선별반영 closed, main `9ee3371`, Pages run `29523973769` live 확인 완료 |
| **T-071** | WT-084 | W-073 | `826ba57`+`f9c63d4` | **검증완료** | **[레포 통합] sirjuseyoWeb에 monthly-loan-repo 파일 복사 (로컬 통합)** | 쮸티12-1호 | 2026-07-17 | 【파일】`sirjuseyoWeb/` 전체 / STEP2: 기존 홈 3개→`/home/` 이동(`826ba57`) / STEP3: rsync 복사 + G1 판정(js/legal-shared.js·footer.js monthly-loan 버전)(`f9c63d4`) / 대표이사 로컬 테스트 완료 / main `9ee3371` / PR#13 선별반영 closed / Pages run `29523973769` / live 확인 완료 |
| T-072 | [햄버거 메뉴] menu.js + 1Depth 메뉴 UI 구현 (W-077) | ✅ `0d26a54` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-17 | js/menu.js 신규, sirjuseyo/ 폴더명 변경, index-dev.html nav 제거 + menu.js 적용, z-index 10001·10002, 햄버거 버튼 2rem |
| **T-072** | WT-085 | W-077 | `0d26a54` | **테스트 완료(DONE)** | **[햄버거 메뉴] menu.js + 1Depth 메뉴 UI 구현** | 쮸티12-1호 | 2026-07-17 | 【파일】`js/menu.js` (신규), `sirjuseyo/` (폴더명 변경), `index-dev.html` / IIFE 패턴 1Depth 7개 메뉴 + 드로어 UI, z-index 10001·10002, 햄버거 버튼 2rem |
| T-073 | [메인 DEV 팝업] 재노출 방지 활성화 하루 1회 (W-078) | ✅ `9bf803d` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-17 | index-dev.html localStorage sjy_popup_hidden 체크·저장 로직 추가 |
| **T-073** | WT-086 | W-078 | `9bf803d` | **테스트 완료(DONE)** | **[메인 DEV 팝업] 재노출 방지 활성화 (하루 1회)** | 쮸티12-1호 | 2026-07-17 | 【파일】`index-dev.html` / localStorage `sjy_popup_hidden` 체크·저장 로직 추가 — PRD와 동일 방식 |
| T-074 | [햄버거 메뉴] menu.js B안 디자인 적용 | ✅ `e833bdc` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-20 | #sjy-menu * 리셋 선택자 우선순위 충돌 수정 — 코덱스 진단, 카드 padding/margin 0 덮어쓰기 버그 해결 |
| **T-074** | WT-087 | W-079 | `e833bdc` | **테스트 완료(DONE)** | **[햄버거 메뉴] menu.js B안 디자인 적용** | 쮸티12-1호 | 2026-07-17 | 【파일】`js/menu.js` / 드로어 헤더 보라 배경+"메뉴를 선택하세요.", 카드 타일 아이템, 이모지 박스, 화살표 / 메뉴명 "써주세요.가 뭔데?" / #sjy-menu * 리셋 선택자 충돌 수정(코덱스 진단) — 카드 padding/margin 0 덮어쓰기 버그 해결 |
| T-075 | [햄버거 메뉴] menu.js 햄버거 버튼 CSS span 방식 변경 + 크기 확대 | ✅ `5813f2c` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-20 | ≡ 유니코드 → span 3개 CSS 방식, 28px/3px/6px — 나노크레딧 방식 참고 |
| **T-075** | WT-088 | W-080 | `5813f2c` | **테스트 완료(DONE)** | **[햄버거 메뉴] menu.js 햄버거 버튼 CSS span 방식 변경 + 크기 확대** | 쮸티12-1호 | 2026-07-20 | 【파일】`js/menu.js` / `≡` 유니코드 → `<span>` 3개 CSS 방식, 선 28px×3px/gap 6px/보라 #380097 |
| T-076 | [나노크레딧] 레이아웃 앱 사이즈 전환 | ✅ `c3638fe` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-21 | nanocredit/index.html body max-width:480px 추가 |
| **T-076** | WT-089 | W-075 | `c3638fe` | **테스트 완료(DONE)** | **[나노크레딧] 레이아웃 앱 사이즈 전환** | 쮸티12-1호 | 2026-07-21 | 【파일】`nanocredit/index.html` / body에 `max-width:480px; margin:0 auto` 추가 |
| T-077 | [나에게 맞는 대출 방식] 레이아웃 앱 사이즈 전환 | ✅ `c3638fe` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-21 | loan-match/index.html body max-width:480px 추가 |
| **T-077** | WT-090 | W-076 | `c3638fe` | **테스트 완료(DONE)** | **[나에게 맞는 대출 방식] 레이아웃 앱 사이즈 전환** | 쮸티12-1호 | 2026-07-21 | 【파일】`loan-match/index.html` / body에 `max-width:480px; margin:0 auto` 추가 |
| T-078 | [나노크레딧] nanocredit/index-dev.html 신규 생성 | ✅ `954c9ad` | ✅ PR#14 dev fc97aae | 진행중 | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-21 | PRD 복사 + DEV 배너 삽입 |
| **T-078** | WT-091 | W-082 | `954c9ad` | **진행중(In-Progress)** | **[나노크레딧] nanocredit/index-dev.html 신규 생성** | 쮸티12-1호 | 2026-07-21 | 【파일】`nanocredit/index-dev.html` / PRD 복사 + `<body>` 직후 DEV 오렌지 배너(#FF5400) 삽입 |
| T-079 | [나에게 맞는 대출 방식] loan-match/index-dev.html 신규 생성 | ✅ `954c9ad` | ✅ PR#14 dev fc97aae | 진행중 | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-21 | PRD 복사 + DEV 배너 삽입 |
| **T-079** | WT-092 | W-083 | `954c9ad` | **진행중(In-Progress)** | **[나에게 맞는 대출 방식] loan-match/index-dev.html 신규 생성** | 쮸티12-1호 | 2026-07-21 | 【파일】`loan-match/index-dev.html` / PRD 복사 + `<body>` 직후 DEV 오렌지 배너(#FF5400) 삽입 |
| T-080 | [menu-dev.js] DEV 전용 메뉴 JS 신규 생성 + 전체 DEV 파일 적용 | ✅ `6015e2b` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-21 | js/menu-dev.js 신규 + DEV 파일 7개 적용 |
| **T-080** | WT-093 | W-084 | `6015e2b` | **테스트 완료(DONE)** | **[menu-dev.js] DEV 전용 메뉴 JS 신규 생성 + 전체 DEV 파일 적용** | 쮸티12-1호 | 2026-07-21 | 【파일】`js/menu-dev.js`(신규) + DEV 파일 7개 `menu.js`→`menu-dev.js` 교체 |
| T-081 | [팝업 오버레이] 내비바 가림 문제 수정 — top:52px | ✅ `61bb08b` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-22 | js/popup.js inset:0 → inset:52px 0 0 0 |
| **T-081** | WT-096 | W-087 | `61bb08b` | **테스트 완료(DONE)** | **[팝업 오버레이] 내비바 가림 문제 수정 — top:52px** | 쮸티12-1호 | 2026-07-22 | 【파일】`js/popup.js` / `#sjy-overlay` CSS `inset:0` → `inset:52px 0 0 0` |
| T-082 | [전체 팝업] popup.js IIFE 분리 + ID 충돌 수정 | ✅ `61bb08b` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-22 | popup.js 신규, menu #sjy-menu-overlay ID 변경, index-dev.html OLD 팝업 254줄 제거 |
| **T-082** | WT-095 | W-086 | `61bb08b` | **테스트 완료(DONE)** | **[전체 팝업] popup.js 신규 생성 + 전체 페이지 적용 + KST 날짜 수정** | 쮸티12-1호 | 2026-07-22 | 【파일】`js/popup.js`(신규), `js/menu.js`, `js/menu-dev.js`, `sirjuseyo/index-dev.html`, `apply/apply.html` / IIFE 팝업 JS 분리, #sjy-overlay ID 충돌 해결(menu→#sjy-menu-overlay), index-dev.html OLD 팝업 254줄 제거, apply.html menu.js 연결 |
| T-083 | [꿀정보] tip/index.html + tip/index-dev.html 신규 생성 | ✅ `38da632` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-22 09:50 | tip/ 폴더 신규, popup.js·menu-dev.js·legal-shared.js 연결, DEV 배너 삽입 |
| **T-083** | WT-097 | W-088 | `38da632` | **테스트 완료(DONE)** | **[꿀정보] tip/index.html + index-dev.html 신규 생성** | 쮸티12-1호 | 2026-07-22 | 【파일】`tip/index.html`(신규), `tip/index-dev.html`(신규) / 목업 기반, .page 클래스 추가, popup.js 연결, DEV 배너 삽입 |
| T-084 | [UI 통일] legal-shared.js 상단 고지 풀사이즈 통일 | ✅ `9c117ea` `e73d94b` `222ce6d` `fad4793` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-22 | 총 4커밋 / 회차1: legal-shared.js 수정 / 회차수정: DEV 바 컨테이너 이동 + nanocredit·loan-match legal-shared.js 교체 / 회차수정2: DEV 바 body 직하위 이동(overflow:hidden 대응) / 회차수정3: DEV 바 감지 로직 복원 + 월별 대출 padding-top 제거 |
| **T-084** | WT-098 | W-089 | `9c117ea` `e73d94b` `222ce6d` `fad4793` | **테스트 완료(DONE)** | **[UI 통일] legal-shared.js 상단 고지 풀사이즈 통일 (총 4커밋 / 3회차 수정)** | 쮸티12-1호 | 2026-07-22~25 | 【파일】`js/legal-shared.js`, `index-dev.html`, `sirjuseyo/index-dev.html`, `2026-07/index-dev.html`, `challenge/index-dev.html`, `tip/index-dev.html`, `nanocredit/index-dev.html`, `loan-match/index-dev.html` / 회차1: 방향 오류(width:100vw) → 회차수정: DEV 바 컨테이너 이동+nanocredit·loan-match footer.js→legal-shared.js / 회차수정2: overflow:hidden 대응 DEV 바 body 직하위 이동 / 회차수정3: DEV 바 감지 로직 복원+월별 대출 padding-top 제거 |
| T-085 | [UI 통일] W-090 tip→loan-checker DEV 링크 수정 | ✅ `3d9e7e4` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-25 05:30 | tip/index-dev.html href="/loan-checker/" → "/loan-checker/index-dev.html" |
| **T-085** | WT-099 | W-090 | `3d9e7e4` | **테스트 완료(DONE)** | **[UI 통일] tip→loan-checker DEV 링크 수정** | 쮸티12-1호 | 2026-07-25 05:30 | 【파일】`tip/index-dev.html` / href="/loan-checker/" → "/loan-checker/index-dev.html" / 꿀정보→대출 가능성 검사기 PRD 연결 버그 수정 |
| T-086 | [UI 통일] W-091 ← 버튼 통합 + 크기·센터 + apply data-back | ✅ `95a9815` `e671798` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-25 06:05 | menu.js·menu-dev.js ← 1.8rem·sjy-has-back 로고 센터 / apply PRD·DEV data-back 추가 / 14개 하위 페이지 data-back / nanocredit·loan-match 기존 BACK 제거 |
| **T-086** | WT-100 | W-091 | `95a9815` `e671798` | **테스트 완료(DONE)** | **[UI 통일] W-091 ← 버튼 통합 + 크기·센터 + apply data-back (회차수정 포함)** | 쮸티12-1호 | 2026-07-25 06:05 | 【파일】`js/menu.js`, `js/menu-dev.js`, `apply/apply.html`, `apply/apply-dev.html`, 하위14개 / 1차: ← data-back 통합 + 14개 페이지 추가 + nanocredit·loan-match 기존 BACK 제거 / 회차수정: ← 크기 1.8rem + sjy-has-back 로고 센터 + apply data-back 추가 |
| T-087 | [UI 통일] W-092 PRD footer.js → legal-shared.js 교체 | ✅ `c88a8ad` `d4ec4a9` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-25 07:14 | loan-match·nanocredit PRD body class="page" 추가 + legal-shared.js 연결 / 상단·하단 법적 고지 정상 표시 확인 |
| **T-087** | WT-101 | W-092 | `c88a8ad` `d4ec4a9` | **테스트 완료(DONE)** | **[UI 통일] W-092 PRD footer.js → legal-shared.js 교체 (회차수정 포함)** | 쮸티12-1호 | 2026-07-25 07:14 | 【파일】`loan-match/index.html`, `nanocredit/index.html` / footer.js 주석 처리 + legal-shared.js 추가 / 회차수정: body class="page" 누락 추가 |
| T-088 | [UI 통일] 상단 고지↔콘텐츠 간격 규격 통일 | ✅ `c69f2c9` `c401d33` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-25 07:59 | legal-shared.js margin-bottom 20px→40px + index.html h1 padding-top 0 — 전 페이지 gap 40px 통일 |
| **T-088** | WT-102 | W-094 | `c69f2c9` `c401d33` | **테스트 완료(DONE)** | **[UI 통일] W-094 상단 고지↔콘텐츠 간격 통일 — margin-bottom 40px 규격 통일 (회차수정)** | 쮸티12-1호 | 2026-07-25 07:59 | 【파일】`js/legal-shared.js` margin-bottom 20px→40px / `index.html` h1 padding-top 20px→0 — 박스·텍스트 페이지 gap 40px 규격 통일 |
| T-089 | [UI 통일] JS 연결 순서 표준화 | ✅ `e2fb46b` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-25 14:08 | tip/index-dev.html 순서 교체 + challenge/index-dev.html legal-shared.js 이동·중복 제거 |
| T-090 | [PRD 레이아웃] loan-checker PRD 앱 사이즈 480px 적용 | ✅ `412c3c2` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-25 20:54 | loan-checker/index.html <head> 인라인 스타일 추가 — .app-main max-width:480px DEV와 동일 |
| T-091 | [PRD 정합] 대출 가능성 검사기 PRD → DEV 정합 (이미지 제거 + 1열) | ✅ `aee1e72` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-25 21:14 | loan-checker/index.html — ①loan-eligibility-checker-02.jpg display:none 숨김 ②.form-grid 1열 인라인 추가, DEV와 동일, styles.css 무수정 |
| T-092 | [DEV 배너 정합] loan-checker DEV 바 앱 사이즈(480px) + 스크롤 고정 | ✅ `b549c35` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-25 21:50 | loan-checker/index-dev.html — DEV 배너 div에 position:sticky;top:52px;z-index:10000;max-width:480px;margin:0 auto; 5속성 추가, tip/challenge 규격 정합, DEV 전용 |
| T-093 | [DEV 배너 정합] nanocredit·loan-match DEV 바 앱 사이즈(480px) 고정 | ✅ `4fef5cf` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-25 22:05 | nanocredit/index-dev.html, loan-match/index-dev.html — 두 배너 div에 max-width:480px;margin:0 auto; 2속성 추가, 전 DEV 배너 규격 통일, DEV 전용 |
| T-094 | [디렉토리 개편 1단계] 월별대출 2026-04~07 + apply → monthly-loan/ 하위 통합 | ✅ `bc93486` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-25 22:45 | git mv 5개(`2026-04/05/06/07`,`apply/` → `monthly-loan/`) + 참조 수정 다수: index(-dev).html, menu(-dev).js, loan-checker, challenge, nanocredit, monthly-loan/apply, 2026-06 / 스테일 도메인 → 루트 상대경로 통일 |
| T-095 | [잠복 버그 수정] menu.js·menu-dev.js `history.back()` → `window.history.back()` 한정 | ✅ `af48274` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-26 | js/menu.js, js/menu-dev.js — apply.html `const history=[]` shadowing 버그 수정, 2파일 105행 `window.history.back()` 한정 |
| T-096 | [디렉토리 개편 3단계] apply-review·loan-checker·unsuspend → tip/ 하위 통합 | ✅ `69e20e2` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-26 | git mv 3개 + 참조 수정 7건: index(-dev).html, tip/index(-dev).html, tip/unsuspend/index.html img 4곳 |
| T-097 | [메뉴 드로어] 헤더 풀사이즈 → 앱 사이즈(480px) 고정 | ✅ `2ffda52` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-26 | #sjy-drawer-head에 max-width:480px;margin:0 auto;width:100% 추가 |
| T-098 | [메뉴 드로어] 드로어 본체 480px 제한 — PC 전체 화면 덮음 수정 (B안) | ✅ `95b6cf0` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-26 | #sjy-drawer left:50%;max-width:480px + translateX(calc(50vw+10px)→-50%) / 회차수정: 200%→vw단위 |
| T-099 | [나노크레딧] 상품 상세 페이지 전면 개편 (10/20/30/50 — 4개 파일) | ✅ `af2879c` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-26 | nanocredit/10·20·30·50 전면 개편: ①써주세요. title ②body 480px ③구 nav CSS 제거 ④class=page+data-back=/nanocredit/ ⑤nav HTML 제거 ⑥CTA→/monthly-loan/2026-07/ ⑦popup.js+menu.js+legal-shared.js / 회차수정: class=page+popup.js+legal-shared.js 추가(`b50cd97`) |
| T-100 | [나노크레딧] "이 달의 대출 신청하러 가기" 링크 수정 (PRD+DEV) | ✅ `29a7ec0` | ✅ PR#14 dev fc97aae | 테스트 완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-26 | nanocredit/index.html href="/"→"/monthly-loan/2026-07/" / nanocredit/index-dev.html href="/index-dev.html"→"/monthly-loan/2026-07/index-dev.html" |
| **T-119** | [원리포 혜택] 원리포 상품의 메리트 페이지 신규 생성 | ✅ `4cc5c56` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-30 | tip/wonripo/index.html·index-dev.html 신규 / assets 이미지2종 / tip/index 02번 href 연결 / Pretendard·팝업3종·CURRENT_MONTH 동적링크 |
| **T-120** | [원리포 계산기] calculator.html 신규 생성 + index 링크 변경 | ✅ `34c81ad` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-30 | tip/wonripo/calculator.html·calculator-dev.html 신규 / index 계산기 링크 자체 페이지로 교체 |
| **T-121** | [원리포 계산기] UI 디테일 수정 3종 | ✅ `3f06a2d` | ✅ PR#14 dev fc97aae | ✅ 테스트완료 | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-30 | 섹션 구분선 / 슬라이더 bubble tooltip / 2개월 선택 불가 경고·3개월+65%미만 경고 분리 |
| **T-122** | [8월 대출] 썸머 베케이션 Ⅱ 기획서 작성 | ✅ `c685ae8` | ✅ PR#14 dev fc97aae | - (문서) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-30 | 기획서 v0.4 완성 / 이미지 에셋 4종 수령·assets 배치 / HTML 작업 착수 예정 |
| **T-123** | [8월 대출] 대출 페이지 index-dev.html 신규 생성 + 8월 전환 | ✅ `b309222` | ✅ PR#14 dev fc97aae | ✅ 테스트완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-31 | ①index-dev.html 신규 ②menu.js·menu-dev.js CURRENT_MONTH='2026-08' ③month-config.js 2026-08 추가 / 사장님 VS Code Live Server 테스트 완료 |
| **T-124** | [8월 대출] 대출 페이지 회차 수정 (9건) | ✅ `519351c` | ✅ PR#14 dev fc97aae | ✅ 테스트완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-31 | ①이벤트박스 안내문구 2개 ②~④h4 3종 변경 ⑤블찬 2곳 교체 ⑥~⑦크레딧미션 수정 ⑧웨이팅h2 변경 ⑨거절사유4번 추가 / 사장님 VS Code Live Server 테스트 완료 |
| **T-125** | [홈 화면] 8월 전환 (7월→8월) | ✅ `487be1e` | ✅ PR#14 dev fc97aae | ✅ 테스트완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-07-31 | ①live-badge 8월 대출 ②gift-box Plane-Luggage_Aug-Loan.png ③메인타이틀 8️⃣🈷️ 썸머 🏝️베케이션 Ⅱ ④href 2026-08 / 사장님 VS Code Live Server 테스트 완료 |
| **T-126** | [대출 검사기] 30만 원 이벤트 대출 비활성 + 문구 수정 | ✅ `a5562d8` | ✅ PR#14 dev fc97aae | ✅ 테스트완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-08-01 | ①30만 원 선택 시 이벤트 대출 disabled ②eventAmountNote 문구 수정 / 사장님 VS Code Live Server 테스트 완료 |
| **T-127** | [대출 검사기] 대표 거절 사유 4번 추가 | ✅ `ded299d` | ✅ PR#14 dev fc97aae | ✅ 테스트완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-08-01 | ①⑦안내섹션 ②결과패널 2곳 / `최근 3개월 이상 무직 또는 과거 6개월 이상 무직` + em `노동 상태와 의지를 중요시 여깁니다.` / 사장님 VS Code Live Server 테스트 완료 |
| **T-128** | [8월 대출 페이지] 대표 거절 사유 4번 문구 수정 | ✅ `6f857fd` | ✅ PR#14 dev fc97aae | ✅ 테스트완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-08-01 | `1년 이내 3개월 이상 무직 또는 과거 6개월 이상 무직` → `최근 3개월 이상 무직 또는 과거 6개월 이상 무직` + em `노동 상태와 의지를 중요시 여깁니다.` / 사장님 VS Code Live Server 테스트 완료 |
| **T-129** | [대출 검사기] 상단 안내 문구 워딩 수정 | ✅ `189ae41` | ✅ PR#14 dev fc97aae | ✅ 테스트완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-08-01 | `대출을 받을 수 있는 [써주세요. 앱…]은` → `[써주세요. 앱…]을` / `이 검사기는` → `대출 가능성 검사기는` / 사장님 VS Code Live Server 테스트 완료 |
| **T-130** | [신청 폼] 7월→8월 워딩 변경 + 이벤트 대출 30만 경고 추가 + 경고 문구 수정 | ✅ `a9b2747` | ✅ PR#14 dev fc97aae | ✅ 테스트완료(DONE) | ✅ DEV선별 cb8a073 | ✅ Pages d864ebc | 쮸티12-1호 | 2026-08-01 | ①워딩 3곳 7→8월 ②selectMethodEvent 30만 경고 조건 추가 ③warn-method-amount `10,20,30만`→`10,20만` / 사장님 VS Code Live Server 테스트 완료 |
| **T-131** | [대출 검사기] 상단 concept-image 이미지 교체 (징검다리 배낭 남성 — 8월) | ✅ `b7416d2` | ✅ PR#15 dev `fb221c7` | ✅ 테스트완료(DONE) / DEV preview `2841322` Pages `30737589543` | - | - | 쮸티12-1호 | 2026-08-02 | `stepping-stones-aug-001.png` 신규 추가 / concept-image 텍스트→img 교체 / 사장님 VS Code Live Server 테스트 완료 |
| **T-132** | [대출 검사기] tone-note 박스 스타일 3종 수정 | ✅ `a66b8c3` | ✅ PR#15 dev `fb221c7` | ✅ 테스트완료(DONE) / DEV preview `2841322` Pages `30737589543` | - | - | 쮸티12-1호 | 2026-08-02 14:14 | ①border-right 4px 보라 추가(좌우 동일) ②배경 연보라 rgba(56,0,151,0.04) ③title 0.95→1.1rem ④body 0.95→1rem / 사장님 VS Code Live Server 테스트 완료 |
| **T-133** | [대출 검사기] 시계 박스 ↔ tone-note 박스 순서 교체 | ✅ `2d93a00` | ✅ PR#15 dev `fb221c7` | ✅ 테스트완료(DONE) / DEV preview `2841322` Pages `30737589543` | - | - | 쮸티12-1호 | 2026-08-02 02:28 | 이미지→시계→tone-note → 이미지→tone-note→시계 순서 변경 / index-dev.html, index.html 동시 적용 / 사장님 VS Code Live Server 테스트 완료 |
| **T-134** | [팝업] 8월 대출 작업 동기화 2종 | ✅ `ed8ec27` | ✅ PR#15 dev `fb221c7` | ✅ 테스트완료(DONE) / DEV preview `2841322` Pages `30737589543` | - | - | 쮸티12-1호 | 2026-08-02 03:20 | ①거절 사유 4번 추가(최근 3개월 이상 무직 또는 과거 6개월 이상 무직) ②30만 원 이벤트 대출 상품 없음 / 사장님 VS Code Live Server 테스트 완료 |
| **T-135** | [긴급/Android] 헤더 가로 오버플로우 + 드로어 노출 버그 수정 | ✅ `ba78afb` | ✅ PR#15 dev `fb221c7` | ✅ 테스트완료(DONE) / DEV preview `2841322` Pages `30737589543` | - | - | 쮸티12-1호 | 2026-08-02 03:20 | `#sjy-nav-bar`·`#sjy-drawer` width:100%→width:100vw / menu.js·menu-dev.js 각 2곳 / 사장님 VS Code Live Server 테스트 완료 |
| **T-136** | [신청 폼] 대출 가능성 검사기 안내 박스 추가 | ✅ `f78b872` | ✅ PR#15 dev `fb221c7` | ✅ 테스트완료(DONE) / DEV preview `2841322` Pages `30737589543` | - | - | 쮸티12-1호 | 2026-08-02 04:06 | h1 아래 .apply-note 박스 삽입 / 8월 대출·나노크레딧 신청 전 검사기 이용 안내 + 경로 / apply-dev.html·apply.html 동시 적용 / 사장님 VS Code Live Server 테스트 완료 |
| **T-137** | [loan-match] DEV 환경 미적용 페이지 수정 (즉시빌리기 PRD링크 + 여유있게빌리기 DEV화) | ✅ `1aee714` | ✅ PR#15 dev `fb221c7` | ✅ 테스트완료(DONE) / DEV preview `2841322` Pages `30737589543` | - | - | 쮸티12-1호 | 2026-08-02 | ①index-dev.html 즉시빌리기 href PRD→DEV(nanocredit/index-dev.html) ②index-dev.html 여유있게빌리기 browse.html→browse-dev.html ③browse-dev.html 신규 생성(앱사이즈+DEV배너+메뉴바+상·하단고지) / body class="page" 누락·상단BACK버튼 중복 수정 포함 / 사장님 VS Code Live Server 테스트 완료 |
| **T-138** | [loan-match] 결과 카드 4개 페이지 DEV 버전 생성 | ✅ `7ec6e35` / `dbf0f1f` | ✅ PR#15 dev `fb221c7` | ✅ 테스트완료(DONE) / DEV preview `2841322` Pages `30737589543` | - | - | 쮸티12-1호 | 2026-08-02 | ①credit-dev.html 신규(credit.html 기반 DEV화) ②shopping-dev.html 신규(shopping.html 기반 DEV화) ③reputation-dev.html 신규(PRD없음, 준비중) ④contribution-dev.html 신규(PRD없음, 준비중) ⑤browse-dev.html 카드링크 DEV화 / 회차수정: browse-dev.html 하단BACK버튼 삭제(`dbf0f1f`) / 사장님 VS Code Live Server 테스트 완료 |
| T-139 | [8월 대출] monthly-loan/2026-08/index.html PRD 신규 생성 (Ser7-1호 보정 동기화) | ✅ `41913a1` | - | ⏳ 진행중 | - | - | 쮸티12-1호 | 2026-08-02 | `monthly-loan/2026-08/index.html` 신규 / Ser7-1호 긴급 보정(main `d864ebc`) 로컬 동기화 |
| T-140 | [credit-dev.html] CTA 버튼 준비 중 팝업 | ✅ `9f35b6f` | ✅ PR#15 dev `fb221c7` | ✅ 테스트완료(DONE) / DEV preview `2841322` Pages `30737589543` | - | - | 쮸티12-1호 | 2026-08-02 | `loan-match/credit-dev.html` / CTA onclick openReadyPopup() + 준비 중 인라인 모달 + JS / 사장님 VS Code Live Server 테스트 완료 |
| T-141 | [shopping-dev.html] CTA 버튼 준비 중 팝업 (Tally 교체) | ✅ `9f35b6f` | ✅ PR#15 dev `fb221c7` | ✅ 테스트완료(DONE) / DEV preview `2841322` Pages `30737589543` | - | - | 쮸티12-1호 | 2026-08-02 | `loan-match/shopping-dev.html` / Tally 링크·속성·스크립트 제거 + 준비 중 인라인 모달 + JS / 사장님 VS Code Live Server 테스트 완료 |
| T-142 | [대출 검사기] 콘텐츠 오른쪽 offset + overflow 수정 | ✅ `693966b` | - | ✅ 테스트완료(DONE) | - | - | 쮸티12-1호 | 2026-08-02 | `index-dev.html`+`index.html` form-grid: 1fr→minmax(0,1fr) — 이미지 min-content가 grid 트랙(480px) 초과하던 근본 원인 해결 / DEV·PRD 사장님 테스트 완료 |
| W-042 | [7월 PRD] 홈 index.html + 2026-07/index.html 신규 생성 | ✅ `815964b` | ✅ PR#24 | - | ✅ 선별반영 `cf89006` | ✅ Pages run `28564430240` | 쮸티12-1호 | 2026-07-02 | PR#24 선별반영, `2026-07/index.html` 200 확인 |
| W-043 | [T-039 자산] Palm-Surf_Jul-Loan.png 커밋 추가 | ✅ `84b62f4` | ✅ PR#24 | - | ✅ 선별반영 `cf89006` | ✅ Pages run `28564430240` | 쮸티12-1호 | 2026-07-02 | PR#24 선별반영, `2026-07/assets/Palm-Surf_Jul-Loan.png` 200 확인 |
| **W-085** | WT-094 | W-085 | `d049be8` | **테스트 완료(DONE)** | **[챌린지 대표 페이지] challenge/index.html + index-dev.html 신규 생성** | 쮸티12-1호 | 2026-07-22 | 【파일】`challenge/index.html`(신규), `challenge/index-dev.html`(신규) / 소스: `2026-06/worldcup-challenge` / PRD: menu.js + `/apply/` 절대경로 / DEV: menu-dev.js + DEV배너(sticky) + `/apply/index-dev.html` 절대경로 / 이미지: `/2026-06/worldcup-challenge/assets/` |


---

## ⚠️ 깃 관리자 지시사항 (2026-06-19)

> **`feature/T-001-jun-loan-landing` 브랜치 사용 금지**
> PR #16은 누적 브랜치로 운영 리스크가 커서 이번 요청 건(T-001~T-007)까지만 대상 커밋 선별 반영 후 종료.
> **W-008 / T-008 / WT-008부터는 반드시 새 브랜치 / 새 PR로만 작업 요청할 것.**
> 기존 #16에 추가 커밋을 얹는 방식은 더 이상 받지 않음.

---

## 투두 목록

| T-ID | WT-ID | W-ID | 최종 해시 | 상태 | 작업 타이틀 | 작업자 | 작업일시(연월일 시분) | 비고 |
|---|---|---|---|---|---|---|---|---|
| **T-001** | WT-001 | W-001 | `1339e07` | **진행중(In-Progress)** | **6월 대출 프로모션 페이지 상단·하단 `legal-shared.js` 연결** | 쮸티12-1호 | 2026-06-18 23:00 | 【파일】`2026-06/index.html`, `2026-06/index-dev.html` / wrap 클래스 추가 + footer.js → js/legal-shared.js 교체 |
| **T-002** | WT-002 | W-002 | `6fa6dbb` | **진행중(In-Progress)** | **6월 대출 페이지 PC 좌우 너비 480px 고정** | 쮸티12-1호 | 2026-06-18 23:30 | 【파일】`2026-06/index.html`, `2026-06/index-dev.html` / `.wrap { max-width:480px; margin:0 auto; }` CSS 추가 |
| **T-003** | WT-003 | W-003 | `632e98c` | **진행중(In-Progress)** | **6월 대출 페이지 상단 법적고지 하단 여백 추가** | 쮸티12-1호 | 2026-06-18 23:50 | 【파일】`2026-06/index.html`, `2026-06/index-dev.html` / `.legal-top { margin-bottom: 20px; }` 추가 |
| **T-004** | WT-004 | W-004 | `90e5ae6` | **진행중(In-Progress)** | **6월 대출 페이지 본문 폰트 18px 일괄 통일** | 쮸티12-1호 | 2026-06-19 00:00 | 【파일】`2026-06/index.html`, `2026-06/index-dev.html` / 5개 항목 18px 일괄 수정 |
| **T-005** | WT-005 | W-005 | `6b0e53a` | **완료(Done)** | **6월 대출 페이지 카드 타이틀 폰트 18px 수정** | 쮸티12-1호 | 2026-06-19 00:10 | 【파일】`2026-06/index.html`, `2026-06/index-dev.html` / `.card-title` 1.5rem(24px) → 18px |
| **T-006** | WT-006 | W-006 | `a9fdac0` | **완료(Done)** | **6월 대출 페이지 신청절차 step-icon 빨간 원 크기 축소** | 쮸티12-1호 | 2026-06-19 00:25 | 【파일】`2026-06/index.html`, `2026-06/index-dev.html` / `.step-icon { font-size: 1em, width/height: 1.8em }` |
| **T-007** | WT-007 | W-007 | `e69d2b8` | **완료(Done)** | **6월 대출 페이지 procedure-list 파란 원 크기 축소** | 쮸티12-1호 | 2026-06-19 00:40 | 【파일】`2026-06/index.html`, `2026-06/index-dev.html` / `li::before { font-size: 1.4em → 1em }`, `li { padding-left: 3em → 2.5em }` |
| **T-008** | WT-008 | W-008 | `062433f` | **완료(Done)** | **홈 화면 18px 초과 폰트 18px 통일** | 쮸티12-1호 | 2026-06-19 01:35 | 【파일】`index.html`, `index-dev.html` / `.nav-menu`, `.main-title`, `.checker-icon`, `.worldcup-title` → 18px |
| **T-009** | WT-009 | W-009 | `21f6ed0` | **완료(Done)** | **월드컵 챌린지 페이지 18px 초과 폰트 18px 통일** | 쮸티12-1호 | 2026-06-19 02:20 | 【파일】`2026-06/worldcup-challenge/index-dev.html` / 9개 항목 → 18px (히어로 영역 제외) |
| **T-010** | WT-010 | W-010 | `21f6ed0` | **완료(Done)** | **월드컵 챌린지 페이지 legal-shared.js 연결** | 쮸티12-1호 | 2026-06-19 03:00 | 【파일】`2026-06/worldcup-challenge/index-dev.html`, `index.html` / `.page` 클래스 추가, 하드코딩 footer 제거, `footer.js` → `legal-shared.js` 교체 |
| **T-011** | WT-011 | W-011 | `af8d679` | **검증완료** | **월드컵 챌린지 페이지 법적고지↔콘텐츠 영역 시각적 구분** | 쮸티12-1호 | 2026-06-20 16:00 | 【파일】`2026-06/worldcup-challenge/index-dev.html`, `index.html` / `.legal-top { margin-bottom: 20px; }` 추가 |
| **T-012** | WT-012 | W-012 | `5297575` | **검증완료** | **대출 가능성 검사기 모바일 앱 사이즈 변경** | 쮸티12-1호 | 2026-06-20 16:40 | 【파일】`loan-checker/index-dev.html` / `.app-main` max-width 480px 오버라이드 + `.page` 클래스 추가 |
| **T-013** | WT-013 | W-013 | `5297575` | **검증완료** | **대출 가능성 검사기 법적고지 연결 (상단+하단)** | 쮸티12-1호 | 2026-06-20 16:40 | 【파일】`loan-checker/index-dev.html` / `footer.js` → `legal-shared.js` 교체 |
| **T-014** | WT-014 | W-014 | `5297575` | **검증완료** | **대출 가능성 검사기 법적고지↔콘텐츠 간격** | 쮸티12-1호 | 2026-06-20 16:40 | 【파일】`loan-checker/index-dev.html` / `.legal-top { margin-bottom: 20px; }` 추가 |
| **T-015** | WT-015 | W-015 | `15592a9` | **검증완료** | **대출 가능성 검사기 폼 패널 2열 → 1열 변경** | 쮸티12-1호 | 2026-06-20 16:45 | 【파일】`loan-checker/index-dev.html` / `.form-grid` 2열(repeat(2,1fr)) → 1열 오버라이드 |
| **T-016** | WT-016 | W-016 | `8bac5d8` | **검증완료** | **대출 가능성 검사기 뚝딱 버튼 → 하단 법적고지 위로 이동** | 쮸티12-1호 | 2026-06-20 16:55 | 【파일】`loan-checker/index-dev.html` / `div.action-area`를 `</main>` 안으로 이동 + 상단 여백으로 구분 |
| **T-017** | WT-017 | W-017 | `bd47edb` | **검증완료** | **대출 가능성 검사기 두 번째 이미지 숨김 처리** | 쮸티12-1호 | 2026-06-20 17:00 | 【파일】`loan-checker/index-dev.html` / `hero-banner` 두 번째 `loan-eligibility-checker-02.jpg` `display:none` |
| **T-018** | WT-018 | W-018 | `e16b96f` | **검증완료** | **대출 가능성 검사기 4번째 이미지 → 텍스트 박스 교체** | 쮸티12-1호 | 2026-06-20 17:10 | 【파일】`loan-checker/index-dev.html` / `loan-eligibility-checker-title.jpg` 이미지 → 텍스트박스 ("대출 가능성 검사기 / 지금 바로 확인해 보세요.", 센터정렬, ≤18px) |
| **T-019** | WT-019 | W-019 | `e86d599` | **검증완료** | **대출 가능성 검사기 ①~⑤ 패널 폰트 18px 초과 통일** | 쮸티12-1호 | 2026-06-20 17:20 | 【파일】`loan-checker/index-dev.html` / `.result-panel h2` 브라우저 기본값 24px → 18px (뚝딱 결과 패널 헤딩) |
| **T-020** | WT-020 | W-020 | `ab9eac8` | **검증완료** | **legal-shared.js 서비스 링크 절대경로 수정** | 쮸티12-1호 | 2026-06-26 | 【파일】`js/legal-shared.js` / 서비스 카드 링크 3개 `/privacy/...` → `https://www.sirjuseyo.com/privacy/...` + `target="_blank"` 추가 |
| **T-021** | WT-021 | W-021 | `d586839` | **검증완료** | **[monthly-loan] 하단 법적고지 연체금리 문구 수정** | 쮸티12-1호 | 2026-06-27 | 【파일】`js/legal-shared.js` / `+6%P 이내, 연 18%이내` → `+3%P 이내, 연 15%이내` |
| **T-022** | WT-022 | W-022 | `a1660d1` | **검증완료** | **[sirjuseyoWeb] 하단 법적고지 연체금리 문구 수정** | 쮸티12-1호 | 2026-06-27 | 【파일】`sirjuseyoWeb/js/legal-shared.js` / `+6%P 이내, 연 18%이내` → `+3%P 이내, 연 15%이내` |
| **T-023** | WT-023 | W-023 | `05a34aa` | **검증완료** | **[monthly-loan] footer.js → legal-shared.js 교체 + deprecated 처리** | 쮸티12-1호 | 2026-06-27 | 【파일】`apply/apply.html`, `apply/apply-dev.html`, `loan-checker/index.html`, `2026-06/worldcup-challenge/apply/index.html`, `2026-06/worldcup-challenge/apply/index-dev.html`, `footer.js` |
| **T-024** | WT-024 | W-024 | `47e7965` | **검증완료** | **[monthly-loan] 홈 강제 고지 팝업 추가** | 쮸티12-1호 | 2026-06-29 | 【파일】`index.html`, `index-dev.html` / 팝업 CSS+HTML+Script 주입, PRD: localStorage 재노출 방지(하루 1회), DEV: 비활성화 / PR #19 선별반영 `7954d66` |
| **T-025** | WT-025 | W-025 | `5043427` | **검증완료** | **[sirjuseyoWeb] 홈 강제 고지 팝업 추가 + index-dev.html 신규생성** | 쮸티12-1호 | 2026-06-29 | 【파일】`index.html`(팝업주입), `index-dev.html`(신규생성+팝업), `index-origin.html` / W-024와 동일 팝업, DEV 배너 추가 / PR #12 선별반영 `b830524` |
| **T-026** | WT-026 | W-026 | `47e7965`/`5043427` | **검증완료** | **[팝업 전체] 예시 플로우 문구 2건 수정** | 쮸티12-1호 | 2026-06-29 | 【파일】`index.html`×2, `index-dev.html`×2, `popup-v6.html`, `HANDOVER_v6.md` / ①`선적립(예치)하면` ②불승인 inote 간결화 / T-024(`7954d66`) + T-025(`b830524`) 커밋에 포함 |
| **T-027** | WT-027 | W-027 | `bb3ae48` | **검증완료** | **[팝업 가이드라인] 활용% 개편 + 예시 수치 변경** | 쮸티12-1호 | 2026-06-30 | 【파일】`popup-v6_20260628.html`, `HANDOVER_웹팝업_v6_20260628.md` / ①최소 0.9% ②상품별 활용% 전면 개편(10/20/30/50만원) ③이벤트 구조 변경 ④신용조회비용 4,500원 ⑤예시 15,000P/100,000원/90,000원/15,500P ⑥크레딧 테이블 갱신 |
| **T-028** | WT-028 | W-028 | `98774e5`/`3e0cb64` | **검증완료** | **[팝업 HTML 4개] 활용% 개편 + 예시 수치 변경 반영** | 쮸티12-1호 | 2026-06-30 | 【파일】`monthly-loan/index.html`, `monthly-loan/index-dev.html`, `sirjuseyoWeb/index.html`, `sirjuseyoWeb/index-dev.html` / W-027 동일 변경사항 실제 팝업 HTML 4개 적용 + DEV 바 z-index 10000 수정 포함 |
| **T-091** | WT-104 | W-096 | `aee1e72` | **테스트 완료(DONE)** | **[PRD 정합] 대출 가능성 검사기 PRD → DEV 정합 (이미지 제거 + 1열)** | 쮸티12-1호 | 2026-07-25 21:14 | 【파일】`loan-checker/index.html` / ①loan-eligibility-checker-02.jpg display:none 숨김 ②.form-grid 1열 인라인 추가 — DEV와 동일, styles.css 무수정 |
| **T-092** | WT-105 | W-097 | `b549c35` | **테스트 완료(DONE)** | **[DEV 배너 정합] loan-checker DEV 바 앱 사이즈(480px) + 스크롤 고정** | 쮸티12-1호 | 2026-07-25 21:50 | 【파일】`loan-checker/index-dev.html` / DEV 배너 div에 `position:sticky;top:52px;z-index:10000;max-width:480px;margin:0 auto;` 5속성 추가 — tip/challenge 규격 정합, DEV 전용(PRD 배너 없음) |
| **T-093** | WT-106 | W-098 | `4fef5cf` | **테스트 완료(DONE)** | **[DEV 배너 정합] nanocredit·loan-match DEV 바 앱 사이즈(480px) 고정** | 쮸티12-1호 | 2026-07-25 22:05 | 【파일】`nanocredit/index-dev.html`, `loan-match/index-dev.html` / 두 배너 div에 `max-width:480px;margin:0 auto;` 2속성 추가 (position:sticky는 이미 있었음) — 전 DEV 배너 규격 통일, DEV 전용 |
| **T-094** | WT-107 | W-099 | `bc93486` | **테스트 완료(DONE)** | **[디렉토리 개편 1단계] 월별대출 2026-04~07 + apply → monthly-loan/ 하위 통합** | 쮸티12-1호 | 2026-07-25 22:45 | 【파일】`monthly-loan/`(신규) 하위로 `2026-04/05/06/07`·`apply/` git mv 이동 + 참조 수정: `index(-dev).html`·`js/menu(-dev).js`·`loan-checker(index·index-dev·month-config)`·`challenge(index·index-dev)`·`nanocredit(index·index-dev·10·20·30·50)`·`monthly-loan/apply`·`2026-06` / 스테일 구 도메인(monthly-loan.sirjuseyo.com) 풀 URL → `/monthly-loan/…` 루트 상대경로 통일 / 코드 커밋 `bc93486` — 사장님 테스트 대기 |
| **T-095** | WT-108 | W-100 | `af48274` | **테스트 완료(DONE)** | **[잠복 버그 수정] menu.js·menu-dev.js `history.back()` → `window.history.back()` 한정** | 쮸티12-1호 | 2026-07-26 | 【파일】`js/menu.js`, `js/menu-dev.js` / apply.html `const history = []` 전역 렉시컬 바인딩이 menu 스크립트의 bare `history.back()` shadowing → `TypeError` → 상단 ← 무반응 잠복 버그 / 두 파일 105행 `window.history.back()` 으로 한정 수정 — 코드 커밋 완료, 사장님 테스트 대기 |
| **T-096** | WT-109 | W-101 | `69e20e2` | **테스트 완료(DONE)** | **[디렉토리 개편 3단계] apply-review·loan-checker·unsuspend → tip/ 하위 통합** | 쮸티12-1호 | 2026-07-26 | 【파일】git mv 3개(`apply-review`,`loan-checker`,`unsuspend` → `tip/` 하위) + 참조 수정 7건: `index(-dev).html` loan-checker 경로·`tip/index(-dev).html` loan-checker·apply-review 경로·`tip/unsuspend/index.html` img 상대경로 4곳(`../`→`../../`) — 코드 커밋 완료, 사장님 테스트 대기 |
| **T-097** | WT-110 | W-102 | `2ffda52` | **테스트 완료(DONE)** | **[메뉴 드로어] 헤더 풀사이즈 → 앱 사이즈(480px) 고정** | 쮸티12-1호 | 2026-07-26 | 【파일】`js/menu.js`, `js/menu-dev.js` / `#sjy-drawer-head` CSS에 `max-width:480px;margin:0 auto;width:100%` 추가 — nav 리스트와 동일 규격, PC 풀사이즈 헤더 수정 |
| **T-098** | WT-111 | W-103 | `95b6cf0` | **테스트 완료(DONE)** | **[메뉴 드로어] 드로어 본체 480px 제한 — PC 전체 화면 덮음 수정 (B안)** | 쮸티12-1호 | 2026-07-26 | 【파일】`js/menu.js`, `js/menu-dev.js` / `#sjy-drawer` `left:0;right:0` → `left:50%;max-width:480px`, `translateX(100%→200%)·open(0→-50%)` 조정 / 드로어가 480px 앱 영역만 덮고 양옆은 반투명 오버레이 |
| **T-099** | WT-112 | W-104 | `af2879c` | **테스트 완료(DONE)** | **[나노크레딧] 상품 상세 페이지 전면 개편 (10/20/30/50 — 4개 파일)** | 쮸티12-1호 | 2026-07-26 | 【파일】`nanocredit/10/index.html`, `20/index.html`, `30/index.html`, `50/index.html` / ①title "nanocredit"→"써주세요." ②body max-width:480px;margin:0 auto 추가 ③구 nav/.nav-logo/.nav-hamburger CSS 제거 ④`<body class="page">`+data-back="/nanocredit/" 추가 ⑤`<nav>...</nav>` HTML 제거 ⑥CTA href→/monthly-loan/2026-07/ ⑦script popup.js+menu.js+legal-shared.js / 회차수정: class=page+popup.js+legal-shared.js 추가(`b50cd97`) |
| **T-100** | WT-113 | W-105 | `29a7ec0` | **테스트 완료(DONE)** | **[나노크레딧] "이 달의 대출 신청하러 가기" 링크 수정 (PRD+DEV)** | 쮸티12-1호 | 2026-07-26 | 【파일】`nanocredit/index.html`, `nanocredit/index-dev.html` / PRD: href="/"→"/monthly-loan/2026-07/" / DEV: href="/index-dev.html"→"/monthly-loan/2026-07/index-dev.html" |
| **T-101** | WT-114 | W-106 | `8919686` | **테스트 완료(DONE)** | **[나노크레딧 상세] 수치 전면 업데이트 — 7월 썸머 베케이션 기준 반영 (10/20/30/50 — 4개 파일)** | 쮸티12-1호 | 2026-07-28 | 【파일】`nanocredit/10/index.html`, `20/index.html`, `30/index.html`, `50/index.html` + 동일 DEV 4개 / ①크레딧 미션 4,500포 공통 통일 ②이벤트 대출 이포 유지 + 원금 미션(1%) 수치 추가 ③50만 이벤트 행 삭제 ④비교 테이블 전 행 합계 재계산 ⑤웨이팅 보상 할인 테이블 4,500포 기준 통일 ⑥한도상향 크레딧 미션 수치 수정 ⑦DEV 4개 파일 신규 생성 / [회차수정2]⑧옵션카드 타이틀 4개 변경 ⑨롸잇나우 블찬티켓 문장 추가 ⑩크레딧미션이란? 전면교체 ⑪주의사항 문구 변경 |
| **T-102** | WT-115 | W-107 | `d81803a` | **테스트 완료(DONE)** | **[꿀정보] 연체 이력 해제 페이지 통합 개편 (PRD 업데이트 + DEV 신규)** | 쮸티12-1호 | 2026-07-28 | 【파일】`tip/unsuspend/index.html`(PRD 수정) + `tip/unsuspend/index-dev.html`(DEV 신규) + `tip/index.html·index-dev.html` 링크 연결 / body.page+data-back+480px+폰트+menu·popup·legal-shared / DEV 배너+menu-dev.js / 04 연체이력해제 href 연결 |
| **T-103** | WT-116 | - | - | **대기(Pending)** | **[월전환] 8월 대출 페이지 생성 + menu.js CURRENT_MONTH 2026-08 전환** | 쮸티12-1호 | 2026-07-29 예정 | 【순서】①`monthly-loan/2026-08/` 폴더+페이지 신규 생성 ②`menu.js·menu-dev.js` `CURRENT_MONTH='2026-07'`→`'2026-08'` / 폴더 먼저 → 링크 나중 규칙 필수 / 사이트 통합 완료 후 착수 |
| **T-104** | WT-117 | - | `c6e47dc` | **테스트 완료(DONE)** | **[월별대출] 2026-07/index-dev.html DEV 배너 풀사이즈 수정** | 쮸티12-1호 | - | 【파일】`monthly-loan/2026-07/index-dev.html` / position:sticky DEV 배너가 .wrap 구조로 인해 풀사이즈 렌더링 → T-092 방식으로 수정 |
| **T-105** | WT-118 | - | `684fc43` | **테스트 완료(DONE)** | **[Deep Dive] apply-review-dev.html UI 통합** | 쮸티12-1호 | 2026-07-28 | 【파일】`tip/apply-review/apply-review-dev.html` / ①s1~s5 .top-bar old nav div 제거(menu-dev.js nav 대체) ②popup.js 제거(강제팝업 간섭 제거) ③body.page+data-back="/tip/index-dev.html"+max-width:480px+dev-banner sticky+menu-dev.js+legal-shared.js 유지 |
| **T-106** | WT-119 | - | `461097e` | **테스트 완료(DONE)** | **[Deep Dive] 진입 보안코드 overlay 구현** | 쮸티12-1호 | 2026-07-28 | 【파일】`tip/apply-review/apply-review-dev.html` / overlay 항상 표시: sessionStorage 저장 제거 + inline script 무조건 display:flex / 진입 경로 무관 항상 overlay 표시 |
| **T-107** | WT-120 | W-107 | `9f450d9` | **테스트 완료(DONE)** | **[소통거리 제출 가이드] nanocredit/submissions → tip/submissions 이동 + 꿀정보 06번 항목 + 나노크레딧 10~50 CTA 삽입** | 쮸티12-1호 | 2026-07-28 | 【파일】`tip/submissions/`(이동+표준UI 16개), `tip/submissions/index-dev.html`(신규), `tip/index.html·index-dev.html`(06번 항목), `nanocredit/10·20·30·50/index.html`(CTA) / [회차수정] `d5322c9`→`9f450d9` submissions 17개 back-btn/CSS 완전 제거 |
| **T-108** | WT-121 | W-108 | `b37d348` | **테스트 완료(DONE)** | **[소통거리 제출 가이드] 등·초본 → 초본 텍스트 수정** | 쮸티12-1호 | 2026-07-28 | 【파일】`tip/submissions/index.html`, `tip/submissions/index-dev.html` / SEC-14 섹션제목(📋 등·초본→초본) + 소제목(등·초본 제출하는 방법→초본 제출하는 방법) + ③항목(등본과 초본 각각→초본을) |
| **T-109** | WT-122 | W-109 | `d21c053` | **테스트 완료(DONE)** | **[소통거리 제출 가이드] phone-docs·job-income 서브페이지 DEV 버전 15개 신규 생성 + index-dev.html 링크 연결** | 쮸티12-1호 | 2026-07-28 | 【신규】phone-docs: sunbul-dev/alttul-dev/yakjeong-dev.html (3개) / job-income: 4dae-insured-dev·4dae-uninsured-dev·business-dev·college-dev·daily-worker-dev·delivery-dev·etc-dev·freelancer-dev·job-seeker-dev·military-pro-dev·military-dev·unemployed-dev.html (12개) / 각 = PRD 복사 + DEV 배너 + menu-dev.js / 【수정】submissions/index-dev.html SEC-07·SEC-10 링크 -dev.html 연결 |
| **T-110** | WT-123 | W-110 | `2880556` | **테스트 완료(DONE)** | **[소통거리 제출 가이드] SEC-12·SEC-13 섹션 타이틀 서브라인 추가** | 쮸티12-1호 | 2026-07-28 | 【파일】`tip/submissions/index.html`, `index-dev.html` / 👯 절친·🧑‍🧑‍🧒 부모님 h3 서브라인 "대안신용평가 항목 중 사회성 검증 대상 전용" (B안: 15px·700·#333) / [회차수정] 문구+스타일 B안 확정 `2880556` |
| **T-111** | - | W-111 | - | **대기(Pending)** | **[대출 가능성 검사기 리디자인] Phase A — 톤·비주얼 개편** | 쮸티12-1호 | 2026-07-28 | 기획안 §2·5·6·7 / styles.css 팔레트·컴포넌트 정비(핑크·그라데이션·섹션배경 제거, 경고블록·텍스트CTA 신설) + index.html 배너→타이틀블록·목적안내박스·라이브시계삭제·카피전면교체(5.1~5.6) + §5.7 주의 3건(value결합·JS주입·오타) + index-dev.html 동일 적용 / 대상: `tip/loan-checker/styles.css·index.html·index-dev.html·app.js` |
| **T-112** | - | W-112 | - | **대기(Pending)** | **[대출 가능성 검사기 리디자인] Phase B — 데이터 보정 (B-1~B-7)** | 쮸티12-1호 | 2026-07-28 | 기획안 §8 Phase B / B-1 크미 4,500 일괄·B-2 이벤트 30만 안내·B-3 워터밤 이포 표기·B-4 좌석 할인 매트릭스·B-6 하드코딩1·B-7 하드코딩2 / B-5 포인트_요약_20260701 원본 대조는 CEO 제공 후 진행 / Phase A 승인 후 착수 |
| **T-113** | WT-125 | W-113 | `7fdde17` | **테스트 완료(DONE)** | **[홈 화면] 히어로 영역 문구 변경 (앱 동일)** | 쮸티12-1호 | 2026-07-30 | 【파일】`index.html`, `index-dev.html` / h1 "신용 점수가 아니라, 미션과 대안신용으로 봐요." / p.sub 면책 문구 추가·color:var(--cream) 제거 / h1 min-height 제거·hero padding-bottom 80px / 5회차 수정 완료 |
| **T-114** | WT-126 | W-114 | `79e511c` | **테스트 완료(DONE)** | **[브레드크럼] 전체 페이지 브레드크럼 추가 (menu.js·menu-dev.js + 71개 HTML)** | 쮸티12-1호 | 2026-07-30 | 【파일】`js/menu.js`, `js/menu-dev.js`, 71개 HTML 파일 / data-breadcrumb 파싱·생성·삽입 로직 + CSS #sjy-breadcrumb / DEV는 sticky 배너 감지 후 그 다음 삽입 / 홈·개인정보 제외 전체 적용 |
| **T-115** | WT-127 | W-115 | `43b70e2` | **테스트 완료(DONE)** | **[한도 상향] 한도 상향 Coming Soon 페이지 신규 생성** | 쮸티12-1호 | 2026-07-30 | 【파일】`tip/credit-limit/index.html`, `index-dev.html`, `tip/index.html·index-dev.html` / ✨ 곧 공개 예정 배지·예고 카드·앱 공지 알림 / 03번 href 연결 / data-breadcrumb 적용 |
| **T-116** | WT-128 | W-116 | `43b70e2` | **테스트 완료(DONE)** | **[공지사항] 공지사항 안내 페이지 신규 생성** | 쮸티12-1호 | 2026-07-30 | 【파일】`notice/index.html`, `notice/index-dev.html` / 앱 공지사항 이용 안내 + Play Store 링크 + 웹 이전 예정 안내 / data-breadcrumb="공지사항" |
| **T-118** | WT-129 | W-118 | `5846239` | **테스트 완료(DONE)** | **[대출 검사기] ⑤신청 정보 URL month-config.js 자동 주입 + CLAUDE.md 매월 체크리스트 추가** | 쮸티12-1호 | 2026-07-30 | 【파일】`tip/loan-checker/index.html·index-dev.html` / santaApply options[0].text cfg.detailUrl 동적 주입 / `CLAUDE.md` 매월 대출 전환 3단계 체크리스트 추가 (커밋 없이 파일 직접 저장) |
| **T-119** | WT-130 | W-119 | `4cc5c56` | **테스트 완료(DONE)** | **[원리포 혜택] 원리포 상품의 메리트 페이지 신규 생성** | 쮸티12-1호 | 2026-07-30 | 【파일】`tip/wonripo/index.html`, `tip/wonripo/index-dev.html`, `tip/wonripo/assets/wonripo-vip-banner.png·wonripo-credit-ladder.png`, `tip/index.html·index-dev.html` / 목업 v0.15 기반 / 래더이미지(메리트03)·VIP배너이미지(메리트04) 교체 / tip/index 02번 href 연결 / Pretendard 폰트·팝업3종·CURRENT_MONTH 동적링크 |
| **T-120** | WT-131 | W-120 | `34c81ad` | **테스트 완료(DONE)** | **[원리포 계산기] calculator.html 신규 생성 + index 링크 변경** | 쮸티12-1호 | 2026-07-30 | 【파일】`tip/wonripo/calculator.html`, `tip/wonripo/calculator-dev.html`, `tip/wonripo/index.html·index-dev.html` / 기획서 v0.1 기반 / 구글 스프레드시트 링크 → 자체 계산기 페이지 교체 / Pretendard·원리금균등 JS 계산 엔진 |
| **T-121** | WT-132 | W-121 | `3f06a2d` | **테스트 완료(DONE)** | **[원리포 계산기] UI 디테일 수정 3종 (PRD+DEV)** | 쮸티12-1호 | 2026-07-30 | 【파일】`tip/wonripo/calculator.html`, `tip/wonripo/calculator-dev.html` / ①섹션 구분선 hr.sec-div 기간↔포인트상환비율 사이 / ②슬라이더 우측 고정 span → thumb 위 bubble tooltip (absolute CSS + JS left 계산) / ③2개월 클릭 시 경고만 표시(active 전환 없음) / ④3개월+65%미만 조합 시 슬라이더 아래 경고 표시 |
| **T-122** | WT-133 | W-122 | - | **진행중** | **[8월 대출] 썸머 베케이션 Ⅱ 기획서 작성 + HTML 작업 예정** | 쮸티12-1호 | 2026-07-30 | 【파일】`project-docs/120_plan/PLAN_2026-08_썸머베케이션Ⅱ_기획서.md`, `monthly-loan/2026-08/assets/` / 기획서 v0.4 완성 (슬로건·이벤트·이미지 전부 확정) / 이미지 에셋 4종 수령·assets 배치 완료 / index-dev.html 작업 착수 예정 |
| **T-123** | WT-134 | W-123 | `b309222` | **테스트 완료(DONE)** | **[8월 대출] 대출 페이지 index-dev.html 신규 생성 + 8월 전환** | 쮸티12-1호 | 2026-07-31 | 【파일】`monthly-loan/2026-08/index-dev.html` (신규), `js/menu.js`, `js/menu-dev.js`, `tip/loan-checker/month-config.js` / 3단계 체크리스트 완료 / 사장님 VS Code Live Server 테스트 완료 |
| **T-124** | WT-135 | W-124 | `519351c` | **테스트 완료(DONE)** | **[8월 대출] 대출 페이지 회차 수정 (9건)** | 쮸티12-1호 | 2026-07-31 | 【파일】`monthly-loan/2026-08/index-dev.html` / 9건 텍스트 수정 / 사장님 VS Code Live Server 테스트 완료 |
| **T-125** | WT-136 | W-125 | `487be1e` | **테스트 완료(DONE)** | **[홈 화면] 8월 전환 (7월→8월)** | 쮸티12-1호 | 2026-07-31 | 【파일】`index-dev.html`, `index.html` / ①live-badge 8월 대출 ②gift-box Plane-Luggage_Aug-Loan.png ③메인타이틀 8️⃣🈷️ 썸머 🏝️베케이션 Ⅱ ④href 2026-08 / 사장님 VS Code Live Server 테스트 완료 |
| **T-126** | WT-137 | W-126 | `a5562d8` | **테스트 완료(DONE)** | **[대출 검사기] 30만 원 이벤트 대출 비활성 + 문구 수정** | 쮸티12-1호 | 2026-08-01 | 【파일】`tip/loan-checker/index-dev.html`, `index.html` / ①30만 원 선택 시 이벤트 대출 disabled ②eventAmountNote `10·20만 원만 선택 가능 (30·50만 원 제외)` / 사장님 VS Code Live Server 테스트 완료 |
| **T-127** | WT-138 | W-127 | `ded299d` | **테스트 완료(DONE)** | **[대출 검사기] 대표 거절 사유 4번 추가** | 쮸티12-1호 | 2026-08-01 | 【파일】`tip/loan-checker/index-dev.html`, `index.html` / ⑦안내섹션+결과패널 각 4번 추가 / 사장님 VS Code Live Server 테스트 완료 |
| **T-128** | WT-139 | W-128 | `6f857fd` | **테스트 완료(DONE)** | **[8월 대출 페이지] 대표 거절 사유 4번 문구 수정** | 쮸티12-1호 | 2026-08-01 | 【파일】`monthly-loan/2026-08/index-dev.html` / `1년 이내`→`최근` 문구 수정 + em `노동 상태와 의지를 중요시 여깁니다.` 추가 / 사장님 VS Code Live Server 테스트 완료 |
| **T-129** | WT-140 | W-129 | `189ae41` | **테스트 완료(DONE)** | **[대출 검사기] 상단 안내 문구 워딩 수정** | 쮸티12-1호 | 2026-08-01 | 【파일】`tip/loan-checker/index-dev.html`, `index.html` / ①tone-note-title 문구 수정 ②`이 검사기는`→`대출 가능성 검사기는` / 사장님 VS Code Live Server 테스트 완료 |
| **T-130** | WT-141 | W-130 | `a9b2747` | **테스트 완료(DONE)** | **[신청 폼] 7월→8월 워딩 변경 + 이벤트 대출 30만 경고 추가 + 경고 문구 수정** | 쮸티12-1호 | 2026-08-01 | 【파일】`monthly-loan/apply/apply-dev.html`, `apply.html` / ①h1·고객안내·API 7→8월 워딩 ②selectMethodEvent 30만 경고 조건 추가 ③warn-method-amount `10,20,30만`→`10,20만` / 사장님 VS Code Live Server 테스트 완료 |
| **T-131** | WT-143 | W-131 | `b7416d2` | **테스트 완료(DONE)** | **[대출 검사기] 상단 concept-image 이미지 교체 (징검다리 배낭 남성 — 8월)** | 쮸티12-1호 | 2026-08-02 | 【파일】`tip/loan-checker/assets/img/stepping-stones-aug-001.png`(신규), `index-dev.html`, `index.html` / concept-image 텍스트→img 교체 / 사장님 VS Code Live Server 테스트 완료 |
| **T-132** | WT-144 | W-132 | `a66b8c3` | **테스트 완료(DONE)** | **[대출 검사기] tone-note 박스 스타일 3종 수정** | 쮸티12-1호 | 2026-08-02 14:14 | 【파일】`tip/loan-checker/styles.css` / ①border-right 4px 보라 추가 ②배경 연보라 ③title 1.1rem ④body 1rem / 사장님 VS Code Live Server 테스트 완료 |
| **T-133** | WT-145 | W-133 | `2d93a00` | **테스트 완료(DONE)** | **[대출 검사기] 시계 박스 ↔ tone-note 박스 순서 교체** | 쮸티12-1호 | 2026-08-02 02:28 | 【파일】`tip/loan-checker/index-dev.html`, `index.html` / 이미지→시계→tone-note → 이미지→tone-note→시계 순서 변경 / 사장님 VS Code Live Server 테스트 완료 |
| **T-134** | WT-146 | W-134 | `ed8ec27` | **테스트 완료(DONE)** | **[팝업] 8월 대출 작업 동기화 2종** | 쮸티12-1호 | 2026-08-02 03:20 | 【파일】`js/popup.js` / ①거절 사유 4번 추가(최근 3개월 이상 무직 또는 과거 6개월 이상 무직 + em) ②30만 원 이벤트 `활용 3.5%` → `대출 상품 없음` / 사장님 VS Code Live Server 테스트 완료 |
| **T-135** | WT-147 | W-135 | `ba78afb` | **테스트 완료(DONE)** | **[긴급/Android] 헤더 가로 오버플로우 + 드로어 노출 버그 수정** | 쮸티12-1호 | 2026-08-02 03:20 | 【파일】`js/menu.js`, `js/menu-dev.js` / `#sjy-nav-bar`·`#sjy-drawer` width:100%→100vw 각 2곳 / 사장님 VS Code Live Server 테스트 완료 |
| **T-136** | WT-148 | W-136 | `f78b872` | **테스트 완료(DONE)** | **[신청 폼] 대출 가능성 검사기 안내 박스 추가** | 쮸티12-1호 | 2026-08-02 04:06 | 【파일】`monthly-loan/apply/apply-dev.html`, `apply.html` / h1 아래 .apply-note 박스 삽입 / 8월 대출·나노크레딧 신청 전 검사기 이용 안내 + 경로 / 사장님 VS Code Live Server 테스트 완료 |
| **T-137** | WT-149 | W-137 | `1aee714` | **테스트 완료(DONE)** | **[loan-match] DEV 환경 미적용 페이지 수정** | 쮸티12-1호 | 2026-08-02 | 【파일】`loan-match/index-dev.html`, `loan-match/browse-dev.html`(신규) / ①즉시빌리기 PRD→DEV ②여유있게빌리기 browse-dev.html 연결 ③browse-dev.html 신규(앱사이즈+DEV배너+메뉴바+상·하단고지) / body class누락·BACK버튼 중복 수정 포함 / 사장님 VS Code Live Server 테스트 완료 |
| **T-138** | WT-142 | W-138 | `7ec6e35` / `dbf0f1f` | **테스트 완료(DONE)** | **[loan-match] 결과 카드 4개 페이지 DEV 버전 생성** | 쮸티12-1호 | 2026-08-02 | 【파일】`loan-match/credit-dev.html`(신규), `shopping-dev.html`(신규), `reputation-dev.html`(신규·PRD없음), `contribution-dev.html`(신규·PRD없음), `browse-dev.html`(수정) / 공통: 앱사이즈+DEV배너+메뉴바+법적고지+breadcrumb3단계+BACK제거 / 회차수정: browse-dev.html 하단BACK버튼 삭제 / 사장님 VS Code Live Server 테스트 완료 |
| **T-139** | WT-150 | - | - | **진행중(In-Progress)** | **[8월 대출] monthly-loan/2026-08/index.html PRD 신규 생성 (Ser7-1호 보정 동기화)** | 쮸티12-1호 | 2026-08-02 | 【파일】`monthly-loan/2026-08/index.html`(신규) / index-dev.html 기반 PRD 변환: DEV 배너 제거, data-back /index.html, apply-dev.html→apply.html, menu-dev.js→menu.js / Ser7-1호 긴급 보정(main d864ebc) 로컬 동기화 |
| **T-140** | WT-151 | W-139 | ✅ `9f35b6f` | **테스트 완료(DONE)** | **[credit-dev.html] CTA 버튼 클릭 시 준비 중 팝업 표시** | 쮸티12-1호 | 2026-08-02 | 【파일】`loan-match/credit-dev.html` / CTA `href="#"` onclick="openReadyPopup();return false;" 추가 + 인라인 준비 중 모달(#ready-popup) + JS 추가 / 사장님 VS Code Live Server 테스트 완료 |
| **T-141** | WT-152 | W-140 | ✅ `9f35b6f` | **테스트 완료(DONE)** | **[shopping-dev.html] CTA 버튼 클릭 시 준비 중 팝업 표시 (Tally 교체)** | 쮸티12-1호 | 2026-08-02 | 【파일】`loan-match/shopping-dev.html` / Tally 링크·속성·스크립트 제거 + CTA onclick="openReadyPopup();return false;" + 인라인 준비 중 모달(#ready-popup) + JS 추가 / 사장님 VS Code Live Server 테스트 완료 |


---

### 작업 대기열

| W-ID | 우선 순위 | T-ID | 상태 | 작업 타이틀 | 파일 | 한 줄 설명 | 작성일(연월일 시분) | 작성자 |
|------|---------|------|------|----------|-----|----------|------|------|
| W-001 | P0 | T-001 | **완료** | **6월 대출 프로모션 페이지 상단·하단 `legal-shared.js` 연결** | `2026-06/index.html`, `2026-06/index-dev.html` | `footer.js` → `js/legal-shared.js` 교체 (상단·하단 법적고지 자동 주입, 컨테이너 wrap 클래스 추가) | 2026-06-18 17:30 | 쮸티12-1호 |
| W-002 | P0 | T-002 | **완료** | **6월 대출 페이지 PC 좌우 너비 480px 고정** | `2026-06/index.html`, `2026-06/index-dev.html` | `.wrap { max-width:480px; margin:0 auto; }` CSS 추가 — 루트 index.html과 동일하게 PC에서도 모바일 너비로 고정 | 2026-06-18 23:30 | 쮸티12-1호 |
| W-003 | P0 | T-003 | **완료** | **6월 대출 페이지 상단 법적고지 하단 여백 추가** |
| W-004 | P0 | T-004 | **완료** |
| W-005 | P0 | T-005 | **완료** | **6월 대출 페이지 카드 타이틀 폰트 18px 수정** | `2026-06/index.html`, `2026-06/index-dev.html` | `.card-title { font-size: 1.5rem(24px) → 18px }` — 블랙찬스 티켓·한도상향 카드 본문 텍스트 18px 기준 초과 | 2026-06-19 00:10 | 쮸티12-1호 | **6월 대출 페이지 본문 폰트 18px 일괄 통일** | `2026-06/index.html`, `2026-06/index-dev.html` | 법적고지(24px) 규정 준수 — 본문 최대 18px 기준으로 5개 항목 일괄 수정: h1버튼(19.2/30px), section-title(22.4px), sub-section-title(24px), section-box(28px), SpringMarch-waiting-button(25.6px) | 2026-06-18 23:55 | 쮸티12-1호 | `2026-06/index.html`, `2026-06/index-dev.html` | 이 페이지에만 `.legal-top { margin-bottom: 20px; }` 추가 — legal-shared.js 미수정, 이 페이지만 적용 | 2026-06-18 23:50 | 쮸티12-1호 |
| W-006 | P1 | T-006 | **완료** | **6월 대출 페이지 신청절차 step-icon 원 크기 축소** | `2026-06/index.html`, `2026-06/index-dev.html` | `.step-icon { font-size: 1.5em → 1em, width/height: 2.2em → 1.8em }` — 빨간 원이 법적고지 텍스트(24px)보다 시각적으로 커 보이는 착시 해소 | 2026-06-19 00:20 | 쮸티12-1호 |
| W-007 | P1 | T-007 | **완료** | **6월 대출 페이지 procedure-list 파란 원 크기 축소** | `2026-06/index.html`, `2026-06/index-dev.html` | `li::before { font-size: 1.4em → 1em }`, `li { padding-left: 3em → 2.5em }` — 파란 CSS counter 원이 ~44px로 과대, 빨간 원(T-006 수정 후 ~29px)과 불균형 | 2026-06-19 00:35 | 쮸티12-1호 |
| W-008 | P1 | T-008 | **완료** | **홈 화면 18px 초과 폰트 18px 통일** | `index.html`, `index-dev.html` | `.nav-menu(1.3rem=20.8px)`, `.main-title(1.4rem=22.4px)`, `.checker-icon(1.2rem=19.2px)`, `.worldcup-title(1.2rem=19.2px)` → 18px | 2026-06-19 01:30 | 쮸티12-1호 |
| W-009 | P1 | T-009 | **진행중** | **월드컵 챌린지 페이지 18px 초과 폰트 18px 통일** | `2026-06/worldcup-challenge/index-dev.html` | `.section-title(20.8px)`, `.period-date(20.8px)`, `.match-teams(20px)`, `.total-box(19.2px)`, `.no-condition(38.4px)`, `.method-highlight(18.88px)`, `.usage-label(18.4px)`, `.apply-cta-title(23.2px)`, `.apply-cta-button(20px)` → 18px (9개 항목, 히어로 영역 제외) | 2026-06-19 02:15 | 쮸티12-1호 |
| W-010 | P0 | T-010 | **진행중** | **월드컵 챌린지 페이지 legal-shared.js 연결** | `2026-06/worldcup-challenge/index-dev.html`, `2026-06/worldcup-challenge/index.html` | T-001과 동일 — 상단 법적고지 + 하단 콘텐츠 자동 주입 (`legal-shared.js` 연결, `.page` 또는 `.wrap` 클래스 추가) | 2026-06-19 02:30 | 쮸티12-1호 |
| W-011 | P1 | - | **대기** | **월드컵 챌린지 페이지 법적고지↔콘텐츠 영역 시각적 구분** | `2026-06/worldcup-challenge/index-dev.html` | 6월 호국보훈 페이지(`2026-06/index-dev.html`)처럼 상단 법적고지 영역과 페이지 콘텐츠 영역 사이에 시각적 구분선/여백 추가 | 2026-06-20 15:55 | 쮸티12-1호 |
| W-012 | P0 | - | **완료** | **대출 가능성 검사기 모바일 앱 사이즈 변경** | `loan-checker/index-dev.html` | `.app-main { max-width: 1100px }` → 480px 오버라이드 (인라인 `<style>`) + `.app-main` → `class="app-main page"` (legal-shared.js 감지 클래스 추가) | 2026-06-20 16:30 | 쮸티12-1호 |
| W-013 | P0 | T-013 | **완료** | **대출 가능성 검사기 법적고지 연결 (상단+하단)** | `loan-checker/index-dev.html` | `footer.js` → `legal-shared.js` 교체 → 상단 법적고지 자동 주입 + 기존 하단 콘텐츠 제거 + legal-shared.js 하단 콘텐츠 자동 주입 | 2026-06-20 16:30 | 쮸티12-1호 |
| W-014 | P0 | T-014 | **완료** | **대출 가능성 검사기 법적고지↔콘텐츠 간격** | `loan-checker/index-dev.html` | `.legal-top { margin-bottom: 20px; }` 추가 (다른 페이지와 동일) | 2026-06-20 16:30 | 쮸티12-1호 |
| W-015 | P0 | T-015 | **완료** | **대출 가능성 검사기 폼 패널 2열 → 1열 변경** | `loan-checker/index-dev.html` | `@media(min-width:960px)` 내 `.form-grid { grid-template-columns: repeat(2,1fr) }` → 1열 오버라이드. ①~⑤ 패널 세로 1열 배치 | 2026-06-20 16:45 | 쮸티12-1호 |
| W-016 | P0 | T-016 | **완료** | **대출 가능성 검사기 뚝딱 버튼 → 하단 법적고지 위로 이동** | `loan-checker/index-dev.html` | `div.action-area`가 `</main>` 밖에 있어 legal-shared.js 하단 주입 후 아래로 밀림 → `</main>` 안으로 이동 + 상단 여백으로 법적고지와 구분 | 2026-06-20 16:55 | 쮸티12-1호 |
| W-017 | P1 | T-017 | **완료** | **대출 가능성 검사기 두 번째 이미지 숨김 처리** | `loan-checker/index-dev.html` | 상단 이미지 4개 중 두 번째 `loan-eligibility-checker-02.jpg`('대출이 필요하신 분 주목') `display:none` 숨김 | 2026-06-20 17:00 | 쮸티12-1호 |
| W-018 | P1 | T-018 | **완료** | **대출 가능성 검사기 4번째 이미지 → 텍스트 박스 교체** | `loan-checker/index-dev.html` | `loan-eligibility-checker-title.jpg` 이미지 제거 → 텍스트 박스 ("대출 가능성 검사기" + "지금 바로 확인해 보세요.", 센터정렬, 박스 충분한 크기, 텍스트 ≤18px) | 2026-06-20 17:10 | 쮸티12-1호 |
| W-019 | P0 | T-019 | **진행중** | **대출 가능성 검사기 ①~⑤ 패널 폰트 18px 초과 통일** | `loan-checker/index-dev.html` | `.title-bar-text(clamp 최소 20.8px)` → 18px, `.page-intro h1(1.8rem=28.8px)` → 18px, `.script-cta-button-text(1.1rem=17.6px)` OK — 초과 항목만 18px 통일 | 2026-06-20 17:20 | 쮸티12-1호 |
| W-020 | P0 | T-020 | **완료** | **legal-shared.js 서비스 링크 절대경로 수정** | `js/legal-shared.js` | Contact 섹션 서비스 카드 링크 3개 `/privacy/...` → `https://www.sirjuseyo.com/privacy/...` 절대경로 변경 — monthly-loan 로컬·라이브에서 404 발생 중 | 2026-06-26 | 쮸티12-1호 |
| W-021 | P0 | T-021 | **완료** | **[monthly-loan] 하단 법적고지 연체금리 문구 수정** | `js/legal-shared.js` | `+6%P 이내, 연 18%이내` → `+3%P 이내, 연 15%이내` / monthly-loan-repo legal-shared.js 수정 | 2026-06-27 | 쮸티12-1호 |
| W-022 | P0 | T-022 | **완료** | **[sirjuseyoWeb] 하단 법적고지 연체금리 문구 수정** | `sirjuseyoWeb/js/legal-shared.js` | `+6%P 이내, 연 18%이내` → `+3%P 이내, 연 15%이내` / sirjuseyoWeb 레포 별도 브랜치·PR | 2026-06-27 | 쮸티12-1호 |
| W-023 | P0 | T-023 | **완료** | **[monthly-loan] footer.js → legal-shared.js 교체 + deprecated 처리** | `apply/apply.html`, `apply/apply-dev.html`, `loan-checker/index.html`, `2026-06/worldcup-challenge/apply/index.html`, `2026-06/worldcup-challenge/apply/index-dev.html`, `footer.js` | 5개 HTML 파일 `footer.js` 주석처리 + `legal-shared.js` 교체 / `footer.js` 파일 상단에 DEPRECATED 코멘트 추가 | 2026-06-27 | 쮸티12-1호 |
| W-024 | P0 | T-024 | **진행중** | **[monthly-loan] 홈 팝업 추가 (강제 고지형)** | `index.html`, `index-dev.html` | v6 팝업 소스 기반 주입 — `.mock`·`.reopen` 제거, 전역 리셋 CSS 제거, body 스타일 제거, localStorage 재노출 방지 로직 추가(PRD: 하루 1회 / DEV: 비활성화) | 2026-06-28 | 쮸티12-1호 |
| W-025 | P0 | T-025 | **진행중** | **[sirjuseyoWeb] 홈 팝업 추가 (강제 고지형)** | `index.html`, `index-dev.html`(신규 생성) | W-024와 동일 팝업 주입 — sirjuseyoWeb `index-dev.html` 없으므로 `index.html` 기반 DEV 파일 신규 생성 포함, DEV 배너 추가 | 2026-06-28 | 쮸티12-1호 |
| W-026 | P0 | T-026 | **진행중** | **[팝업 전체] 예시 플로우 문구 2건 수정** | `index.html`×2, `index-dev.html`×2, `popup-v5.html`, `popup-v6.html` | ①`선적립하면`→`선적립(예치)하면` ②`한도가 발생하지 않을 수 있으며, 불승인 시`→`한도가 발생하지 않으면(불승인)` | 2026-06-29 | 쮸티12-1호 |
| W-027 | P0 | T-027 | **완료** | **[팝업 가이드라인] 활용% 개편 + 예시 수치 변경** | `popup-v6_20260628.html`, `HANDOVER_웹팝업_v6_20260628.md` | ①최소 3.5% → 0.9% ②상품별 활용% 전면 개편(10/20/30/50만원) ③이벤트 구조 변경 ④신용조회비용 4,500원 ⑤예시 15,000P/100,000원/90,000원/15,500P ⑥크레딧 테이블 갱신 — 실제 HTML 4개 적용은 W-028 | 2026-06-30 | 쮸티12-1호 |
| W-028 | P0 | T-028 | **완료** | **[팝업 HTML 4개] 활용% 개편 + 예시 수치 변경 반영** | `monthly-loan/index.html`, `monthly-loan/index-dev.html`, `sirjuseyoWeb/index.html`, `sirjuseyoWeb/index-dev.html` | W-027 가이드라인 변경 동일 내용을 실제 팝업 HTML 4개 파일에 적용 | 2026-06-30 | 쮸티12-1호 |
| W-029 | P1 | T-029 | **완료** | **[7월 썸머 베케이션] 대출 기획서 초안 작성** | `2026-07/PLAN_7월_썸머베케이션대출_기획서.md` | 6월 호국보훈의 달 → 7월 썸머 베케이션 대출 전환 기획서 (컨셉/이벤트/날짜/CSS 테마/이미지 에셋 요청/Before→After 수정 명세 포함) | 2026-07-01 | 쮸티12-1호 |
| W-030 | P0 | T-030 | **테스트 완료(DONE)** `7389ee8` | **[7월 index-dev.html + 기획서] 크레딧 미션 4,500포 통일 반영** | `2026-07/index-dev.html`, `2026-07/PLAN_7월_썸머베케이션대출_기획서.md` | 모든 대출 금액(10만/20만/30만/50만) 크레딧 미션 4,500포 통일 — 이벤트 대출·비교 테이블·한도상향 예시·할인 테이블(4개 고객군) 전체 반영 + 합계 재계산 ✅ WT-040 | 2026-07-01 | 쮸티12-1호 |
| W-031 | P0 | T-031 | **테스트 완료(DONE)** `4ec2c42` | **[7월 index-dev.html] 이벤트 섹션 개편 + 용어 통일** | `2026-07/index-dev.html` | ①전체 신용정보조회비용→신용조회비용 ②워터밤💦대출 50만 box 삭제 ③원금 미션 감면→원금 미션(1%) 포인트 명시(10만6,500/20만8,500/30만10,500포) ④❗️안내박스 삭제 ✅ WT-041 | 2026-07-01 | 쮸티12-1호 |
| W-032 | P0 | T-032 | **테스트 완료(DONE)** `44f294a` | **[7월 index-dev.html] 워터밤💦대출 specialty-info 원금 미션 안내 추가** | `2026-07/index-dev.html` | 워터밤💦대출 섹션 specialty-info에 3번째 줄 추가: `* 원금 미션은 원금 상환에 사용됩니다.` ✅ WT-042 | 2026-07-01 | 쮸티12-1호 |
| W-033 | P0 | T-033 | **테스트 완료(DONE)** `29a2722` | **[7월 기획서 + index-dev.html] 이벤트 대출 이포→원리포 전환** | `2026-07/index-dev.html`, `2026-07/PLAN_7월_썸머베케이션대출_기획서.md` | ①이포→원리포 상품 ②상품 설명 변경 ③크레딧 4,500포+이자(1%)+원금(1%) 명시 ④안내문구 삭제 / 기획서 v0.6 반영 완료 | 2026-07-01 | 쮸티12-1호 |
| W-034 | P0 | T-034 | **테스트 완료(DONE)** `6d7015c` | **[7월 기획서 + index-dev.html] 🔍 비교하세요. 섹션 이벤트 대출 이포→원리포 + 원금 미션 재계산** | `2026-07/index-dev.html`, `2026-07/PLAN_7월_썸머베케이션대출_기획서.md` | 비교 테이블 10만~50만 이벤트 대출 행: ①상환 방식 이포→원리포 ②원금 미션 감면→포인트(1%) ③합계 재계산(10만 6,500 / 20만 8,500 / 30만 10,500 / 50만 14,500포) / 기획서 v0.7 반영 완료 ✅ WT-044 | 2026-07-01 | 쮸티12-1호 |
| W-035 | P0 | T-035 | **테스트 완료(DONE)** `2b598b7` | **[7월 기획서 + index-dev.html] 신청 절차 예시 ❸ 원금 미션 감면→원금 미션(1%) 수정** | `2026-07/index-dev.html`, `2026-07/PLAN_7월_썸머베케이션대출_기획서.md` | 예시 ❸ 문구: `원금 미션 감면 + 이자 미션(1%) 필수` → `원금 미션(1%) + 이자 미션(1%) 필수` / 기획서 v0.8 반영 완료 ✅ WT-045 | 2026-07-01 | 쮸티12-1호 |
| W-036 | P0 | T-036 | **테스트 완료(DONE)** `a9668d5` | **[홈 페이지] index-dev.html 7월 전환** | `index-dev.html`, `PLAN_홈페이지_7월전환_기획서.md` | 본문: ①live-badge 7월 ②gift-box 7월 이미지 ③이달의 대출 7️⃣🈷️ 썸머 🏖️베케이션 ④링크 2026-07 ⑤월드컵 카드 숨김 / 팝업: ⑥이벤트 활용 10만 6.5% / 20만 4.25% / 30만 3.5% / 커밋 `a9668d5` ✅ WT-046 | 2026-07-01 | 쮸티12-1호 |
| W-037 | P0 | T-037 | **테스트 완료(DONE)** `86307cd` | **[홈 페이지] index-dev.html 대출 가능성 검사기 카드 숨김** | `index-dev.html`, `PLAN_홈페이지_7월전환_기획서.md` | checker-card 블록 `display:none` 숨김 처리 / 커밋 `86307cd` ✅ WT-047 | 2026-07-01 | 쮸티12-1호 |
| W-038 | P1 | T-038 | **코딩완료(TEST WAIT)** | **[문서 정리] project-docs 폴더 구조 변경 git 반영** | `project-docs/120_plan/` (신규), `project-docs/00_plan/` (삭제), `2026-07/PLAN_7월_썸머베케이션대출_기획서.md` (삭제→120_plan) | 사장님 직접 이동 완료: ①00_plan 전체→120_plan ②2026-07 기획서→120_plan ③루트 PLAN_홈페이지_7월전환 삭제 / git 반영 + 커밋 `3291e62` ✅ WT-048 | 2026-07-01 | 쮸티12-1호 |
| W-039 | P0 | T-039 | **테스트 완료(DONE)** `0ee40b0` | **[홈 페이지] index-dev.html gift-box 서핑 이미지 교체** | `index-dev.html`, `PLAN_2026-07_홈페이지_7월전환_기획서.md` | gift-box 이미지: `summer-jul-001.jpg` → `Palm-Surf_Jul-Loan.png` (269번 줄) / 기획서 v0.4 반영 / 커밋 `0ee40b0` ✅ WT-049 | 2026-07-01 | 쮸티12-1호 |
| W-040 | P0 | T-040 | **테스트 완료(DONE)** `2d5cb5c` | **[6월 페이지] 마감 처리 — 기존 내용 숨김 + 마감 문구 표시** | `2026-06/index-dev.html` | `<body>` 직후 마감 문구 div 삽입 / 기존 전체 내용 `display:none` 감싸기 (HTML 주석 중첩 이슈 대응) / 커밋 `2d5cb5c` ✅ WT-050 | 2026-07-02 | 쮸티12-1호 |
| W-041 | P0 | T-041 | **테스트 완료(DONE)** `46e0eab` | **[6월 PRD] index.html 마감 처리 — DEV와 동일 적용** | `2026-06/index.html` | T-040 누락 보완 — DEV(`index-dev.html`)만 수정했으나 PRD(`index.html`) 미반영 / 동일 마감 처리 적용 / 커밋 `46e0eab` ✅ WT-051 | 2026-07-02 | 쮸티12-1호 |
| W-042 | P0 | T-030~T-039 (PRD) | **검증완료** `815964b` → main `cf89006` |
| W-043 | P0 | T-039 (자산) | **검증완료** `84b62f4` → main `cf89006` |
| W-044 | P0 | T-042 | **진행중** | **[7월 대출 페이지] 상단 메인 이미지 교체 — Surfer-Sunset_Jul-Loan** | `2026-07/index-dev.html`, `2026-07/index.html`, `2026-07/assets/Surfer-Sunset_Jul-Loan.jpg` | PNG→JPG 변환(1686×933px/298KB) + 두 파일 img src `summer-jul-001.jpg` → `Surfer-Sunset_Jul-Loan.jpg` | 2026-07-03 | 쮸티12-1호 | **[T-039 자산 보완] Palm-Surf_Jul-Loan.png 이미지 파일 커밋 추가** | `2026-07/assets/Palm-Surf_Jul-Loan.png` | Ser7-1호 보류 보고 수신 — 이미지 파일 미커밋 상태였음, 자산 파일 커밋 추가 ✅ WT-053 | 2026-07-02 | 쮸티12-1호 | **[7월 썸머 베케이션] PRD 파일 생성/업데이트 — T-030~T-039 반영** | `index.html` (루트), `2026-07/index.html` (신규) | ①루트 index.html: T-036(7월 전환 본문+팝업 이벤트 활용%), T-037(checker-card 숨김), T-039(서핑 이미지) 반영 ②2026-07/index.html 신규 생성: index-dev.html 기반 DEV 배너 제거 + href apply.html 변경 | 2026-07-02 | 쮸티12-1호 |
| W-045 | P0 | - | **대기** | **[7월 대출 페이지] 두 번째 이미지 교체 — Waterbomb-Jul** | `2026-07/index-dev.html`, `2026-07/index.html`, `2026-07/assets/waterbomb-jul-001.jpg` | `waterbomb-jul-001.png` PNG→JPG 변환 + DEV·PRD 두 번째 img src 교체 | 2026-07-03 | 쮸티12-1호 |
| W-046 | P0 | - | **대기** | **[신청 폼] apply.html + apply-dev.html 7월 대출 문구 전환** | `apply/apply-dev.html`, `apply/apply.html` | 6️⃣🈷️은 🪖호국보훈의 달 대출 → 7️⃣🈷️ 썸머 🏖️베케이션 대출 / DEV 3곳(513·516·1207줄) + PRD 3곳(508·511·1170줄) | 2026-07-03 | 쮸티12-1호 |
| W-047 | P0 | T-045 | **테스트 완료(DONE)** | **[신청 폼] 50만 원 선택 시 인라인 경고 2종 추가** | `apply/apply-dev.html`, `apply/apply.html` | ①이벤트 대출 선택 시 "⚠️ 이벤트 대출은 10·20·30만 원만 신청 가능" ②첫 이용(경험 없음) 선택 시 "⚠️ 첫 이용 최대 30만 원" 경고 / `.inline-warn` CSS + `selectExperienceNo()` + `selectMethodEvent()` 함수 추가 / DEV+PRD 동시 | 2026-07-04 | 쮸티12-1호 |
| W-048 | P0 | T-046 | **코딩완료(TEST WAIT)** | **[대출 검사기] 7월 썸머 베케이션 전환** | `loan-checker/month-config.js`, `loan-checker/app.js`, `loan-checker/index-dev.html`, `loan-checker/index.html` | ①month-config.js 2026-07 설정 추가 ②이벤트 대출 결과값 변경(이포→원리포, 크미 4,500 통일, 원미 1% 추가) ③HTML 텍스트 7월 전환 + 경험 패널 신규 + `updateAmountWarnings()` JS (DEV+PRD) | 2026-07-04 | 쮸티12-1호 |
| W-049 | P0 | T-047 | **코딩완료(TEST WAIT)** | **[대출 검사기] 히어로 배너 이미지 2장 추가** | `loan-checker/index-dev.html`, `loan-checker/index.html`, `loan-checker/assets/img/waterbomb-jul-002.png`, `loan-checker/assets/img/loan-checker-options-guide.png` | 워터밤 페스티벌 사진 + 대출 옵션 픽셀아트 — title-text-box 아래 hero-banner 섹션 2개 추가 (DEV+PRD) | 2026-07-04 | 쮸티12-1호 |
| W-050 | P0 | T-048 | **코딩완료(TEST WAIT)** | **[대출 검사기] 블랙찬스 재대출 전용 안내 문구 추가** | `loan-checker/index-dev.html`, `loan-checker/index.html` | `✅ 대출 옵션이 뭔가요?` 섹션 블랙찬스 항목 아래 `* 블랙찬스 티켓을 보유하고 계신 재대출 고객님 전용 상품입니다.` 추가 / `option-guide-note` 스타일 | 2026-07-04 | 쮸티12-1호 |
| W-051 | P0 | T-049 | **코딩완료(TEST WAIT)** | **[대출 검사기] 이벤트 대출 안내 문구 변경** | `loan-checker/index-dev.html`, `loan-checker/index.html` | `워터밤💦대출 : 원리포 상품 원금 미션(1%)` → `워터밤💦대출 : 모든 미션이 인하!` / 정적 fallback + JS textContent 각 2곳 (DEV+PRD) | 2026-07-04 | 쮸티12-1호 |
| W-052 | P0 | T-050 | **코딩완료(TEST WAIT)** | **[대출 검사기] 악성 연체자 여부 → 악성 연체 여부 문구 수정** | `loan-checker/index-dev.html`, `loan-checker/index.html` | `악성 연체자 여부를 확인합니다.` → `악성 연체 여부를 확인합니다.` / 괄호 안 문구(악성 연체자는 대출이 거절됩니다.) 유지 (DEV+PRD) | 2026-07-04 | 쮸티12-1호 |
| W-053 | P0 | T-051 | **코딩완료(TEST WAIT)** | **[대출 검사기] 신용정보조회 비용 → 신용조회비용 문구 수정** | `loan-checker/index-dev.html`, `loan-checker/index.html` | `신용정보조회 비용을 현금 부담 없이 포인트로 해결해요!` → `신용조회비용을 현금 부담 없이 포인트로 해결해요!` (DEV+PRD) | 2026-07-04 | 쮸티12-1호 |
| W-054 | P0 | T-052 | **코딩완료(TEST WAIT)** | **[대출 검사기] 이모지 포인트의 매직 → 포인트의 매직 문구 수정** | `loan-checker/index-dev.html`, `loan-checker/index.html` | `✨ 이모지 포인트의 매직!` → `✨ 포인트의 매직!` (DEV+PRD) | 2026-07-04 | 쮸티12-1호 |
| W-055 | P0 | T-053 | **코딩완료(TEST WAIT)** | **[대출 검사기] 체크리스트 1단계 문구 7월 전환** | `loan-checker/app.js` | `⓵ 4️⃣🈷️ 잔인한 달 🩸 대출 신청` → `⓵ 4️⃣ 7️⃣🈷️ 썸머 🏖️베케이션 대출 신청` | 2026-07-04 | 쮸티12-1호 |
| W-056 | P0 | T-054 | **코딩완료(TEST WAIT)** | **[대출 검사기] 이벤트 대출 혜택 설명 문구 수정** | `loan-checker/app.js` | 빠른 대출과 원리포 상품 원금 미션(1%)! → 빠른 대출과 크레딧 미션 할인 & 원금 미션 파격 인하(1%)! (회차 수정 반영) | 2026-07-04 | 쮸티12-1호 |
| W-057 | P0 | T-055 | **코딩완료(TEST WAIT)** | **[대출 검사기] 할인 없음 → 인하 레이블** | `loan-checker/app.js` | 0% 할인 시 "할인 없음" → "인하" (2곳) | 2026-07-04 | 쮸티12-1호 |
| W-058 | P0 | T-056 | **코딩완료(TEST WAIT)** | **[대출 검사기] ⓸ 경고 문구 수정 (익일 명시)** | `loan-checker/app.js`, `loan-checker/index-dev.html`, `loan-checker/index.html` | 매일→익일(평일 18:00~22:00), ⚠️⚠️⚠️→⚠️⚠️ | 2026-07-04 | 쮸티12-1호 |
| W-059 | P0 | T-057 | **코딩완료(TEST WAIT)** | **[대출 검사기] ⓹ 경고 문구 수정** | `loan-checker/app.js`, `loan-checker/index-dev.html`, `loan-checker/index.html` | 앱에선→앱에서는, ⚠️⚠️⚠️→⚠️⚠️ | 2026-07-04 | 쮸티12-1호 |
| W-060 | P0 | T-058 | **코딩완료(TEST WAIT)** | **[대출 검사기] 웨이팅 대출 안 빡셉니다 → 널널합니다** | `loan-checker/index-dev.html`, `loan-checker/index.html` | 포인트 적립이 가장 안 빡셉니다 → 널널합니다 | 2026-07-04 | 쮸티12-1호 |
| W-061 | P0 | T-059 | **코딩완료(TEST WAIT)** | **[대출 검사기] CTA 신청하기 버튼 7월 전환** | `loan-checker/month-config.js`, `loan-checker/index-dev.html`, `loan-checker/index.html` | `🏖️ 썸머 베케이션 대출 신청하기 →` → `7️⃣🈷️ 썸머🏖️ 베케이션 대출 신청하기 →` | 2026-07-04 | 쮸티12-1호 |
| W-062 | P0 | T-060 | **코딩완료(TEST WAIT)** | **[대출 검사기] 크레딧 미션 기본값 4,500포 통일** | `loan-checker/app.js` | parsePointSummaryTable 내 웨이팅/롸잇나우/블랙찬스 baseCreditPoints 4,500 오버라이드 + 동적 재계산 | 2026-07-04 | 쮸티12-1호 |
| W-063 | P0 | T-061 | **코딩완료(TEST WAIT)** | **[대출 검사기] result-panel 위치 이동 (main 내부로)** | `loan-checker/index-dev.html`, `loan-checker/index.html` | result-panel을 `</main>` 이전으로 이동 (DEV+PRD) | 2026-07-04 | 쮸티12-1호 |
| W-064 | P0 | T-062 | **코딩완료(TEST WAIT)** | **[대출 검사기] ⑥ 개인 정보 아래 ⑦ 대표 거절 사유 박스 추가** | `loan-checker/index-dev.html`, `loan-checker/index.html` | ⑦ ⚠️ 대표 거절 사유 섹션 신규 추가 (DEV+PRD) | 2026-07-04 | 쮸티12-1호 |
| W-065 | P0 | T-063 | **코딩완료(TEST WAIT)** | **[대출 검사기] 이벤트 대출 summaryCredit 크미 인하 % 비율 표시** | `loan-checker/app.js` | 이벤트 대출 summaryCredit: "크미 (인하)" → "크미 인하 (X.X%)" 금액별 비율 | 2026-07-04 | 쮸티12-1호 |
| W-066 | P0 | T-064 | **코딩완료(TEST WAIT)** | **[대출 검사기] result-panel pointHintBox 아래 대표 거절 사유 박스 추가** | `loan-checker/index-dev.html`, `loan-checker/index.html` | 😓 포인트 빡세다 섹션 아래 ⑦ 대표 거절 사유 박스 삽입 (DEV+PRD) | 2026-07-04 | 쮸티12-1호 |
| W-067 | P0 | T-065 | **코딩완료(TEST WAIT)** | **[대출 검사기] 이벤트 대출 원금 미션 "파격 인하" 텍스트 추가** | `loan-checker/app.js` | 이벤트 대출 시 principalRateLine·step5Principal·summaryPrincipal → "파격 인하, 1%" 표시 | 2026-07-04 | 쮸티12-1호 |
| W-068 | P0 | T-066 | **코딩완료(TEST WAIT)** | **[7월 대출 페이지] 웨이팅 섹션 CTA 위 ⚠️ 대표 거절 사유 박스 추가 (DEV+PRD)** | `2026-07/index-dev.html`, `2026-07/index.html` | 🔻 웨이팅 대출은 대신에 이거 하나만 해주세요! 섹션과 CTA 버튼 사이에 ⚠️ 대표 거절 사유 삽입 — 팝업 UI(`block/eyebrow/reject/reject__ic/reject__t` 클래스) 동일 구조 (①통신비 2개월 이상 미납·연체 ②신용정보상 단순 CB 연체 또는 채무불이행으로 등록된 경우 ③채무조정 중 미납 3회 초과) | 2026-07-04 | 쮸티12-1호 |
| W-069 | P0 | T-067 | **코딩완료(TEST WAIT)** | **[7월 대출 페이지] 더블제로🆓챌린지 출시 예정 안내 문구 추가 (DEV+PRD)** | `2026-07/index-dev.html`, `2026-07/index.html` | 기존 단락 `더블제로🆓챌린지를 준비했습니다. 🌊⛱️` 다음 줄에 `* 더블제로🆓챌린지 : 2026년 7월 15일 이후 출시 예정` 추가 | 2026-07-04 | 쮸티12-1호 |
| W-070 | P0 | T-068 | **코딩완료(TEST WAIT)** | **[대출 검사기] ⑦ 대표 거절 사유 3개 항목 불릿 리스트 → 번호 박스 형식 변경 (DEV+PRD)** | `loan-checker/index-dev.html`, `loan-checker/index.html` | ⑦ ⚠️ 대표 거절 사유 타이틀 유지, 3개 항목을 7월 대출 페이지와 동일한 reject 박스 형식(`reject/reject__ic/reject__t` 클래스)으로 변경 | 2026-07-04 | 쮸티12-1호 |
| W-071 | P0 | T-069 | **코딩완료(TEST WAIT)** | **[신청 폼] apply-dev.html 결과 페이지 카톡 버튼 아래 ⚠️ 대표 거절 사유 박스 추가** | `apply/apply-dev.html` | 카톡 채널 추가하기 + 1:1 채팅방 바로가기 버튼 두 개 아래 ⚠️ 대표 거절 사유 삽입 — 팝업 UI 톤&매너(`block/eyebrow/reject/reject__ic/reject__t` 클래스 계열) 결과 페이지에 최대한 반영 | 2026-07-04 | 쮸티12-1호 |
| W-072 | P0 | T-070 | **코딩완료(TEST WAIT)** | **[메인 페이지] index-dev.html 대출 가능성 검사기 박스 숨김 해제 (DEV+PRD)** | `index-dev.html`, `index.html` | `checker-card` div `style="display:none"` 제거 — 대출 실사 대응 숨김 처리 해제, DEV+PRD 동시 적용 | 2026-07-04 | 쮸티12-1호 |
| W-073 | P1 | T-071 | **검증완료** `9ee3371` | **[레포 통합] sirjuseyoWeb에 monthly-loan-repo 파일 복사 (로컬 통합)** | `sirjuseyoWeb/` 전체 | monthly-loan-repo 파일(index.html, index-dev.html, 2026-04~07/, apply/, apply-review/, loan-checker/, imgs/, js/)을 sirjuseyoWeb 로컬에 복사 — 충돌 파일(js/legal-shared.js, imgs/ 등) 병합 처리, CNAME은 sirjuseyoWeb 것 유지, project-docs는 각 레포 별도 관리 | 2026-07-04 | 쮸티12-1호 |
| W-074 | P2 | - | **대기** | **[써주세요. 소개] 레이아웃 앱 사이즈 전환** | `home/index.html`, `home/index-dev.html` | 현재 웹 와이드 레이아웃을 2026-07/ 기준 앱 사이즈(모바일 폭)로 전환 — 웹사이트 이전 작업(W-073) + 메뉴 구조 완료 + 대표이사 전체 테스트 완료 후 진행 | 2026-07-17 | 쮸티12-1호 |
| W-075 | P2 | T-076 | **테스트 완료(DONE)** `c3638fe` | **[나노크레딧] 레이아웃 앱 사이즈 전환** | `nanocredit/index.html`, `nanocredit/index-dev.html` | 현재 웹 와이드 레이아웃을 2026-07/ 기준 앱 사이즈(모바일 폭)로 전환 — 웹사이트 이전 작업(W-073) + 메뉴 구조 완료 + 대표이사 전체 테스트 완료 후 진행 | 2026-07-17 | 쮸티12-1호 |
| W-076 | P2 | T-077 | **테스트 완료(DONE)** `c3638fe` | **[나에게 맞는 대출 방식] 레이아웃 앱 사이즈 전환** | `loan-match/index.html`, `loan-match/index-dev.html` | 현재 웹 와이드 레이아웃을 2026-07/ 기준 앱 사이즈(모바일 폭)로 전환 — 웹사이트 이전 작업(W-073) + 메뉴 구조 완료 + 대표이사 전체 테스트 완료 후 진행 | 2026-07-17 | 쮸티12-1호 |
| W-077 | P1 | T-072 | **테스트 완료(DONE)** `0d26a54` | **[햄버거 메뉴] menu.js + 1Depth 메뉴 UI 구현** | `js/menu.js` (신규), 전체 페이지 공통 | PLAN v1.3 §3-0 확정 1Depth 7개 항목 메뉴 트리 구현 — 햄버거 버튼 UI + menu.js (CURRENT_MONTH 단일 소스) + 드로어 메뉴 / challenge·archive·notice 대표 페이지 3개 신규 제작 포함 | 2026-07-17 | 쮸티12-1호 |
| W-078 | P1 | T-073 | **테스트 완료(DONE)** `9bf803d` | **[메인 DEV 팝업] 재노출 방지 활성화 (하루 1회)** | `index-dev.html` | DEV 팝업 재노출 방지 비활성화 상태 → PRD와 동일하게 하루 1회 제한으로 변경 — 테스트 반복 시 팝업이 매번 열리는 불편 해소 | 2026-07-17 | 쮸티12-1호 |
| W-079 | P1 | T-074 | **테스트 완료(DONE)** `e833bdc` | **[햄버거 메뉴] menu.js 디자인 UI 작업** | `js/menu.js` | nav bar + 드로어 디자인 완성 — 로고·버튼·메뉴 항목·색상·타이포·간격 등 브랜드 톤앤매너 반영 / 완성 후 전체 페이지 적용(W-080 예정) | 2026-07-17 | 쮸티12-1호 |
| W-080 | P1 | T-075 | **테스트 완료(DONE)** `5813f2c` | **[햄버거 메뉴] menu.js 햄버거 버튼 CSS span 방식 변경 + 크기 확대** | `js/menu.js` | `≡` 유니코드 문자 → CSS `<span>` 3개 방식으로 변경 — 선 너비 28px/두께 3px/간격 6px, 나노크레딧 버튼 참고 | 2026-07-20 | 쮸티12-1호 |
| W-082 | P1 | T-078 | **완료** | **[나노크레딧] nanocredit/index-dev.html 신규 생성** | `nanocredit/index-dev.html` | PRD(`nanocredit/index.html`) 복사 후 `<body>` 직후 DEV 오렌지 배너 삽입 — menu.js 이미 적용됨 | 2026-07-21 | 쮸티12-1호 |
| W-083 | P1 | T-079 | **완료** | **[나에게 맞는 대출 방식] loan-match/index-dev.html 신규 생성** | `loan-match/index-dev.html` | PRD(`loan-match/index.html`) 복사 후 `<body>` 직후 DEV 오렌지 배너 삽입 — menu.js 이미 적용됨 | 2026-07-21 | 쮸티12-1호 |
| W-084 | P1 | T-080 | **테스트 완료(DONE)** `6015e2b` | **[menu-dev.js] DEV 전용 메뉴 JS 신규 생성 + 전체 DEV 파일 적용** | `js/menu-dev.js`(신규), `index-dev.html`, `sirjuseyo/index-dev.html`, `nanocredit/index-dev.html`, `loan-match/index-dev.html`, `2026-07/index-dev.html`, `apply/apply-dev.html`, `loan-checker/index-dev.html` | menu.js 복사 → 모든 링크를 DEV 버전(`index-dev.html`)으로 변경 / 로고 href `/` → `/index-dev.html` / 7개 DEV 파일의 `menu.js` → `menu-dev.js` 교체 | 2026-07-21 | 쮸티12-1호 |
| W-085 | P1 | - | **테스트 완료(DONE)** `d049be8` | **[챌린지 대표 페이지] challenge/index.html + index-dev.html 신규 생성** | `challenge/index.html`(신규), `challenge/index-dev.html`(신규) | 현재 챌린지 1개(월드컵)뿐 → `2026-06/index-dev.html` 내용을 챌린지 대표 페이지로 이식 / PRD + DEV 각 1개 생성 / menu.js(PRD)·menu-dev.js(DEV) 적용 | 2026-07-22 | 쮸티12-1호 |
| W-086 | P1 | T-082 | **테스트 완료(DONE)** | **[전체 팝업] popup.js 신규 생성 + 전체 페이지 적용 + 날짜 KST 수정** | `js/popup.js`(신규), `index.html`, `index-dev.html`, `sirjuseyo/index.html`, `sirjuseyo/index-dev.html`, `nanocredit/index.html`, `nanocredit/index-dev.html`, `loan-match/index.html`, `loan-match/index-dev.html`, `2026-07/index.html`, `2026-07/index-dev.html`, `challenge/index.html`, `challenge/index-dev.html`, `loan-checker/index.html`, `loan-checker/index-dev.html` | ① 홈 인라인 팝업(HTML+CSS+JS)을 `js/popup.js` IIFE로 분리 ② 날짜 카운팅 UTC→KST 수정(`+9h`) ③ 홈 인라인 팝업 코드 제거 후 `popup.js` 스크립트 연결 ④ 서브 페이지 14개 파일에 `popup.js` 스크립트 추가 (apply/ 제외) | 2026-07-22 | 쮸티12-1호 |
| W-087 | P1 | T-081 | **테스트 완료(DONE)** `61bb08b` | **[팝업 오버레이] 내비바 가림 문제 수정 — top:52px** | `js/popup.js` | `#sjy-overlay { inset:0 }` → `inset:52px 0 0 0` 한 줄만 변경 — 팝업 z-index(9999)가 내비바(z-index:1000)를 덮어 햄버거 버튼이 안 보이는 문제 해소, 오버레이를 내비바 높이(52px) 아래부터 시작 | 2026-07-22 | 쮸티12-1호 |
| W-088 | P1 | T-083 | **코딩 완료 · 테스트 대기** | **[꿀정보] tip/index.html + index-dev.html 신규 생성** | `tip/index.html`(신규), `tip/index-dev.html`(신규) | 목업(`목업_tip_index_20260722.html`) 그대로 배치 — `.page` 클래스 추가, legal-top/footer div 제거, footer.js 제거, popup.js 추가 / DEV: menu-dev.js + DEV 배너 | 2026-07-22 | 쮸티12-1호 |
| W-089 | P1 | T-084 | **테스트 완료(DONE)** | **[UI 통일] 상단 고지 크기 불일치 — 컨테이너 레이아웃 통일** | `index-dev.html`, `sirjuseyo/index-dev.html`, `loan-checker/index-dev.html`, `2026-07/index-dev.html`, `challenge/index-dev.html`, `tip/index-dev.html` | `.page` vs `.wrap` 클래스 혼재 + 각 컨테이너 `max-width`·`margin` 차이로 상단 고지 너비 불일치 → 전체 풀사이즈(100% width) 통일 필요 | 2026-07-22 | 쮸티12-1호 |
| W-090 | P1 | T-085 | **테스트 완료(DONE)** `3d9e7e4` | **[UI 통일] 상단 고지 없는 페이지 3곳 — legal-shared.js 연결·감지 수정** | `loan-checker/index-dev.html`, `loan-match/index-dev.html`, `nanocredit/index-dev.html` | loan-checker `.page-intro` 클래스 → `.page` 클래스 추가로 감지 해결 / loan-match·nanocredit legal-shared.js 미연결 → 연결 + 컨테이너 클래스 추가 | 2026-07-22 | 쮸티12-1호 |
| W-091 | P1 | T-086 | **테스트 완료(DONE)** `95a9815` `e671798` | **[UI 통일] BACK 버튼 스타일 불일치 — 단일 스타일로 통일** | `loan-checker/index-dev.html`, `loan-match/index-dev.html`, `nanocredit/index-dev.html` | `← BACK` (loan-checker) vs `⬅ BACK` (loan-match·nanocredit) 혼재 → "이전" 또는 `← BACK` 단일 스타일로 통일 | 2026-07-22 | 쮸티12-1호 |
| W-092 | P1 | T-087 | **테스트 완료(DONE)** `c88a8ad` `d4ec4a9` | **[UI 통일] 하단 법적 고지 UI 불일치 — footer.js → legal-shared.js 교체** | `loan-match/index.html`, `nanocredit/index.html` (PRD) | DEV는 W-089에서 기처리 / PRD 2개: footer.js 주석 처리 + legal-shared.js 추가 | 2026-07-25 | 쮸티12-1호 |
| W-093 | P2 | T-089 | **테스트 완료(DONE)** `e2fb46b` | **[UI 통일] JS 연결 순서 불일치 — 표준 순서 정렬** | `tip/index-dev.html`, `challenge/index-dev.html` | tip: menu-dev.js↔popup.js 순서 교체 / challenge: legal-shared.js 페이지 끝→menu-dev.js 직후 이동 + 중복 제거 | 2026-07-25 | 쮸티12-1호 |
| W-094 | P1 | T-088 | **테스트 완료(DONE)** `c69f2c9` `c401d33` | **[UI 통일] 상단 고지 ↔ 콘텐츠 간격 불일치** | `js/legal-shared.js`, `index.html` | legal-shared.js margin-bottom 20px→40px + index.html h1 padding-top 0 — 박스·텍스트 전 페이지 gap 40px 규격 통일 | 2026-07-25 | 쮸티12-1호 |
| W-095 | P2 | T-090 | **테스트 완료(DONE)** `412c3c2` | **[PRD 레이아웃] loan-checker/index.html 앱 사이즈(480px) 적용** | `loan-checker/index.html` | .app-main max-width:480px !important; margin:0 auto !important — DEV와 동일, styles.css 무수정 | 2026-07-25 | 쮸티12-1호 |
| W-096 | P2 | T-091 | **테스트 완료(DONE)** `aee1e72` | **[PRD 정합] 대출 가능성 검사기 PRD → DEV 정합 (이미지 제거 + 1열)** | `loan-checker/index.html` | ①`loan-eligibility-checker-02.jpg`("대출이 필요하신 분, 주목") `style="display:none;"` 숨김 (DEV `index-dev.html:38-40`과 동일) ②`<head>` 인라인 style에 `.form-grid { grid-template-columns: 1fr !important; }` 추가 → 960px↑ 2열을 1열로 (DEV `index-dev.html:12`와 동일) / styles.css 무수정 | 2026-07-25 | 쮸티12-1호 |
| W-097 | P2 | T-092 | **테스트 완료(DONE)** `b549c35` | **[DEV 배너 정합] loan-checker DEV 바 웹 풀사이즈 → 앱 사이즈(480px) 고정** | `loan-checker/index-dev.html` | DEV 배너 `<div>`에 `position:sticky;top:52px;z-index:10000;max-width:480px;margin:0 auto;` 추가 → tip/challenge/sirjuseyo DEV 배너와 동일 규격 (현재 이 5개 속성 누락으로 풀사이즈 + 스크롤 미고정) | 2026-07-25 21:40 | 쮸티12-1호 |
| W-098 | P2 | T-093 | **테스트 완료(DONE)** `4fef5cf` | **[DEV 배너 정합] nanocredit·loan-match DEV 바 웹 풀사이즈 → 앱 사이즈(480px) 고정** | `nanocredit/index-dev.html`, `loan-match/index-dev.html` | 두 파일 DEV 배너 `<div>`에 `max-width:480px;margin:0 auto;` 누락으로 풀사이즈 (position:sticky는 이미 있음) → W-097과 동일 방식으로 앱 사이즈 고정 / W-097 loan-checker와 분리한 별도 작업 | 2026-07-25 21:45 | 쮸티12-1호 |
| W-099 | P1 | T-094 | **테스트 완료(DONE)** `bc93486` | **[디렉토리 개편 1단계] 월별대출(2026-04~07)+apply → monthly-loan/ 하위 통합** | `monthly-loan/`(신규) 외 다수 | 홈 메뉴 구조와 폴더 위치 일치 위해 `2026-04/05/06/07`·`apply/`를 `monthly-loan/` 하위로 git mv 이동 + 내부/외부 참조 경로 전수 수정 + 스테일 구 도메인 풀 URL → 사이트 내부 루트 상대경로(`/monthly-loan/…`) 통일 / 2·3단계(챌린지·꿀정보) 예정 | 2026-07-25 22:45 | 쮸티12-1호 |
| W-100 | P1 | T-095 | **테스트 완료(DONE)** `af48274` | **[잠복 버그 수정] 월별 대출 신청 페이지 상단 ← 네비 무반응** | `js/menu.js`, `js/menu-dev.js` | apply.html `const history = []` 전역 렉시컬 바인딩 → menu 스크립트 bare `history.back()` shadowing → `TypeError: history.back is not a function` → 클릭 핸들러 중단 / 두 파일 105행 → `window.history.back()` 한정 수정 (2파일 각 1행) | 2026-07-26 | 쮸티12-1호 |
| W-101 | P1 | T-096 | **테스트 완료(DONE)** `69e20e2` | **[디렉토리 개편 3단계] apply-review·loan-checker·unsuspend → tip/ 하위 통합** | `tip/apply-review/`, `tip/loan-checker/`, `tip/unsuspend/` | git mv 3개 + 참조 수정: index(-dev).html, tip/index(-dev).html, tip/unsuspend/index.html img 4곳 / 홈 메뉴 구조(꿀정보)와 폴더 위치 일치 | 2026-07-26 | 쮸티12-1호 |
| W-102 | P2 | T-097 | **테스트 완료(DONE)** `2ffda52` | **[메뉴 드로어] 헤더 풀사이즈 → 앱 사이즈(480px) 고정** | `js/menu.js`, `js/menu-dev.js` | PC에서 드로어 헤더(보라 배경 "메뉴를 선택하세요.")가 풀사이즈 / `#sjy-drawer-nav`는 이미 480px이나 `#sjy-drawer-head`에 max-width 누락 / 동일 규격 추가 | 2026-07-26 | 쮸티12-1호 |
| W-103 | P2 | T-098 | **테스트 완료(DONE)** `95b6cf0` | **[메뉴 드로어] 드로어 본체 480px 제한 (B안)** | `js/menu.js`, `js/menu-dev.js` | PC에서 드로어 배경이 뷰포트 전체를 덮음 / `#sjy-drawer` 자체를 480px 중앙 제한, 슬라이드 애니메이션 translateX 조정 / 양옆은 기존 반투명 오버레이가 담당 | 2026-07-26 | 쮸티12-1호 |
| W-104 | P1 | T-099 | **테스트 완료(DONE)** `af2879c` | **[나노크레딧] 상품 상세 페이지 전면 개편 (10/20/30/50)** | `nanocredit/10/index.html`, `nanocredit/20/index.html`, `nanocredit/30/index.html`, `nanocredit/50/index.html` | 4개 상세 페이지 menu.js 미포함·구 nav 헤더·PC 풀화면 / 써주세요 구조로 개편: ①title ②body 480px ③nav CSS 제거 ④class=page+data-back ⑤nav HTML 제거 ⑥CTA→2026-07 ⑦popup.js+menu.js+legal-shared.js / 회차수정: class=page+popup.js+legal-shared.js(`b50cd97`) | 2026-07-26 | 쮸티12-1호 |
| W-105 | P1 | T-100 | **테스트 완료(DONE)** `29a7ec0` | **[나노크레딧] "이 달의 대출 신청하러 가기" 링크 수정 (PRD+DEV)** | `nanocredit/index.html`, `nanocredit/index-dev.html` | 나노크레딧 메인 CTA 버튼 href가 홈("/", "/index-dev.html")으로 잘못 연결 / PRD: "/"→"/monthly-loan/2026-07/" / DEV: "/index-dev.html"→"/monthly-loan/2026-07/index-dev.html" | 2026-07-26 | 쮸티12-1호 |
| W-106 | P1 | T-101 | **진행중(In-Progress)** | **[나노크레딧 상세] 수치 전면 업데이트 — 7월 썸머 베케이션 기준 반영 (10/20/30/50)** | `nanocredit/10/index.html`, `20/index.html`, `30/index.html`, `50/index.html` | 크레딧 미션 금액별 다른 기준값(4,000/5,000/6,000/12,000포)→4,500포 공통 통일 + 이벤트 이포→원리포 + 원금 미션 추가 + 비교 테이블·웨이팅 할인 테이블·한도상향 수치 전면 재산정 | 2026-07-26 | 쮸티12-1호 |
| W-107 | P1 | - | **대기** | **[nanocredit/submissions] 소통거리 제출 가이드 — 꿀정보 2Depth 이동 + 나노크레딧 금액 페이지 CTA 이중 접근 경로 구성** | `nanocredit/submissions/` → `tip/submissions/` 이동, `tip/index.html`, `tip/index-dev.html`, `nanocredit/10~50/index.html` 4개 | 꿀정보 메인 6번째 항목(메인 접근) + 나노크레딧 10/20/30/50만 상세 페이지 CTA(보조 접근) 이중 경로 구성 / 표준 UI(menu.js·legal-shared.js·DEV 배너) 통합 필요 | 2026-07-28 | 쮸티12-1호 |
| W-108 | P1 | T-108 | **대기** | **[소통거리 제출 가이드] SEC-14 등·초본 → 초본 텍스트 수정** | `tip/submissions/index.html`, `tip/submissions/index-dev.html` | ①📋 등·초본 h3 제목 → 📋 초본 ②등·초본 제출하는 방법 소제목 → 초본 제출하는 방법 ③주민등록표 등본과 초본 각각 발급합니다. → 주민등록표 초본을 발급합니다. (2개 파일 동일 적용) | 2026-07-28 | 쮸티12-1호 |
| W-109 | P1 | T-109 | **대기** | **[소통거리 제출 가이드] phone-docs·job-income 서브페이지 DEV 버전 15개 신규 생성** | phone-docs: sunbul-dev/alttul-dev/yakjeong-dev.html(신규 3개) / job-income: *-dev.html(신규 12개) / submissions/index-dev.html(수정) | 현재 phone-docs·job-income 서브페이지 DEV 버전 없음 / 각 PRD 파일 복사 + DEV 배너 + menu-dev.js 교체 / submissions/index-dev.html SEC-07·10 링크 -dev.html 연결 | 2026-07-28 | 쮸티12-1호 |
| W-110 | P1 | T-110 | **대기** | **[소통거리 제출 가이드] SEC-12·SEC-13 섹션 타이틀 서브라인 추가** | `tip/submissions/index.html`, `tip/submissions/index-dev.html` | 현재 타이틀이 짧아 괄호 설명 추가 시 두 줄로 넘침 → 서브라인 분리(A안) 적용 / SEC-12 👯 절친·SEC-13 🧑‍🧑‍🧒 부모님 h3 각각 span 서브라인 추가 | 2026-07-28 | 쮸티12-1호 |
| W-111 | P1 | T-111 | **대기** | **[대출 가능성 검사기 리디자인] Phase A — 톤·비주얼 개편** | `tip/loan-checker/styles.css`, `index.html`, `index-dev.html`, `app.js` | 기획안_tip_loan-checker_리디자인_v1_20260728.md §2·5·6·7 전면 적용 / STEP 0(파일삭제금지) → STEP 1(styles) → STEP 2(상단재구성) → STEP 3(카피전면교체 5.1~5.6·§5.7주의3건) → STEP 4(index-dev 동일) | 2026-07-28 | 쮸티12-1호 |
| W-112 | P1 | T-112 | **대기** | **[대출 가능성 검사기 리디자인] Phase B — 데이터 보정** | `tip/loan-checker/app.js`, `month-config.js`, `index.html` | 기획안 §8 B-1~B-7 / Phase A 승인 후 착수. B-5는 CEO 포인트_요약_20260701 원본 대조 필요 | 2026-07-28 | 쮸티12-1호 |
| W-113 | P1 | T-113 | **테스트 완료(DONE)** `7fdde17` | **[홈 화면] 히어로 영역 문구 앱 동일 변경** | `index.html`, `index-dev.html` | 히어로 메인 카피 "급할 때 빌려쓰는, 나노크레딧" → "신용 점수가 아니라, 미션과 대안신용으로 봐요." + 서브 면책 문구 "미션 수행이 대출 승인을 보장하지 않으며, 심사 결과에 따라 제한될 수 있습니다." 추가 (앱 [이미지 #26] 기준) | 2026-07-30 | 쮸티12-1호 |
| W-114 | P1 | T-114 | **테스트 완료(DONE)** `79e511c` | **[브레드크럼] 전체 페이지 브레드크럼 추가 (menu.js·menu-dev.js + 71개 HTML)** | `js/menu.js`, `js/menu-dev.js`, 71개 HTML 파일 | GNB 아래 "홈 › 꿀정보 › 페이지명" 형식 브레드크럼 삽입 / PRD: GNB→브레드크럼→콘텐츠 / DEV: GNB→DEV배너→브레드크럼→콘텐츠 / 구현방식 B안(data-breadcrumb 속성) / 홈·개인정보 제외 전체 적용 | 2026-07-30 | 쮸티12-1호 |
| W-115 | P1 | T-115 | **테스트 완료(DONE)** `43b70e2` | **[한도 상향] 한도 상향 Coming Soon 페이지 신규 생성** | `tip/credit-limit/index.html`, `index-dev.html`, `tip/index.html·index-dev.html` | ✨ 곧 공개 예정 배지·예고 카드·앱 공지 알림 / tip/index 03번 href 연결 / data-breadcrumb 적용 | 2026-07-30 | 쮸티12-1호 |
| W-116 | P1 | T-116 | **테스트 완료(DONE)** `43b70e2` | **[공지사항] 공지사항 안내 페이지 신규 생성** | `notice/index.html`, `notice/index-dev.html` | 앱 공지사항 이용 안내 + Play Store 링크 / 웹 이전 예정 안내 / data-breadcrumb="공지사항" | 2026-07-30 | 쮸티12-1호 |
| W-117 | P1 | - | **대기** | **[전체 사이트] 기본 폰트 사이즈 스케일업 — 본문 13~14px → 16px 수준 상향** | 전체 HTML 파일 + `js/menu.js`, `js/menu-dev.js`, `js/legal-shared.js` | 현재 본문 .85~.88rem(13~14px) / 카드 내 작은 텍스트 .75~.82rem(12~13px) — 전체적으로 너무 작음 / 목표: 기본 본문 16px, 섹션 설명 16~18px / 2단계 폰트 계층으로 단순화 / px 고정값(tip/index 13px 등) + rem 기반 전체 상향 | 2026-07-30 | 쮸티12-1호 |
| W-118 | P1 | T-118 | **테스트 완료(DONE)** `5846239` | **[대출 검사기] ⑤신청 정보 URL 자동 주입 + CLAUDE.md 매월 체크리스트** | `tip/loan-checker/index.html·index-dev.html`, `CLAUDE.md` | santaApply URL 하드코딩 → cfg.detailUrl 동적 생성 / CLAUDE.md 매월 대출 전환 3단계 체크리스트 기록 | 2026-07-30 | 쮸티12-1호 |
| W-119 | P1 | T-119 | **테스트 완료(DONE)** `4cc5c56` | **[원리포 혜택] 원리포 상품의 메리트 페이지 신규 생성** | `tip/wonripo/index.html`, `tip/wonripo/index-dev.html`, `tip/wonripo/assets/`, `tip/index.html·index-dev.html` | 목업 v0.15 기반 / 메리트03 래더 → 이미지38 교체 / 메리트04 VIP 배너 → 이미지37 교체 / tip/index 02번 href 연결 | 2026-07-30 | 쮸티12-1호 |
| W-120 | P1 | T-120 | **테스트 완료(DONE)** `34c81ad` | **[원리포 계산기] calculator.html 신규 생성 + index 링크 변경** | `tip/wonripo/calculator.html`, `tip/wonripo/calculator-dev.html`, `tip/wonripo/index.html`, `tip/wonripo/index-dev.html` | 기획서 calculator_wonripo.html 기반 / PRD+DEV 생성 / index 구글 스프레드시트 링크 → /tip/wonripo/calculator.html 로 교체 | 2026-07-30 | 쮸티12-1호 |
| W-121 | P1 | T-121 | **테스트 완료(DONE)** `3f06a2d` | **[원리포 계산기] UI 디테일 수정 3종** | `tip/wonripo/calculator.html`, `tip/wonripo/calculator-dev.html` | ①영역 구분 여백 추가 ②슬라이더 선택값 표시 개선 ③기간 1·2개월 선택 시 빨간 경고 문자 | 2026-07-30 | 쮸티12-1호 |
| W-122 | P1 | T-122 | **진행중** | **[8월 대출] 썸머 베케이션 Ⅱ 기획서 작성 + 8월 대출 페이지 HTML 작업** | `project-docs/120_plan/PLAN_2026-08_썸머베케이션Ⅱ_기획서.md`, `monthly-loan/2026-08/index-dev.html`, `index.html` | 기획서 v0.4 완성 (이미지 에셋 4종 수령 완료) / HTML 작업은 W-123으로 분리 | 2026-07-30 | 쮸티12-1호 |
| W-123 | P1 | T-123 | **완료** | **[8월 대출] 썸머 베케이션 Ⅱ 대출 페이지 신규 생성 (index-dev.html) + CURRENT_MONTH 전환** | `monthly-loan/2026-08/index-dev.html`, `js/menu.js`, `js/menu-dev.js`, `tip/loan-checker/month-config.js` | 기획서 v0.4 기반 — ①2026-08/index-dev.html 신규 생성 ②CURRENT_MONTH='2026-08' 전환 ③month-config.js 2026-08 객체 추가 / 3단계 체크리스트 동시 처리 완료 | 2026-07-30 | 쮸티12-1호 |
| W-124 | P1 | T-124 | **완료** | **[8월 대출] 썸머 베케이션 Ⅱ 대출 페이지 회차 수정 (9건)** | `monthly-loan/2026-08/index-dev.html` | ①이벤트박스 안내문구 2개 ②~④h4 3종 ⑤블찬 2곳 교체 ⑥~⑦크레딧미션 수정 ⑧웨이팅h2 ⑨거절사유4번 / 분석+컨펌 완료 | 2026-07-31 | 쮸티12-1호 |
| W-125 | P1 | T-125 | **테스트 완료(DONE)** `487be1e` | **[홈 화면] 8월 전환 (7월→8월)** | `index-dev.html`, `index.html` | ①live-badge `7월 대출`→`8월 대출` ②gift-box 이미지 2026-07→2026-08 ③메인타이틀 `7️⃣🈷️ 썸머 🏖️베케이션`→`8️⃣🈷️ 썸머 🏝️베케이션 Ⅱ` ④신청하기 href 2026-07→2026-08 / 테스트 완료 | 2026-07-31 | 쮸티12-1호 |
| W-126 | P1 | T-126 | **테스트 완료(DONE)** `a5562d8` | **[대출 검사기] 30만 원 이벤트 대출 비활성 + 이벤트 안내 문구 수정** | `tip/loan-checker/index-dev.html`, `tip/loan-checker/index.html` | ①updateAmountWarnings: 30만 원 선택 시 이벤트 대출 disabled ②eventAmountNote 문구 `10·20만 원만 선택 가능 (30·50만 원 제외)` / 테스트 완료 | 2026-08-01 | 쮸티12-1호 |
| W-127 | P1 | T-127 | **테스트 완료(DONE)** `ded299d` | **[대출 검사기] 대표 거절 사유 4번 추가** | `tip/loan-checker/index-dev.html`, `tip/loan-checker/index.html` | 4번: `최근 3개월 이상 무직 또는 과거 6개월 이상 무직` + em `노동 상태와 의지를 중요시 여깁니다.` / ⑦ 안내 섹션 + 결과 패널 2곳 / 사장님 VS Code Live Server 테스트 완료 | 2026-08-01 | 쮸티12-1호 |
| W-128 | P1 | T-128 | **테스트 완료(DONE)** `6f857fd` | **[8월 대출 페이지] 대표 거절 사유 4번 문구 수정** | `monthly-loan/2026-08/index-dev.html` | `1년 이내 3개월 이상 무직 또는 과거 6개월 이상 무직` → `최근 3개월 이상 무직 또는 과거 6개월 이상 무직` + em `노동 상태와 의지를 중요시 여깁니다.` / 테스트 완료 | 2026-08-01 | 쮸티12-1호 |
| W-129 | P1 | T-129 | **테스트 완료(DONE)** `189ae41` | **[대출 검사기] 상단 안내 문구 워딩 수정** | `tip/loan-checker/index-dev.html`, `tip/loan-checker/index.html` | ①`대출을 받을 수 있는 [써주세요.…]은 무작정 신청하지 마세요.` → `[써주세요.…]을 무작정 신청하지 마세요.` ②`이 검사기는` → `대출 가능성 검사기는` / 테스트 완료 | 2026-08-01 | 쮸티12-1호 |
| W-130 | P1 | T-130 | **테스트 완료(DONE)** `a9b2747` | **[신청 폼] 7월→8월 워딩 변경 + 이벤트 대출 30만 경고 추가 + 경고 문구 수정** | `monthly-loan/apply/apply-dev.html`, `apply.html` | ①h1·고객안내·API 7→8월 워딩 ②selectMethodEvent `50만` 조건에 `30만` 추가 ③warn-method-amount `10,20,30만`→`10,20만` / 테스트 완료 | 2026-08-01 | 쮸티12-1호 |
| W-131 | P1 | T-131 | **테스트 완료(DONE)** `b7416d2` | **[대출 검사기] 상단 concept-image 이미지 교체 (징검다리 배낭 남성 — 8월)** | `tip/loan-checker/assets/img/stepping-stones-aug-001.png`(신규), `tip/loan-checker/index-dev.html`, `tip/loan-checker/index.html` | 현재 텍스트만 있는 concept-image 자리에 이미지 삽입 / DEV·PRD 동시 처리 / 테스트 완료 | 2026-08-02 00:59 | 쮸티12-1호 |
| W-132 | P1 | T-132 | **테스트 완료(DONE)** `a66b8c3` | **[대출 검사기] tone-note 박스 스타일 3종 수정** | `tip/loan-checker/styles.css` | ①border-right 4px 보라 추가(좌우 동일) ②배경 연보라 rgba(56,0,151,0.04) ③title 1.1rem ④body 1rem / 테스트 완료 | 2026-08-02 14:14 | 쮸티12-1호 |
| W-133 | P1 | T-133 | **테스트 완료(DONE)** `2d93a00` | **[대출 검사기] 시계 박스 ↔ tone-note 박스 순서 교체** | `tip/loan-checker/index-dev.html`, `tip/loan-checker/index.html` | 현재 순서(이미지→시계→tone-note) → 변경(이미지→tone-note→시계) / 테스트 완료 | 2026-08-02 02:28 | 쮸티12-1호 |
| W-134 | P1 | T-134 | **테스트 완료(DONE)** `ed8ec27` | **[팝업] 8월 대출 작업 동기화 2종** | `js/popup.js` | ①대표 거절 사유 4번 추가(최근 3개월 이상 무직 또는 과거 6개월 이상 무직 + em) ②30만 원 이벤트 대출 `활용 3.5%` → `대출 상품 없음` 변경 / 테스트 완료 | 2026-08-02 03:20 | 쮸티12-1호 |
| W-135 | P0 | T-135 | **테스트 완료(DONE)** `ba78afb` | **[긴급/Android] 헤더 가로 오버플로우 + 드로어 노출 버그 수정** | `js/menu.js`, `js/menu-dev.js` | `#sjy-nav-bar`·`#sjy-drawer` width:100%→100vw / 테스트 완료 | 2026-08-02 03:20 | 쮸티12-1호 |
| W-136 | P1 | T-136 | **테스트 완료(DONE)** `f78b872` | **[신청 폼] 대출 가능성 검사기 안내 박스 추가** | `monthly-loan/apply/apply-dev.html`, `apply.html` | h1 아래 .apply-note 박스 삽입 / 검사기 이용 안내 + 경로 / 테스트 완료 | 2026-08-02 04:06 | 쮸티12-1호 |
| W-137 | P1 | T-137 | **테스트 완료(DONE)** `1aee714` | **[loan-match] DEV 환경 미적용 페이지 수정 (즉시빌리기 PRD링크 + 여유있게빌리기 DEV화)** | `loan-match/index-dev.html`, `loan-match/browse-dev.html`(신규) | ①즉시빌리기 PRD→DEV ②여유있게빌리기 browse-dev.html 연결 ③browse-dev.html 신규(앱사이즈+DEV배너+메뉴바+상·하단고지) / 테스트 완료 | 2026-08-02 | 쮸티12-1호 |
| W-138 | P1 | T-138 | **테스트 완료(DONE)** `dbf0f1f` | **[loan-match] 결과 카드 4개 페이지 DEV 버전 생성** | `loan-match/credit-dev.html`(신규), `loan-match/shopping-dev.html`(신규), `loan-match/reputation-dev.html`(신규·PRD없음), `loan-match/contribution-dev.html`(신규·PRD없음), `loan-match/browse-dev.html`(수정) | 공통: 앱사이즈+DEV배너+메뉴바+법적고지+breadcrumb(3단계)+BACK버튼제거 / browse-dev.html 카드링크 DEV 버전으로 변경 + 하단BACK버튼 삭제 / 테스트 완료 | 2026-08-02 | 쮸티12-1호 |
| W-139 | P1 | T-140 | **테스트 완료(DONE)** `9f35b6f` | **[credit-dev.html] CTA 버튼 클릭 시 준비 중 팝업 표시** | `loan-match/credit-dev.html` | CTA onclick="openReadyPopup();return false;" + 인라인 준비 중 모달 + JS 추가 / 테스트 완료 | 2026-08-02 | 쮸티12-1호 |
| W-140 | P1 | T-141 | **테스트 완료(DONE)** `9f35b6f` | **[shopping-dev.html] CTA 버튼 클릭 시 준비 중 팝업 표시 (Tally 교체)** | `loan-match/shopping-dev.html` | Tally 링크·속성·스크립트 제거 + CTA onclick="openReadyPopup();return false;" + 인라인 준비 중 모달 + JS 추가 / 테스트 완료 | 2026-08-02 | 쮸티12-1호 |
| W-141 | P1 | T-142 | **테스트 완료(DONE)** `693966b` | **[대출 검사기] 콘텐츠 오른쪽 offset + overflow 수정** | `tip/loan-checker/index-dev.html`, `tip/loan-checker/index.html` | form-grid: 1fr→minmax(0,1fr) — 이미지 min-content가 grid 트랙(480px) 초과하던 근본 원인 해결 / DEV·PRD 사장님 테스트 완료 | 2026-08-02 | 쮸티12-1호 |



---

## 🔎 예시

### 작업 현황표 실제 적용 예시

| T-ID | 작업 타이틀 | 로컬커밋 | 원격푸시 | DEV | PRD 빌드 | PRD 스토어배포 | 작업자 | 작업일시 | 비고 |
|---|---|---|---|---|---|---|---|---|---|
| T-001 | 홈 화면 메뉴 오류 수정 | 완료 | 완료 | 검증완료 | 빌드완료 | 심사중 | 쮸티4-1 | 2026-04-20 14:30 | TestFlight 배포 완료 |

### 투두 목록 실제 적용 예시

| T-ID | WT-ID | W-ID | 최종 해시 | 상태 | 작업 타이틀 | 작업자 | 작업일시(연월일 시분) | 비고 |
|---|---|---|---|---|---|---|---|---|
| **T-001** | WT-001 | W-001 | abc1234 | **테스트 완료(DONE)** | **홈 화면 메뉴 오류 수정** | 쮸티4-1 | 2026-04-20 14:30 | 【파일】HomeViewController.swift / 【결과】빌드 테스트 완료 ✅ |

### 작업 대기열 실제 적용 예시

| W-ID | 우선 순위 | T-ID | 상태 | 작업 타이틀 | 파일 | 한 줄 설명 | 작성일(연월일 시분) | 작성자 |
|------|---------|------|------|----------|-----|----------|------|------|
| W-001 | P0 | - | 대기 | **이슈 제목** | 파일명.swift | 한 줄 설명 | 2026-04-20 10:00 | 쮸티11 |
