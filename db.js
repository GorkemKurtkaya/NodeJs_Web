import mongoose from "mongoose";


const conn =() => {
    mongoose.connect(process.env.DB_URI,{
        dbName: "NodeJs_Res",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(`Database connection failed, ${err}`);
    });
};


export default conn;