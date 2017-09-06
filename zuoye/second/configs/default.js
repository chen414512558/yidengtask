const path = require('path');

module.exports = {
    port: process.env.PORT || 3000,
    controllerConf: path.join(__dirname, '../controllers/'),
    viewsConf: path.join(__dirname, '../views/'),
    assetsConf: path.join(__dirname, '../assets/'),
    mysqlConf: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'yd',
        connectionLimit: 10
    }
};