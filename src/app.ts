import e, { json } from "express";
import router from "./routes";

const app =  e()

app.use(json())
app.use(router)

export { app }