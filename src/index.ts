import "dotenv/config"
import 'reflect-metadata';
import { app } from "./app";
import { AppDataSource } from "./data-source";
import cron from "node-cron";
import { invoiceStatusUpdate } from "./util/invoice-status-update";

async function main() {
    await AppDataSource.initialize();
    console.log("DataSource initialized");

    const port = process.env.PORT;

    cron.schedule("30 * * * *", async () => {
        await invoiceStatusUpdate()
    })

    app.listen(port, () => {
        console.log(`app runnig at port:${port}`);
    })
}

main()