const CONFIG = {
  // profile setting (required)
  profile: {
    name: "podoDJ",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "그 코드에 잠이 오니?",
    email: "ourstar1345@gmail.com",
    linkedin: "",
    github: "podoDJ",
    instagram: "",
  },
  projects: [
    {
      name: `pododj-morthan-log`,
      href: "https://github.com/podoDJ/podoDJ-morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "podoDJ-morethan-log",
    description: "welcome to podoDJ Blog!",
    theme: "auto",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
