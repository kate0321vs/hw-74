import {promises as fs} from 'fs';
import {IMessage, TMessageWithoutDate} from "./type";

const pathDir = './messages'

const writeFile = {
    async getMessages() {
        try {
            const files = await fs.readdir(pathDir);
            const lastMessages = files.slice(-5);
            return await Promise.all(
                lastMessages.map(async (file) => {
                    const content = await fs.readFile(`${pathDir}/${file}`);
                    return JSON.parse(content.toString()) as IMessage;
                })
            );
        } catch (error) {
            console.error(error);
        }
    },

    async addItem(item: TMessageWithoutDate) {
        try {
            const message = {
                ...item,
                date: new Date().toISOString(),
            }
            const pathName = `${pathDir}/${message.date}.txt`;
            await fs.writeFile(pathName, JSON.stringify(message));
        } catch (err) {
            console.error(err);
        }
    },
}

export default writeFile
