const { Usuario } = require('../database/models')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const session = require('express-session');
const { render } = require('../app');
const saltRounds = 10;



module.exports = {

    index: (req, res) => {
        res.render('index')
    },
    contato: (req,res)=>{
        res.render('contato')
    },
    aBanda: (req, res) => {
        res.render('aBanda')
    },
    login:(req,res)=>{
        let senha = req.body.senha;
        let email = req.body.email;
        session.user = email;
        res.render('login')   
    },
    verificaLogin:(req, res)=>{

        res.render('index')
    },
    cadastrar:(req, res)=>{
        res.render('cadastrar')
    },
    cadastraUsuario:(req, res) => {
        console.log(req.body);
        let senha = req.body.senha;
        let email = req.body.email;
        senhaHash = bcrypt.hashSync(senha, saltRounds);
        console.log(senhaHash);
        Usuario.create({nome:"Fulanin", sobrenome:"Taverna", email:email, senha:senhaHash, avatar:'/img/T.png' });
        session.user = email;
        res.redirect('/');
    },
    mostrarPerfil: (req,res) =>{
        res.render('perfil')
    },
    media:(req,res) =>{
        res.render('media')
    }
}