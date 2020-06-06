const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
    const cityDets = data.cityDets;
    weather = data.weather;
    //update Details Template

    details.innerHTML =
        `<h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`;
    //remove d-none
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

}



const updateCity = async city => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather }
}


cityForm.addEventListener('submit', e => {

    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update UI with new Info
    updateCity(city)
        .then(data => updateUI(data))
        .catch(error => console.log(error))
})