import React, { useState, useEffect } from "react"
import "../css/styles.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Movies() {
  const [movieData, setMovieData] = useState({})
  const [movieTitle, setMovieTitle] = useState("")
  const [movie, setMovie] = useState("")

  useEffect(() => {
    const apiKey = process.env.GATSBY_MOVIE_KEY
    const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`
    const makeApiCall = async () => {
      const res = await fetch(movieUrl)
      const json = await res.json()
      setMovieData(json)
    }
    makeApiCall()
  }, [movieTitle])

  const handleSubmit = async title => {
    setMovieTitle(title)
  }

  const onSubmit = e => {
    e.preventDefault()
    handleSubmit(movie)
    setMovie("")
  }

  const handleChange = e => {
    const title = e.target.value
    setMovie(title)
  }

  return (
    <Layout className="container">
      <SEO title="Movie API" />
      <div className="App">
        <h1 className="header">movie api</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="movietitle">
            <input
              id="movieTitle"
              aria-label="title"
              type="text"
              placeholder="title"
              value={movie}
              onChange={handleChange}
            />
          </label>
          <label>
            <input type="submit" aria-label="search" value="search" />
          </label>
        </form>
        <br />
        {movieData.Response === "False" ? (
          <></>
        ) : (
          <div>
            <h1 className="big">{movieData.Title}</h1>
            <h1 className="subhead">{movieData.Year}</h1>
            <img src={movieData.Poster} alt={movieData.Title} />
            <p className="subhead">{movieData.Genre}</p>
            <br />
            <p>{movieData.Plot}</p>
          </div>
        )}
      </div>
    </Layout>
  )
}
