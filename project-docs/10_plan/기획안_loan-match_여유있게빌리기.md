# 기획안 | 포인트 적립 안하고 여유있게 빌리기 페이지
> W-017-8 | 작성일: 2026-06-04 | 최종 수정: 2026-06-04 | 담당: 쮸티5호

---

## 1. 작업 개요

| 항목 | 내용 |
|---|---|
| W-ID | W-017-8 |
| 출력 파일 | `loan-match/browse.html` |
| 페이지 타이틀 | 🔍 그렇다면 고객님에게 적절한 대출 방식을 찾아드릴게요. |
| 원본 | Tally 모달 (tally.so/r/w4Nxe5) → HTML 전환 |
| 참고 원본 스크린샷 | `project-docs/200_refers/loan-match/그렇다면 고객님에게 적절한 대출 방식을 찾아드릴게요_tally.png` |
| 참고 이미지 폴더 | `imgs/loan-match/` |
| 진입 경로 | 홈 > 나에게 맞는 대출 상품 > 🍵 여유있게 빌리기 |
| 웹폰트 | Pretendard Variable (jsDelivr CDN) — 비교 테스트 중 |

### 변경 사항 (기존 → 신규)

| 항목 | 기존 (노션 원본) | 신규 (HTML) |
|------|---------------|------------|
| 도구 | Tally 모달 (`w4Nxe5`) | 정적 HTML + JavaScript |
| 경로 | `tally.so/r/w4Nxe5` | `loan-match/browse.html` |
| 진입 방식 | 모달 팝업 | 페이지 이동 |
| 설문 로직 | Tally 조건 분기 | JavaScript 순차 노출 + 조건부 카드 표시 |

### loan-match 메인 페이지 흐름

| 버튼 | 이동 경로 |
|------|----------|
| ⚡ 즉시 빌리기 | → `/nanocredit/index.html` (기존 나노크레딧 페이지) |
| 🍵 여유있게 빌리기 | → `/loan-match/browse.html` (**이 페이지**) |

---

## 2. 페이지 전체 구조 (섹션 순서)

```
[SEC-01] 상단 BACK 버튼
[SEC-02] 페이지 타이틀 — "🔍 그렇다면 고객님에게 적절한 대출 방식을 찾아드릴게요."
[SEC-03] 설문 영역 — 4개 예/아니오 질문 (순차 노출)
[SEC-04] "👀 결과 확인해요 →" 버튼 (마지막 질문 답변 시 노출)
[구분선] 굵은 구분선 (8px)
[SEC-05] 결과 타이틀 — "🏆 고객님에게 딱 맞는 대출방식이 있어요!"
[SEC-06] 결과 카드 — "예" 답변한 질문에 매핑된 카드만 표시
[SEC-07] 하단 BACK 버튼
[FOOTER] 공통 푸터
```

---

## 3. 섹션별 콘텐츠 명세

### [SEC-02] 페이지 타이틀

- **텍스트**: `🔍 그렇다면 고객님에게 적절한 대출 방식을 찾아드릴게요.`
- **"적절한 대출 방식을 찾아드릴게요."** → 보라색(`--brand`) + 밑줄 강조
- **스타일**: `font-size: 30px`, `font-weight: 400`, `color: #111`

---

### [SEC-03] 설문 영역 — 4개 질문 (순차 노출)

| # | 질문 텍스트 | "예" 선택 시 표시할 카드 |
|---|-----------|----------------------|
| 1 | 신용점수가 높은 편인가요? | 📊 신용점수만 믿고 |
| 2 | 평소에 쇼핑을 많이 하는 편인가요? | 🛒 쇼핑 내역을 제출하고 |
| 3 | 지인들 사이에서 나름 평판이 괜찮은 편인가요? | 👤 내 평판을 검증받고 |
| 4 | 평소에 좋은 앱이나 서비스를 주변에 소개하는 편인가요? | 🎯 앱 성장에 기여하고 |

**순차 노출 로직** (Tally 원본 동일):
1. 처음에 Q1만 표시
2. Q1 답변 → Q2 나타남 (부드러운 스크롤)
3. Q2 답변 → Q3 나타남
4. Q3 답변 → Q4 나타남
5. Q4 답변 → "👀 결과 확인해요 →" 버튼 나타남

