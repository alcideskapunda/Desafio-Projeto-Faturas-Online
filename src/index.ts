import "dotenv/config"
import 'reflect-metadata';
import { app } from "./app";
import { AppDataSource } from "./data-source";

async function main() {
    await AppDataSource.initialize();
    console.log("DataSource initialized");

    const port = process.env.PORT;

    app.listen(port, () => {
        console.log(`app runnig at port:${port}`);
    })
}

main()