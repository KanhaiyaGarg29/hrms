const express = require('express')
const app = express();

const connectToDb = require("./db/connection");
const userRoute = require("./routes/route");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute=require("./routes/user");

const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || '3000';

app.use(express.json());
app.use(
	cors({
		// origin:"http://localhost:3000",
		origin:"*",
		credentials:true,
		methods: ["GET", "POST", "PUT", "DELETE"]
	})
)
app.use(cookieParser());
connectToDb();

app.use('/',userRoute);
app.use('/',authRoute);

app.listen(port, () =>{
    console.log("server started");
})