**UI 스타일**:
- 질문: `font-size: 18px`, `font-weight: 400`, `color: #111`
- 필수 표시: `*` 빨간색 (`#D32F2F`)
- 예/아니오: **세로 2행 배치** (flex-direction: column)
- 선택 옵션: `padding: 14px 20px`, `border: 1.5px solid #D1D5DB`, `border-radius: 10px`
- 선택됨: 보라색 테두리 + 연보라 배경 (`#F0EBFF`)
- 질문 간격: `margin-bottom: 44px`

---

### [SEC-04] 결과 확인 버튼

- **텍스트**: `👀 결과 확인해요 →`
- **스타일**: `width: 100%`, `height: 60px`, `bg: var(--brand)`, `color: #fff`, `font-size: 20px`, `font-weight: 800`, `border-radius: 10px`
- **동작**: 클릭 시 → 구분선 + SEC-05 + SEC-06 노출

---

### [SEC-05] 결과 타이틀

- **타이틀**: `🏆 고객님에게 딱 맞는 대출방식이 있어요!`
  - "딱 맞는 대출방식이 있어요!" → 보라색(`--brand`) + 밑줄 강조
  - `font-size: 28px`, `font-weight: 400`
- **서브**: `원하는 대출 방식을 클릭해요.`
  - `font-size: 22px`, `font-weight: 400`, `color: #555`

---

### [SEC-06] 결과 카드 — 조건부 표시

**카드 기본 순서** (HTML 배치 순서):

| # | 카드 id | 이미지 | 링크 |
|---|--------|--------|------|
| 1 | `card-credit` | `신용점수만민고돈빌리기.png` | `credit.html` |
| 2 | `card-shopping` | `쇼핑내역을제출하고돈빌리기.png` | `shopping.html` |
| 3 | `card-reputation` | `내평판을검증받고돈빌리기.png` | `reputation.html` |
| 4 | `card-contribution` | `앱성장을기여하고돈빌리기.png` | `contribution.html` |

**조건부 표시 로직**:
- "예" 답변한 질문에 매핑된 카드**만** 표시
- 전부 "아니오"인 경우 → 4개 전부 표시 (`SHOW_ALL_IF_NONE = true`)

---

## 4. JavaScript 설정 영역

```javascript
// 질문 순서
var QUESTION_ORDER = ['q1', 'q2', 'q3', 'q4'];

// 질문별 "예" → 카드 매핑
var YES_CARD_MAP = {
  'q1': 'card-credit',         // Q1 예 → 신용
  'q2': 'card-shopping',       // Q2 예 → 쇼핑
  'q3': 'card-reputation',     // Q3 예 → 평판
  'q4': 'card-contribution'    // Q4 예 → 기여
};

// 전부 "아니오" → 전체 카드 표시
var SHOW_ALL_IF_NONE = true;
```

> 설정 영역만 수정하면 질문 순서·카드 매핑이 자동 반영됩니다.

---

## 5. 네비게이션 흐름

```
1-1. 나에게 맞는 대출 상품 — loan-match/index.html (메인)
  │
  │  [조건 분기]
  │  ├── ⚡ 적립한다 (즉시 빌리기) → 1-2 나노크레딧 (/nanocredit/)
  │  └── 🍵 적립안한다 (여유있게 빌리기) → browse.html (이 페이지)
  │
  ├── 1-1-1. 신용 → credit.html
  ├── 1-1-2. 쇼핑 → shopping.html
  ├── 1-1-3. 평판 → reputation.html
  └── 1-1-4. 기여 → contribution.html
```

> 1-1-1~4는 "나에게 맞는 대출 상품"의 **2depth 서브 메뉴**이자,
> "적립안한다" 분기(browse.html)의 **버튼 목적지**이기도 합니다.

---

## 6. loan-match/index.html 수정 완료

| 항목 | 변경 전 | 변경 후 | 상태 |
|------|--------|--------|------|
| href | `https://tally.so/r/w4Nxe5` | `browse.html` | ✅ 완료 |
| data-tally-* 속성 | 3개 | 삭제 | ✅ 완료 |
| Tally embed.js | 있음 | 삭제 | ✅ 완료 |

---

## 7. 구현 참고사항

1. **설문 순차 노출**: Tally 원본과 동일한 조건 로직을 JavaScript로 구현
2. **조건부 카드 표시**: "예" 답변한 질문에 매핑된 카드만 노출
3. **설정 분리**: JS 상단 설정 영역(QUESTION_ORDER, YES_CARD_MAP)만 수정하면 순서·매핑 변경 가능
4. **웹폰트**: Pretendard Variable (비교 테스트 중, 확정 시 전체 페이지 적용 예정)
5. **카드 hover**: `transform: scale(1.01)` + `box-shadow`
