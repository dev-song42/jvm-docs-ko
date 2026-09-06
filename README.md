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
├── write-doc/
└── publish-doc/
```

각 문서에는 주요 출처, 문서 유형, 기준 버전, 작성 상태와 검토일을 표시합니다. 번역자의 보충 설명은 `번역자 노트`로 원문과 구분합니다.

전체 학습 순서와 상태는 `docs/roadmap.mdx`에서 관리합니다. 에이전트가 `templates/`의 현재 템플릿을 기준으로 조사와 초안 작성을 수행하고, 사용자가 읽으며 공부하고 다듬습니다.

## 문서 작업 워크플로

이 저장소에는 Codex에서 문서 작업을 반복할 때 사용하는 레포 전용 스킬이 있습니다.

| 단계 | 스킬 | 결과 |
|---|---|---|
| 조사·작성 | [`write-doc`](./.agents/skills/write-doc/SKILL.md) | 문서 브랜치 준비·재사용, 출처 조사, 본문·예제·Java 시각자료 작성과 검증, `draft: true` 초안 |
| 배포 | [`publish-doc`](./.agents/skills/publish-doc/SKILL.md) | 사용자 검토 확인, 최종 점검, 공개 상태 반영, commit·push·Ready PR, 최종 승인 후 병합과 배포 확인 |

첫 Java 주제는 `Java 1.1 조사해줘` 또는 `$write-doc Java 1.1`로 요청합니다. 자료 목록만 만드는 것이 아니라 읽고 검토할 수 있는 MDX 본문까지 작성합니다. 파일은 `docs/` 아래에 생성하고, 기존 초안이 있으면 사용자 수정을 보존하며 이어 씁니다.

```text
Java 1.1 조사해줘 → 직접 읽고 질문·수정 → Java 1.1 배포해줘 → 최종 병합 승인 → 공개 확인
```

- Java는 공식 자료를 종합한 독립적인 한국어 해설입니다. Spring Framework·Spring Boot는 식별 가능한 공식 원문의 선별 번역이며 추가 설명을 번역자 노트로 구별합니다.
- Java 초안에는 의미 있는 시각자료를 최소 1개 포함합니다. 출처·재사용 조건·실제 렌더링과 예외는 [`templates/README.md`](./templates/README.md)의 규칙을 따릅니다.
- 작성 중에는 `draft: true`를 유지하고 공개 로드맵과 사이드바를 완료 상태로 바꾸지 않습니다. 초안 작성 스킬은 commit·push·PR을 수행하지 않습니다. `draft`는 사이트 빌드에서 제외하는 표시이지 GitHub 파일 접근을 막는 기능은 아닙니다.
- 사용자가 꼼꼼히 읽고 다듬은 뒤 `Java 1.1 배포해줘` 또는 `$publish-doc Java 1.1`로 요청합니다. 의미·범위를 크게 바꾸는 수정은 다시 검토를 받고, 병합 직전에는 정확한 PR과 head SHA를 보여주고 최종 승인을 받습니다.
- commit·push·PR 생성만 요청하면 그 단계까지만 수행합니다. PR 병합 방식은 merge commit이며 작업 브랜치는 자동 삭제하지 않습니다.
- 개인 공통 `quiz-me`·`sparring`은 읽은 뒤 원하는 경우에만 사용합니다. 이 레포에 별도로 복사하지 않으며 배포 필수 조건도 아닙니다.

자세한 에이전트 규칙은 [`AGENTS.md`](./AGENTS.md)에 있습니다.

## 배포

`main` 브랜치에 변경이 반영되면 GitHub Actions가 사이트를 빌드하고 GitHub Pages로 배포합니다. 최초 한 번 저장소의 **Settings → Pages → Source**를 **GitHub Actions**로 설정해야 합니다.

## 라이선스와 출처

프로젝트 자체 코드와 기여 내용은 [Apache License 2.0](./LICENSE)을 따릅니다. 번역 대상 원문의 저작권과 라이선스는 각 원문 프로젝트에 있으며, 문서별 출처와 라이선스 고지를 함께 확인해야 합니다.
