import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JVM Docs KO',
  tagline: 'Java와 백엔드 기술을 공식 자료 중심으로 공부하며 다듬는 한국어 문서',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url: 'https://dev-song42.github.io',
  baseUrl: '/jvm-docs-ko/',
  organizationName: 'dev-song42',
  projectName: 'jvm-docs-ko',
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
    localeConfigs: {
      ko: {
        label: '한국어',
        htmlLang: 'ko-KR',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/dev-song42/jvm-docs-ko/edit/main/',
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      {
        name: 'keywords',
        content: 'Java, Spring Framework, Spring Boot, 한국어 문서, 비공식 번역, 학습 정리',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'JVM Docs KO',
      logo: {
        alt: 'JVM Docs KO 로고',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/java/',
          label: 'Java',
          position: 'left',
          activeBaseRegex: '/java/',
        },
        {
          to: '/spring-framework/',
          label: 'Spring Framework',
          position: 'left',
          activeBaseRegex: '/spring-framework/',
        },
        {
          to: '/spring-boot/',
          label: 'Spring Boot',
          position: 'left',
          activeBaseRegex: '/spring-boot/',
        },
        {to: '/roadmap/', label: '로드맵', position: 'left'},
        {
          href: 'https://github.com/dev-song42/jvm-docs-ko',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '문서',
          items: [
            {label: 'Java 21', to: '/java/'},
            {label: 'Spring Framework', to: '/spring-framework/'},
            {label: 'Spring Boot 3.5.16', to: '/spring-boot/'},
            {label: '전체 로드맵', to: '/roadmap/'},
          ],
        },
        {
          title: '공식 원문',
          items: [
            {
              label: 'Spring Framework Reference',
              href: 'https://docs.spring.io/spring-framework/reference/',
            },
            {
              label: 'Spring Boot 3.5 Reference',
              href: 'https://docs.spring.io/spring-boot/3.5/reference/',
            },
          ],
        },
        {
          title: '프로젝트',
          items: [
            {
              label: 'GitHub 저장소',
              href: 'https://github.com/dev-song42/jvm-docs-ko',
            },
            {
              label: '문서 수정 제안',
              href: 'https://github.com/dev-song42/jvm-docs-ko/issues',
            },
          ],
        },
      ],
      copyright:
        'JVM Docs KO는 공식 프로젝트와 독립적으로 운영되는 비공식 한국어 문서입니다.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'bash', 'yaml', 'properties'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
