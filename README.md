# JVM Docs KO

Java, Spring Framework, Spring Boot를 공식 자료 중심으로 공부하고, 핵심 내용을 선별해 정리하거나 번역하는 비공식 한국어 문서 프로젝트입니다.

> 이 저장소는 Spring 팀, Broadcom, Oracle 또는 OpenJDK가 운영하거나 보증하는 공식 번역 프로젝트가 아닙니다.

## 현재 범위

- Java 21 핵심 언어·표준 API·JVM 주제
- Spring Framework 6.2.19 핵심 개념
- Spring Boot 3.5.16 핵심 운영·개발 주제
- 공개 학습 로드맵

## 로컬 실행

Node.js 20 이상과 pnpm이 필요합니다.

```bash
pnpm install
pnpm start
```

정적 사이트 빌드는 다음 명령으로 확인합니다.

```bash
pnpm typecheck
pnpm build
```

## 문서 구성

```text
docs/
├── roadmap.mdx
├── java/
├── spring-framework/
└── spring-boot/

templates/
├── study-note.mdx
└── translation.mdx

.agents/skills/
├── start-doc/
├── submit-doc/
└── release-doc/
```

각 문서에는 주요 출처, 문서 유형, 기준 버전, 작성 상태와 검토일을 표시합니다. 번역자의 보충 설명은 `번역자 노트`로 원문과 구분합니다.

전체 학습 순서와 상태는 `docs/roadmap.mdx`에서 관리합니다. 새 문서는 `templates/`의 해당 템플릿을 복사해 시작합니다.

## 문서 작업 워크플로

이 저장소에는 Codex에서 문서 작업을 반복할 때 사용하는 레포 전용 스킬이 있습니다.

| 단계 | 스킬 | 결과 |
|---|---|---|
| 시작 | `start-doc` | 최신 `main`에서 문서 브랜치와 `draft: true` 초안 생성 |
| 제출 | `submit-doc` | 문서 검증, `작성 완료` 반영, commit·push, Ready PR 생성 |
| 공개 | `release-doc` | PR 병합, GitHub Pages 배포와 공개 URL 확인 |

예를 들어 첫 Java 주제를 시작할 때는 `Java 1.1 문서 시작해줘` 또는 `$start-doc`을 사용할 수 있습니다. 글을 다 쓴 뒤에는 `$submit-doc`, PR을 공개할 때는 `$release-doc`을 사용합니다.

```text
start-doc → 공부하며 작성 → submit-doc → release-doc
```

각 단계는 자신의 범위까지만 수행합니다. 특히 `start-doc`은 push하지 않고, `submit-doc`은 병합하지 않으며, `release-doc`은 문서 내용을 수정하지 않습니다. 자세한 에이전트 규칙은 [`AGENTS.md`](./AGENTS.md)에 있습니다.

## 배포

`main` 브랜치에 변경이 반영되면 GitHub Actions가 사이트를 빌드하고 GitHub Pages로 배포합니다. 최초 한 번 저장소의 **Settings → Pages → Source**를 **GitHub Actions**로 설정해야 합니다.

## 라이선스와 출처

프로젝트 자체 코드와 기여 내용은 [Apache License 2.0](./LICENSE)을 따릅니다. 번역 대상 원문의 저작권과 라이선스는 각 원문 프로젝트에 있으며, 문서별 출처와 라이선스 고지를 함께 확인해야 합니다.
