import { startServer } from "./app/server";

const PORT = process.env.API_PORT || 3003;

const run = async () => {
    try {
        await startServer(PORT);
        console.log(`Listening on PORT: ${PORT}`);
    } catch (error) {
        console.error(error);
    }
};

run();
