# WORK_THROUGH (워크스루) — Ser6호 (Codex_Server_Ser6_20260420)

**최초 작성일:** 2026-05-05
**작성자:** 댄디어빠쮸너야님
**대상:** ClaudeApp 쮸리1호

---

## 목적

- Ser6로가 수행한 모든 작업을 소스 코드 라인 단위로 상세히 기록
- 인수인계 시 즉각 도움이 되어야 함을 목표로 작성
- T-ID와 연동하여 어떤 투두에서 어떤 작업이 수행되었는지 추적
- 동일 WT-ID에 추가 수정이 발생하는 경우에는 같은 WT-ID에 회차 수정 내용을 "작성일, 작업자, 연관 T-ID, 깃 커밋 해시"를 새로이 기록하여 이어서 붙여쓰기 한다.

## 작성법

- 워크스루 섹션마다 고유 ID 부여 (예: WT-001)
- 연관 TODO BOARD의 T-ID 명시 (예: T-001)
- ✅ 출력 형식 강제 방식으로 기록

```
### WT-{번호}: {작업 제목}

| 작업일 | YYYY-MM-DD, HH:MM |
| 작업자 | 쮸티 4-1호 |
| 연관 T-ID | T-{번호} |
| 커밋 해시 | {커밋 해시} |
| 작업 이력 | N차 작업 |
| 상태 | {상태값} |

[문제 위치]
파일:
라인:

[증상(문제 설명)]

[원인]

[진단(수정 이유)]

[처방(수정 코드)]
전/후 코드 상세 기록

```

- 처방에 전/후 코드 상세 기록
- 하나의 WT-ID에 추가 수정 발생하면, 덮어쓰는 것이 아니라 이어서 추가해야 함
- TODO BOARD 파일의 워크플로우 방식에 따라 깃 커밋 번호를 WT-ID에 추가

---

## 🔎 실제 적용 예시

### WT-000: 홈 화면 배너 미표시 수정 (예시)

| 작업일 | 2026-04-20, 14:30 |
| 작업자 | 쮸티 4-1호 |
| 연관 T-ID | T-001 |
| 커밋 해시 | abc1234 |
| 작업 이력 | 1차 작업 |
| 상태 | 테스트 완료(DONE) |

### 문제 위치

**파일:** `HomeViewController.swift`
**라인:** Line 100-120

### 증상 (문제 설명)

PRD 환경에서 홈 배너가 표시되지 않음

### 원인

JSON decode 실패로 배너 데이터 파싱 안 됨

### 진단 (수정 이유)

action 필드 타입 불일치 → String → String? 로 변경 필요

### 처방 (수정 코드)

**변경 전:**
```swift
var action: String
```

**변경 후:**
```swift
var action: String?
```

---

---

## 👉  🎯 여기서 부터 워크스루 작업 시작!❗️

### WT-001: unsuspend 랜딩페이지 신규 제작 + 이미지 경로 수정

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-05-05, 12:30 |
| 작업자 | 쮸리1호 (ClaudeApp) |
| 연관 T-ID | T-001 |
| 커밋 해시 | `8ea9643` |
| 작업 이력 | 1차 작업 |
| 상태 | 배포대기 |

### 문제 위치

**파일:** `unsuspend/index.html` — Line 전체 신규 생성  
**파일:** `project-docs/10_plan/기획안_unsuspend_랜딩페이지.md` — 전체 신규 생성  
**파일:** `unsuspend/index.html` — 이미지 src 경로 4군데 (폴더 구조 변경으로 경로 불일치)

### 증상 (문제 설명)

- 연체이력·원약불·이약불 이용 정지 해제 안내 페이지가 노션+우피 기반으로만 존재
- 순수 HTML 페이지로 전환 필요
- 폴더 구조 변경(이용정지해제→unsuspend, project-docs 루트 이동) 후 index.html 내 이미지 경로 깨짐

### 원인

