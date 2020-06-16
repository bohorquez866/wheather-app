const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon > img')
const forecast = new Forecast();
console.log(forecast);



const updateUI = (data) => {
    //// const cityDets = data.cityDets;
    //// const weather = data.weather;

    const { cityDets, weather } = data
    //update Details Template
    details.innerHTML =
        `<h5 class="my-3">${cityDets.EnglishName}</h5>
        <h4 class="my-1">${cityDets.Country.EnglishName}</h4>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`;

    //Update night/day icon & imgs

    const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    weather.IsDayTime ? timeSrc = './img/day.svg' : timeSrc = './img/night.svg';

    // if (weather.IsDayTime) { timeSrc = './img/day.svg'; } else { timeSrc = './img/night.svg'; }

    time.setAttribute('src', timeSrc);

    //remove d-none (if present)
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

}






cityForm.addEventListener('submit', e => {

    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update UI with new Info
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(error => console.log(error))

    //set localStorage

    localStorage.setItem('city', city);
})

if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(error => console.log(error));
}