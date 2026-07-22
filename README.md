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
```

각 문서에는 주요 출처, 문서 유형, 기준 버전, 작성 상태와 검토일을 표시합니다. 번역자의 보충 설명은 `번역자 노트`로 원문과 구분합니다.

전체 학습 순서와 상태는 `docs/roadmap.mdx`에서 관리합니다. 새 문서는 `templates/`의 해당 템플릿을 복사해 시작합니다.

## 배포

`main` 브랜치에 변경이 반영되면 GitHub Actions가 사이트를 빌드하고 GitHub Pages로 배포합니다. 최초 한 번 저장소의 **Settings → Pages → Source**를 **GitHub Actions**로 설정해야 합니다.

## 라이선스와 출처

프로젝트 자체 코드와 기여 내용은 [Apache License 2.0](./LICENSE)을 따릅니다. 번역 대상 원문의 저작권과 라이선스는 각 원문 프로젝트에 있으며, 문서별 출처와 라이선스 고지를 함께 확인해야 합니다.
