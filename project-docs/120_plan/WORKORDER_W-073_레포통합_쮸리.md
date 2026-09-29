# 작업지시서 — 써주세요 웹 레포 통합

**W-ID:** W-073 / T-071
**작성일:** 2026-07-14
**버전:** v1.1 (PRD·DEV 쌍 이동 반영, 삭제 단계 제거)
**지시자:** 댄디어빠쮸너야님 (대표이사)
**수행자:** 쮸티
**근거 문서:** `PLAN_sirjuseyo-web_사이트통합_기획서.md` (v0.1)

---

## 0. 한 줄 요약

`monthly-loan-repo`를 `sirjuseyoWeb`으로 흡수한다. 레포는 하나만 남긴다.

**기존 파일은 지우지 않는다. 자리만 옮긴다.**

---

## 1. 확정 사항

| 항목 | 확정 내용 |
|------|-----------|
| 방향 | `monthly-loan-repo` → `sirjuseyoWeb` 흡수 |
| 기준 레포 | `sirjuseyo-web` (로컬 `sirjuseyoWeb`) |
| 메인 교체 | monthly-loan의 **PRD + DEV 모두** 루트로 |
| 기존 홈 이동 | sirjuseyoWeb의 **PRD + DEV + ORIGIN 모두** `/home/`으로 |
| 햄버거 1번 "써주세요. 소개" | `/home/` (미결② 확정) |
| `/about/` | **안 만든다** |
| CNAME | `sirjuseyoWeb` 것 유지 (`sirjuseyo.com`) |
| 파일 삭제 | **없음. 아무것도 지우지 않는다** |
| 서브도메인 | `monthly-loan.sirjuseyo.com` 끊김 감수. 리다이렉트 안 검 |
| `monthly-loan` 원격 레포 | **archive** (읽기 전용 잠금, 삭제 아님) — 미결③ 확정 |

### 이동 결과 (최종 상태)

| 경로 | 내용 |
|------|------|
| `/` | 월별 대출 (PRD) |
| `/index-dev.html` | 월별 대출 (DEV) |
| `/home/` | 써주세요. 소개 (PRD) |
| `/home/index-dev.html` | 써주세요. 소개 (DEV) |
| `/home/index-origin.html` | 써주세요. 소개 (구버전 보관) |

---

## 2. 경로

```
기준(대상):  /Users/sirjuseyo/SirjuseyoVibeCodingProject/sirjuseyoWeb/
소스(원본):  /Users/sirjuseyo/SirjuseyoVibeCodingProject/sirjuseyoApp/sirjuseyoApp_monthly-loan/monthly-loan-repo/
```

---

## 3. 절대 금지 (위반 시 즉시 중단·보고)

| # | 금지 사항 | 사유 |
|---|-----------|------|
| 1 | `sirjuseyoWeb/CNAME` 복사·덮어쓰기·수정 | `monthly-loan.sirjuseyo.com`으로 덮이면 **www.sirjuseyo.com 사망** |
| 2 | `sirjuseyoWeb/.nojekyll` 삭제 | `Mission_Point/` 등 언더스코어 폴더 서빙 불가 |
| 3 | **STEP 3을 STEP 2보다 먼저 실행** | 기존 홈 3개 파일이 덮여버림 |
| 4 | **파일 삭제** (`rm`, `git rm`) | 이번 작업에 삭제는 없다. 이동·복사만 |
| 5 | `git push --force` | 히스토리 파괴 |
| 6 | 대표이사 승인 없이 `monthly-loan` 레포 archive | 롤백 불가 |
| 7 | 게이트(G1~G3) 통과 없이 다음 단계 진행 | — |
| 8 | `js/`, `footer.js` 자동 병합·자동 판정 | **법적 고지 스크립트 포함. 깨지면 대부업법 이슈** |

---

## 4. 실행 절차

### STEP 0 — 백업

```bash
# 양쪽 모두
cd <각 레포>
git status
git add -A && git commit -m "chore: pre-merge snapshot (W-073)"
git push origin main
git rev-parse HEAD   # ← 해시 기록
```

**산출:** 양쪽 레포의 통합 직전 커밋 해시 2개를 보고서에 기록.

