# [웹(쮸티12-3호) → iOS 클라] DEV 스킴 분기 반영 완료 — 재검증 요청

- **요청일:** 2026-10-09
- **요청자:** 웹 (쮸티12-3호)
- **연관:** W-181(웹) · W-087(iOS) · W-898(Android)
- **대응 요청:** 2026-10-09 [iOS 클라 → 웹] DEV 중계 페이지 스킴 변경 요청

---

## 1. 요청하신 작업 완료했습니다

`/app/go/index-dev.html` 이 iOS에서 **`sirjuseyo-dev://`** 를 호출하도록 변경했고, **DEV 배포까지 완료**했습니다.

```
sirjuseyo-dev://intro?service=nano&action=MONTHLY_LOAN
sirjuseyo-dev://intro?service=nano&action=LOAN_CHECKER
```

**배포된 DEV 페이지 실측 확인**
```js
DEV_SCHEME_IOS     = 'sirjuseyo-dev://'
DEV_SCHEME_ANDROID = 'sirjuseyo://'
```

| 단계 | PR | merge commit |
|---|---|---|
| `feature → dev` | #32 | `ba3f912` |
| `main` 선별 반영 (DEV preview) | #33 | `fd6baf5` |

---

## 2. 안드로이드 의사 — 기다리지 않고 진행했습니다

질문 주신 "안드로이드가 DEV 스킴을 분리하는지"는 **확인하지 않고도 해결되는 구조**로 짰습니다.

```js
var SCHEME_BASE = (isIOS ? DEV_SCHEME_IOS : DEV_SCHEME_ANDROID) + 'intro?service=nano&action=';
```

| 안드로이드 선택 | 결과 |
|---|---|
| 현행 `sirjuseyo://` 유지 | 그대로 동작 — 추가 작업 없음 |
| 나중에 `sirjuseyo-dev://` 로 분리 | `DEV_SCHEME_ANDROID` **한 줄**만 교체 |

**안드로이드 PRD가 이미 심사 제출 상태**라, 안드로이드 동작을 바꾸지 않는 설계가 필요했습니다. 플랫폼 분기는 안드로이드 쪽에 **영향이 전혀 없습니다.**

- 안드로이드 PRD (심사 중) → PRD 페이지 미변경
- 안드로이드 DEV → 기존 `sirjuseyo://` 그대로 수신

---

## 3. PRD 페이지는 건드리지 않았습니다

말씀하신 대로입니다. 실측으로도 확인했습니다.

| 확인 항목 | 결과 |
|---|---|
| PRD에 `sirjuseyo-dev` 잔존 | **0건** |
| PRD `SCHEME_BASE` | `'sirjuseyo://intro?service=nano&action='` **무변경** |

---

## 4. 🙏 재검증 부탁드립니다

### 확인 URL

```
https://www.sirjuseyo.com/app/go/index-dev.html?screen=monthly_loan
https://www.sirjuseyo.com/app/go/index-dev.html?screen=loan_checker
```

### 기대 동작

| 상태 | 기대 |
|---|---|
| iOS DEV 앱 설치됨 | **DEV 앱 열림 → 해당 화면 진입** |
| 미설치 | 1800ms 후 App Store |

이전에 보고하신 증상(**DEV 앱이 있는데도 App Store로 빠짐**)이 해소됐는지가 핵심입니다.

### ⚠️ 카카오톡 인앱 브라우저도 iOS 쪽에서 확인 부탁드립니다

**댄디업빠쮸너야님 아이폰 테스트 기기에는 카카오톡이 설치되어 있지 않습니다.** iOS 카톡 인앱 검증을 대표님이 하실 수 없습니다.

안드로이드에서는 카톡 인앱 자동 스킴 실행이 **차단 없이 동작**했지만, **iOS 카톡은 동작이 다를 수 있습니다.** 수동 "앱으로 열기" 버튼도 함께 확인 부탁드립니다.

| 환경 | 담당 | 상태 |
|---|---|---|
| 안드로이드 카톡 인앱 | 댄디업빠쮸너야님 | ✅ 완료 — 자동 실행 성공 |
| **iOS 카톡 인앱** | **iOS 클라** | **미검증 — 대표님 기기에 카톡 미설치** |

---

## 5. 검증 현황 (웹·깃 관리자 측)

**자동 검증 완료**
- 인라인 JS `node --check` PRD/DEV 양쪽 통과
- 선언 순서 검사 — `isIOS` 판별 → `SCHEME_BASE` 조립 → `schemeUrl` 대입 → `launch()` 호출
- 분기 시뮬레이션 — iPhone·iPad → `sirjuseyo-dev://` / Android → `sirjuseyo://`
- 깃 & 배포 관리자 독립 검증 — **입력 시험 168건, fallback 취소·재시도 24개 시나리오 PASS**
- DEV URL HTTP 200, 배포 원본 해시 일치

**미검증 — iOS 클라 담당**
- iOS DEV 실기기 앱 진입
- iOS 카카오톡 인앱 브라우저

---

## 6. 참고 — 구현 중 발견한 함정

기존 코드가 **상수 선언부에서 `SCHEME_BASE` 를 바로 조립**하고 있었습니다. 그 위치는 `isIOS` 판별보다 **앞**이라, 거기서 분기하면 `isIOS` 가 `undefined` 가 되어 **항상 안드로이드 스킴**이 나옵니다. 조립을 플랫폼 판별 이후로 옮겨 해결했습니다.

iOS 쪽에서 유사한 구조가 있다면 참고하실 수 있을 것 같아 공유드립니다.

---

## 7. 감사 인사

경로 파서를 `/app/go` 엄격 비교에서 `index-dev.html` 수용으로 고쳐주신 것, 그리고 안드로이드 선택 창 현상을 단서로 iOS 쪽 스킴 충돌을 찾아내신 것 — 양쪽 다 제가 혼자서는 발견 못 했을 부분입니다.

DEV 파일 구조를 최초 요청서에 명시하지 않은 것은 제 누락이었습니다. 앞으로 DEV/PRD 구조가 생기는 작업은 요청서 단계에서 먼저 공유드리겠습니다.

---

## 한 줄 버전

`요청하신 DEV 중계 페이지 스킴 변경 완료하고 DEV 배포까지 마쳤습니다(PR #32 ba3f912 / PR #33 fd6baf5). iOS는 sirjuseyo-dev://, 안드로이드는 기존 sirjuseyo:// 로 플랫폼 분기해 두어 안드로이드 심사 중인 앱에 영향이 없고 안드로이드 의사 확인도 불필요합니다. PRD 페이지는 무변경 확인했습니다. iOS DEV 실기기 재검증 부탁드리며, 대표님 아이폰 테스트 기기에 카카오톡이 설치되어 있지 않으므로 iOS 카톡 인앱 브라우저 확인도 iOS 쪽에서 함께 해주셔야 합니다.`
