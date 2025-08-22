import { Request, Response } from "express";
import { CreateInvoiceDTO } from "../DTO/create-invoices-DTO";
import { InvoicesService } from "../service/invoices-service";
import { StatusCodes } from "http-status-codes";

const service = new InvoicesService()

export class InvoicesController {
    
    async create(request: Request, response: Response) {
        const body: Omit<CreateInvoiceDTO, "id" | "issueDate"> = request.body

        try {
            const invoice = await service.create(body)
            response.status(StatusCodes.CREATED).json({ data: invoice })
        } catch (error) {
            if (error instanceof Error) {
                response.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
                return
            }

            response.status(StatusCodes.BAD_REQUEST).json({ message: "Reveja todos os campos, antes de reinviar.!" })
        }
    }

    
}