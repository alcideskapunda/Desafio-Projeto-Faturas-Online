import e, { json } from "express";

const app =  e()

app.use(json())

export { app }