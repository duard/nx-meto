import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G009 } from "./G009";

@Index("NOME_UNIQUE", ["nome"], { unique: true })
@Entity("E010", { schema: "metodista_local" })
export class E010 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE010" })
  ide010: number;

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

  @OneToMany(() => G009, (g009) => g009.ide05)
  gs: G009[];
}
