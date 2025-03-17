export interface IMessage {
    message: string;
    date: string;
}

export type TMessageWithoutDate = Omit <IMessage, 'date'>