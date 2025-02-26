const ApiKey = "d89836c4e165be1177ea5d634c231f29";
const button = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather .weather-icon")
const input = document.querySelector('#city-input');
//function
async function checkWeather(cityName="delhi"){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    
        switch (data.weather[0].main) {
            case "Clouds":
                weather_icon.src = "./images/clouds.png"
                break;
    
            case "Rain":
                weather_icon.src = "./images/rain.png"
                break;
    
            case "Drizzle":
                weather_icon.src = "./images/drizzle.png"
                break;
    
            case "Mist":
                weather_icon.src = "./images/mist.png"
                break;
    
            case "Snow":
                weather_icon.src = "./images/snow.png"
                break;
        
            case "Clear":
                weather_icon.src = "./images/clear.png"
                break;
        
            case "Humidity":
                weather_icon.src = "./images/humidity.png"
                break;
    
            case "Thunderstorm":
                weather_icon.src = "./images/wind.png"
                break;
        
            default:
                break;
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        console.log("working",data);
    }
    
}

//normal event handling
button.addEventListener('click',()=>{
    
     checkWeather(input.value.trim() || "delhi");
    
});

input.addEventListener('click',()=>{
    input.value="";
})

//event-delegation

// search.addEventListener('click',(e)=>{
//     if(e.target.classList.contains("search-city")){
        
//         checkWeather(document.querySelector('#city-input').value.trim() || "delhi");
//     }
// });


//dark-mode

const mode = document.querySelector(".mode")
mode.addEventListener('click',()=>{
    if(mode.innerText.trim() == "Light Mode"){
        mode.innerHTML = '<i class="fa-solid fa-moon"></i> <span class="mode-name">dark mode</span>'
        mode.style.backgroundColor = "#555";
        mode.style.color = "white";

        document.body.style.backgroundColor = "white"
        document.querySelector("nav").style.backgroundColor ="white"
        document.querySelector("nav").style.color ="black"
        document.querySelector("nav").style.borderBottom ="2px solid black"
        document.querySelector(".card").classList.toggle("card-shadow")

        
    }
    else{
        mode.innerHTML = '<i class="fa-solid fa-sun"></i> <span class="mode-name">light mode</span>'
        mode.style.backgroundColor = "white";
        mode.style.color = "black";

        document.body.style.backgroundColor = "#222"
        document.querySelector("nav").style.backgroundColor ="#767575"
        document.querySelector("nav").style.color ="white"
        document.querySelector("nav").style.borderBottom ="2px solid #999"
        document.querySelector(".card").classList.toggle("card-shadow")
        
    }
    console.log('clicked', mode.innerText);
    
})


