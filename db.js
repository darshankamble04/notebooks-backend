const mongoose =require("mongoose");
// const mongooseUrl = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
// const mongooseUrl = "mongodb+srv://test99:test123@cluster0.dn10z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongooseUrl = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongoDB = () =>{
    mongoose.connect(mongooseUrl,()=>{
        console.log("connected to mongoose successfully !")
    })
}

module.exports = connectToMongoDB;