import mongoose from "mongoose";

const connection = {};

export async function conntectToDB() {

  try {

    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;

  } catch (error) {

    console.error("Error connecting to DB", error);
    
  }
}
