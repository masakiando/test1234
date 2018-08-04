//nodeコマンドでserver起動直後
//NODE_ENVにマッチしたknexfile.jsのオブジェクトを変数にする
//それをknexに渡す アプリケーションはこのデータベースと接続する
//knexがコードを指定したdbのsql構文へをトランスパイルする
var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
