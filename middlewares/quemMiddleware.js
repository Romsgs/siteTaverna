const auth = (req,res,next) =>{
    if (typeof(req.session.user) != "undefined"){
        next();
    } else{
        res.redirect("/login?error=usuarionaologado");
    }
 };
 
 module.exports = auth;