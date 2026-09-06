---
name: publish-doc
description: Validate and publish one user-reviewed JVM Docs KO article through scoped corrections, navigation updates, consistent commits, push, a ready PR, final merge approval, and verified GitHub Pages deployment. Use when the user asks to publish or deploy an article, or submit or release its PR. If only commit, push, or PR submission is requested, stop at that boundary; never infer merge authority.
---

# 검토한 문서 배포하기

사용자가 읽고 다듬은 한 문서를 검증해 공개한다. 초안·기존 PR·이미 병합된 PR 중 현재 단계에서 이어서 진행하고, 완료된 commit·PR·병합을 중복하지 않는다.

아래 파일 경로는 저장소 루트 기준이다.

## 대상과 요청 범위 확인

1. `AGENTS.md`, `docs/roadmap.mdx`, `templates/README.md`, 해당 템플릿과 문서를 읽는다. 대상 영역·번호, 브랜치·경로, `origin`의 실제 저장소, 기존 PR을 식별한다.
2. `배포해줘`는 이 스킬의 검증·commit·push·PR·배포 흐름을 요청한 것으로 해석하되, 아래 **최종 병합 승인**은 별도로 받는다. commit·push·PR 생성만 요청했다면 그 범위에서 멈춘다. 배포 방법 설명이나 상태 조회만으로 외부 상태를 바꾸지 않는다.
3. 사용자가 초안을 직접 읽고 검토했는지 대화에서 확인한다. 분명하지 않으면 짧게 확인한다. 퀴즈나 스파링 수행은 필수 조건이 아니다.
4. 현재 브랜치, dirty 파일, staged diff를 확인한다. `git fetch origin`으로 원격 기준을 갱신한 뒤 `origin/main`과의 커밋·전체 diff를 확인한다. fetch 실패를 오래된 ref로 대신하지 않는다. 본문 변경은 해당 문서의 전용 브랜치에서만 한다. 기존 PR은 정확한 head 브랜치와 파일을 대조한다.
5. 무관한 변경은 보존하고 staging에서 제외한다. 이미 staging된 무관한 변경이나 브랜치에 섞인 다른 작업의 커밋이 있으면 함께 제출하지 말고 정리 방향을 요청한다. stash, discard, reset으로 해결하지 않는다.

## 문서 최종 점검

- 문서 범위·기준 버전·출처, 사실과 예제, 비공식 번역 고지, 번역자 노트, 코드·이미지의 재사용 조건을 확인한다. 근거 없는 라이선스 확인 주장을 만들지 않는다.
- Java는 독립적인 자료 기반 해설, Spring Framework·Spring Boot는 식별 가능한 공식 원문의 선별 번역이라는 구분을 유지한다.
- Java 시각자료는 `templates/README.md` 규칙을 다시 확인한다. 실제 자료와 렌더링 검증 또는 규칙에 맞는 구체적인 생략 사유가 있어야 한다.
- 오타·깨진 링크·표현·형식 같은 국소 수정은 반영하고 보고한다. 의미, 학습 범위, 예제의 동작을 실질적으로 바꾸는 수정이나 미완성 본문 작성이 필요하면 사용자에게 다시 검토를 요청한다. 라이선스가 불명확하거나 미검증 핵심 내용이 남으면 공개를 멈춘다.
- 코드 예제는 기준 버전에 맞게 검증한다. 실제 검증 환경은 PR의 검증 항목에 기록하고 학습 본문에는 넣지 않는다.

## 공개 상태와 사이트 검증

1. 검토된 문서의 `draft: true`를 제거하고 `SourceInfo`를 `작성 완료`로 바꾸며 `reviewedAt`에 실제 최종 검토일을 기록한다.
2. `docs/roadmap.mdx`에서 대상 행만 `작성 완료`로 바꾸고 제목에 문서 링크를 연결한다. `sidebars.ts`에 로드맵 순서로 공개 문서를 연결한다. 이미 반영된 상태라면 중복하지 않는다.
3. 마지막 관련 수정 이후 다음을 실행한다.

   ```bash
   pnpm typecheck
   pnpm build
   git diff --check
   ```

4. 공개 빌드에 해당 문서가 실제로 포함되는지와 링크·이미지·시각자료의 렌더링을 확인한다. 실패나 미검증을 성공으로 간주하지 않는다. 범위 내 최소 수정 후에도 같은 검증이 실패하면 원인과 남은 작업을 보고하고 멈춘다.

## Commit · push · PR

