import { useState } from 'react'
import './App.css'

function App() {

    return (
      <>
        <h1>Air Quality Information</h1>
        <hr></hr>
        <div className='navigation'>
          <ul>
            <li><a href='index.html'>Home</a></li>
            <li><a href="environmentalJustice.html">Environmental Justice</a></li>
            <li><a href="quiz.html">Quiz</a></li>
            <li><a class="active" href="#climate">Climate Change</a></li>
          </ul>
        </div>
        
        <h2>Climate Change</h2>
        <p>In the United States, climate change has worsen the air quality for many Americans.</p>
        <p>One effect of climate change is increasing frequency of wild fires and severity of those fires in the US and Canada.
            The fires release pollution into the air. Such pollution can include particulate matter.
        </p>
        <p>The atmosphere and ozone layer is also affected by climate change. A multitude of changes in the atmosphere affects how pollution is distributed in the air.</p>

        <p className='quote'>
        "But in the West, 2023 had the most days ever recorded with dangerous or very dangerous air quality, measured by the Air Quality Index. And for the first time in the report's 25-year history, the 25 cities with the worst short-term particle pollution in the country were all in the Western U.S."
        <div>
          - Alejandra Borunda, National Public Radio. Read more at:
        </div>
          <a href="https://www.npr.org/2024/04/24/1246729103/unhealthy-dangerous-air-hurts-130-million-americans" target="_blank">
        https://www.npr.org/2024/04/24/1246729103/unhealthy-dangerous-air-hurts-130-million-americans
        </a>
      </p>


        <p className='quote2'>
        "The report highlights an increasingly clear challenge, says Susan Anenberg, an air quality expert at George Washington University and a consultant for the EPA. Through regulations over past decades, "we've pretty much addressed the easiest ways of reducing pollution," she says. "So we have catalytic converters on our vehicles, we have diesel particulate filters on our trucks, we have scrubbers on our power plants.""
        <div>
          - Alejandra Borunda, National Public Radio. Read more at:
        </div>
          <a href="https://www.npr.org/2024/04/24/1246729103/unhealthy-dangerous-air-hurts-130-million-americans" target="_blank">
        https://www.npr.org/2024/04/24/1246729103/unhealthy-dangerous-air-hurts-130-million-americans
        </a>
      </p>

      <p>New challenges now include changes in atmospheric composition, affects on human health, more extreme and frequent weather occurances.</p>

        <h3>Air Quality, Exteme Weather</h3>
        <p>Worsening pollution in the sky can include smog and smoke. This can cause the sky to darken as well as decrease the visibility of people and animals.</p>
        <p>Droughts and lack of rain fall has lead to more dust storms. Dust storms have the potential to harm and even kill local wildlife. Dust from droughts circulate into the air at unhealthy levels. This dust is another source of particulate matter.</p>
        <p>According to Environmental Protection Agency: "Extreme weather, such as flooding and storm surge, can damage buildings and allow water or moisture inside. Damp indoor conditions can lead to the growth of harmful pollutants, such as mold and bacteria."</p>
      <h4 className='noMargin'>Further Reading:</h4>
        <a href="https://www.epa.gov/climateimpacts/climate-change-impacts-air-quality" target="_blank">
            https://www.epa.gov/climateimpacts/climate-change-impacts-air-quality
        <br></br>
        </a>
        <a href="https://www.epa.gov/air-research/smoke-sense-study-citizen-science-project-using-mobile-app" target="_blank">
        Smoke Sense Study: A Citizen Science Project Using a Mobile App
        </a>
      </>
    )
  }
  
  export default App
  