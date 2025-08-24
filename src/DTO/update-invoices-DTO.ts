import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateInvoiceDTO {
    @IsString()
    @IsNotEmpty()
    customer!: string

    @IsNumber()
    @IsNotEmpty()
    value!: number

    @IsDateString()
    @IsNotEmpty()
    dueDate!: Date
}
