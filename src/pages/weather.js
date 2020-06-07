import React, { useState, useEffect } from "react"
import Weather from "../components/Weather"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function WeatherAPI() {
  const [weather, setWeather] = useState({})
  const [zip, setZip] = useState("")
  const [zipCode, setZipCode] = useState("")

  const apiKey = process.env.WEATHER_KEY
  useEffect(() => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${apiKey}`
    const makeApiCall = async () => {
      const res = await fetch(weatherUrl)
      const json = await res.json()
      setWeather(json)
    }
    makeApiCall()
  }, [zip])

  const handleSubmit = e => {
    e.preventDefault()
    setZip(zipCode)
    setZipCode("")
  }

  const handleChange = e => {
    const code = e.target.value
    setZipCode(code)
  }

  return (
    <Layout>
      <SEO title="Weather API" />
      <div className="App">
        <h1 className="header">Weather api</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="ZipCode"
            type="text"
            placeholder="Enter Zip code"
            value={zipCode}
            onChange={handleChange}
          />
          <input type="submit" value="Search" />
        </form>
        <Weather weather={weather} />
      </div>
    </Layout>
  )
}
