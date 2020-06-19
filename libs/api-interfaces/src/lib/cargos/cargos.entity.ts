
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('E001')
export class Cargo {
  @PrimaryGeneratedColumn()
  IDE001: number;

  @Column({unique: true, length: 60})
  NOME: string;

  @Column()
  CREATED: Date;

  @Column({ default: true })
  UPDATED: Date;

  @Column({ default: 'N' })
  DELETED: boolean;

  @Column({ default: 'A' })
  STS: boolean;

}
