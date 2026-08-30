# JVM Docs KO 저장소 지침

이 지침은 저장소 전체에 적용된다. 요청 범위와 무관한 문서, 설정, 로드맵 항목은 변경하지 않는다.

## 문서 기준

- 전체 학습 순서와 상태의 기준은 `docs/roadmap.mdx`다.
- Java 문서는 공식 자료를 참고한 개인 학습 정리이며 `templates/study-note.mdx`를 사용한다.
- Spring Framework와 Spring Boot 문서는 공식 문서 선별 번역이며 `templates/translation.mdx`를 사용한다.
- 문서마다 실제 출처, 문서 유형, 기준 버전과 상태를 기록한다.
- 번역에 추가한 설명은 `TranslatorNote`로 원문과 구분한다.
- 파일과 디렉터리 이름은 소문자 kebab-case를 사용한다.

## 문서 상태

- `작성 전`: 공개 로드맵에만 있고 실제 문서는 없다.
- `작성 중`: 문서는 `draft: true`이고 공개 빌드에서 제외된다.
- `작성 완료`: `draft: true`를 제거하고 로드맵과 사이드바에서 공개 문서로 연결한다.
- 작업 시작만으로 공개 로드맵을 `작성 중`으로 병합하지 않는다. 사용자가 진행 상태 공개를 별도로 요청한 경우에만 수행한다.

## 레포 전용 스킬 워크플로

문서 작업은 다음 세 단계를 섞지 않는다.

1. `start-doc`: 최신 `main`에서 문서별 브랜치를 만들고 비공개 초안을 초기화한다. commit, push, PR은 하지 않는다.
2. `submit-doc`: 완성 문서를 공개 상태로 전환하고 검증한 뒤 관련 파일만 commit·push하여 `main` 대상 Ready PR을 만든다. 병합하지 않는다.
3. `release-doc`: PR의 정확한 head와 CI를 확인하고 최종 승인 후 merge commit으로 병합하며 GitHub Pages 배포와 공개 URL을 확인한다. 문서 내용은 수정하지 않는다.

각 단계의 상세 절차와 승인 지점은 `.agents/skills/<skill-name>/SKILL.md`를 따른다. 앞 단계가 끝났다는 이유로 다음 단계의 외부 변경 권한까지 추론하지 않는다.

## Git 규칙

- 기준 브랜치는 `main`이다. `main`에 직접 문서 변경을 commit하거나 push하지 않는다.
- 문서 하나당 브랜치 하나를 사용한다.
- 브랜치명은 `docs/<area>/<roadmap-number>-<slug>` 형식을 사용한다. `<area>`는 `java`, `spring`, `boot` 중 하나다.
- commit 제목은 `<type>: <간결한 한국어 설명>` 형식을 사용하고 마침표를 붙이지 않는다.
- 변경 성격에 맞는 type은 다음 기준으로 선택한다.

| type | 사용 범위 |
|---|---|
| `docs` | 학습·번역 문서와 README 변경 |
| `chore` | 레포 스킬, 일반 설정과 유지보수 |
| `fix` | 잘못된 문서 내용, 링크 또는 사이트 동작 수정 |
| `ci` | GitHub Actions 워크플로 변경 |
| `build` | Docusaurus, 패키지, 의존성과 빌드 설정 변경 |

- 하나의 commit에는 하나의 논리적 변경만 포함한다. 여러 성격의 변경이더라도 하나의 목적을 위한 부수 변경이면 핵심 목적을 대표하는 type을 사용한다.
- PR은 기본적으로 Ready 상태로 만들고, 사용자가 요청한 경우에만 Draft로 만든다.
- 병합 방식은 merge commit이다. 작업 브랜치는 사용자가 요청하지 않으면 삭제하지 않는다.
- 다른 작업의 dirty 파일을 stash, discard, reset하거나 함께 staging하지 않는다.

## 검증

완성 문서를 제출하기 전에 마지막 관련 수정 이후 다음 명령을 실행한다.

```bash
pnpm typecheck
pnpm build
git diff --check
```

검증 실패를 숨기거나 성공으로 간주하지 않는다. 배포 완료는 GitHub Pages 워크플로 성공과 실제 공개 URL의 HTTP 200 응답을 확인한 경우에만 보고한다.
