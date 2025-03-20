import mongoose from "mongoose"; //required to establish connection
import { DB_NAME } from "../constants.js"; //good practice

const connectToDB = async () => {  //any operation to database can take time (often different continent), hence use async await always
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED: ", error);
        process.exit(1)
    }
}

export default connectToDB //when you export as default you don't need to use {} while importing