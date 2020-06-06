const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');


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
        .then(data => console.log(data))
        .catch(error => console.log(error))
})