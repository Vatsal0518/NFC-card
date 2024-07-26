const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/NFC").then(()=>{console.log("databse connected to NFC")}).catch((e)=>{console.log("error in connections wtih database "+ e)});