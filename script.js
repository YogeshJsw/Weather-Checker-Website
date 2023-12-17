const url='https://api.openweathermap.org/data/2.5/weather?units=metric&appid=0584dc145babf3ab471658d98ca8fe38&q=';
// const key='0584dc145babf3ab471658d98ca8fe38';

const city=document.querySelector('.search input');
const btn=document.querySelector('.search button');

checkWeather("Delhi");

btn.addEventListener('click',(event)=>{
	event.preventDefault();
	checkWeather(city.value);
})


async function checkWeather(city)
{
	const response=await fetch(url+city);

	if(response.status==404)
	{
		document.querySelector(".error").style.display="block";
	}
	else
	{
		var data=await response.json();
		console.log(data);

		document.querySelector(".city").innerHTML=` ${data.name}`;

		document.querySelector(".temperature").innerHTML=`${Math.round(data.main.temp)}°C (${data.weather[0].main})`;
		
		document.querySelector(".min-temp").innerHTML=`${Math.round(data.main.temp_min)}°C`;
		// document.querySelector(".min-temp").style.color="rgb(169, 169, 14)"
		
		document.querySelector(".max-temp").innerHTML=`${Math.round(data.main.temp_max)}°C`;
		// document.querySelector(".max-temp").style.color="rgb(169, 169, 14)"

		document.querySelector(".feels-like").innerHTML=`${Math.round(data.main.feels_like)}°C`;
		// document.querySelector(".feels-like").style.color="rgb(169, 169, 14)"

		document.querySelector(".pressure").innerHTML=`${Math.round(data.main.pressure)} hPa`;
		// document.querySelector(".pressure").style.color="rgb(169, 169, 14)"

		document.querySelector(".humidity").innerHTML=`${data.main.temp}%`;
		// document.querySelector(".humidity").style.color="rgb(169, 169, 14)"
		
		document.querySelector(".wind").innerHTML=`${data.wind.speed} Km/hr`;
		// document.querySelector(".wind").style.color="rgb(169, 169, 14)"

	
		if(data.weather[0].main=="Clouds")
		{
			document.querySelector(".icon").src="clouds.png"
			document.querySelector("#head").style.backgroundColor="#000000";
			
			// document.querySelectorAll('.colorss').forEach(element => {
			// 	element.style.color = '#FF0000';
			//   });
		}
		else if(data.weather[0].main== "Drizzle")
		{
			document.querySelector(".icon").src="drizzle.png"
			document.querySelector("#head").style.backgroundColor="#4682B4";
			// document.querySelectorAll('#head').forEach(element => {
			// 	element.style.color = '#000000';
			//   });
			  
		}
		else if(data.weather[0].main=="Rain")
		{
			document.querySelector(".icon").src="rain.png"
			document.querySelector("#head").style.backgroundColor="#1E90FF";
			// document.querySelectorAll('#head').forEach(element => {
			// 	element.style.color = '#000000';
			//   });
			  
		}
		else if(data.weather[0].main=="Snow")
		{
			document.querySelector(".icon").src="snow.png"
			document.querySelector("#head").style.backgroundColor="#FFFFFF";
			// document.querySelectorAll('#head').forEach(element => {
			// 	element.style.color = '#000000';
			//   });
			  
		}
		else if(data.weather[0].main=="Mist")
		{
			document.querySelector(".icon").src="mist.png"
			document.querySelector("#head").style.backgroundColor="#B0C4DE";
			// document.querySelectorAll('#head').forEach(element => {
			// 	element.style.color = '#000000';
			//   });
			  
		}
		else if(data.weather[0].main=="Clear")
		{
			document.querySelector(".icon").src="clear.png"
			document.querySelector("#head").style.backgroundColor="#87CEEB";
			// document.querySelectorAll('#head').forEach(element => {
			// 	element.style.color = '#000000';
			//   });
			  
		}
		document.querySelector(".error").style.display = "none";
	}

	
}

