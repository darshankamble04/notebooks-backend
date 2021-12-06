require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors")
const connectToMongoDB = require('./db')
const app = express();

const port = process.env.PORT || 5000
connectToMongoDB();

app.use(cors())

// MIDDLEWARE FOR JSON =>
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')
    
// INCLUDE ROUTES =>
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notebooks", require("./routes/notebooks"))
app.use("/api/notes", require("./routes/notes"))

app.listen(port, () => {
    console.log(`You are live on the port http://localhost:${port}`)
});

// bcrypt cors dotenv ejs express express-validator googleapis jsonwebtoken mongoose nodemailer