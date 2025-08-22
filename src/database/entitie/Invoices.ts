import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum InvoiceStatus {
    PENDING = "PENDING",
    PAID = "PAID",
    FAILED = "FAILED"
}

@Entity()
export class Invoices {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({ type: "varchar" })
    customer!: string

    @Column({ type: "decimal" })
    value!: number

    @Column({ type: "date" })
    issueDate!: Date

    @Column({ type: "date" })
    dueDate!: Date

    @Column({
        type: "enum",
        enum: InvoiceStatus,
        default: InvoiceStatus.PENDING
    })
    status!: InvoiceStatus
}

/**
 * - ID (UUID)
- Cliente
- Valor
- Data de emissão
- Data de vencimento
- Status (PENDING, PAID, FAILED)
 */