- 기존 이미지 경로: `project-docs/refers/img/*.png` (unsuspend 내부 기준 상대경로)
- 폴더 재구성 후 실제 경로: `../project-docs/200_refers/img/*.png` (unsuspend 기준 상위 폴더)

### 진단 (수정 이유)

- HTML 파일 위치: `sirjuseyoWeb/unsuspend/index.html`
- 이미지 위치: `sirjuseyoWeb/project-docs/200_refers/img/`
- `unsuspend/`에서 `project-docs/`는 상위 디렉토리(`../`)를 거쳐야 접근 가능

### 처방 (수정 코드)

**[1차 작업] 기획안 신규 작성**
- 파일: `project-docs/10_plan/기획안_unsuspend_랜딩페이지.md`
- PDF 7페이지 + 이미지 4개(006~009.png) 분석 후 전제조건, 콘텐츠 구조, 이미지 활용 계획, Before&After 정책(담당자 결정), 개발 계획 3Phase 포함 기획안 작성

**[2차 작업] index.html 신규 제작**
- 파일: `unsuspend/index.html`
- 9개 섹션 구조: 히어로 → 감면요약 → 채팅스토리 → 조건박스 → 연체이력 → 원약불 → 이약불 → 주의사항 → 클로징
- 채팅 버블 HTML/CSS 재현 (이미지 없음)
- 007/008/009.png 카카오 CTA, 006.png 클로징 이미지 삽입

**[3차 작업] 이미지 경로 수정 (폴더 구조 변경 반영)**

변경 전:
```html
<img src="project-docs/refers/img/007.png" ...>
<img src="project-docs/refers/img/008.png" ...>
<img src="project-docs/refers/img/009.png" ...>
<img src="project-docs/refers/img/006.png" ...>
```

변경 후:
```html
<img src="../project-docs/200_refers/img/007.png" ...>
<img src="../project-docs/200_refers/img/008.png" ...>
<img src="../project-docs/200_refers/img/009.png" ...>
<img src="../project-docs/200_refers/img/006.png" ...>
```

---

### WT-001: 

| 작업일 | 2026-04-20, 12:17 |
| 작업자 | Ser6 |
| 연관 T-ID | T-001 |
| 커밋 해시 | e6be8c0 |
| 작업 이력 | 1차 작업 |
| 상태 | 테스트 완료(DONE) |

### 문제 위치

**파일:** 
**라인:** 

### 증상 (문제 설명)

- 

### 원인

- 

### 진단 (수정 이유)

- 

### 처방 (수정 코드)

- 

---

| 작업일 | 2026-04-20, 15:10 |
| 작업자 | Ser6 |
| 연관 T-ID | T-001 |
| 커밋 해시 | b87e66f |
| 작업 이력 | 2차 작업 |
| 상태 | 테스트 완료(DONE) |

### 문제 위치

**파일:** 
**라인:** 

### 증상 (문제 설명)

- 

### 원인

- 

### 진단 (수정 이유)

- 

### 처방 (수정 코드)

- 

---

### WT-002: Privacy 정책 랜딩페이지 신규 제작

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-05-08 |
| 작업자 | 쮸리1호 (ClaudeApp) |
| 연관 T-ID | T-002 |
| 커밋 해시 | - |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

### 문제 위치

**파일:** `privacy/index.html` — 전체 신규 생성
**파일:** `project-docs/10_plan/기획안_privacy_랜딩페이지.md` — 전체 신규 생성

### 증상 (문제 설명)

- Privacy 정책 페이지(7개 동의서 포함)가 노션+우피 기반으로만 존재
- Google Play / App Store 심사용 URL(`https://privacy.sirjuseyo.com/privacy/`) 순수 HTML 전환 필요

### 원인

- 기존 노션+우피 기반 → HTML 전환 불가, AWS 배포 불가

### 진단 (수정 이유)

- 순수 HTML 단일 파일로 제작하여 깃 관리자(Ser7호)를 통해 AWS 반영
- 7개 문서 콘텐츠는 댄디어빠쮸너야님이 직접 입력(컨텍스트 절약 방침)

