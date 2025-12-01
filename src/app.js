const express = require('express');


const app =express();

//this will only handle get call to /user
app.get("/user",(req,res)=>{
    res.send({firstName:"Akshay",lastName:"Saini"});
})


app.post("/user",(req,res)=>{
   //logic to save daat to db

   res.send("Post api successfully hit");
})


app.delete("/user",(req,res)=>{
   //logic to delete daat to db

   res.send("delete api successfully hit");
})


//this will match all the HTTp method api calls to /test
app.use("/test",(req,res)=>{
    res.send("Hii testing this test port") //it make the get api call tyo this route on our server

});

// app.use("/gourav",(req,res)=>{
//     res.send("Gourav port tetsing")
// })

// app.use("/",(req,res)=>{
//     res.send("default route hit");
// })


app.listen("3000",(req,res)=>{

console.log("server is successfully listend on pirt 3000...");

})
