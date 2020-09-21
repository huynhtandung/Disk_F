
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class LessionInput {
    name?: string;
    startDate?: string;
    endDate?: string;
}

export class Lession {
    id?: string;
    name?: string;
    startDate?: string;
    endDate?: string;
}

export abstract class IQuery {
    abstract getAllLession(): Lession[] | Promise<Lession[]>;
}

export abstract class IMutation {
    abstract createLession(lession?: LessionInput): Lession | Promise<Lession>;
}
