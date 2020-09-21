
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class InputTexting {
    content?: string;
    roomID?: number;
}

export class Item {
    id: number;
    name?: string;
}

export class Message {
    id: number;
    description: string;
}

export abstract class IMutation {
    abstract createMessage(description: string): Message | Promise<Message>;

    abstract createdRe(nameList?: string): string | Promise<string>;

    abstract createTexting(inputTexting?: InputTexting): Texting | Promise<Texting>;
}

export abstract class IQuery {
    abstract items(): Item[] | Promise<Item[]>;

    abstract messages(): Message[] | Promise<Message[]>;

    abstract texting(): Texting[] | Promise<Texting[]>;
}

export abstract class ISubscription {
    abstract reCreated(): string | Promise<string>;

    abstract textCreated(roomID?: string): Texting | Promise<Texting>;
}

export class Texting {
    content: string;
    roomID?: number;
}
