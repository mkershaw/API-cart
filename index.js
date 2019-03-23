const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const headers = require('./headers')
app.use(bodyParser.json())
app.use(headers)


let items = [
    {
        name: 'Colored Paper',
        image: 'https://i5.walmartimages.com/asr/950a3698-948a-4b03-b9a2-749e60647413_1.4159329e4088f2c525b3a0bbf37b3caf.jpeg',
        price: '7.50'},

        {name: 'Colored Pencils',
        image: 'https://shop.crayola.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-crayola-storefront/default/dw668ab9e9/images/68-4112-0-215_Color-Pencils_Short_12ct_C3.jpg?sw=1200&sh=1500&sm=fit&sfrm=jpg',
        price: '7.50'},

        {name: 'Pens',
        image: 'https://cdn.shopify.com/s/files/1/0787/5255/products/bando-il-gel_yeah-gel_pen_set-assorted_glitter-02.jpg?v=1504896682',
        price: '10.00'}
        
    ]

app.get('/', (req, res) => {
    res.send({ text: 'Done' })
})
app.get('/cart', (req, res) => {
    res.send(cart)
})
app.get('/items', (req, res) => {
    res.send(items)
})
let cart = []

app.post('/cart', (req, res) => {
    console.log('/cart POST end point activated')
    req.body.id = Math.random().toString(36).substring(2, 15)

    cart.push(req.body)
    res.send(cart)
})
app.delete('/cart/:id', (req, res) => {
    cart = cart.filter((item => item.id != req.params.id
    ))
    res.send(cart)
})



app.listen(3001, (err) => {
    if (err) { throw err }
    console.log("Server up and running")
}) 