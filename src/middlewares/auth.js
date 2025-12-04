const adminAuth = ("/admin",(req,res,next)=>{
    const token ="xyz";
    const is_validateToken = token === "xyz";  // this si tye middleware which we made fir the /admin path the api 
                                               //will go through path and validate so we use this middlware for our api and we nit need to aunthentcate again ang again
    if(is_validateToken){
          next();
    }else{
        res.status(401).send("Unauthorized");
    }
})

const userAuth = ("/user",(req,res,next)=>{
    const token ="xyz";
    const is_validateToken = token === "xyz";  // this si tye middleware which we made fir the /admin path the api 
                                               //will go through path and validate so we use this middlware for our api and we nit need to aunthentcate again ang again
    if(is_validateToken){
          next();
    }else{
        res.status(401).send("Unauthorized");
    }
})

module.exports = { adminAuth, userAuth };