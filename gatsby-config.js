require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `do it, duri`,
    siteTitleAlt: `do it, duri`,
    siteHeadline: `일상과 개발 활동들을 기록합니다.`,
    siteUrl: 'https://doitduri.me',
    title: `do it, duri`,
      author: `@doitduri`,
    disqusShortname: 'blog-catsmc82n9',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `tags`,
            slug: `/tags`,
          },
        ],
        // externalLinks: [
        //   {
        //     name: `github`,
        //     url: `github.com/doitduri`,
        //   },
        //   {
        //     name: `facebook`,
        //     url: `https://www.facebook.com/doitduri`,
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-158361574-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `do it, duri`,
        short_name: `doitduri`,
        description: `일상과 개발 활동들을 기록합니다.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,

  ],
}
