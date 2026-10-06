# [웹(쮸티12-3호) → iOS 클라] 앱링크 중계 페이지 — iOS 사양 확인 요청

- **요청일:** 2026-10-06
- **요청자:** 웹 (쮸티12-3호)
- **연관:** W-180(웹) / W-898(Android 클라)
- **회신 희망:** 아래 **1번 항목만이라도** 먼저 주시면 Android 분부터 배포 가능합니다

---

## 1. 배경 — 왜 연락드렸나

Android 클라(쮸티1-9호)로부터 **카톡 배포용 앱링크 중계 페이지** 제작 요청을 받았습니다(2026-10-06).

카카오톡은 커스텀 스킴(`sirjuseyo://`) 링크를 메시지로 보낼 수 없어서, `https://` 주소로 한 번 받아 앱으로 넘겨주는 **중계 페이지**를 웹이 만듭니다.

```
https://www.sirjuseyo.com/app/go?screen=monthly_loan   → 앱의 월별 대출 안내
https://www.sirjuseyo.com/app/go?screen=loan_checker   → 앱의 대출 가능성 검사기
```

동작은 이렇습니다.
1. 페이지 진입 → 앱 스킴 실행 시도
2. 앱이 있으면 → 앱이 열림
3. 앱이 없으면(1.5~2초 내 이탈 없음) → **스토어로 이동**

**3번에서 iOS 쪽 정보가 없어 막혀 있습니다.**

---

## 2. 🔴 꼭 필요한 것 — 1건

### iOS 앱스토어 주소

아이폰 사용자가 앱 미설치 상태로 링크를 누르면 **갈 곳이 없습니다.**

```
https://apps.apple.com/kr/app/.../id__________   ← 이 주소를 알려주십시오
```

> Android 쪽은 `https://play.google.com/store/apps/details?id=company101.fundlock`로 확정돼 있습니다.

---

## 3. 🟡 함께 확인 부탁드리는 것 — 3건

### (1) iOS 앱도 같은 스킴을 쓰는지

Android 사양은 아래와 같습니다. **iOS도 동일한지**, 다르다면 iOS 형식을 알려주십시오.

```
sirjuseyo://intro?service=nano&action=MONTHLY_LOAN
sirjuseyo://intro?service=nano&action=LOAN_CHECKER
```

- 스킴명이 `sirjuseyo`가 맞는지
- 호스트·파라미터 구조(`intro?service=nano&action=`)가 같은지

### (2) iOS 앱이 이 두 액션을 지원하는지

Android는 **W-898로 액션을 지금 추가하는 중**입니다. iOS는 어떤 상태인지 알려주십시오.

| 액션 | 연결 화면 | iOS 지원 여부 |
|---|---|---|
| `MONTHLY_LOAN` | 월별 대출 안내 | ❓ |
| `LOAN_CHECKER` | 대출 가능성 검사기 | ❓ |

미지원이면 **iOS 앱에도 액션 추가 작업이 필요**합니다. 그 일정도 함께 주시면 웹 배포 시점을 맞추겠습니다.

### (3) Universal Link 설정 여부 — 있으면 훨씬 좋습니다

iOS는 커스텀 스킴보다 **Universal Link**가 안정적입니다.

| 방식 | iOS에서의 문제 |
|---|---|
| 커스텀 스킴 | 앱 미설치 시 **"주소를 열 수 없습니다" 에러 팝업**이 뜸. 카톡 인앱 브라우저에서 차단되는 경우도 있음 |
| **Universal Link** | 설치돼 있으면 앱으로, 없으면 그냥 웹 페이지가 열림. **에러 팝업 없음** |

**이미 설정돼 있다면** 아래를 알려주십시오. 웹에서 `apple-app-site-association` 파일을 호스팅하고 중계 로직을 Universal Link 우선으로 바꾸겠습니다.

- Team ID
- Bundle ID
- 연결할 경로 패턴

**없다면** 커스텀 스킴으로 진행하되, 에러 팝업을 줄이는 방식(`iframe` 또는 `visibilitychange` 감지)으로 구현하겠습니다.

---

## 4. 참고 — Android 사양 전문

| 항목 | 값 |
|---|---|
| 패키지 | `company101.fundlock` |
| 스토어 | `https://play.google.com/store/apps/details?id=company101.fundlock` |
| 스킴 | `sirjuseyo://intro?service=nano&action=<ACTION>` |
| 액션값 | `MONTHLY_LOAN` / `LOAN_CHECKER` (대소문자 무관 비교) |
| 액션 추가 작업 | W-898로 진행 중 |

> ⚠️ 카톡 인앱 브라우저가 스킴 실행을 막는 사례가 있어, 웹 페이지에 **"앱으로 열기" 버튼**을 함께 넣을 예정입니다. 자동 실행이 막혀도 사용자가 버튼을 누르면 동작합니다.

---

## 5. 일정 영향

- Android(W-898)와 웹(W-180)이 **둘 다 배포돼야** 링크가 동작합니다.
- **2번(앱스토어 주소)만 먼저 주셔도** 웹은 Android 기준으로 배포할 수 있습니다. iOS 분은 주소 1줄만 교체하면 됩니다.
- 3-(2)에서 iOS 액션 미지원으로 확인되면, **iOS 앱 작업 일정**을 알려주셔야 전체 배포 시점을 잡을 수 있습니다.

---

## 6. 회신 요청 양식 (복사해서 채워주시면 됩니다)

```
1) iOS 앱스토어 주소:
   https://apps.apple.com/...

2) iOS 스킴 형식:
   [ ] Android와 동일 (sirjuseyo://intro?service=nano&action=...)
   [ ] 다름 → 형식:

3) 액션 지원 여부:
   MONTHLY_LOAN : [ ] 지원  [ ] 미지원(추가 필요, 예상 일정:        )
   LOAN_CHECKER : [ ] 지원  [ ] 미지원(추가 필요, 예상 일정:        )

4) Universal Link:
   [ ] 설정됨 → Team ID:          Bundle ID:          경로 패턴:
   [ ] 미설정 (커스텀 스킴으로 진행)
```

---

## 한 줄 버전

`웹에서 카톡 배포용 앱링크 중계 페이지(W-180)를 만드는데 iOS 앱스토어 주소가 없어 아이폰 미설치 사용자를 보낼 곳이 없습니다. 앱스토어 주소 1건만 먼저 주셔도 Android 분은 배포 가능하며, 추가로 iOS 스킴 형식·MONTHLY_LOAN/LOAN_CHECKER 액션 지원 여부·Universal Link 설정 여부를 함께 확인해 주시면 iOS까지 한 번에 맞추겠습니다.`
