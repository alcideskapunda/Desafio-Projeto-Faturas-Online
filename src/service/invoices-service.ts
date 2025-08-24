import { invoiceRepository } from "../database/repository/invoices-repository";
import { CreateInvoiceDTO } from "../DTO/create-invoices-DTO";
import { currentDate } from "../util/date";
import { v4 as uuid } from "uuid";


export class InvoicesService {
    async findAll(): Promise<CreateInvoiceDTO[]> {
        const invoices = await invoiceRepository.find()
        if (invoices.length === 0) throw new Error("Nenhuma fatura encontrada!");

        return invoices
    }

    async findOne(id: string): Promise<CreateInvoiceDTO | null> {
        if (id === undefined) throw new Error("Id indefinido");
        
        const invoice =  await invoiceRepository.findOne({ where: { id }})
        if(!invoice) throw new Error("fatura não encontrada");
        return invoice
    }
    
    async create(data: Omit<CreateInvoiceDTO, "id" | "issueDate">): Promise<CreateInvoiceDTO> {
        const { customer, value, dueDate, status } = data
        const id = uuid()
        const issueDate = currentDate()

        const body = {
            id,
            customer,
            value,
            issueDate,
            dueDate,
            status
        }

        return await invoiceRepository.save(body)
    }

    async remove(id: string) {
        const invoice =  await invoiceRepository.findOne({ where: { id }})
        if(!invoice) throw new Error("fatura não encontrada");
        
        return await invoiceRepository.delete(id)
    }
}

