const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const headers = require('./headers')
const port = 4000;

const monk = require('monk');
const url = 'mongodb://kershawmom:Wizard!2@cluster0-shard-00-00-gtln4.mongodb.net:27017,cluster0-shard-00-01-gtln4.mongodb.net:27017,cluster0-shard-00-02-gtln4.mongodb.net:27017/helio?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
app.use(bodyParser.json())
app.use(headers)


const db = monk(url);
db.then(() => {
    console.log("connected");
});
const items = db.get("cart");




// let items = [
//     {
//        name: 'Colored Paper',
//        image: 'https://i5.walmartimages.com/asr/950a3698-948a-4b03-b9a2-749e60647413_1.4159329e4088f2c525b3a0bbf37b3caf.jpeg',
//         price: '7.50'},

//         {name: 'Colored Pencils',
//         image: 'https://shop.crayola.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-crayola-storefront/default/dw668ab9e9/images/68-4112-0-215_Color-Pencils_Short_12ct_C3.jpg?sw=1200&sh=1500&sm=fit&sfrm=jpg',
//         price: '7.50'},

//         {name: 'Colored Pens',
//         image: 'https://cdn.shopify.com/s/files/1/0787/5255/products/bando-il-gel_yeah-gel_pen_set-assorted_glitter-02.jpg?v=1504896682',
//         price: '10.00'},

//         {name: 'Scrapbook',
//         image: 'https://ae01.alicdn.com/kf/HTB1lHrUKVXXXXX_XXXXq6xXFXXXV/Extra-Large-Ring-Binder-Photo-Album-76-pages-Kraft-Scrapbook-Album-Wedding-Album-Wedding-Guest-Book.jpg',
//         price: '12.00'},

//         {name: 'Photo Pages',
//         image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTfpjxla2L92AZ9hTMJs5EJA4BcSnT1gfGgL2aX8EBZhQ8nVrrsCdZHSsTp1lmN6Llu-ZbgWubiY7mVDMEU9UDUvyOZCOm9zDCXyeiS0wd0zNZfpDWjBAkO&usqp=CAc',
//         price: '3.50'},

//         {name: 'Blank White Pages',
//         image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAAEFCAMAAABtknO4AAAAY1BMVEX///+4uLinp6eOjo6Kior7+/uZmZnIyMhBQUH5+fn09PTNzc2+vr6EhITT09PDw8Pw8PDp6enh4eGwsLChoaGxsbFoaGjZ2dkAAAB5eXlWVlZHR0dhYWFzc3MvLy9AQEBZWVkV7BFFAAAC30lEQVR4nO3X0XKiSABA0QZsTTeggBonY2az//+VC9FkMrv7MhbUHaruSSVBH+y+Qjcagv4EKU5/Iz2N3zVNO70fxeGtreHZPCJ2x+fydhR+dC/7clOtSzt8r0/3dz6WZdqEarsq1TCc0mu+BaTu/Pot5LgmKabq7Xl3X7w5HEN3XxRrMUb0qT58bj/tCzmbB8Xjsfx8sKnAmTysPf8sqFZZsCksoFnAW7AgTfecjwfT7SdNv7PfcBYsyOPPZ8F7Tk4p51nHCMteRe3h2H0c9+W2OfUx9MW8Yyxb0IRYjB9d8nT9hLAbn+m70Hy5tGax5FV02J0vxX4oTpdyPBeHEMrdqW+6YjfrMIueg/H9PzTHcNjWOU4FzdCHQ9P0s46yYEEs69g3RX2M+2Jcwtvd+ERRbFM5zDrMkgXhfQEU9XbcitK0kcbbhjTrKIvf0WKsm8v8L/vF4gXjl75lvzUtfw7m3j3/zc9FPAt4FvAs4FnAs4BnAc8CngU8C3gW8CzgWcCzgGcBzwKeBTwLeBbwLOBZwLOAZwHPAp4FPAt4FvAs4FnAs4BnAc8CngU8C3gW8CzgWcCzgGcBzwKeBTwLeBbwLOBZwLOAZwHPAp4FPAt4FvAs4FnAs4BnAc8CngU8C3gW8CzgWcCzgGcBzwKeBTwLeBbwLOBZwLOAZwHPAp4FPAt4FvAs4FnAs4BnAc8CngU8C3gW8CzgWcCzgGcBzwKeBTwLeBbwLOBZwLOAZwHPAp4FPAt4FvAs4FnAs4BnAc8CngU8C3gW8CzgWcCzgGcBzwLeLwUbcCIPq1Zf0H4paPcpJnAuD4nl+RQ/HuxDvb6Cy9AP+X6c2tdvIcdVSaF8fj3f5h9Dtc+b1OxWpRm6Njzne8H3w9+X9u16vT5dn1ZhnOnTX/sf2019Own9dTuMS6LLXcj/vdz+YPXL6XYwruGcYq62dV9c2Dn9rvjxb1oZMaWc1nUOwvo20P/zDwtVMgHgglYyAAAAAElFTkSuQmCC',
//         price: '5.00'},

//     ]

app.get('/', (req, res) => {
    res.send({ text: 'Done' })
})
app.get('/cart', (req, res) => {
    res.send(cart)
})
app.get('/items', (req, res) => {
    items.find().then(results =>
        res.send(results))
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
app.delete("/items", async (req, res) => {
    return await items.findOneAndDelete(req,body), (err, result) => {
        if (err) {
        throw err; 
        }
        res.send('DELETE request to homepage')
    }
});



app.listen(port, (err) => {
    if (err) { throw err }
    console.log("Server up and running")
}) 