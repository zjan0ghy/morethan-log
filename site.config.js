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
  ogImageGenerateURL: "https://blog.naver.com/common/util/imageZoom.jsp?url=https://blogpfthumb-phinf.pstatic.net/MjAyMzAzMjRfMTk0/MDAxNjc5NjU5NTY5MTU4.cTkkysdHNu7TxVaSnGM-WaFdYOKz-XlUYZHiqk9Y7Hkg.n_MJqADE_VCqT4AXrxnocLWp0hvS5xIeDieN5DRc2Ewg.PNG.kinghy00/profileImage.png&rClickYn=false&isOwner=true#", // The link to generate OG image, don't end with a slash
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
