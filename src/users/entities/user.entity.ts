import {
  Entity,
  Column,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false }) //nullable: false valida que quede este campo vacio
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: 'user' })
  roll: string;

  @DeleteDateColumn() // Eliminacion logica queda el registro en db
  deletedAt: Date;
}
