module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('Usuario',
    {
        nome: DataTypes.STRING(),
        sobrenome: DataTypes.STRING(),
        email: DataTypes.STRING(),
        senha: DataTypes.STRING(),
        avatar: DataTypes.STRING()
    },
    {
        tableName: 'usuarios',
        timestamps: false
    });
    return usuario
}
