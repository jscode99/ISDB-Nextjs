const path = require("path");

module.exports = {
  env: {
    BASE_URL: "http://20.74.156.98:1337" /* "http://localhost:1337" */,
    PATH: {
      NEWS: "/news",
      BANNER: "/banners",
      EVENTS: "/events",
      SOCIAL_MEDIA: "/social-medias",
      CONTACT_US: "/contacts",
      NEWSLETTER: "/newsletters",
      SERVICES_ACTIVITIES: "/services",
      TESTIMONIS: "/testimonials",
      MEMBERS: "/members",
      SITEVIDEOS: "/site-videos",
      GALLERY_EVENTS: "/galleries",
      GALLERY_DETAILS: "/gallery-contents",
      GAMES: "/entertainments",
      FOOTER_LINK: "/footer-links"
    },
  },
  images: {
    domains: ["20.74.156.98" /* "localhost" */],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
