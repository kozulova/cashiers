require('dotenv').config()

const dbCreds = {
    user: process.env.DB_USER,
    host: process.env.DB_host,
    database: process.env.DB_database,  
    port: 5432,
    password: process.env.DB_password,
    ssl: {
        rejectUnauthorized: false
      }
}

export {dbCreds}