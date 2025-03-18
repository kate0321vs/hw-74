import express from "express";
import messagesRouter from "./routers/messages";

const app = express();
const port = 8000;

app.use(express.json());
app.use('/messages', messagesRouter);

const run = async () => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
};

run().catch((err) => console.error(err));