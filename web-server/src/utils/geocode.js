const request = require('request')

const geocode=(address,callback)=>{
    const url = 'urlAqui' + encodeURI(address) + 'restoUrl'
    request({url, json: true },(error, {body})=>{
        if(error) {
            callback('Unable to connect to location service!', undefined)
        }else if(body.features.length === 0){
            callback('Unable to findo location. Try another search', undefined)
        }else{
            callback(undefined, {
                latitude: body.featurs[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
