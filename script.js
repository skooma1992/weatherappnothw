window.addEventListener("load", () => {
let long;
let lat;
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezon = document.querySelector(".location-timezone");
let temperatureSection = document.querySelector(".degree-secton");
const temperatureSpan = document.querySelector(".degree-section span");

if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.darksky.net/forecast/fc461eecf1bcfaa1198681aa003779af/${lat},${long}`;
    
    fetch(api)
    .then(response => {
        return  response.json();
    })
    .then(data => {
        console.log(data);
        const {temperature, summary, icon }= data.currently;
        //set Dom elements from the api
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezon.textContent = data.timezone;

        setIcons(icon, document.querySelector(".icon"))
        //change temperature to the bad kind
        temperatureSection.addEventListener('click', () =>{
            if(temperatureSpan.textContent === "F"){
                temperatureSpan.textContent ==="C";
            } else {temperatureSpan.textContent === "F"}
        })
        
    })
});

}
    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon])
    }
});