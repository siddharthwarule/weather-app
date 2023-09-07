
const search = document.getElementById("search");
const submitSearch = document.getElementById("searchbtn");
const cityName = document.getElementById("cityname");


      function getCity(inputCity){

   

    cityName.innerHTML=inputCity.toUpperCase();

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${inputCity}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79008bcb2fmshe9ba33b441db7f0p164ebdjsn4cd5f24341c8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(response => {

    // console.log(result);

    temp.innerHTML=response.temp;
    max_temp.innerHTML=response.max_temp;
    min_temp.innerHTML=response.min_temp;
    // feels_like.innerHTML=response.feels_like;
    
    
    wind_speed.innerHTML=response.wind_speed;
    wind_degrees.innerHTML=response.wind_degrees;
    cloud_pct.innerHTML= response.cloud_pct;    
    

    humidity.innerHTML=response.humidity;
    function convertTimestampToTime(timestamp) {
        const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
    
    const sunriseTimestamp = response.sunrise;
    const sunsetTimestamp =response.sunset ;
    
    const sunriseTime = convertTimestampToTime(sunriseTimestamp);
    const sunsetTime = convertTimestampToTime(sunsetTimestamp);
    
    sunrise.innerHTML=sunriseTime;
    sunset.innerHTML=sunsetTime;
          
  })
  .catch(error => {
    console.error(error);
  });

}
getCity("delhi");

submitSearch.addEventListener("click" ,(e)=>{

  const inputCity=  search.value;

  getCity(inputCity);
 e.preventDefault();

})


const numDrops = 100;

for (let i = 0; i < numDrops; i++) {
    createDrop();
}

function createDrop() {
    const drop = document.createElement('div');
    drop.className = 'drop';
    document.body.appendChild(drop);

    const startX = Math.random() * window.innerWidth;
    const endX = startX + Math.random() * 5;
    const duration = Math.random() * 1 + 0.5;

    drop.style.left = startX + 'px';
    drop.style.animation = `fall linear ${duration}s infinite`;

    drop.addEventListener('animationiteration', () => {
        drop.style.left = startX + 'px';
        drop.style.animation = `fall linear ${duration}s infinite`;
    });
}