### 처방 (수정 코드)

**[1차 작업] 기획안 신규 작성**
- 파일: `project-docs/10_plan/기획안_privacy_랜딩페이지.md`
- 스크린샷 + 서비스 이용약관 분석 후 페이지 구조, 디자인 시스템, 콘텐츠 수령 현황, 배포 절차 포함 기획안 작성

**[2차 작업] privacy/index.html 뼈대 신규 제작**
- 파일: `privacy/index.html`
- 구조: 헤더 → 소개텍스트 → 7개 문서 네비게이션(앵커링크) → 7개 문서 섹션(플레이스홀더) → 삭제요청안내 → Contact → 법인정보 Footer
- 디자인: `--brand: #380097`, max-width 800px, 모바일 반응형
- 7개 문서 섹션: 각각 명확한 `<!-- 📋 0X. 문서명 — 내용 붙여넣기 -->` 플레이스홀더 포함
- 고정 콘텐츠 완성: Contact(02-2054-3002, customer@sirjuseyo.com, 카카오링크 href="" 확정 필요), 법인정보(혁사호재/써주세요연계대부)

---

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-05-09 |
| 작업자 | 쮸리1호 (ClaudeApp) |
| 연관 T-ID | T-002 |
| 커밋 해시 | - |
| 작업 이력 | 2차 작업 |
| 상태 | 테스트 완료(DONE) |

### 문제 위치

**파일:** `privacy/01_terms.html` — 전체 콘텐츠 HTML 포맷팅  
**파일:** `privacy/02_collect-personal.html` — 전체 콘텐츠 HTML 포맷팅  
**파일:** `privacy/03_collect-unique.html` — 전체 콘텐츠 HTML 포맷팅  
**파일:** `privacy/04_inquiry-personal.html` — 전체 콘텐츠 HTML 포맷팅  
**파일:** `privacy/05_inquiry-unique.html` — 전체 콘텐츠 HTML 포맷팅  
**파일:** `privacy/06_provide-personal.html` — 전체 콘텐츠 HTML 포맷팅  
**파일:** `privacy/07_provide-unique.html` — 전체 콘텐츠 HTML 포맷팅  

### 증상 (문제 설명)

- 7개 개별 HTML 파일에 빨간 점선 플레이스홀더 박스(📋)만 존재
- 댄디어빠쮸너야님이 각 파일에 원문 텍스트 직접 붙여넣기 완료 → HTML 포맷팅 필요

### 원인

- 컨텍스트 절약 방침: Claude가 원문을 직접 저장·처리하지 않고, 사용자가 붙여넣은 원문을 Claude가 후처리하는 방식으로 진행

### 진단 (수정 이유)

- 7개 동의서 각각의 구조(장/조 체계 vs [섹션] + 키:값 체계)에 맞춰 HTML 클래스 분기 적용 필요
- Python 파서 스크립트로 원문 → HTML 구조 자동 변환 후 검토

### 처방 (수정 코드)

**[공통 CSS 구조]** (모든 파일 동일 적용)
- `p.recipient` : 수신처(귀중) 보라색 틴트 박스
- `h3.section-title` : `[섹션명]` 보라색 왼쪽 테두리 헤더
- `p.sub-header` : 소제목 (대상기관, 제공목적 등 대괄호 없는 소구분)
- `.info-row / .info-key / .info-val` : 키-값 플렉스 테이블 행

**[01_terms.html] 서비스 이용약관**
- 구조: 제1장~제26조 + 부칙 (장/조 체계)
- `h2.chapter` : 장 제목 / `h3.article` : 조 제목
- `ol` : 번호 목록(①②③, 1)2)3)) / `ul.dot-list` : · 불릿

