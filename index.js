
const search = document.getElementById("search");
const submitSearch = document.getElementById("searchbtn");
const cityName = document.getElementById("cityname");


      function getCity(inputCity){

    cityName.innerHTML=inputCity.toUpperCase();

    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+inputCity;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79008bcb2fmshe9ba33b441db7f0p164ebdjsn4cd5f24341c8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url, options).then(response => {
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

const url2='https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';

const options2  = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79008bcb2fmshe9ba33b441db7f0p164ebdjsn4cd5f24341c8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
	 const response2 = fetch(url2, options2)
	 .then(resp => resp.json())
	 .then(resp => {

		cloud_pct2.innerHTML    = resp.cloud_pct;
	  temp2.innerHTML         = resp.temp;
		feels_like2.innerHTML   = resp.feels_like;
		humidity2.innerHTML     = resp.humidity;
		min_temp2.innerHTML     = resp.min_temp;
		max_temp2.innerHTML     = resp.max_temp;
		wind_speed2.innerHTML   = resp.wind_speed;
		wind_degrees2.innerHTML = resp.wind_degrees;
		// sunrise2.innerHTML      = resp.sunrise;
		// sunset2.innerHTML       = resp.sunset;


    function convertTimestampToTime(timestamp) {
      const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
  }
  

  const sunriseTimestamp = resp.sunrise;
  const sunsetTimestamp =resp.sunset ;
  
  const sunriseTime = convertTimestampToTime(sunriseTimestamp);
  const sunsetTime = convertTimestampToTime(sunsetTimestamp);
  
  sunrise2.innerHTML=sunriseTime;
  sunset2.innerHTML=sunsetTime;


    

    
	 });



	 const url3 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai';
	 const options3 = {
		 method: 'GET',
		 headers: {
			 'X-RapidAPI-Key': '3b82251df4mshb475c2ecb27b18bp15081ejsn9d179e3cc3cd',
			 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		 }
	 };
	 

	 const response3 = fetch(url3, options3)
	 .then(resp => resp.json())
	 .then(resp => {

		cloud_pct3.innerHTML = resp.cloud_pct;
		temp3 .innerHTML = resp.temp;
		feels_like3.innerHTML = resp.feels_like;
		humidity3.innerHTML = resp.humidity;
		min_temp3.innerHTML = resp.min_temp;
		max_temp3.innerHTML = resp.max_temp;
		wind_speed3.innerHTML = resp.wind_speed;
		wind_degrees3.innerHTML = resp.wind_degrees;
		// sunrise3.innerHTML = resp.sunrise;
		// sunset3.innerHTML = resp.sunset;


    
    function convertTimestampToTime(timestamp) {
      const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
  }
  

  const sunriseTimestamp = resp.sunrise;
  const sunsetTimestamp =resp.sunset ;
  
  const sunriseTime = convertTimestampToTime(sunriseTimestamp);
  const sunsetTime = convertTimestampToTime(sunsetTimestamp);
  
  sunrise3.innerHTML=sunriseTime;
  sunset3.innerHTML=sunsetTime;




	 })

   const url4 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune';
	 const options4 = {
		 method: 'GET',
		 headers: {
			 'X-RapidAPI-Key': '3b82251df4mshb475c2ecb27b18bp15081ejsn9d179e3cc3cd',
			 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		 }
	 };
	 

	 const response4 = fetch(url4, options3)
	 .then(resp => resp.json())
	 .then(resp => {

		cloud_pct4.innerHTML = resp.cloud_pct;
		temp4 .innerHTML = resp.temp;
		feels_like4.innerHTML = resp.feels_like;
		humidity4.innerHTML = resp.humidity;
		min_temp4.innerHTML = resp.min_temp;
		max_temp4.innerHTML = resp.max_temp;
		wind_speed4.innerHTML = resp.wind_speed;
		wind_degrees4.innerHTML = resp.wind_degrees;
		// sunrise4.innerHTML = resp.sunrise;
		// sunset4.innerHTML = resp.sunset;


    
    function convertTimestampToTime(timestamp) {
      const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
  }
  

  const sunriseTimestamp = resp.sunrise;
  const sunsetTimestamp =resp.sunset ;
  
  const sunriseTime = convertTimestampToTime(sunriseTimestamp);
  const sunsetTime = convertTimestampToTime(sunsetTimestamp);
  
  sunrise4.innerHTML=sunriseTime;
  sunset4.innerHTML=sunsetTime;




  })



   const url5 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=gujrat';
	 const options5 = {
		 method: 'GET',
		 headers: {
			 'X-RapidAPI-Key': '3b82251df4mshb475c2ecb27b18bp15081ejsn9d179e3cc3cd',
			 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		 }
	 };
	 

	 const response5 = fetch(url5, options3)
	 .then(resp => resp.json())
	 .then(resp => {

		cloud_pct5.innerHTML = resp.cloud_pct;
		temp5 .innerHTML = resp.temp;
		feels_like5.innerHTML = resp.feels_like;
		humidity5.innerHTML = resp.humidity;
		min_temp5.innerHTML = resp.min_temp;
		max_temp5.innerHTML = resp.max_temp;
		wind_speed5.innerHTML = resp.wind_speed;
		wind_degrees5.innerHTML = resp.wind_degrees;
		// sunrise5.innerHTML = resp.sunrise;
		// sunset5.innerHTML = resp.sunset;




    function convertTimestampToTime(timestamp) {
      const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
  }
  

  const sunriseTimestamp = resp.sunrise;
  const sunsetTimestamp =resp.sunset ;
  
  const sunriseTime = convertTimestampToTime(sunriseTimestamp);
  const sunsetTime = convertTimestampToTime(sunsetTimestamp);
  
  sunrise5.innerHTML=sunriseTime;
  sunset5.innerHTML=sunsetTime;


	 })



   const url6 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=manali';
	 const options6 = {
		 method: 'GET',
		 headers: {
			 'X-RapidAPI-Key': '3b82251df4mshb475c2ecb27b18bp15081ejsn9d179e3cc3cd',
			 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		 }
	 };
	 

	 const response6 = fetch(url6, options3)
	 .then(resp => resp.json())
	 .then(resp => {

		cloud_pct6.innerHTML = resp.cloud_pct;
		temp6.innerHTML = resp.temp;
		feels_like6.innerHTML = resp.feels_like;
		humidity6.innerHTML = resp.humidity;
		min_temp6.innerHTML = resp.min_temp;
		max_temp6.innerHTML = resp.max_temp;
		wind_speed6.innerHTML = resp.wind_speed;
		wind_degrees6.innerHTML = resp.wind_degrees;
		// sunrise6.innerHTML = resp.sunrise;
		// sunset6.innerHTML = resp.sunset;



    

    function convertTimestampToTime(timestamp) {
      const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
  }
  

  const sunriseTimestamp = resp.sunrise;
  const sunsetTimestamp =resp.sunset ;
  
  const sunriseTime = convertTimestampToTime(sunriseTimestamp);
  const sunsetTime = convertTimestampToTime(sunsetTimestamp);
  
  sunrise6.innerHTML=sunriseTime;
  sunset6.innerHTML=sunsetTime;




  })



	 const url7 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kerala';
	 const options7 = {
		 method: 'GET',
		 headers: {
			 'X-RapidAPI-Key': '3b82251df4mshb475c2ecb27b18bp15081ejsn9d179e3cc3cd',
			 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		 }
	 };
	 

	 const response7 = fetch(url7, options3)
	 .then(resp => resp.json())
	 .then(resp => {

		cloud_pct7.innerHTML = resp.cloud_pct;
		temp7.innerHTML = resp.temp;
		feels_like7.innerHTML = resp.feels_like;
		humidity7.innerHTML = resp.humidity;
		min_temp7.innerHTML = resp.min_temp;
		max_temp7.innerHTML = resp.max_temp;
		wind_speed7.innerHTML = resp.wind_speed;
		wind_degrees7.innerHTML = resp.wind_degrees;
		// sunrise7.innerHTML = resp.sunrise;
		// sunset7.innerHTML = resp.sunset;


    

    function convertTimestampToTime(timestamp) {
      const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
  }
  

  const sunriseTimestamp = resp.sunrise;
  const sunsetTimestamp =resp.sunset ;
  
  const sunriseTime = convertTimestampToTime(sunriseTimestamp);
  const sunsetTime = convertTimestampToTime(sunsetTimestamp);
  
  sunrise7.innerHTML=sunriseTime;
  sunset7.innerHTML=sunsetTime;


	 })





  //  timestamp.Date.catch
  //  sunrise2.Date.catch.cityName