import { Router } from "express";
import { InvoicesController } from "../controller/invoices-controller";

const routes = Router()
const controller = new InvoicesController()

routes.post("/", controller.create)
routes.get("/", controller.findAll)

export default routes;