# 기획안 | 나에게 맞는 대출 상품 메인페이지
> W-017 | 작성일: 2026-05-26 | 담당: 쮸티5호

---

## 1. 작업 개요

| 항목 | 내용 |
|---|---|
| W-ID | W-017 |
| 출력 파일 | `loan-match/index.html` |
| 페이지 타이틀 | 어떻게 돈을 빌릴지부터 확인해요! |
| 참고 원본 스크린샷 | `project-docs/200_refers/loan-match/메인_나에게맞는대출방법_어떻게 돈을 빌릴지부터 확인해요! .png` |
| 참고 이미지 폴더 | `imgs/loan-match/` |
| CTA 버튼 1 (초록) | `../nanocredit/index.html` (나노크레딧) |
| CTA 버튼 2 (회색) | `browse.html` (여유있게 빌리기 페이지) |
| 제작 우선순위 | **P0** — 사이트맵 첫 번째 메뉴 |

---

## 2. 페이지 전체 구조 (섹션 순서)

```
[SEC-01] 상단 BACK 버튼
[SEC-02] 페이지 타이틀 — "어떻게 돈을 빌릴지부터 확인해요!"
[SEC-03] 캐릭터 이미지 (짤-001.png)
[SEC-04] 서브 텍스트 — "AI 기술로 나만의 신용점수를 만들어요!"
[SEC-05] CTA 블록 1 — 🪙 포인트를 적립하고 + 초록 버튼 "⚡ 즉시 빌리기"
[SEC-06] CTA 블록 2 — ⏭️ 포인트를 적립 안하고 + 회색 버튼 "🍵 여유있게 빌리기"
[SEC-07] 하단 BACK 버튼
[FOOTER] 공통 푸터
```

---

## 3. 섹션별 콘텐츠 명세

### [SEC-01] 상단 BACK 버튼

- **위치**: 페이지 최상단
- **스타일**: 공통 `.back-btn` (border `1.5px #D1D5DB`, radius `8px`, font `13px/600`, color `#555`)
- **링크**: `../index.html` (홈으로)
- **텍스트**: `⬅ BACK`

---

### [SEC-02] 페이지 타이틀

- **배경**: 흰색 (`#fff`)
- **텍스트**:
  ```
  어떻게 돈을 빌릴지부터
  확인해요!
  ```
- **스타일**: 공통 `.page-title` (font `30px/900`, color `#111`, letter-spacing `-1.2px`)
- **패딩**: `0 24px 20px`

---

### [SEC-03] 캐릭터 이미지

- **이미지 파일**: `imgs/loan-match/짤-001.png`
- **내용**: 노란 말풍선 "내가 돈 빌려줄거라고 확신해?!" + 토끼 캐릭터 + 사람 캐릭터
- **레이아웃**: `width: 100%`, `display: block` (기존 페이지와 동일한 풀사이즈)
- **패딩**: `0`

---

### [SEC-04] 서브 텍스트

- **텍스트**:
  ```
  AI 기술로 나만의 신용점수를 만들어요!
  ```
- **스타일**: 중앙 정렬, font `14px/400`, color `#888`
- **패딩**: `0 24px 32px`

---

### [SEC-05] CTA 블록 1 — 즉시 빌리기

- **라벨 텍스트**: `🪙 포인트를 적립하고`
- **라벨 스타일**: font `17px/700`, color `#222`, margin-bottom `12px`
- **버튼 텍스트**: `⚡ 즉시 빌리기`
- **버튼 링크**: `../nanocredit/index.html` (= `https://www.sirjuseyo.com/nanocredit`)
- **버튼 스타일** (노션 소스 코드 기반):

| 속성 | 값 |
|------|-----|
| display | flex |
| align-items | center |
| justify-content | center |
| width | 100% |
| height | 70px |
| border | none |
| border-radius | 10px |
| font-size | 23px |
| font-weight | bold |
| text-decoration | none |
| color | `#fff` |
| background-color | `#5BCB50` |
| border-bottom | `4px solid #45A63E` |
| transition | 200ms |
| :hover bg | `#45A63E` |

- **패딩**: `0 24px 24px`

---

### [SEC-06] CTA 블록 2 — 여유있게 빌리기

- **라벨 텍스트**: `⏭️ 포인트를 적립 안하고`
- **라벨 스타일**: font `17px/700`, color `#222`, margin-bottom `12px`
- **버튼 텍스트**: `🍵 여유있게 빌리기`
- **버튼 동작**: `browse.html`로 페이지 이동
- **구현 방식**: `<a href="browse.html">`
- **버튼 스타일** (노션 소스 코드 기반):

| 속성 | 값 |
|------|-----|
| display | flex |
| align-items | center |
| justify-content | center |
| width | 100% |
| height | 70px |
| border | none |
| border-radius | 10px |
| font-size | 23px |
| font-weight | bold |
| text-decoration | none |
| color | `#000` |
| background-color | `#EBEEF3` |
| border-bottom | `4px solid #C5C9D0` |
| :hover bg | `#D6DAE3` |

- **패딩**: `0 24px 40px`

---

### [SEC-07] 하단 BACK 버튼

- **스타일**: SEC-01과 동일 (공통 `.back-btn`)
- **링크**: `../index.html`
- **패딩**: `28px 24px`

---

### [FOOTER] 공통 푸터

```
써주세요.연계대부 | 대표 정희선
서울시 강남구 테헤란로 427, 8층
사업자등록번호 855-87-02303 | 대부업등록번호 2023-금감원-0074
대출금리 연 12% ~ 연 39.9% (법정최고금리 이내)
중개수수료를 요구하거나 받는 것은 불법입니다.
```

- **푸터 로고**: `nanocredit` → `써주세요.` 로 변경 검토 필요
- **스타일**: 공통 footer (border-top `1px #E5E7EB`, font `12px`, color `#888`)

---

## 4. 이미지 매핑

| 섹션 | 파일명 | 경로 | 비고 |
|------|--------|------|------|
| SEC-03 | `짤-001.png` | `imgs/loan-match/짤-001.png` | 캐릭터 일러스트 |

---

## 5. 외부 연동

| 서비스 | URL | 용도 |
|--------|-----|------|
| 나노크레딧 페이지 | `../nanocredit/index.html` | 초록 버튼 "⚡ 즉시 빌리기" 목적지 |
| 여유있게 빌리기 | `browse.html` | 회색 버튼 "🍵 여유있게 빌리기" 목적지 |

---

## 6. 구현 참고사항

1. **Tally 불필요**: 회색 버튼이 Tally 모달 → `browse.html` 페이지 이동으로 변경되어 Tally embed.js 스크립트 불필요
2. **이미지 경로**: `../imgs/loan-match/짤-001.png`
3. **CSS**: 인라인 `<style>` 방식 (기존 나노크레딧 페이지와 동일한 정적 HTML 패턴)
4. **반응형**: 모바일 퍼스트, 이미지 `width: 100%` 풀사이즈 (기존 페이지 패턴 준수)
