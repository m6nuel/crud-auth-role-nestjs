import { Role } from 'src/common/enum/rol.enum';
import {
  Entity,
  Column,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
//min 10
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false }) //nullable: false valida que quede este campo vacio
  email: string;

  @Column({ nullable: false, select: false }) // el select: false no permite devolver la password en la peticion
  password: string;

  @Column({ type: 'enum', default: Role.USER, enum: Role })
  role: Role;

  @DeleteDateColumn() // Eliminacion logica queda el registro en db
  deletedAt: Date;
}