**[02_collect-personal.html] 개인(신용)정보 수집·이용 동의서**
- 구조: [섹션제목] + 카테고리: 값 체계
- 카테고리 항목 12종: 회원가입정보, 개인식별정보, (금융)거래정보, 신용거래정보(×2), 신용능력정보, 신용도판단정보, 공공정보, 기타정보, 채권관리정보, 지급(내역)정보, 그 외 사실성 등

**[03_collect-unique.html] 고유식별정보 수집·이용 동의서**
- 구조: [섹션제목] + info-row 1종(고유식별정보)
- Python 스크립트로 직접 생성

**[04_inquiry-personal.html] 개인(신용)정보 조회 동의서**
- 구조: [섹션제목] + info-row 9종(조회대상기관 2, 조회항목 7)

**[05_inquiry-unique.html] 고유식별정보 조회 동의서**
- 구조: [섹션제목] + info-row 3종

**[06_provide-personal.html] 개인(신용)정보 제공 동의서**
- 가장 복잡한 구조: 3중 계층(신용정보집중기관 제공 → 제휴사 제공 → 수탁업체 제공)
- info-row 19종 + p.sub-header 8개
- 수탁업체 5종: 신원조회/실명확인, SMS발송대행, 계좌인증, 계약대행, 고객응대

**[07_provide-unique.html] 고유식별정보 제공 동의서**
- 구조: 2중 계층(신용정보집중기관 제공 → 수탁업체 제공)
- info-row 4종 + p.sub-header 4개

---

## 깃 관리자 완료 보고서 (WT-002)

```
[WEB : 깃 관리자 -> 개발자 전달]
sirjuseyo-web T-002 반영 완료했습니다.

* 원격 머지:
   * feature/privacy-html-pages -> dev
   * PR #1
   * merge commit: 8deb8c6254499da70bbd16bc9c59e285cfa700b7
   * dev -> main
   * merge commit: 704498b
* 배포:
   * AWS S3 sirjuseyo-web /privacy/ sync 완료
   * CloudFront E2DL8YH75PM6D
   * invalidation I6HIAGGAK3RY3KV3PQ9J3N4REV Completed
* URL:
   * 기존 제출 URL 유지
   * https://privacy.sirjuseyo.com/privacy/
* 확인:
   * /privacy/ HTTP/2 200
   * /privacy/01_terms.html HTTP/2 200
* 문서:
   * GitDeployOps 투두보드/워크스루 업데이트 완료
   * 완료 보고서 WT-015에 기록 완료
   * project-docs 문서 커밋/푸시 완료: 1dc502b docs(ser7): record privacy html deployment

한 줄 버전:
sirjuseyo-web T-002 feature/privacy-html-pages -> dev -> main 반영 완료,
privacy/index002.html을 privacy/index.html로 승격했고,
https://privacy.sirjuseyo.com/privacy/ URL 유지 상태로
AWS S3/CloudFront 배포 및 HTTP 200 검증 완료했습니다.
```

---

### WT-004: nanocredit 랜딩페이지 신규 제작 (nanocredit/index.html)

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-05-11 |
| 작업자 | 쮸리1호 (ClaudeApp) |
| 연관 T-ID | T-004 |
| 커밋 해시 | - |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

### 문제 위치

**파일:** `nanocredit/index.html` — 전체 신규 생성  
**파일:** `project-docs/10_plan/기획안_nanocredit_랜딩페이지.md` — 전체 신규 생성 (이전 차수 완료)

### 증상 (문제 설명)

- nanocredit(신용은 중요하지 않아요, 포인트를 적립하면 AI가 돈을 빌려 드려요) 랜딩페이지가 노션+우피 기반으로만 존재
- 순수 HTML 전환 필요

### 원인

- 기존 노션+우피 기반 → 우피 결제 만료 → 페이지 소멸

### 진단 (수정 이유)

- 기획안 (W-004) 기반 → 12개 섹션 + CTA 버튼 단일 HTML 파일 제작
- 원본 이미지 8종 `<img>` 사용, 미확보 에셋 섹션은 스타일 placeholder 처리

