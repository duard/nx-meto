import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E024 } from "./E024";
import { E019 } from "./E019";

@Index("NOME", ["nome"], { unique: true })
@Entity("E003", { schema: "metodista_local" })
export class E003 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE003" })
  ide003: number;

  @Column("varchar", { name: "NOME", nullable: true, unique: true, length: 60 })
  nome: string | null;

  @Column("datetime", { name: "CREATED", nullable: true })
  created: Date | null;

  @Column("datetime", { name: "UPDATED", nullable: true })
  updated: Date | null;

  @Column("varchar", {
    name: "DELETED",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deleted: string | null;

  @Column("varchar", {
    name: "STS",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  sts: string | null;

  @OneToMany(() => E024, (e024) => e024.ide02)
  es: E024[];

  @OneToMany(() => E019, (e019) => e019.ide03)
  es2: E019[];
}
