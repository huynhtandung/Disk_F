
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
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
}

export abstract class IQuery {
    abstract items(): Item[] | Promise<Item[]>;

    abstract messages(): Message[] | Promise<Message[]>;
}