### 처방 (수정 코드)

**[1차 작업] 기획안 신규 작성** ← 이전 차수 완료 (W-004)
- 파일: `project-docs/10_plan/기획안_nanocredit_랜딩페이지.md`
- PDF + 이미지 8종 분석, 12개 섹션 명세, CTA 버튼 소스 포함

**[2차 작업] nanocredit/index.html 신규 제작**
- 파일: `nanocredit/index.html`
- 12개 섹션 구조: SEC-01 Hero → SEC-02 거절경험 → SEC-03 전통금융 → SEC-04 공감 → SEC-05 신용한계 → SEC-06 AI심사(placeholder) → SEC-07 부대비용 → SEC-08 크레딧미션 → SEC-09 앱화면(placeholder) → SEC-10 Use Case → SEC-11 이달의상품카드 → SEC-12 슬라이드(placeholder) → CTA
- 이미지 8종 원본 `<img class="sec-img">` 삽입
- CTA 버튼: `.nanocreditButton` CSS + href `https://monthly-loan.sirjuseyo.com/`
- 미확보 에셋(SEC-06, SEC-09, SEC-12): 보라 계열 placeholder 처리

---

### WT-003: 홈 화면 신규 제작 (home/index.html)

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-05-10 |
| 작업자 | 쮸리1호 (ClaudeApp) |
| 연관 T-ID | T-003 |
| 커밋 해시 | - |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

### 문제 위치

**파일:** `home/index.html` — 전체 신규 생성  
**파일:** `project-docs/10_plan/기획안_home_랜딩페이지.md` — 전체 신규 생성

### 증상 (문제 설명)

- 써주세요. 홈 화면이 노션+우피 기반으로만 존재, 우피 결제 만료로 홈 화면 비활성화 상태
- 순수 HTML로 전환 필요

### 원인

- 기존 노션+우피 기반 → 우피 결제 만료 → 홈 화면 소멸

### 진단 (수정 이유)

- PDF + 이미지 원본 참고하여 섹션별 HTML 재현
- 섹션 스크린샷 이미지는 참고용이 아니라 원본 그대로 `<img>` 사용
- `oopy:slide` 슬라이드쇼 → JS crossfade로 구현

### 처방 (수정 코드)

**[1차 작업] 기획안 신규 작성**
- 파일: `project-docs/10_plan/기획안_home_랜딩페이지.md`
- PDF + 9개 이미지 분석 후 9개 섹션 명세, 디자인 시스템, 이미지 매핑표 포함 기획안 작성

**[2차 작업] home/index.html 신규 제작**
- 파일: `home/index.html`
- 9개 섹션 구조: Hero(crossfade) → Value Prop → Stats → Dark Banner → App Features → Second CTA → Use Case → Closing → Footer
- SEC-01 Hero: `oopy:slide` crossfade 재현 (JS, 6초 자동재생, 인디케이터 #6196FF, 슬라이드 2장)
  - Slide 1: `sjy_web_home.png` / Slide 2: `sjy_web_home (2) (1).png`
- SEC-02~08: 원본 이미지 `<img class="sec-img">` 각 섹션에 적용
- SEC-06, SEC-08: `oopy:slide` 교차 이미지 미확보 → 추후 보완 예정

**[3차 작업] 앱 다운로드 + Contact + Legal Footer 구현**
- 앱 다운로드: 흰 배경 카드 2개, Google Play / App Store SVG 배지 직접 구현, 플랫폼 레이블
- Contact: 고객센터 카드(010-2153-6193, 이메일) + 서비스 카드(약관 링크)
- Legal Footer: 회사정보, 대출금리·부대비용·중개수수료 법적 고지 전문, 구분선(hr) 3개, `써.` 로고

**[진행 중]**
- SEC-06, SEC-08 교차 슬라이드 이미지 확보 후 추가 예정
- 폰트 크기 / 색상 / 정렬 세부 조정 진행 중

---

