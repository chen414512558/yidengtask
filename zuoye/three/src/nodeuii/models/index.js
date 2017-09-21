import mysql from 'promise-mysql';
import config from '../configs/default';
const mysqlConf = config.mysqlConf;
const thumbModel = require('./thumbModel');
const db = mysql.createPool(mysqlConf);

export const ThumbModel = thumbModel(db);
