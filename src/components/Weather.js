import React from "react"

function Weather(props) {
  if (props.weather.name) {
    let temp = Math.round(props.weather.main.temp)
    let tempMin = Math.round(props.weather.main.temp_min)
    let tempMax = Math.round(props.weather.main.temp_max)
    const icon = `http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`
    const styles = {
      hot: {
        color: "#F22318",
        fontWeight: "400",
      },
      cold: {
        color: "#18E7F2",
        fontWeight: "400",
      },
      norm: {
        color: "var(--white)",
      },
    }
    const descChange = desc => {
      if (
        desc === "few clouds" ||
        desc === "thunderstorm" ||
        desc === "clear sky"
      ) {
        return "a"
      } else {
        return "some"
      }
    }
    const desc = descChange(props.weather.weather[0].description)
    return (
      <div>
        <hr style={{ marginTop: "50px" }} />
        <h1 className="big">{props.weather.name}</h1>
        <hr style={{ marginBottom: "40px" }} />
        <p>
          Currently, it is&nbsp;
          <span
            style={
              temp <= "40"
                ? styles.cold
                : temp >= "90"
                ? styles.hot
                : styles.norm
            }
          >
            {temp}
          </span>
          °F with temperatures between&nbsp;
          <span
            style={
              temp <= "40"
                ? styles.cold
                : temp >= "90"
                ? styles.hot
                : styles.norm
            }
          >
            {tempMin}
          </span>
          °F and&nbsp;
          <span
            style={
              temp <= "40"
                ? styles.cold
                : temp >= "90"
                ? styles.hot
                : styles.norm
            }
          >
            {tempMax}
          </span>
          °F today.
        </p>
        <p>
          Outside you'll see {desc} {props.weather.weather[0].description}
        </p>
        <img src={icon} alt={props.weather.weather[0].description} />
      </div>
    )
  } else {
    return (
      <div>
        <></>
      </div>
    )
  }
}

export default Weather
