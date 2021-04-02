import {pool} from './db'
import {Cashier, CashRegister, Shop} from './models'

const addCashier = (cashier: Cashier):void =>{
    const {name, age, sex, yearsOfExpiriance, shop} = cashier
    pool.query(
        'INSERT INTO cashiers (name, age, sex, yearsOfExpiriance, shop_id) VALUES ($1, $2, $3, $4, $5)',
    [name, age, sex, yearsOfExpiriance, shop],
    (error) => {
      if (error) {
        throw error
      }
      console.log("added")
    },
    )
}

const addShop = async(shop: Shop) =>{
    const {name, address} = shop
    const query = 'INSERT INTO shops (name, adress) VALUES ($1, $2)'
    try{
        const res = await pool.query(query, [name, address])
        return res
    }
    catch(err){
        console.log(err)
    }
}

const getCashiers = async () =>{
    try{
    const res = await pool.query(
    'SELECT * FROM cashiers')
    console.log(res.rows)
    return res.rows;
    }
    catch(err){
        console.log(err)
    }
    
}


const createDataBase = ():void =>{
    pool.query(
        `
        CREATE TABLE Shops(
            shop_id serial PRIMARY KEY,
            name VARCHAR(50),
            adress VARCHAR(50)
        );
        
        CREATE TABLE cashiers (
            user_id serial PRIMARY KEY,
            name VARCHAR (50) UNIQUE NOT NULL,
            age INT,
            sex BOOLEAN,
            yearsOfExpiriance INT,
            shop_id INT NOT NULL, 
            FOREIGN KEY (shop_id)
                REFERENCES Shops (shop_id)
        ); 
    
        CREATE TABLE CashRegister(
            cashRegister_id serial PRIMARY KEY,
            user_id INT NOT NULL,
            FOREIGN KEY (user_id)
                REFERENCES Cashiers (user_id)
            ,
            shift TIMESTAMP 
        )     
        `,
    (error) => {
      if (error) {
        throw error
      }
      console.log("created")
    },
    )
}

const deleteDatabase = ():void =>{
    pool.query(
        `DELETE TABLE cashier)`,
    (error) => {
      if (error) {
        throw error
      }
      console.log("created")
    },
    )
}


export {addCashier, createDataBase, getCashiers, addShop}