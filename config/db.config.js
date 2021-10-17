export default {
    HOST: "unihun.czbknzpnkjsg.us-east-2.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "efes1998",
    DB:  "unihub",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
