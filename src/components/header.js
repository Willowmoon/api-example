import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
        textAlign: "center",
      }}
      className="dark"
    >
      <h1
        className="header"
        style={{ margin: 0, fontSize: "20px", backgroundColor: "transparent" }}
      >
        API Examples
      </h1>
      <AniLink className="btn small" paintDrip to="movies" hex="#7d755f">
        Movies
      </AniLink>
      <AniLink className="btn small" paintDrip to="giphy" hex="#7d755f">
        Giphy
      </AniLink>
      <AniLink className="btn small" paintDrip to="weather" hex="#7d755f">
        Weather
      </AniLink>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
