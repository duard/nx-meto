import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("S001", { schema: "metodista_local" })
export class S001 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDS001" })
  ids001: number;

  @Column("varchar", { name: "TABELA", nullable: true, length: 4 })
  tabela: string | null;

  @Column("varchar", { name: "CAMPOREAL", nullable: true, length: 10 })
  camporeal: string | null;

  @Column("varchar", { name: "CAMPOFANT", nullable: true, length: 60 })
  campofant: string | null;

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

  @Column("datetime", { name: "CREATED", nullable: true })
  created: Date | null;

  @Column("datetime", { name: "UPDATED", nullable: true })
  updated: Date | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 15 })
  tipo: string | null;
}
