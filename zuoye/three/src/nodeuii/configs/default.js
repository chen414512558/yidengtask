import path from 'path';

const config = {
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
    },
    log: {
        appenders: {
            everything: { type: 'datefile',
                filename: path.join(__dirname, '../../logs/cheese.log'),
                layout: {type:'basic'},
                pattern: '.yyyy-MM-dd',
                alwaysIncludePattern: true, }
        },
        categories: {
            default: { appenders: [ 'everything' ], level: 'info'}
        },
    },
};

export default config;