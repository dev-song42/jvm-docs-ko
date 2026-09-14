import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '시작하기',
    },
    {
      type: 'doc',
      id: 'roadmap',
      label: '전체 로드맵',
    },
    {
      type: 'category',
      label: 'Java 21',
      link: {
        type: 'doc',
        id: 'java/index',
      },
      items: [
        'java/platform/java-jvm-jdk',
        'java/platform/compile-bytecode-execution',
      ],
    },
    {
      type: 'doc',
      id: 'spring-framework/index',
      label: 'Spring Framework 6.2',
    },
    {
      type: 'doc',
      id: 'spring-boot/index',
      label: 'Spring Boot 3.5.16',
    },
  ],
};

export default sidebars;
