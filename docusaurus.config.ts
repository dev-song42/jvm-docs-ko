import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JVM Docs KO',
  tagline: '핵심 공식 문서를 선별해 공부하며 다듬는 비공식 한국어 문서',
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
        content: 'Spring Framework, Spring Boot, Java, 한국어 문서, 비공식 번역',
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
        {
          to: '/java/',
          label: 'Java',
          position: 'left',
          activeBaseRegex: '/java/',
        },
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
            {label: 'Spring Framework', to: '/spring-framework/'},
            {label: 'Spring Boot 3.5.6', to: '/spring-boot/'},
            {label: 'Java (준비 중)', to: '/java/'},
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
