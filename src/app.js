const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth')


const app = express();

//this will only handle get call to /user
// app.get("/user",(req,res)=>{
//     res.send({firstName:"Akshay",lastName:"Saini"});
// })


// app.get("/user/:userId",(req,res)=>{  we can inc ths like /:userId/:name/:password and so on
//  to get userId  we use req.params

//console.log(req.params);
//     res.send({firstName:"Akshay",lastName:"Saini"});    dynamic api   
// })


// app.post("/user",(req,res)=>{
//    //logic to save daat to db

//    res.send("Post api successfully hit");
// })


// app.delete("/user",(req,res)=>{
//    //logic to delete daat to db

//    res.send("delete api successfully hit");
// })


//this will match all the HTTp method api calls to /test
// app.use("/test",(req,res)=>{
//     res.send("Hii testing this test port") //it make the get api call tyo this route on our server

// });

// app.use("/gourav",(req,res)=>{
//     res.send("Gourav port tetsing")
// })

// app.use("/",(req,res)=>{
//     res.send("default route hit"); //this is route handler and there can be ultiple route handlers
// })


// app.use("/user",(req,res,next)=>{
//     console.log("1");
//     res.send("User route hit");
//     next();
// },(req,res)=>{
//     console.log("2");
//     res.send("Second handler");

// },(req,res)=>{
//     console.log("3");
//     res.send("Third handler");
// })


// app.use("/user",[(req,res,next)=>{
//     console.log("1");
//     // res.send("User route hit");
//     next();
// },(req,res)=>{
//     console.log("2");
//     res.send("Second handler");

// }],(req,res)=>{
//     console.log("3");
//     res.send("Third handler");
// })


app.use('/admin', adminAuth);  //it means for all admin oathbn we use the admin middleware


// app.use("/admin",(req,res,next)=>{
//     const token ="xyz";
//     const is_validateToken = token === "xyz";  // this si tye middleware which we made fir the /admin path the api 
//                                                //will go through path and validate so we use this middlware for our api and we nit need to aunthentcate again ang again
//     if(is_validateToken){
//           next();
//     }else{
//         res.status(401).send("Unauthorized");
//     }
// })

//this admin middleare wont worj fir te user we need to make separate

app.use("/user/get", userAuth, (req, res) => {  // the user path will go hrugh the user middleaarew
    res.send("hii User here");
})


app.use("/admin/get", (req, res) => {
    // const token ="xyz";
    // const is_validateToken = token === "xyz";
    // if(is_validateToken){
    res.send("chl gyi");
    // }else{
    //     res.status(401).send("Unauthorized");
    // }

})




app.use("/admin/delete", (req, res) => {
    // const token ="xyz";
    // const is_validateToken = token === "xyz";
    // if(is_validateToken){
    res.send("chl gyi 2");
    // }else{
    //     res.status(401).send("Unauthorized");
    // }

})

//now lets supose we have multiple api for admin or route for which we need to do the authorization we we write this logoc again and again obviouls no
//now for middleware we can make seeparete filder and we can export that function from folder import hete and use that


app.listen("3000", (req, res) => {

    console.log("server is successfully listend on pirt 3000...");

})
