import { invoiceRepository } from "../database/repository/invoices-repository";
import { CreateInvoiceDTO } from "../DTO/create-invoices-DTO";
import { currentDate } from "../util/date";
import { v4 as uuid } from "uuid";


export class InvoicesService {
    
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
}

