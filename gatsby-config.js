module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-material",
      options: {
        basePath: `/blog`
      },
    },
  ],

  website: {
    title: "THHM Personal Blog", // Homepage title
    titleShort: "THHM Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: "Chay Lung Tung", // Website name used for homescreen (PWA) and SEO
    description: "Blog cuar Truong Hoang Huyen Minh, viet ve moi thu tren doi.", // Website description used for RSS feeds/meta description tag
    language: "en", // Sets the global HTML lang attribute
    logoUrl: "/logos/logo-1024.png", // Logo used for SEO
    fbAppId: "APP_ID", // FB Application ID for using app insights
    twitterName: "Vagr9K", // Twitter handle of the website
    url: "https://huyenminh-blog.netlify.app", // Domain of your website without the pathPrefix
    rss: "/rss.xml", // Path to the RSS file
    rssTitle: "Gatsby Material Starter RSS Feed", // Title of the RSS feed

    googleAnalyticsId: "UA-VALIDID", // GA tracking ID
    copyright: "© Copyright 2023 | Le Bao Quan", // Copyright string for the footer of the website and RSS feed.

    themeColor: "#D83850", // Used for setting manifest and progress theme colors.
    backgroundColor: "#F7F7F7", // Used for setting manifest background color.
  },

  // User configuration
  user: {
    id: "MaterialUser", // Unique identifier of the user on the website. Used for OpenGraph SEO tags
    firstName: "Material", // Used for SEO
    lastName: "User", // Used for SEO
    twitterName: "Vagr9K", // Twitter username used for SEO
    linkedIn: "your-linkedin", // Used for contact information
    github: "vagr9k", // Used for contact information
    email: "MaterialUser@example.com", // Used for contact information and displayed in the RSS feed
    location: "User Location", // User location used for SEO
    about: "A full-stack web developer looking for a challenge!", // User information used for the author section
    avatar: "https://i.pravatar.cc/300", // User avatar used for the author section
  },

  // Organization information used for SEO
  organization: {
    name: "Organization Name",
    description: "Organization description",
    logoUrl: "/logos/logo-512.png",
    url: "https://gatsby-theme-material.netlify.app", // URL of the organization website
  },

  // Gatsby Configuration
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.

  contentDir: undefined, // Directory for MDX posts. Defaults to "content".
  assetDir: undefined, // Asset directory. Defaults to "static".

  embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
  embeddedVideoWidth: 920, // MDX embedded video width in pixels

  iconPath: undefined, // Icon used for manifest icon creation.
  iconList: [], // Icons used for the web manifest. Can be used to override iconPath for a more pixel perfect control.
  iconCachePaths: undefined, // Glob pattern path for the icons to be cached by the gatsby-plugin-offline

  basePath: undefined, // Base path for mounting pages. Allows for multiple themes to be used in a single website.
};

