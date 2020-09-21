import {
  Entity,
  BaseEntity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
export class Lession extends BaseEntity {
  /*@ObjectIdColumn()
  _id: string;*/

  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
