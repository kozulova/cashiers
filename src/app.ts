import express from 'express'
import {addCashier, createDataBase, getCashiers} from './utils'

const app =  express()

app.get('/', (req, res)=>{
    res.send('Hello')
})

app.get('/addCashier', (req, res)=>{
    const name:String = 'Milly'
    const age:Number = 25
    const sex: Boolean = false
    const yearsOfExpiriance: Number = 2
    const worksInShifts: Boolean = false
    addCashier(name, age, sex, yearsOfExpiriance, worksInShifts)
    res.send('Added')
})

app.get('/allCashiers', (req, res)=>{
     getCashiers().then(cashiers=>res.send({cashiers}))

    
})

app.get('/table', (req, res)=>{
    createDataBase()
    res.send('Created')
})

app.listen(5000, ()=>console.log('Server running'))