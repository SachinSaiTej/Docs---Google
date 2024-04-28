import { Sequelize } from "sequelize-typescript";
import env from "./env.config";

const sequelize = env.NODE_ENV === 'test' || env.NODE_ENV === 'development' ? new Sequelize("google_docs", "root", "admin", {
    host: env.DB_HOST,
    dialect: 'mysql',
    logging: false
}) : new Sequelize("", {
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false
})

export default sequelize;

