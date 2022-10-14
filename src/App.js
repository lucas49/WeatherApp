import React, {useState} from "react";
import axios from "axios"

function App() {

  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const lang = "es";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f21106a6e56a522662c7077dc672a459&lang=es`;

console.log('url');


const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}

 

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Ingrese Locación'
          type="text" />  
        
        
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1>: null}
           </div>
           <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p>: null}
            
            </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}</p>: null}
            
            <p>S. Térmica</p>
          </div>
          <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p>: null}
            
            <p>Humedad</p>
          </div>
          <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed}KMH</p>: null}
              <p>Viento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
