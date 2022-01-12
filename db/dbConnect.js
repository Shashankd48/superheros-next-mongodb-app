import mongoose from "mongoose";
import config from "../config";

const connection = {};

async function dbConnect() {
   try {
      if (connection.isConnected) {
         return;
      }
      const db = await mongoose.connect(config.databaseURI);
      connection.isConnected = db.connections[0].readyState;
   } catch (error) {
      console.log(error);
   }
}

export default dbConnect;
