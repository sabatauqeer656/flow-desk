// Connects the application to the Mongodb Atlas database
import mongoose from "mongoose";

const db = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("server is connectd to db");
};

export default db;
