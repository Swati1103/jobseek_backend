import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "jobseeking_db",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};
// const mongoose = require("mongoose");

// const URI = process.env.MONGODB_URI;

// export const dbConnection = async () => {
//     try {
//         await mongoose.connect(URI); 
//         console.log("connection succesful to DB");       
//     } catch (error) {
//         console.error("database connection failed");
//         process.exit(0);
//     }
// };

// module.exports = connectDb;