import express from 'express'
import {addCashier, createDataBase, getCashiers, addShop} from './utils'
import {Shop, Cashier} from './models'

const app =  express()

app.get('/', (req, res)=>{
    res.send('Hello')
})

app.post('/addCashier', (req, res)=>{
    const cashierToAdd:Cashier = req.body || {
        name: "Jacky",
        age: 20,
        sex: 1,
        yearsOfExpiriance: 1,
        shop: 2,
    }
    addCashier(cashierToAdd)
    res.send('Added')
})

app.get('/allCashiers', (req, res)=>{
     getCashiers().then(cashiers=>res.send({cashiers})) 
})

app.get('/createTable', (req, res)=>{
    createDataBase()
    res.send('Created')
})

app.post('/addShop', (req,res)=>{
    const shopToAdd:Shop = {...req.body} || {name: "Silpo", address: "Kyivska"}
    addShop(shopToAdd).then(addedShop=>res.send(`${addedShop}`))
})


app.listen(5000, ()=>console.log('Server running'))