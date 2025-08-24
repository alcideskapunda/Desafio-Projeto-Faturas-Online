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

    async findAll(_request: Request, response: Response) {
        
        try {
            const invoices = await service.findAll()
            response.status(StatusCodes.OK).json({ data: invoices })
        } catch (error) {
            if (error instanceof Error) {
                response.status(StatusCodes.NO_CONTENT).json({ message: error.message })
                return
            }
        }
    }

    async findOne(request: Request, response: Response) {
        const { id } = request.params
        
        try {
            const invoice = await service.findOne(id)
            response.status(StatusCodes.OK).json({ data: invoice })
        } catch (error) {
            if (error instanceof Error) {
                response.status(StatusCodes.NOT_FOUND).json({ message: error.message })
                return
            }
        }
    }

    async remove(request: Request, response: Response) {
        const { id } = request.params

        try {
            await service.remove(id)
            response.status(StatusCodes.NO_CONTENT).json({ message: "Removed sussesfull" })
        } catch (error) {
            if (error instanceof Error) {
                response.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
                return
            }
        }
    }
}