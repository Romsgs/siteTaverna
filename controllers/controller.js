const { Usuario } = require('../database/models')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const session = require('express-session');

const { render } = require('../app');
const saltRounds = 10;
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')


module.exports = {

    index: (req, res) => {
        console.log("acima do if")
        console.log(req.session)
        try{
            req.cookies.email ?    res.render('index', {usuario: req.cookies.email}) : res.render('index', {usuario:'login'})
        } catch (err) {
            console.log(err)
        }

        
    },
    contato: (req,res)=>{
        try{
            req.cookies.email ?    res.render('contato', {usuario: req.cookies.email}) : res.render('contato', {usuario:'login'})
           } catch (err) {
               console.log(err)
           }
        
    },
    aBanda: (req, res) => {
        try{
            req.cookies.email ?    res.render('aBanda', {usuario: req.cookies.email}) : res.render('aBanda', {usuario:'login'})
           } catch (err) {
               console.log(err)
           }
        
    },
    login: async (req,res)=>{
        
        
        res.render('login', {usuario:'login'})
    },
    verificaLogin:async (req, res)=>{
        // captura as infos nos campos senha e email do form na view login
        const {senha, email} = req.body;
                
        //captura o usuario que coincide com o email
        const usuario = await Usuario.findOne({where:{'email': email}}) 
        const senhaOK = bcrypt.compareSync(senha, usuario.senha)  
        req.cookies.email = email;
        usuario.senha = null
        if(senhaOK){
            res.render('perfil',{usuario:req.cookies.email, user:usuario.toJSON()})    
        } else {
            res.render('index', {usuario: 'login'})
        }
        
        
        
    },
    cadastrar:(req, res)=>{
        
        req.cookies.email ?    res.render('cadastrar', {usuario: session.email}) : res.render('cadastrar', {usuario:'Login'})
        res.render('cadastrar')
    },
    cadastraUsuario: async (req, res) => {
        
        // criando as variaveis que vierem do form ao body
        const { email, senha } = req.body;
        // mostrando a o email capturado do body no console
        console.log('o email foi  '+ email)

        //enviando cookies ao cliente com o atributo email igual ao email que foi enviado pelo body
        res.cookie('email', email)            
        //teste de leitura de valor do cookie
        const n = req.cookies.email
        console.log(n)
        
        //pega a senha e encriptografa ela
        senhaHash = bcrypt.hashSync(senha, saltRounds);

        
        // tenta cadastrar um usuario e se o banco de dados aceitar ele cadastra, se não o catch da o erro
        try{
            await Usuario.create({nome:"Fulanin", sobrenome:"Taverna", email:email, senha:senhaHash, avatar:'/img/T.png' });
            
        }
        
        catch(erro){
            res.status(403).render('/index', {usuario:n})//{"msg":"ja existe este usuario", "Leitura do erro":erro})
        }
        let usuario = await Usuario.findOne({where:{email:email}})
        // let token = jwt.sign(usuario.toJSON(), senhaHash)
        // req.cookie.token = token
        res.render('index', {usuario: email});
    },
    mostrarPerfil: (req,res) =>{
        const usuario = Usuario.findOne({where: {email:req.cookies.email}})

        try{
            req.cookies.email ?    res.render('perfil', {usuario: req.cookies.email, user:usuario}) : res.render('perfil', {usuario:'login'})
           } catch (err) {
               console.log(err)
           }
    },
    media:(req,res) =>{
        try{
            req.cookies.email ?    res.render('media', {usuario: req.cookies.email}) : res.render('media', {usuario:'login'})
           } catch (err) {
               console.log(err)
           }
        
    },
    deslogar: (req, res)=> {
        // req.sessions.destroy();
        // res.session.destroy();
        res.clearCookie('token')
        res.clearCookie('email')
        res.render('index', {usuario: 'login'})
    }
}