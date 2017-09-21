'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbModel = undefined;

var _promiseMysql = require('promise-mysql');

var _promiseMysql2 = _interopRequireDefault(_promiseMysql);

var _default = require('../configs/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mysqlConf = _default2.default.mysqlConf;
const thumbModel = require('./thumbModel');
const db = _promiseMysql2.default.createPool(mysqlConf);

const ThumbModel = exports.ThumbModel = thumbModel(db);