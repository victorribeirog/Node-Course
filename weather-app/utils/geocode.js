const request = require('request')

const geocode=(address,callback)=>{
    const url = 'urlAqui' + encodeURI(address) + 'restoUrl'
    request({url: url, json: true },(error, response)=>{
        if(error) {
            callback('Unable to connect to location service!', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to findo location. Try another search', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.featurs[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
