const express = require('express');


const app =express();



app.use("/test",(req,res)=>{
    res.send("Hii testing this test port")

});

app.use("/gourav",(req,res)=>{
    res.send("Gourav port tetsing")
})


app.listen("3000",(req,res)=>{

console.log("server is successfully listend on pirt 3000...");

})
