import express from 'express';
import {TMessageWithoutDate} from "../type";
import writeFile from "../writeFile";
const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {

});

messagesRouter.post('/', async (req, res) => {
    const message: TMessageWithoutDate = {
        message: req.body.message,
    };
    const savedMessage = await writeFile.addItem(message)

    res.send(savedMessage);
});

export default messagesRouter;
