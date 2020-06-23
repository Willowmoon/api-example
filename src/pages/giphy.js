import React, { useState } from "react"
import "../css/styles.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Giphy() {
  const [gif, setGif] = useState()
  const [gifData, setgifData] = useState({})
  const [gifTitle, setGifTitle] = useState("")

  const handleClick = async () => {
    const apiKey = process.env.GIPHY_KEY
    const giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    let res = await fetch(giphyURL)
    let json = await res.json()
    if (json.data.image_url) {
      setGif(json.data.image_url)
    }
  }

  const handleSubmit = async title => {
    const apiKey = process.env.GIPHY_KEY
    const gifUrl = `https://api.giphy.com/v1/gifs/search?q=${title}&api_key=${apiKey}`
    let response = await fetch(gifUrl)
    let json = await response.json()
    setgifData(json)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (gifTitle !== "") {
      handleSubmit(gifTitle)
    }
    setGifTitle("")
  }

  const handleChange = e => {
    const title = e.target.value
    setGifTitle(title)
  }

  return (
    <Layout className="container">
      <SEO title="Giphy API" />
      <div className="App">
        <h1 className="header">Giphy api</h1>
        <form>
          <input
            className="random"
            aria-label="random"
            type="button"
            value="random"
            onClick={handleClick}
            onKeyDown={handleClick}
          />
        </form>
        {gif ? (
          <>
            <img src={gif} alt="random generated giphy" />
            <hr />
            <br />
          </>
        ) : (
          <br />
        )}
        <br />
        <form onSubmit={onSubmit}>
          <input
            type="text"
            aria-label="query"
            placeholder="enter query"
            value={gifTitle}
            onChange={handleChange}
          />
          <input type="submit" aria-label="search" value="search" />
        </form>
        {gifData.data ? (
          <>
            <img src={gifData.data[0].images.original.url} alt="Gif here" />
            <img src={gifData.data[1].images.original.url} alt="Gif here" />
            <img src={gifData.data[2].images.original.url} alt="Gif here" />
          </>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  )
}
