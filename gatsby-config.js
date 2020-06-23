require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `API Examples`,
    description: `Quick site made to show examples of API data being pulled. Projects originally from General Assembly bootcamp and will be adding more as time goes on.`,
    author: `@gdouglasshmuglas`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
  ],
}
