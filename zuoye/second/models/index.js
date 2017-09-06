const mysql = require('promise-mysql');
const mysqlConf = require('../configs/default').mysqlConf;
const thumbModel = require('./thumbModel');
const db = mysql.createPool(mysqlConf);

module.exports = {
    thumb: thumbModel(db)
}
