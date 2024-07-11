const Sequelize = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'

});

try {
    sequelize.authenticate();
    console.log('Conectamos ao sequelize')
} catch (error) {
    console.log('Nao foi possível conectar', error);
    
}

module.exports = sequelize;