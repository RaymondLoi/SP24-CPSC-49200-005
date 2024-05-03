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
            <li><a class="active" href="#environmentalJustice">Environmental Justice</a></li>
            <li><a href="quiz.html">Quiz</a></li>
            <li><a href="climate.html">Climate</a></li>
          </ul>
        </div>
        
        <h2>Environmental Justice</h2>
        <p>What is environmental justice?</p>
        <p>In the United States, there is more pollution in the communities of racial minorities as well as the poor communities.</p>

        <p>A Brief History of Environmental Justice</p>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/30xLg2HHg8Q?si=8cqy2sor3sTnMG5k"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <h3>How does environmental justice relate to air quality?</h3>
        <p>Laws and regulations can the standards that pollutors have to follow.</p>
        <p>There are many cases where poorer areas contain energy and manufacturing plants. The higher pollution lowers the value of the area.</p>
        

        <p className='quote'>
        "About 130 million Americans live in places where particle or ozone pollution exceeds levels the EPA considers healthy. About 70 million of those are people of color."
        <div>
          - Alejandra Borunda, National Public Radio. Read more at:
        </div>
          <a href="https://www.npr.org/2024/04/24/1246729103/unhealthy-dangerous-air-hurts-130-million-americans" target="_blank">
        https://www.npr.org/2024/04/24/1246729103/unhealthy-dangerous-air-hurts-130-million-americans
        </a>
      </p>

      <p>Another issue key issue is the placement of oil pipelines on tribal lands. Currently the US government is failing to regulation gas and oil companies. Adding pipelines to tribal lands has endangered the lives of many living on reservations. The Dakota Access Pipeline has been one such controvesial projects.</p>

      <h4 className='noMargin'>Further Reading:</h4>
      <a href="https://www.epa.gov/environmentaljustice" target="_blank">
      https://www.epa.gov/environmentaljustice
        <br></br>
        </a>
        <a href="https://www.nationalgeographic.com/environment/article/environmental-justice-origins-why-finally-getting-the-attention-it-deserves" target="_blank">
        <i>The origins of environmental justice—and why it’s finally getting the attention it deserves</i> - National Geographic
        </a>
      <br></br>
      <a href="https://www.whitehouse.gov/environmentaljustice/" target="_blank">
      https://www.whitehouse.gov/environmentaljustice/
      </a>

      </>
    )
  }
  
  export default App
  