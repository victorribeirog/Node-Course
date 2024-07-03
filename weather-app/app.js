const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=37.8267,-122.4233&units=m'

request({ url: url, json: true}, (error, response)=>{
    if (error){
        console.log('Unable to connect to weather service!')
    }else if(response.body.error){
        console.log('Unable to find location')
    }else{
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. It feels like '+ response.body.current.feelslike +' degress out.')
    }
})