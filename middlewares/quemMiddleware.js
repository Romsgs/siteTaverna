const auth = (req,res,next) =>{
    if (typeof(req.cookie.email) != "undefined"){
        next();
    } else{
        res.redirect("/login?error=usuarionaologado");
    }
 };
 
 module.exports = auth;