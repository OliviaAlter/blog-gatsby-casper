module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  blogAuthorDir: 'authors', // The name of directory that contains your author configs.
  blogAuthorId: 'olivia', // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: 'Olivia\'s Blog', // Site title.
  siteTitleAlt: 'Olivia\'s Blog', // Alternative site title for SEO.
  siteLogo: '/logos/logo-600x600.png', // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteLogoSmall: '/logos/logo-38x38.png', // Logo used on pages (top left corner)
  siteUrl: 'https://blog.myouri.cyou', // Domain of your website without pathPrefix.
  pathPrefix: './', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: 'A blog site for my personal hobby', // Website description used for RSS feeds/meta description tag.
  siteCover: '/images/ayame_bg.jpg', // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssAuthor: 'Olivia', // The author name used in the RSS file.
  siteRssNewsfeed: '/rss-newsfeed.xml', // Path to the "newsfeed" RSS file.
  siteRssNewsfeedPosts: 5, // Amount of posts to be queried for the "newsfeed" RSS file.
  sitePaginationLimit: 10, // The max number of posts per page.
  disqusShortname: 'Olivia', // enables Disqus comments, visually deviates from original Casper theme
  siteSocialUrls: [
    {
      title: 'GitHub',
      url: 'https://github.com/OliviaAlter'
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/8_Meow_8_Meow_8'
    },
    {
      title: 'E-mail',
      url: 'mailto:myouri@proton.me'
    }
  ],
  postDefaultCategoryID: 'n/a', // Default category for posts (unused).
  postDefaultCoverUrl: 'https://picsum.photos/1280/300/?random&_=',
  // Links to social profiles/projects you want to display in the navigation bar (unused).
  userLinks: [
    {
      label: 'Portal',
      url: 'https://myouri.cyou/'
    },
    {
      label: 'Safe',
      url: 'https://safe.myouri.cyou/'
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: 'Olivia', // Label used before the year
    year: '2021-2022', // optional, defaults to current year
    url: 'https://myouri.cyou/' // optional, set link address of copyright, defaults to site root
  },
  themeColor: '#209cee', // Used for setting manifest and progress theme colors.
  backgroundColor: '#000', // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.
}