- 실행 전에 포함할 명시적 파일 목록, commit 제목, 브랜치와 `main` 대상, 검증 결과를 알린다. 요청에 commit·push·PR 권한이 없다면 먼저 승인을 받는다.
- `AGENTS.md`의 commit 규칙을 따른다. 제목은 `<type>: <간결한 한국어 설명>`이며 마침표를 붙이지 않는다. 새 문서는 보통 `docs`, 잘못된 내용·링크 수정은 `fix` 등 실제 목적에 맞춘다. 하나의 논리적 변경만 묶는다.
- 관련 경로만 staging하고 staged diff를 다시 확인한 뒤 commit한다. 광범위한 `git add .`, 무관한 staged 변경 흡수, 요청하지 않은 amend는 하지 않는다.
- 정상 push와 upstream 설정만 사용한다. force-push나 이력 재작성은 하지 않는다. GitHub 인증·권한 또는 push가 실패하면 원인을 보고하고 단계별로 멈춘다.
- 같은 head 브랜치의 열린 PR을 찾아 재사용하고, 없으면 `main` 대상 **Ready PR**을 만든다. 사용자가 Draft를 요청했다면 그 상태를 유지하고 자동 병합하지 않는다.
- PR 본문에는 `변경 내용`, `작성·선별 기준`, `검증`을 포함한다. 출처·버전·라이선스 확인 범위, 예제 실행 환경, 시각자료 검증과 예외를 기록한다.
- 원격 PR의 전체 diff와 head SHA가 의도한 내용인지 다시 확인한다. 기존 PR에서 이어갈 때도 이 확인을 생략하지 않는다.

## CI와 최종 병합 승인

1. 정확한 PR이 열려 있고 `main`을 대상으로 하며, head SHA와 포함된 커밋이 의도한 것인지 확인한다. 필수 검사와 문서 CI가 그 head에서 성공했으며 충돌 없이 병합 가능한지 확인한다.
2. 배포까지 요청했다면 진행 중인 CI를 기다린다. 실패, 권한 부족, 병합 차단을 우회하지 않는다. 대기 중 검사 결과가 없거나 취소됐다는 사실을 성공으로 취급하지 않는다.
3. **PR URL·제목, 정확한 head SHA, 검사 결과, merge commit 방식, 예상 공개 URL을 보여주고 병합 직전에 명시적인 최종 승인을 받는다.** 처음의 배포 요청만으로 이 승인을 대신하지 않는다.
4. 승인을 기다리는 동안 작업을 멈춘다. 승인 후에도 head가 달라졌다면 검증과 승인을 다시 받는다. 승인된 Draft PR을 Ready로 바꾸는 경우에도 이 승인 이후에 수행한다.

## 병합과 실제 배포 확인

1. 승인된 head를 고정하는 expected-head guard로 merge commit 병합한다. GitHub CLI 예:

   ```bash
   gh pr merge <pr-number> --repo <owner/repo> --merge --match-head-commit <approved-head-sha>
   ```

   squash, rebase, admin 우회, 자동 병합 예약, 브랜치 삭제는 하지 않는다. 충돌이나 head 변경이 발생하면 멈춘다.
2. 결과 `main` merge SHA를 확보한다. `.github/workflows/deploy-pages.yml`의 `Deploy to GitHub Pages` 실행 중 해당 SHA에 대응하는 실행을 찾아 build·deploy 성공을 확인한다. 실패·취소·시간 초과면 병합 완료와 배포 미완료를 구분해 보고한다.
3. `docusaurus.config.ts`에서 실제 배포 base URL과 문서 route를 구해 첫 화면과 문서 URL의 HTTP 200을 확인한다. 해당 문서의 제목·본문이 실제로 제공되는지도 확인해 200인 오류 페이지나 이전 내용과 구별한다.
4. 이미 병합된 PR을 이어서 처리할 때는 병합을 반복하지 않고 merge SHA부터 배포 확인을 재개한다. 다른 커밋의 성공 실행을 해당 배포의 증거로 대신하지 않는다.
5. PR URL, 문서 commit과 merge SHA, 배포 실행 URL, 공개 문서 URL, 검증 결과를 보고한다. GitHub Pages 성공과 공개 URL 확인이 모두 끝났을 때만 배포 완료라고 한다.

작업 브랜치는 남겨 두며 로컬 작업 트리를 강제 정리하거나 `main`으로 바꾸지 않는다. 문서 배포 요청을 저장소 설정·브랜치 보호·권한 변경이나 무관한 CI 수리의 허가로 해석하지 않는다.
