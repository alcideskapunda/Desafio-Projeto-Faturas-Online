import { Router } from "express";
import invoiceRoutes from "./invoices-routes";

const url = '/v1/api'
const router = Router()

router.use(`${url}/invoices`, invoiceRoutes)

export default router;