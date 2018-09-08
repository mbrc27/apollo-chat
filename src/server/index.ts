import { startServer } from "./app/server";
import { syncDatabase } from "./db";

const PORT = process.env.API_PORT || 3003;

const run = async () => {
    try {
        const models = await syncDatabase();
        await startServer(PORT, models);
        console.log(`Listening on PORT: ${PORT}`);
    } catch (error) {
        console.error(error);
    }
};

run();
