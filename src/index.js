import dotenv from 'dotenv' //mandatory
import connectToDB from './db/dbConnect.js' // always use.js to reduce the chances to encounter errors
import app from './app.js' // keeps index.js file clean

dotenv.config({
    path: './.env'  // try "./.env" if not working
})

connectToDB() // keeping the index file clean
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening on: ${process.env.PORT}`);
    })
})
.catch((error) => console.log("MONGODB connection failed!!!: ", error))
















/**import express from 'express'
const app = express()

( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error", error);
        throw error
    }
})()
**/