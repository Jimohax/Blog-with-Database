// const URL = "mongodb://localhost:27017/usersdb"

const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

// mongoose.connect(URL, (err)=>{
//   if (err) {
//       console.log(err.message);
//       console.log("Error");
//   }
//   else{
//       console.log("working");
//   }
// })

// mongoose.connect('mongodb://localhost:27017/usersdb',
//   {
//     useNewUrlParser: true
//   }
// );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

app.use(Router);

const connect = (url)=>{
  return mongoose.connect(url)
}
const  start = async() =>{
  try {
    await connect ("mongodb://127.0.0.1:27017/userdb");
    console.log("connection successful");  
  } catch (error) {
    console.log(error);
  }
};

app.listen(3000, () => {
  console.log("Server is running at port 3000");
  start();
});