# 써주세요 사이트 통합 기획서

**작성일:** 2026-07-14  
**작성자:** 쮸티12-1호  
**버전:** v0.1  
**관련 W-ID:** W-073 / T-071

---

## 1. 통합 개요

### 목표
- `https://www.sirjuseyo.com/` 메인 페이지를 `monthly-loan-repo/index.html`로 교체
- 두 워크스페이스(`sirjuseyoWeb`, `monthly-loan-repo`)를 `sirjuseyo-web` 레포 하나로 통합

### 도메인 전략
- **서브도메인 없음** (GitHub Pages는 레포당 커스텀 도메인 1개 제한)
- 모든 페이지를 `https://www.sirjuseyo.com/~` 메인 도메인에 이어서 구성
- CNAME: `sirjuseyo.com` 유지 (sirjuseyo-web 레포 기준)

### 레포 통합 방식
| 항목 | 현재 | 통합 후 |
|------|------|---------|
| 기준 레포 | sirjuseyo-web | sirjuseyo-web (유지) |
| monthly-loan-repo | 별도 레포 | sirjuseyo-web으로 파일 복사 |
| 메인 페이지 내용 | `sirjuseyoWeb/index.html` 내용 | `/Users/sirjuseyo/SirjuseyoVibeCodingProject/sirjuseyoApp/sirjuseyoApp_monthly-loan/monthly-loan-repo/index.html` 내용으로 교체 |
| 도메인 | www.sirjuseyo.com | www.sirjuseyo.com (변경 없음) |
| CNAME | sirjuseyo.com | sirjuseyo.com (유지) |
| monthly-loan 레포 | 활성 | archive 또는 유지 (추후 결정) |

---

## 2. 사이트맵 (메뉴 구조)

### 홈 (`/`)
- **파일:** `monthly-loan-repo/index.html` (교체 대상)
- **메뉴:** 상단 우측 햄버거 버튼 (구현 예정)

---

### 2-1. 써주세요. 소개
- **파일:** `sirjuseyoWeb/index.html` (기존 메인 페이지 활용)
- **경로 (통합 후):** `/home/` 또는 `/about/` (추후 결정)

---

### 2-2. 인기 상품 — 나노크레딧
- **메인:** `sirjuseyoWeb/nanocredit/index.html`
- **경로 (통합 후):** `/nanocredit/`

| 하위 메뉴 | 파일 | 통합 후 경로 |
|----------|------|-------------|
| 10만 원 | `nanocredit/10/index.html` | `/nanocredit/10/` |
| 20만 원 | `nanocredit/20/index.html` | `/nanocredit/20/` |
| 30만 원 | `nanocredit/30/index.html` | `/nanocredit/30/` |
| 50만 원 | `nanocredit/50/index.html` | `/nanocredit/50/` |
| 소통거리 | `nanocredit/index.html` | `/nanocredit/` |
| 프리 체크 | `nanocredit/pre-check/index.html` | `/nanocredit/pre-check/` |

> **프리 체크 페이지 검토 필요:** 클릭 시 10·20·30·50 금액 나열 페이지가 나오는 구조 — 구현 과정에서 존치/통합 여부 결정

---

### 2-3. 나에게 맞는 대출 방식 — loan-match
- **메인:** `sirjuseyoWeb/loan-match/index.html`
- **경로 (통합 후):** `/loan-match/`
- **상태:** 출시 완료, 기획 & 구현 진행 중 (미완성)

| 하위 메뉴 | 파일 | 설명 |
|----------|------|------|
| 신용왕 | `loan-match/credit.html` | 신용으로 빌리기 |
| 쇼핑왕 | `loan-match/shopping.html` | 쇼핑 내역으로 빌리기 |
| 평판왕 | (기획 예정) | 평판으로 빌리기 |
| 기여왕 | (기획 예정) | 기여하고 빌리기 |

---

### 2-4. 월별 대출 신청하기
- **파일:** `monthly-loan-repo/2026-07/index.html` (매월 변경)
- **경로 (통합 후):** `/2026-07/` (현재 월 기준)
- 매월 해당 연월 폴더로 변경

---

### 2-5. 챌린지
- **설명:** 타 사이트의 이벤트와 같은 기능

| 챌린지명 | 파일 | 상태 |
|---------|------|------|
| 감다살 챌린지 — 2026 북중미 월드컵 | `2026-06/worldcup-challenge/index.html` | 운영 중 |

---

### 2-6. 아카이브
| 항목 | 파일 | 상태 |
|------|------|------|
| 대출 가능성 검사기 | `loan-checker/index.html` | 운영 중 |
| 원리포 상품의 메리트 | - | 기획 예정 |
| 한도 상향 | - | 기획 예정 |
| 연체 이력 해제 | - | 기획 예정 |
| Deep Dive 심사 (4차 심사 / 한도 산정을 위한 마지막 심사) | `apply-review/apply-review.html` | 운영 중 |

---

### 2-7. 공지사항
- 구현 예정

---

## 3. 설명 — 써주세요. 앱에서 이벤트란?

### 개념 구조
```
월별 대출
  └── 이벤트 대출
        └── 월별 한정 스페셜티
              └── 이벤트명
```

### 7월 예시
```
7️⃣🈷️ 썸머 🏖️베케이션 대출
  └── 이벤트 대출
        └── 7️⃣🈷️ 한정 스페셜티
              └── 워터밤💦대출
```

### 이벤트 대출 용도
- 10·20·30만 원을 **롸잇나우 대출처럼 바로 심사** 가능한 대출

---

## 4. 통합 작업 순서 (W-073 참고)

```
A. 사전 확인
   A-1. monthly-loan-repo main 최신 상태 확인
   A-2. sirjuseyoWeb main 최신 상태 확인
   A-3. 충돌 파일 목록 추출 (js/legal-shared.js, imgs/, footer.js)

B. 복사 대상 분류
   B-1. 교체 → index.html, index-dev.html
   B-2. 신규 추가 → 2026-04~07/, apply/, apply-review/, loan-checker/
   B-3. 병합 필요 → js/legal-shared.js, imgs/
   B-4. 유지 → CNAME, project-docs/, loan-match/, nanocredit/, privacy/, Mission_Point/, unsuspend/

C. 로컬 복사 실행

D. 사장님 로컬 확인 & 테스트

E. sirjuseyo-web 원격 레포 푸시 + PR

F. monthly-loan 레포 처리 (유지 or archive — 추후 결정)
```

---

## 5. 미결 사항

| 번호 | 항목 | 결정 방식 |
|------|------|---------|
| ① | 프리 체크 페이지 존치 여부 | 구현 중 결정 |
| ② | 써주세요. 소개 페이지 경로 (`/home/` or `/about/`) | 추후 결정 |
| ③ | monthly-loan 레포 archive or 유지 | 통합 완료 후 결정 |
| ④ | 햄버거 메뉴 1depth/2depth 상세 구조 | 다음 기획 단계 |
| ⑤ | 공지사항 구현 방식 | 추후 결정 |
