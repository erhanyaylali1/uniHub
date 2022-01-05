
import CryptoJS from "crypto-js";
import Jwt from "jsonwebtoken";

const passwordToHash = (password) => {

    const hashKey = CryptoJS.HmacSHA1(password, process.env.PASSWORD_HASH).toString();
    return CryptoJS.HmacSHA256(password, hashKey).toString();
};


export default passwordToHash;