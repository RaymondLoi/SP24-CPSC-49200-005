import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>Air Quality Information</h1>
      <hr></hr>
      <div className='navigation'>
        <form action="https://raymondloi.github.io/airqualityinfo.github.io/environmentalJustice.html" method="get" target="_blank">
          <button class="button" type="submit">Environmental Justice</button>
        </form>
        <form action="https://raymondloi.github.io/airqualityinfo.github.io/quiz.html" method="get" target="_blank">
          <button class="button" type="submit">Quiz</button>
        </form>
      </div>

      <div>
        <h3>What is the Air Quality in Chicago?</h3>
        <a href="https://air.plumelabs.com/air-quality-in-Chicago-il-kvr0" target="_blank">
            PlumeLabs
        </a>
        <br></br>
        <a href="https://www.iqair.com/us/usa/illinois/chicago" target="_blank">
            IQAir
        </a>
        <br></br>
        <a href="https://www.airnow.gov/?city=Chicago&state=IL&country=USA" target="_blank">
            AirNow
        </a>
      </div>

      <hr></hr>

      <div>
        <h3>What is Air Quality Index (AQI)?</h3>
        <p>
          Air Quality Index (AQI) is the Environmental Protection Agency's measurment for how polluted the air is. Air Quality Index ranges from 0 to 500. 0 being the pollution and 500 being the most pollution. Both the American Lung Association and AirNow list AQI between 0 to 50 as satisfactory air quality.
          <h4 className='noMargin'>Further Reading:</h4>
          <a href="https://www.airnow.gov/aqi/aqi-basics/" target="_blank">
            https://www.airnow.gov/aqi/aqi-basics/
          </a>
          <br></br>
          <a href="https://www.lung.org/blog/poor-air-quality-protection" target="_blank">
              https://www.lung.org/blog/poor-air-quality-protection
          </a>
        </p>
      </div>

      <hr></hr>

      <div>
        <h3>What is Particulate Matter?</h3>
        <p>The <a href="https://www.who.int/teams/environment-climate-change-and-health/air-quality-and-health/health-impacts/types-of-pollutants" target="_blank">World Health Organization</a> defines
            particulate matter as "inhalable particles, composed of sulphate, nitrates, ammonia, sodium chloride,
            black carbon, mineral dust or water.". Often times particulate matter is used as  measurement of air quality. Breathing
            in pariculate matter can lead to long term health problems such as lung cancer.
        </p>
      </div>

      <hr></hr>
      <div>
        <h3>Why is Air Quality Important?</h3>
        <p>
            According to a WHO article: "Air pollution is responsible for 6.7 million premature deaths every year". Those
            deaths are a result of household air pollution and ambient air pollution. Poor quality air leads to illness and death.
            We must work to towards a world where people can enjoy good quality air. In the meantime, we must be aware when air
            quality is poor in our local area and take protection measures and actions for our health and safety.
        </p>
      </div>

      <p className='quote'>
        "6.7 million premature deaths every year" <div>- World Health Organization. Read more 
        at: </div><a href="https://www.who.int/teams/environment-climate-change-and-health/air-quality-and-health/health-impacts/types-of-pollutants" target="_blank">
          https://www.who.int/teams/environment-climate-change-and-health/air-quality-and-health/health-impacts/types-of-pollutants
        </a>
      </p>
    </>
  )
}

export default App
