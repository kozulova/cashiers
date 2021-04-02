import {pool} from './db'

const addCashier = (name: String, age: Number, sex: Boolean, yearsOfExpiriance: Number, worksInShifts: Boolean):void =>{
    pool.query(
        'INSERT INTO cashier (name, age, sex, yearsOfExpiriance, worksInShifts) VALUES ($1, $2, $3, $4, $5)',
    [name, age, sex, yearsOfExpiriance, worksInShifts],
    (error) => {
      if (error) {
        throw error
      }
      console.log("added")
    },
    )
}

const getCashiers = async () =>{
    try{
    const res = await pool.query(
    'SELECT * FROM cashier')
    console.log(res.rows)
    return res.rows;
    }
    catch(err){
        console.log(err)
    }
    
}


const createDataBase = ():void =>{

    pool.query(
        `CREATE TABLE cashier (
            user_id serial PRIMARY KEY,
            name VARCHAR (50) UNIQUE NOT NULL,
            age INT,
            sex BOOLEAN,
            yearsOfExpiriance INT,
            worksInShifts BOOLEAN
        )`,
    (error) => {
      if (error) {
        throw error
      }
      console.log("created")
    },
    )
}


export {addCashier, createDataBase, getCashiers}