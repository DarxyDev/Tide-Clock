const apiManager = ( ()=>{
    let location = '01930';
    let apiAddress = "http://api.weatherapi.com/v1/marine.json?key=e533908b626f4d84ab003308232403&days=2&q=01930";
  
    function setLocation(loc){
        location = loc;
    }

    async function getForecastData(){
        let data = await fetch(apiAddress);
        return data.json();
    }
    async function getTideData(){
        let forecast = await getForecastData();
        return forecast.forecast.forecastday[0].day.tides[0].tide;
    }
   // let data = await fetch("http://api.weatherapi.com/v1/marine.json?key=e533908b626f4d84ab003308232403&days=2&q=01930");
    //console.log(data.json());
    
    return {setLocation, getForecastData, getTideData}
})()
export default apiManager;