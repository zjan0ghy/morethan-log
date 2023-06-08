const CONFIG = {
  // profile setting (required)
  profile: {
    name: "희연",
    image: "/zzanghee-profile-circle.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Product Manager",
    bio: "I make services that make people happy.",
    email: "heeing0801@gmail.com",
    linkedin: "kimheeyeon",
    github: "zjan0ghy",
    instagram: "",
  },
  projects: [
    {
      name: `morethan-log`,
      href: "https://github.com/morethanmin/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "zzanghee's action",
    description: "a person who is interested in making people happy",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://zzanghee.vercel.app/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://github.com/zjan0ghy/morethan-log/blob/main/public/a%20href%3Dhttpswww.flaticon.comkrfree-icons%20title%3D%EC%99%95%EA%B4%80%20%EC%95%84%EC%9D%B4%EC%BD%98%EC%99%95%EA%B4%80%20%EC%95%84%EC%9D%B4%EC%BD%98%20%20%EC%A0%9C%EC%9E%91%EC%9E%90%20Freepik%20-%20Flaticona.png", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

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
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
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
}

module.exports = { CONFIG }
