import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { InvoiceStatus } from "../database/entitie/Invoices";


export class CreateInvoiceDTO {
    @IsUUID()
    id!: string
    
    @IsString()
    @IsNotEmpty()
    customer!: string

    @IsNumber()
    @IsNotEmpty()
    value!: number

    @IsDateString()
    @IsNotEmpty()
    issueDate!: Date

    @IsDateString()
    @IsNotEmpty()
    dueDate!: Date

    @IsEnum(InvoiceStatus)
    status?: InvoiceStatus
}

    
