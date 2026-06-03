const apiKey="YOUR_API_KEY";

async function getWeather(){

let city=document.getElementById(
"cityInput"
).value;

let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

let res=await fetch(url);

let data=await res.json();

showWeather(data);

}

function showWeather(data){

document.getElementById(
"city"
).innerText=data.name;

document.getElementById(
"temp"
).innerText=
Math.round(data.main.temp)+"°C";

document.getElementById(
"humidity"
).innerText=
data.main.humidity+"%";

document.getElementById(
"wind"
).innerText=
data.wind.speed+" km/h";

document.getElementById(
"condition"
).innerText=
data.weather[0].main;

changeTheme(
data.weather[0].main
);

}

function changeTheme(type){

let body=document.body;

body.className="";

if(type.includes("Rain")){

body.classList.add(
"rainy"
);

}
else if(type.includes("Clear")){

body.classList.add(
"sunny"
);

}
else{

body.classList.add(
"night"
);

}

}

function getLocation(){

navigator.geolocation.getCurrentPosition(

async(position)=>{

let lat=
position.coords.latitude;

let lon=
position.coords.longitude;

let url=
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

let res=await fetch(url);

let data=await res.json();

showWeather(data);

});

}
