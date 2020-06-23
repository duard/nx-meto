import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("E007", { schema: "metodista_local" })
export class E007 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE007" })
  ide007: number;

  @Column("varchar", { name: "NOME", length: 60 })
  nome: string;

  @Column("varchar", { name: "VALORMAX", length: 100 })
  valormax: string;

  @Column("date", { name: "CREATED", nullable: true })
  created: string | null;

  @Column("date", { name: "UPDATED", nullable: true })
  updated: string | null;

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
