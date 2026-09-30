# menu.js vs 목업(B안) 차이점 분석
> 코드 리뷰 요청용 — 쮸티12-1호 작성 (2026-07-20)

---

## 1. 목표

`mockup-menu.html` 안의 **B안(카드 타일)** 디자인을
`js/menu.js`로 동일하게 구현하는 것.

테스트 파일: `index-dev.html` (Live Server: http://127.0.0.1:5501/index-dev.html)

---

## 2. 목업(B안) 핵심 CSS

```css
/* 드로어 컨테이너 */
.drawer {
  width: 280px;          /* 목업 고정 폭 */
  min-height: 520px;
  border-radius: 20px;
  box-shadow: 0 12px 48px rgba(0,0,0,.18);
}

/* 드로어 헤더 */
.dhead {
  background: #380097;
  padding: 20px 20px 18px;
}

/* 메뉴 리스트 래퍼 */
.b-body {
  background: #F5F3FF;
  flex: 1;
  padding: 12px;
}

/* 카드 아이템 */
.b-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 14px;
  background: #fff;
  border-radius: 14px;
  margin-bottom: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,.06);
}

/* 이모지 박스 */
.b-emoji-wrap {
  width: 40px;
  height: 40px;
  background: #F3F0FF;
  border-radius: 10px;
  font-size: 1.2rem;
}

/* 텍스트 */
.b-text {
  font-size: .95rem;
  font-weight: 700;
  letter-spacing: -.3px;
}

/* 화살표 */
.b-arrow {
  margin-left: auto;
  color: #380097;
  font-size: 1.3rem;
  font-weight: 300;
}
```

---

## 3. 현재 menu.js CSS (2026-07-20 기준)

```css
/* 드로어 컨테이너 */
#sjy-drawer {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;   /* 화면 전체 */
  background: #F5F3FF;
  z-index: 10002;
  transform: translateX(100%);
  transition: transform .3s ease;
}

/* 드로어 헤더 */
#sjy-drawer-head {
  padding: 22px 24px 20px;                 /* 목업: 20px 20px 18px */
  background: #380097;
}

/* 메뉴 리스트 래퍼 */
#sjy-drawer-nav {
  padding: 12px;                           /* 목업과 동일 ✅ */
}

/* 카드 아이템 */
.sjy-item {
  gap: 12px;                               /* 목업과 동일 ✅ */
  padding: 13px 14px;                      /* 목업과 동일 ✅ */
  border-radius: 14px;                     /* 목업과 동일 ✅ */
  margin-bottom: 8px;                      /* 목업: 6px ⚠️ */
  box-shadow: 0 1px 4px rgba(0,0,0,.06);  /* 목업과 동일 ✅ */
}

/* 이모지 박스 */
.sjy-item-icon {
  width: 40px; height: 40px;              /* 목업과 동일 ✅ */
  border-radius: 10px;                    /* 목업과 동일 ✅ */
  font-size: 1.2rem;                      /* 목업과 동일 ✅ */
}

/* 텍스트 */
.sjy-item-text {
  font-size: .95rem;                      /* 목업과 동일 ✅ */
  font-weight: 700;                       /* 목업과 동일 ✅ */
  letter-spacing: -.3px;                  /* 목업과 동일 ✅ */
}

/* 화살표 */
.sjy-item-arrow {
  margin-left: auto;                      /* 목업과 동일 ✅ */
  color: #380097;                         /* 목업과 동일 ✅ */
  font-size: 1.3rem;                      /* 목업과 동일 ✅ */
  font-weight: 300;                       /* 목업과 동일 ✅ */
}
```

---

## 4. 항목별 차이 요약표

| 항목 | 목업 B안 | 현재 menu.js | 상태 |
|------|---------|-------------|------|
| 드로어 폭 | 280px 고정 | 100vw 전체 | ⚠️ 의도적 변경 (사장님 지시) |
| 드로어 border-radius | 20px | 없음 | ⚠️ 전체화면이라 제거 |
| 드로어 box-shadow | 0 12px 48px rgba(0,0,0,.18) | 없음 | ⚠️ 전체화면이라 제거 |
| 헤더 padding | 20px 20px 18px | 22px 24px 20px | ❌ 불일치 |
| 카드 padding | 13px 14px | 13px 14px | ✅ |
| 카드 gap | 12px | 12px | ✅ |
| 카드 margin-bottom | 6px | 8px | ⚠️ 약간 다름 |
| 카드 border-radius | 14px | 14px | ✅ |
| 이모지 박스 크기 | 40px | 40px | ✅ |
| 이모지 font-size | 1.2rem | 1.2rem | ✅ |
| 텍스트 font-size | .95rem | .95rem | ✅ |
| 화살표 font-size | 1.3rem | 1.3rem | ✅ |

---

## 5. 구조적 차이 (CSS 수치 외)

### 5-1. 드로어 슬라이드 방향
- 목업: 정적 표시 (슬라이드 없음, 비교용 목업이므로)
- menu.js: 오른쪽에서 왼쪽으로 슬라이드 (`transform: translateX(100%) → 0`)

### 5-2. 오버레이
- 목업: 없음 (비교용 목업이므로)
- menu.js: `position:fixed; inset:0; background:rgba(0,0,0,.45); z-index:10001`
  → 드로어 열릴 때 배경 어둡게 처리

### 5-3. 드로어 폭
- 목업: 280px 고정 (비교 페이지용)
- menu.js: `left:0; right:0; bottom:0` (화면 전체) — **사장님 지시로 변경**
  ("그냥 화면을 덮어도 돼!")

### 5-4. nav bar (상단 햄버거 메뉴 바)
- 목업: 없음
- menu.js: `position:fixed; top:0; height:52px` 로고 + 햄버거 버튼

---

## 6. 리뷰 요청 사항

1. CSS 수치가 목업과 거의 동일한데, 실제 브라우저에서 목업과 다르게 보이는 원인이 무엇인가?
2. 드로어가 전체화면(`left:0; right:0`)을 덮을 때 카드 레이아웃이 목업(280px 기준)과 시각적으로 달라 보이는 이유는?
3. 현재 구현에서 수정이 필요한 부분은 어디인가?
