import { InvoiceStatus } from "../database/entitie/Invoices";
import { invoiceRepository } from "../database/repository/invoices-repository";

export async function invoiceStatusUpdate() {
    const invoices = await invoiceRepository.find()
    if (invoices.length === 0) throw new Error("Nenhuma fatura encontrada!");

    const today = new Date()

    invoices.map(async (invoice) => {
        const due = new Date(invoice.dueDate)
        if (invoice.status === InvoiceStatus.PENDING && today > due) {
            let data = {
                status: InvoiceStatus.FAILED
            }
            await invoiceRepository.update(invoice.id, data)
        }
    })
}