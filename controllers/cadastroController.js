const db = require('../database/models/tavernaDB')
module.exports = {
    cadastrar: (req, res) => {
        db.sequelize.query("insert values (name = req.query.name, email = req.query.email) in usuarios")
    }
}