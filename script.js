const apiKey="YOUR_API_KEY";

async function getWeather(){

const city=
document.getElementById(
"cityInput"
).value;

if(!city)return;

try{

const response=
await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
);

const data=
await response.json();

if(data.cod!="200"){

alert("City not found");
return;

}

document.getElementById(
"city"
).innerText=data.name;

document.getElementById(
"temp"
).innerText=
Math.round(
data.main.temp
)+"°C";

document.getElementById(
"humidity"
).innerText=
data.main.humidity+"%";

document.getElementById(
"wind"
).innerText=
data.wind.speed+" km/h";

const weather=
data.weather[0].main;

document.getElementById(
"condition"
).innerText=weather;

changeTheme(weather);

}
catch{

alert(
"Error loading weather"
);

}

}

function changeTheme(weather){

document.body.className="";

if(weather==="Clear"){
document.body.classList.add(
"sunny"
);

document.getElementById(
"icon"
).innerText="☀️";
}

else if(weather==="Rain"){

document.body.classList.add(
"rainy"
);

document.getElementById(
"icon"
).innerText="🌧️";

}

else if(weather==="Clouds"){

document.body.classList.add(
"cloudy"
);

document.getElementById(
"icon"
).innerText="☁️";

}

else{

document.body.classList.add(
"night"
);

document.getElementById(
"icon"
).innerText="🌙";

}

}
