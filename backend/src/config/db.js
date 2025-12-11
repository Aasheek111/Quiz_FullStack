import mongoose from "mongoose";

export const connectDB = async () => {
const uri = "mongodb+srv://technicalaashik111_db_user:naya@cluster0.5b5ertb.mongodb.net/?appName=Cluster0";

  await mongoose
    .connect(uri)
    .then(() => {
      console.log("Mongo db connection sucessfull");
    })
    .catch((e) => {
      console.log("Error while connecting to th db", e);
    });
};
