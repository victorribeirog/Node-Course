const path =require('path')
const express = require('express')
const hbs = require('hbs')
const { error } = require('console')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPatch = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPatch))

app.get('',(req, res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Victor'
    })
})

app.get('/about', (req,res)=>{
    res.render('about',{
        title: 'About me',
        name: 'Victor'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        title: 'Help Page',
        name: 'Victor',
        helptext: 'This is some helpful text.'
    })
})

app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide a address'
        })
    }
    geocode(req.query.address,(error, {latitute, longitute, location} = {})=>{
        if(error){
            return res.send({error})
        }
        forecast(latitute,longitute,(error, forecasData)=>{
            if(error){
                return res.send({error})
            }

            res.send({
                forecast:forecasData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'You must provide a search term'
        })
    }
    console.log(req.query)
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res)=>{
    res.render('error',{
        title: '404',
        name: 'Victor',
        errorText: 'Help article not found..'
    })
})

app.get('*',(req, res)=>{
    res.render('error',{
        title: '404',
        name: 'Victor',
        errorText: 'Page not found.'
    })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})