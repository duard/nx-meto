import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("E009", { schema: "metodista_local" })
export class E009 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE009" })
  ide009: number;

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
