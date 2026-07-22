import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '시작하기',
    },
    {
      type: 'category',
      label: 'Spring Framework 6.2',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'spring-framework/index',
      },
      items: [
        {
          type: 'category',
          label: '핵심 개념',
          collapsed: false,
          items: [
            'spring-framework/core/ioc-container',
            'spring-framework/core/dependency-injection',
            'spring-framework/core/bean-scopes',
          ],
        },
        'spring-framework/aop/index',
      ],
    },
    {
      type: 'category',
      label: 'Spring Boot 3.5.6',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'spring-boot/index',
      },
      items: [
        'spring-boot/core/auto-configuration',
        'spring-boot/core/external-configuration',
        'spring-boot/core/profiles',
        'spring-boot/testing/index',
        'spring-boot/actuator/index',
      ],
    },
    {
      type: 'doc',
      id: 'java/index',
      label: 'Java (준비 중)',
    },
  ],
};

export default sidebars;
