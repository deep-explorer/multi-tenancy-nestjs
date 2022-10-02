import { AbstractEntity } from '../../../abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users'})
export class User extends AbstractEntity {
  @Column()
  name: string;
}
