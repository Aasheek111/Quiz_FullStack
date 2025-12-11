import mongoose from "mongoose";

export const connectDB = async () => {
  const uri =
    "mongodb+srv://technicalaashik111_db_user:Nayapassword1704@@cluster0.lvaziwy.mongodb.net/?appName=Cluster0";

  await mongoose
    .connect(uri)
    .then(() => {
      console.log("Mongo db connection sucessfull");
    })
    .catch((e) => {
      console.log("Error while connecting to th db", e);
    });
};
