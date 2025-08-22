import { Repository } from "typeorm";
import { Invoices } from "../entitie/Invoices";
import { AppDataSource } from "../../data-source";


export const invoiceRepository: Repository<Invoices> = AppDataSource.getRepository(Invoices)  