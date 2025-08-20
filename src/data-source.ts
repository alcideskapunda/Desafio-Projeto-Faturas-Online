import "reflect-metadata"
import 'dotenv/config';
import { DataSource } from "typeorm"
import { Invoices } from "./database/entitie/Invoices";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DEVELOPMENT,
    port: 5432,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: [Invoices],
    migrations: [],
    subscribers: [],
})