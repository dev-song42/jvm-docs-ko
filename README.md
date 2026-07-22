# JVM Docs KO

Spring Framework, Spring Boot, Java 공식 문서에서 핵심 내용을 선별해 번역하고 다듬는 비공식 한국어 문서 프로젝트입니다.

> 이 저장소는 Spring 팀, Broadcom, Oracle 또는 OpenJDK가 운영하거나 보증하는 공식 번역 프로젝트가 아닙니다.

## 현재 범위

- Spring Framework 6.2 핵심 개념
- Spring Boot 3.5.6 핵심 운영·개발 주제
- Java 문서: 추후 원문 범위와 라이선스를 확정한 뒤 추가

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
├── spring-framework/
├── spring-boot/
└── java/
```

각 번역 페이지에는 공식 원문 링크, 기준 버전, 번역 상태와 검토일을 표시합니다. 번역자의 보충 설명은 `번역자 노트`로 원문과 구분합니다.

## 배포

`main` 브랜치에 변경이 반영되면 GitHub Actions가 사이트를 빌드하고 GitHub Pages로 배포합니다. 최초 한 번 저장소의 **Settings → Pages → Source**를 **GitHub Actions**로 설정해야 합니다.

## 라이선스와 출처

프로젝트 자체 코드와 기여 내용은 [Apache License 2.0](./LICENSE)을 따릅니다. 번역 대상 원문의 저작권과 라이선스는 각 원문 프로젝트에 있으며, 문서별 출처와 라이선스 고지를 함께 확인해야 합니다.
