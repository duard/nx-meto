import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("S002", { schema: "metodista_local" })
export class S002 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDS002" })
  ids002: number;

  @Column("varchar", { name: "TABELA", nullable: true, length: 4 })
  tabela: string | null;

  @Column("int", { name: "IDG009", nullable: true })
  idg009: number | null;

  @Column("varchar", { name: "NOMEFILTRO", nullable: true, length: 60 })
  nomefiltro: string | null;

  @Column("varchar", { name: "IDS001", nullable: true, length: 20 })
  ids001: string | null;

  @Column("varchar", { name: "OPERADOR", nullable: true, length: 30 })
  operador: string | null;

  @Column("varchar", { name: "EXPRESSAO", nullable: true, length: 60 })
  expressao: string | null;

  @Column("datetime", { name: "CREATED" })
  created: Date;

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

  @Column("varchar", {
    name: "FAVORITO",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  favorito: string | null;
}
