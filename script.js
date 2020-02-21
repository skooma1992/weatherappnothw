window.addEventListener("load", () => {
let long;
let lat;
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezon = document.querySelector(".location-timezone")
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
        const {temperature, summary }= data.currently;
        //set Dom elements from the api
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezon.textContent = data.timezone;
    })
});

}
    function setIcons(icon, iconID){
        const skycons = new skycons({color: "white"});
        const currentIcon = 
    }
});