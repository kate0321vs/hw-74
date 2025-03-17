import {promises as fs} from 'fs';
import {TMessageWithoutDate} from "./type";

const writeFile = {
    async addItem(item: TMessageWithoutDate) {
        try {
            const message = {
                ...item,
                date: new Date().toISOString(),
            }
            const pathName = `./messages/${message.date}.txt`;
            await fs.writeFile(pathName, JSON.stringify(message));
        } catch (err) {
            console.error(err);
        }
    },
}

export default writeFile
