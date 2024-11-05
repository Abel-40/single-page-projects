const searchBtu = document.querySelector('.searchJs');
searchBtu.addEventListener('click', async () => {
  const searchField = document.querySelector('.inputJs').value;
  let countryName = searchField.replace(" ", "%20");
  const apiKey = "764331a3308310bbf5139b098c034faa";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${countryName}&appid=${apiKey}`;
  let errorMessage ;
  async function checkWeather() {
     try {
          const response = await fetch(apiUrl);
          const data = await response.json();

          let src; // Declare src variable here
          const weatherVariables = {
            name:data.name,
            temperature :data.main.temp,
            pressure:data.main.pressure,
            humidity:data.main.humidity,
            wind:data.wind.speed,
            
          }

          const { name, temperature, pressure, humidity, wind } = weatherVariables;
          
        //checking images for the current weather 
          if (temperature < 10) {
              src = "images/snow.png";
          } else if (temperature >= 10 && temperature < 25 && humidity > 70) {
              src = "images/rain.png";
          } else if (temperature > 30 && pressure < 1000) {
              src = "images/drizzle.png";
          } else {
              src = "images/clouds.png";
          }

          // Create weather card HTML
          let weatherCardInput = `
          <div class="weather">
              <img src="${src}" alt="" class="weather-icon weatherJs">
              <h1 class="temp">${temperature}°C</h1>
              <h2 class="city">${name}</h2>
              <div class="details">
                  <div class="col">
                      <img src="images/humidity.png" alt="">
                      <div>
                          <p class="humidity">${humidity}%</p>
                          <p>Humidity</p>
                      </div>
                  </div>
                  <div class="col">
                      <img src="images/humidity.png" alt="">
                      <div>
                          <p class="wind">${wind} km/h</p>
                          <p>Wind</p>
                      </div>
                  </div>
              </div>
          </div>`;

          // Update weather card on the web page
          let weatherCard = document.querySelector('.weatherJs');
          weatherCard.innerHTML = weatherCardInput;

    }catch (error) {
        let weatherCardInput = `
        <div class="weather">
            <h1 class="temp">0°C</h1>
            <h2 class="city">city is not found</h2>//city not found
            <div class="details">
                <div class="col">
                    <img src="images/humidity.png" alt="">
                    <div>
                        <p class="humidity">0%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="images/humidity.png" alt="">
                    <div>
                        <p class="wind">0 km/h</p>
                        <p>Wind</p>
                    </div>
                </div>
            </div>
        </div>`;

        // Update weather card on the web page
        let weatherCard = document.querySelector('.weatherJs');
        weatherCard.innerHTML = weatherCardInput;
          
      }
  }

  checkWeather();
});




//option two to fetch the data by using then and catch

// fetch(apiUrl+`&appid=${apiKey}`)
// .then(res=>{
//   if(res.ok){
//     return res.json();
//   }else{
//     console.log("we can't access the data");
//   }
// }).then(data=>{
//   console.log(data.name);
// }).catch(err=>{
//   console.error("connection error "+ err)
// })

//******************************************* */


//option TWO to fetch the data using async and await (the better way ).



// https://api.openweathermap.org/data/2.5/weather?q=addis%20ababa&appid=764331a3308310bbf5139b098c034faa&units=metric