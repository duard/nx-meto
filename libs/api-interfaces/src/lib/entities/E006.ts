import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("E006", { schema: "metodista_local" })
export class E006 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE006" })
  ide006: number;

  @Column("varchar", { name: "NOME", length: 60 })
  nome: string;

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
}
