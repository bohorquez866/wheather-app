const key = "lXQGKxUqJ3WCLvZykDpAtFPS9alSK72h";


//Get current conditions
const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

//Get city information
const getCity = async city => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    if (response.status !== 200) {
        throw new error('cannot fetch data')
    }
    return data[0];

};



getCity('manchester').then(data => {
        return getWeather(data.Key)
    }).then(data => console.log(data))
    .catch(error => console.log('Rejected', error));