---

### STEP 1 — 충돌 파일 diff

**양쪽에 동시 존재 → 반드시 diff:**

| 파일/폴더 | 처리 |
|-----------|------|
| `footer.js` | **diff 후 대표이사 판정** — 법적 고지(대부업 등록번호·이자율 문구) 포함 |
| `js/` (특히 `js/legal-shared.js`) | **diff 후 대표이사 판정** — 법적 고지 공유 스크립트 |
| `imgs/` | 파일명 충돌 목록만 추출 → 보고 |
| `project-docs/` | 파일명 충돌 목록만 추출 → 보고 |
| `.claude/` | 파일명 충돌 목록만 추출 → 보고 |
| `.vscode/` | **복사 안 함.** `sirjuseyoWeb` 것 유지 |
| `CNAME` | **복사 안 함.** (금지 1) |
| `.gitignore` | monthly에만 존재 → 내용 보고 후 판정 |
| `CLAUDE.md` | monthly에만 존재 → 내용 보고 후 판정 |

**복사 대상 제외:**
- `.tmp_work/` — 임시 작업 폴더
- `gitlap_index.jason.md` — 정체 불명 + 미커밋(U) 상태
- `CNAME`
- `.vscode/`

```bash
diff -u  sirjuseyoWeb/footer.js      monthly-loan-repo/footer.js
diff -ru sirjuseyoWeb/js/            monthly-loan-repo/js/
diff -rq sirjuseyoWeb/imgs/          monthly-loan-repo/imgs/
diff -rq sirjuseyoWeb/project-docs/  monthly-loan-repo/project-docs/
diff -rq sirjuseyoWeb/.claude/       monthly-loan-repo/.claude/
```

## 게이트 G1 — 대표이사 판정 대기

diff 결과를 표로 정리해서 보고한다.
**`footer.js`와 `js/legal-shared.js`는 어느 쪽이 최신 법적 고지 버전인지 대표이사가 결정한다. 쮸티가 판단하지 않는다.**

**승인 전 STEP 2 진행 금지.**

---

### STEP 2 — 기존 홈 3개 파일 `/home/`으로 이동 (STEP 3보다 먼저)

```bash
cd sirjuseyoWeb

git mv index.html        home/index.html        # 덮어쓰기 (기존 home/index.html은 구버전 복사본)
git mv index-dev.html    home/index-dev.html
git mv index-origin.html home/index-origin.html
```

> `git mv`가 덮어쓰기를 거부하면 `-f` 옵션 사용. 또는 `cp` 후 `git rm` 대신 **`git mv -f`** 로 처리.

**의미:**
- PRD·DEV·ORIGIN **세 개가 한 쌍으로** 햄버거 1번 "써주세요. 소개" 자리로 내려간다.
- 기존 `home/index.html`은 덮인다. **대표이사가 "구버전 복사본"으로 확인 완료.**

---

### STEP 3 — monthly-loan 복사 (CNAME 제외)

```bash
rsync -av --exclude 'CNAME' \
          --exclude '.git' \
          --exclude '.vscode' \
          --exclude '.tmp_work' \
          --exclude 'gitlap_index.jason.md' \
          monthly-loan-repo/ sirjuseyoWeb/
```

> `js/`, `footer.js`, `imgs/`, `project-docs/`, `.claude/`, `.gitignore`, `CLAUDE.md`는
> **G1 판정 결과대로** 개별 처리한다. rsync 제외 여부는 G1에서 정한다.

**루트에 새로 들어옴 (PRD + DEV 쌍):**
- `index.html` ← 월별 대출 PRD
- `index-dev.html` ← 월별 대출 DEV

**신규 폴더:** `2026-04/`, `2026-05/`, `2026-06/`, `2026-07/`, `apply/`, `apply-review/`, `loan-checker/`

---

### STEP 4 — 로컬 확인

```bash
cd sirjuseyoWeb && python3 -m http.server 8000
```

