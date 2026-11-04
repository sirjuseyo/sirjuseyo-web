#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
써주세요 월별 대출 페이지 전환 QA 자동 검증기
────────────────────────────────────────────────
사용법:
    python3 qa_monthly_loan.py <이전달_html> <이번달_html> [--prev 2026-08] [--curr 2026-09]

예:
    python3 qa_monthly_loan.py index-2026-08.html index-2026-09.html --prev 2026-08 --curr 2026-09

이 스크립트는 "기계적으로 판정 가능한 것"만 검사한다.
기획서 대조(문구·컬러 확정값·이미지 지시)는 사람 또는 에이전트가 별도 수행한다.
종료 코드: FAIL 0건이면 0, 1건 이상이면 1
"""
import sys, re, os, datetime, argparse
from collections import Counter

WD = "월화수목금토일"
RESULTS = []  # (판정, 항목, 상세)


def log(verdict, item, detail=""):
    RESULTS.append((verdict, item, detail))


def read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def body_of(s):
    i = s.find("<body")
    return s[i:] if i >= 0 else s


def strip_tags(s):
    s = re.sub(r"<script.*?</script>", " ", s, flags=re.S)
    s = re.sub(r"<style.*?</style>", " ", s, flags=re.S)
    s = re.sub(r"<!--.*?-->", " ", s, flags=re.S)
    s = re.sub(r"<[^>]+>", " ", s)
    for a, b in [("&gt;", ">"), ("&lt;", "<"), ("&amp;", "&"), ("&nbsp;", " ")]:
        s = s.replace(a, b)
    return s


# ─────────────────────────────────────────────────────────
# 1. 이전 달 잔존물 전수 검색
# ─────────────────────────────────────────────────────────
MONTH_EMOJI = {
    1: "1\ufe0f\u20e3", 2: "2\ufe0f\u20e3", 3: "3\ufe0f\u20e3", 4: "4\ufe0f\u20e3",
    5: "5\ufe0f\u20e3", 6: "6\ufe0f\u20e3", 7: "7\ufe0f\u20e3", 8: "8\ufe0f\u20e3",
    9: "9\ufe0f\u20e3", 10: "\U0001f51f",
}


def check_leftovers(curr_src, prev_src, prev_ym, curr_ym):
    py, pm = map(int, prev_ym.split("-"))
    cy, cm = map(int, curr_ym.split("-"))

    # (1) 이전 달 이모지 + 날짜 표기
    pats = {
        f"이전달 이모지 {MONTH_EMOJI[pm]}\U0001f237\ufe0f": MONTH_EMOJI[pm] + "\U0001f237",
        f"'{py}년 {pm}월'": f"{py}년 {pm}월",
        f"'{py}/{pm:02d}/'": f"{py}/{pm:02d}/",
        f"'{prev_ym}'": prev_ym,
    }
    for label, pat in pats.items():
        n = curr_src.count(pat)
        log("FAIL" if n else "PASS", f"잔존검사 · {label}",
            f"{n}건 발견" if n else "0건")

    # (2) 이전 달에만 있던 고유 명사 자동 추출 → 잔존 여부
    pt, ct = set(strip_tags(prev_src).split()), set(strip_tags(curr_src).split())
    only_prev = {w for w in pt - ct if len(w) >= 2 and not re.fullmatch(r"[\d,./%~()-]+", w)}
    hits = sorted(w for w in only_prev if w in curr_src)
    log("FAIL" if hits else "PASS", "잔존검사 · 이전달 고유 토큰",
        ", ".join(hits[:10]) if hits else "0건")

    # (3) 그 외 모든 월 이모지 오염
    strays = []
    for m, e in MONTH_EMOJI.items():
        if m == cm:
            continue
        n = curr_src.count(e + "\U0001f237")
        if n:
            strays.append(f"{m}월×{n}")
    log("FAIL" if strays else "PASS", "잔존검사 · 타 월 이모지 오염",
        ", ".join(strays) if strays else "0건")


# ─────────────────────────────────────────────────────────
# 2. 정책 숫자 무변경 (금액·포인트·퍼센트)
# ─────────────────────────────────────────────────────────
def check_numbers(prev_src, curr_src):
    def toks(s):
        t = strip_tags(body_of(s))
        t = re.sub(r"20\d\d[/년][^\s]*", " ", t)          # 날짜 제외
        t = re.sub(r"\d{1,2}/\d{1,2}", " ", t)            # 8/1 형태 제외
        return Counter(re.findall(r"[\d,]+(?:포|%|만 원|원)", t))

    a, b = toks(prev_src), toks(curr_src)
    diff = {k: (a.get(k, 0), b.get(k, 0)) for k in set(a) | set(b) if a.get(k, 0) != b.get(k, 0)}
    if diff:
        d = "; ".join(f"{k}: {x}→{y}회" for k, (x, y) in sorted(diff.items()))
        log("FAIL", "정책 숫자 무변경", d)
    else:
        log("PASS", "정책 숫자 무변경", f"토큰 {len(b)}종 전량 일치")


# ─────────────────────────────────────────────────────────
# 3. DOM 구조 무결성
# ─────────────────────────────────────────────────────────
STRUCT = ["section", "table", "thead", "tbody", "tr", "th", "td",
          "h1", "h2", "h3", "h4", "ul", "ol", "li", "img", "a"]
BALANCE = STRUCT + ["div", "p", "span", "strong", "em", "blockquote", "main", "body"]
VOID = {"img", "br", "hr", "input", "meta", "link"}


def check_structure(prev_src, curr_src):
    pb, cb = body_of(prev_src), body_of(curr_src)
    bad = []
    for t in STRUCT:
        x = len(re.findall(r"<" + t + r"[\s>]", pb))
        y = len(re.findall(r"<" + t + r"[\s>]", cb))
        if x != y:
            bad.append(f"{t} {x}→{y}")
    log("FAIL" if bad else "PASS", "DOM 구조 개수 일치",
        ", ".join(bad) if bad else f"{len(STRUCT)}종 전량 일치")

    unb = []
    for t in BALANCE:
        if t in VOID:
            continue
        o = len(re.findall(r"<" + t + r"[\s>]", curr_src))
        c = len(re.findall(r"</" + t + r">", curr_src))
        if o != c:
            unb.append(f"{t} 열림{o}/닫힘{c}")
    log("FAIL" if unb else "PASS", "태그 밸런스",
        ", ".join(unb) if unb else "이상 없음")


# ─────────────────────────────────────────────────────────
# 4. 날짜·요일 정합성
# ─────────────────────────────────────────────────────────
def check_dates(curr_src, curr_ym):
    cy, cm = map(int, curr_ym.split("-"))
    txt = strip_tags(curr_src)

    wrong, ok = [], 0
    for m in re.finditer(r"(20\d\d)년\s*(\d{1,2})월\s*(\d{1,2})일\s*\(([월화수목금토일])\)", txt):
        y, mo, d, w = int(m[1]), int(m[2]), int(m[3]), m[4]
        try:
            real = WD[datetime.date(y, mo, d).weekday()]
        except ValueError:
            wrong.append(f"{y}/{mo}/{d} 존재하지 않는 날짜"); continue
        if real != w:
            wrong.append(f"{y}년 {mo}월 {d}일 표기'{w}'/실제'{real}'")
        else:
            ok += 1
    log("FAIL" if wrong else "PASS", "요일 정합성",
        "; ".join(wrong) if wrong else f"{ok}건 전부 정확")

    # 웨이팅 테이블 5구간 커버리지
    exp = [(1, 5), (6, 10), (11, 15), (16, 20), (21, 25)]
    found = Counter()
    for m in re.finditer(rf"{cy}/{cm:02d}/(\d{{2}})\s*~\s*{cy}/{cm:02d}/(\d{{2}})", txt):
        found[(int(m[1]), int(m[2]))] += 1
    miss = [f"{s:02d}~{e:02d}" for s, e in exp if not found[(s, e)]]
    total = sum(found[k] for k in exp)
    log("FAIL" if miss else "PASS", "웨이팅 테이블 5구간",
        f"누락 {', '.join(miss)}" if miss else f"총 {total}건 (5구간 전부 존재)")

    # 심사 기간 = 익월 1~5일
    ny, nm = (cy + 1, 1) if cm == 12 else (cy, cm + 1)
    log("PASS" if f"{ny}년 {nm}월 1일" in txt else "FAIL", "심사 기간 = 익월 1~5일",
        f"{ny}년 {nm}월 1일 표기 확인" if f"{ny}년 {nm}월 1일" in txt else "익월 표기 없음")


# ─────────────────────────────────────────────────────────
# 5. 컬러 팔레트 교체
# ─────────────────────────────────────────────────────────
def check_colors(prev_src, curr_src):
    def hexes(s):
        s = re.sub(r"<!--.*?-->", " ", s, flags=re.S)
        return {h.upper() for h in re.findall(r"#[0-9A-Fa-f]{6}\b", s)}

    a, b = hexes(prev_src), hexes(curr_src)
    log("PASS", "컬러 팔레트 교체",
        f"제거 {len(a-b)}종 / 신규 {len(b-a)}종 / 유지 {len(a&b)}종")

    def rootvars(s):
        m = re.search(r":root\s*\{(.*?)\}", s, flags=re.S)
        return dict(re.findall(r"(--[\w-]+):\s*(#[0-9A-Fa-f]{3,8})", m[1])) if m else {}

    pv, cv = rootvars(prev_src), rootvars(curr_src)
    same = [k for k in pv if k in cv and pv[k].upper() == cv[k].upper()
            and k not in ("--text-dark", "--text-light", "--black-alert")]
    log("WARN" if same else "PASS", ":root 변수 교체",
        f"이전달과 동일한 값 유지: {', '.join(same)}" if same else f"{len(cv)}종 정의됨")

    prev_only = {k: v.upper() for k, v in pv.items()}
    stray = [f"{k}={v}" for k, v in prev_only.items()
             if v not in {x.upper() for x in cv.values()} and v in {h.upper() for h in hexes(curr_src)}]
    log("WARN" if stray else "PASS", "이전달 팔레트 잔존",
        ", ".join(stray) if stray else "0건")


# ─────────────────────────────────────────────────────────
# 6. 링크·스크립트·이미지
# ─────────────────────────────────────────────────────────
def check_refs(prev_src, curr_src, curr_path):
    for label, pat in [("링크(href)", r'href="([^"]+)"'), ("스크립트(src)", r'<script src="([^"]+)"')]:
        a = sorted(set(re.findall(pat, prev_src)))
        b = sorted(set(re.findall(pat, curr_src)))
        log("PASS" if a == b else "WARN", f"{label} 무변경",
            "동일" if a == b else f"추가 {set(b)-set(a)} / 삭제 {set(a)-set(b)}")

    imgs = re.findall(r'<img[^>]*src="([^"]+)"', curr_src)
    base = os.path.dirname(os.path.abspath(curr_path))
    for src in imgs:
        if src.startswith(("http://", "https://", "data:")):
            log("UNVERIFIED", f"이미지 · {src}", "외부 URL — 수동 확인")
            continue
        p = os.path.normpath(os.path.join(base, src))
        log("PASS" if os.path.isfile(p) else "UNVERIFIED", f"이미지 · {src}",
            "파일 존재" if os.path.isfile(p) else "레포에서 실물 확인 필요")

    body_a = re.search(r"<body[^>]*>", prev_src)
    body_b = re.search(r"<body[^>]*>", curr_src)
    log("PASS" if body_a and body_b and body_a[0] == body_b[0] else "WARN",
        "body 속성 무변경", body_b[0] if body_b else "없음")


# ─────────────────────────────────────────────────────────
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("prev"); ap.add_argument("curr")
    ap.add_argument("--prev-ym", default=None); ap.add_argument("--curr-ym", default=None)
    args = ap.parse_args()

    def guess(path, fb):
        m = re.search(r"(20\d\d)-(\d{2})", path)
        return f"{m[1]}-{m[2]}" if m else fb

    prev_ym = args.prev_ym or guess(args.prev, "")
    curr_ym = args.curr_ym or guess(args.curr, "")
    if not prev_ym or not curr_ym:
        sys.exit("파일명에서 연월을 못 읽었습니다. --prev-ym 2026-08 --curr-ym 2026-09 로 지정하세요.")

    ps, cs = read(args.prev), read(args.curr)

    print(f"\n{'='*62}\n  월별 대출 전환 QA — {prev_ym} → {curr_ym}\n{'='*62}")
    check_leftovers(cs, ps, prev_ym, curr_ym)
    check_numbers(ps, cs)
    check_structure(ps, cs)
    check_dates(cs, curr_ym)
    check_colors(ps, cs)
    check_refs(ps, cs, args.curr)

    icon = {"PASS": "✅", "FAIL": "❌", "WARN": "🟡", "UNVERIFIED": "⚪️"}
    for v in ["FAIL", "WARN", "UNVERIFIED", "PASS"]:
        rows = [r for r in RESULTS if r[0] == v]
        if not rows:
            continue
        print(f"\n── {icon[v]} {v} ({len(rows)}건) ──")
        for _, item, detail in rows:
            print(f"  {item}\n      └ {detail}")

    n = Counter(r[0] for r in RESULTS)
    print(f"\n{'='*62}")
    print(f"  종합: ✅{n['PASS']}  ❌{n['FAIL']}  🟡{n['WARN']}  ⚪️{n['UNVERIFIED']}")
    print(f"  판정: {'배포 불가 — FAIL 해소 필요' if n['FAIL'] else '기계 검사 통과 (기획서 대조는 별도 수행)'}")
    print(f"{'='*62}\n")
    sys.exit(1 if n["FAIL"] else 0)


if __name__ == "__main__":
    main()
