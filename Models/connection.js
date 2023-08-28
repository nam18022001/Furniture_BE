const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");

// const serverCa = [
//   fs.readFileSync("../../DigiCertGlobalRootCA.crt.pem", "utf8"),
// ];

const {
  DB_NAME,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DIALECT,
} = require("../Config/db.config");

const connection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  // dialectOptions: {
  //   ssl: {
  //     rejectUnauthorized: true,
  //     ca: serverCa,
  //   },
  // },
});
module.exports = { connection };