| # | 확인 항목 | 기대 |
|---|-----------|------|
| 1 | `/` | 월별 대출 (PRD) |
| 2 | `/index-dev.html` | 월별 대출 (DEV) |
| 3 | `/home/` | 써주세요. 소개 (PRD). **이미지·CSS·JS 안 깨짐** |
| 4 | `/home/index-dev.html` | 써주세요. 소개 (DEV) |
| 5 | `/home/index-origin.html` | 구버전 열림 |
| 6 | `/nanocredit/`, `/loan-match/`, `/privacy/`, `/Mission_Point/`, `/unsuspend/` | 기존 페이지 정상 |
| 7 | `/2026-07/`, `/apply/`, `/apply-review/`, `/loan-checker/` | 신규 페이지 정상 |
| 8 | `CNAME` 내용 | **`sirjuseyo.com`** (변경 없음) |
| 9 | `.nojekyll` | 존재 |
| 10 | footer 법적 고지 | 대부업 등록번호(2024-서울강남-0087-대부) 등 표시 |

**`/home/` 경로 주의:**
세 파일 모두 루트 기준으로 작성됨. 한 단계 아래로 내려가므로 상대경로(`imgs/...`, `js/...`, `footer.js`) 참조가 있으면 **404**.
→ 절대경로(`/imgs/...`)로 수정 필요할 수 있음. **깨지면 목록 뽑아서 보고.**

## 게이트 G2 — 대표이사 로컬 확인 대기

**승인 전 푸시 금지.**

---

### STEP 5 — 로컬 커밋

```bash
cd sirjuseyoWeb
git add -A
git commit -m "feat: monthly-loan 통합 — 메인 PRD/DEV 교체, 기존 홈 /home/ 이동 (W-073)"
```

> ⚠️ **원격 푸시는 여기서 하지 않는다.**
> 원격 푸시 → PR → 작업 요청서는 **후속 작업(메뉴 구조 등) 전체 완료 + 대표이사 전체 테스트 완료 후** 진행한다.
> 실행 순서: 코딩 → 로컬 커밋 → 사장님 테스트 완료 → 원격 피처 브랜치 푸시 → 작업 요청서(Ser7-1호)

### STEP 5-후속 — 원격 반영 (모든 작업 + 테스트 완료 후)

```bash
git push origin <feature-branch>
```

**라이브 확인 (Pages 반영 1~2분 대기):**

| # | URL | 기대 |
|---|-----|------|
| 1 | `https://www.sirjuseyo.com/` | 월별 대출 |
| 2 | `https://www.sirjuseyo.com/index-dev.html` | 월별 대출 DEV |
| 3 | `https://www.sirjuseyo.com/home/` | 써주세요. 소개 |
| 4 | 기존 페이지 전수 | 정상 |

## 게이트 G3 — 라이브 확인 대기

**승인 전 STEP 6 진행 금지. (되돌리기 번거로움)**

---

### STEP 6 — monthly-loan 레포 정리

1. GitHub → `monthly-loan` 레포 → Settings → **Archive this repository**
   - archive = 읽기 전용 잠금. **삭제 아님.** 언제든 Unarchive 가능
2. 로컬 폴더 삭제:
   ```bash
   rm -rf /Users/sirjuseyo/SirjuseyoVibeCodingProject/sirjuseyoApp/sirjuseyoApp_monthly-loan/monthly-loan-repo
   ```

**`monthly-loan.sirjuseyo.com`은 이 시점부터 끊긴다. 대표이사 승인 완료 사항.**

---

## 5. 롤백

| 상황 | 방법 |
|------|------|
| STEP 4 이전 | `git reset --hard <STEP0 해시>` |
| STEP 5 이후 | `git revert <통합 커밋>` → push |
| 사이트 사망 | **`CNAME` 확인 최우선** (금지 1 위반 여부) |
| monthly-loan 복구 | Unarchive (GitHub에서 언제든 가능) |

---

## 6. 보고 형식

각 게이트마다:

```
[G?] STEP ? 완료
- 수행 내용:
- 확인 결과:
- 판정 필요 사항:
- 다음 단계:
```

---

## 7. 이번 작업 범위 밖 (이월)

| 미결 | 상태 |
|------|------|
| ① 프리 체크 페이지 | **없애기로 결정.** 구현 단계에서 처리 |
| ④ 햄버거 메뉴 상세 구조 | 미정 |
| ⑤ 공지사항 | 미정 |
