import { Router } from "express";
import { InvoicesController } from "../controller/invoices-controller";

const routes = Router()
const controller = new InvoicesController()

routes.post("/", controller.create)
routes.get("/", controller.findAll)
routes.get("/:id", controller.findOne)
routes.delete("/:id", controller.remove)
routes.patch("/:id", controller.update)

export default routes;