require("dotenv").config();
const DB_HOST=process.env.DB_HOST;
const DB_USER =process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const SALT_BCRYPT=process.env.SALT_BCRYPT;
const TOKEN_SECRET=process.env.TOKEN_SECRET;
const NODE_ENV =process.env.NODE_ENV;
const CLIENT_URL=process.env.CLIENT_URL;
const DB_CONNECT=process.env.DB_CONNECT;
module.exports={
    DB_PASSWORD,
    DB_USER,
    DB_HOST,
    SALT_BCRYPT,
    TOKEN_SECRET,
    NODE_ENV,
    CLIENT_URL,
    DB_CONNECT
}