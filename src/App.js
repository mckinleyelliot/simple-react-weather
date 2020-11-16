import React, { useState } from 'react';
import './index.css';


const api = {
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {

  const [query, setQuery] =useState('');
  const [weather, setWeather] =useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  const chicago = () => {
      fetch(`${api.base}weather?q=chicago&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
  }

  const delphi = () => {
    fetch(`${api.base}weather?q=delphi&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
      console.log(result);
    });
  }

const kankakee = () => {
  fetch(`${api.base}weather?q=kankakee&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
  .then(res => res.json())
  .then(result => {
    setWeather(result);
    setQuery('');
    console.log(result);
  });
}

const dixon = () => {
  fetch(`${api.base}weather?q=dixon&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
  .then(res => res.json())
  .then(result => {
    setWeather(result);
    setQuery('');
    console.log(result);
  });
}

var needleStyle360 =  {transform: 'rotate(360deg)'}
var needleStyle350 =  {transform: 'rotate(350deg)'}
var needleStyle340 =  {transform: 'rotate(340deg)'}
var needleStyle330 =  {transform: 'rotate(330deg)'}
var needleStyle320 =  {transform: 'rotate(320deg)'}
var needleStyle310 =  {transform: 'rotate(310deg)'}
var needleStyle300 =  {transform: 'rotate(300deg)'}
var needleStyle290 =  {transform: 'rotate(290deg)'}
var needleStyle280 =  {transform: 'rotate(280deg)'}
var needleStyle270 =  {transform: 'rotate(270deg)'}
var needleStyle260 =  {transform: 'rotate(260deg)'}
var needleStyle250 =  {transform: 'rotate(250deg)'}
var needleStyle240 =  {transform: 'rotate(240deg)'}
var needleStyle230 =  {transform: 'rotate(230deg)'}
var needleStyle220 =  {transform: 'rotate(220deg)'}
var needleStyle210 =  {transform: 'rotate(210deg)'}
var needleStyle200 =  {transform: 'rotate(200deg)'}
var needleStyle190 =  {transform: 'rotate(190deg)'}
var needleStyle180 =  {transform: 'rotate(180deg)'}
var needleStyle170 =  {transform: 'rotate(170deg)'}
var needleStyle160 =  {transform: 'rotate(160deg)'}
var needleStyle150 =  {transform: 'rotate(150deg)'}
var needleStyle140 =  {transform: 'rotate(140deg)'}
var needleStyle130 =  {transform: 'rotate(130deg)'}
var needleStyle120 =  {transform: 'rotate(120deg)'}
var needleStyle110 =  {transform: 'rotate(110deg)'}
var needleStyle100 =  {transform: 'rotate(100deg)'}
var needleStyle90 =  {transform: 'rotate(90deg)'}
var needleStyle80 =  {transform: 'rotate(80deg)'}
var needleStyle70 =  {transform: 'rotate(70deg)'}
var needleStyle60 =  {transform: 'rotate(60deg)'}
var needleStyle50 =  {transform: 'rotate(50deg)'}
var needleStyle40 =  {transform: 'rotate(40deg)'}
var needleStyle30 =  {transform: 'rotate(30deg)'}
var needleStyle20 =  {transform: 'rotate(20deg)'}
var needleStyle10 =  {transform: 'rotate(10deg)'}
var needleStyle9 =  {transform: 'rotate(9deg)'}
var needleStyle8 =  {transform: 'rotate(8deg)'}
var needleStyle7 =  {transform: 'rotate(7deg)'}
var needleStyle6 =  {transform: 'rotate(6deg)'}
var needleStyle5 =  {transform: 'rotate(5deg)'}
var needleStyle4 =  {transform: 'rotate(4deg)'}
var needleStyle3 =  {transform: 'rotate(3deg)'}
var needleStyle2 =  {transform: 'rotate(2deg)'}
var needleStyle1 =  {transform: 'rotate(1deg)'}
var needleStyle0 =  {transform: 'rotate(0deg)'}

const windDeg = () => {
  if(weather.wind.deg < 361 && weather.wind.deg > 349){
    return <div className="needle" style={needleStyle350}></div>}
    else if(weather.wind.deg < 350 && weather.wind.deg > 339){return <div className="needle" style={needleStyle340}></div>}
    else if(weather.wind.deg < 340 && weather.wind.deg > 329) {return <div className="needle" style={needleStyle330}></div>}
    else if(weather.wind.deg < 330 && weather.wind.deg > 319) {return <div className="needle" style={needleStyle320}></div>}
    else if(weather.wind.deg < 320 && weather.wind.deg > 309) {return <div className="needle" style={needleStyle310}></div>}
    else if(weather.wind.deg < 310 && weather.wind.deg > 299) {return <div className="needle" style={needleStyle300}></div>}
    else if(weather.wind.deg < 300 && weather.wind.deg > 289) {return <div className="needle" style={needleStyle290}></div>}
    else if(weather.wind.deg < 290 && weather.wind.deg > 279) {return <div className="needle" style={needleStyle280}></div>}
    else if(weather.wind.deg < 280 && weather.wind.deg > 269) {return <div className="needle" style={needleStyle270}></div>}
    else if(weather.wind.deg < 270 && weather.wind.deg > 259) {return <div className="needle" style={needleStyle260}></div>}
    else if(weather.wind.deg < 260 && weather.wind.deg > 249) {return <div className="needle" style={needleStyle250}></div>}
    else if(weather.wind.deg < 250 && weather.wind.deg > 239) {return <div className="needle" style={needleStyle240}></div>}
    else if(weather.wind.deg < 240 && weather.wind.deg > 229) {return <div className="needle" style={needleStyle230}></div>}
    else if(weather.wind.deg < 230 && weather.wind.deg > 219) {return <div className="needle" style={needleStyle220}></div>}
    else if(weather.wind.deg < 220 && weather.wind.deg > 209) {return <div className="needle" style={needleStyle210}></div>}
    else if(weather.wind.deg < 210 && weather.wind.deg > 199) {return <div className="needle" style={needleStyle200}></div>}
    else if(weather.wind.deg < 200 && weather.wind.deg > 189) {return <div className="needle" style={needleStyle190}></div>}
    else if(weather.wind.deg < 190 && weather.wind.deg > 179) {return <div className="needle" style={needleStyle180}></div>}
    else if(weather.wind.deg < 180 && weather.wind.deg > 169) {return <div className="needle" style={needleStyle170}></div>}
    else if(weather.wind.deg < 170 && weather.wind.deg > 159) {return <div className="needle" style={needleStyle160}></div>}
    else if(weather.wind.deg < 160 && weather.wind.deg > 149) {return <div className="needle" style={needleStyle150}></div>}
    else if(weather.wind.deg < 150 && weather.wind.deg > 139) {return <div className="needle" style={needleStyle140}></div>}
    else if(weather.wind.deg < 140 && weather.wind.deg > 129) {return <div className="needle" style={needleStyle130}></div>}
    else if(weather.wind.deg < 130 && weather.wind.deg > 119) {return <div className="needle" style={needleStyle120}></div>}
    else if(weather.wind.deg < 120 && weather.wind.deg > 109) {return <div className="needle" style={needleStyle110}></div>}
    else if(weather.wind.deg < 110 && weather.wind.deg > 99) {return <div className="needle" style={needleStyle100}></div>}
    else if(weather.wind.deg < 100 && weather.wind.deg > 89) {return <div className="needle" style={needleStyle90}></div>}
    else if(weather.wind.deg < 90 && weather.wind.deg > 79) {return <div className="needle" style={needleStyle80}></div>}
    else if(weather.wind.deg < 80 && weather.wind.deg > 69) {return <div className="needle" style={needleStyle70}></div>}
    else if(weather.wind.deg < 70 && weather.wind.deg > 59) {return <div className="needle" style={needleStyle60}></div>}
    else if(weather.wind.deg < 60 && weather.wind.deg > 49) {return <div className="needle" style={needleStyle50}></div>}
    else if(weather.wind.deg < 50 && weather.wind.deg > 39) {return <div className="needle" style={needleStyle40}></div>}
    else if(weather.wind.deg < 40 && weather.wind.deg > 29) {return <div className="needle" style={needleStyle30}></div>}
    else if(weather.wind.deg < 30 && weather.wind.deg > 19) {return <div className="needle" style={needleStyle20}></div>}
    else if(weather.wind.deg < 20 && weather.wind.deg > 9) {return <div className="needle" style={needleStyle10}></div>}
    else if(weather.wind.deg < 10 && weather.wind.deg > -1) {return <div className="needle" style={needleStyle5}></div>}
  }

const windText = () => {
  if(weather.wind.deg > 90 && weather.wind.deg < 180) {
    return <div>Wind Direction: SE</div>
  }
  else if (weather.wind.deg > -1 && weather.wind.deg <= 90) {
    return <div><p>Wind Direction: NE</p></div>
  }
  else if(weather.wind.deg > 180.01 && weather.wind.deg < 270) {
    return <div><p>Wind Direction: SW</p></div>
  }
  else if (weather.wind.deg > 270.01 && weather.wind.deg < 361) {
    return <div><p>Wind Direction: NW</p></div>
  }
}

  return (
    <div className="app">
      <main>
        <div>
          <input
            type="text"
            className="search-bar"
            placeholder="Search for a city..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}>
          </input>
        </div> 
          <div className="buttonBar">
            <div className="buttonlocation" >
              <button className="locationButton" onClick={chicago}>
                Chicago, IL
              </button>
            </div>

            <div className="buttonlocation" >
              <button className="locationButton" onClick={delphi}>
                Delphi, IN
              </button>
            </div>

            <div className="buttonlocation" >
              <button className="locationButton" onClick={kankakee}>
                Kankakee, IL
              </button>
            </div>

            <div className="buttonlocation" >
              <button className="locationButton" onClick={dixon}>
                Dixon, IL
              </button>
            </div>

          </div>
      
        {(typeof weather.main != "undefined") ? (
          <div className="result">
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
            </div>

            <div className="weather-box">

              <div className="temp">

                <div className="tempAvg">
                  <p>Current Temp:</p>
                  <p className="theTemp">{Math.round(weather.main.temp)}°F</p>
                </div>
                <div className="tempHiLo">
                  <p>Today's High: {Math.round(weather.main.temp_max)}°F</p>
                </div>

              </div>

              {/* <div className="weather">
                {weather.weather[0].main}
              </div> */}

              <div className="windBox">
                  <div className="windSpeed">
                    <p>Wind speed MPH: {weather.wind.speed}</p>
                    {windText()}
                  </div>

                  <div className="windCircleDiv">
                    <div className="windCompass">
                      <div className="needleDiv">
                        {windDeg()}
                      </div>
                    </div>

                  </div>
                </div>

              </div>

          </div>

        ): ('')}

          {(typeof weather.message != "undefined") ? (
            <div className="tryAgain">
              <p>Try your search again</p>
            </div>
          ) : ('')}
 
      </main>
    </div>
  );
}

export default App;

