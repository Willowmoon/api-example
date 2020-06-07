import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="big">API examples</h1>
      <AniLink className="btn" paintDrip to="movies" hex="#7d755f">
        Movies
      </AniLink>
      <AniLink className="btn" paintDrip to="giphy" hex="#7d755f">
        Giphy
      </AniLink>
    </div>
  </div>
)

export default IndexPage
