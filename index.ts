import express from "express";
import messagesRouter from "./routers/messages";
import writeFile from "./writeFile";



const app = express();
const port = 8080;

app.use(express.json());
app.use('/messages', messagesRouter);

const run = async () => {

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
};

run().catch((err) => console.error(err));