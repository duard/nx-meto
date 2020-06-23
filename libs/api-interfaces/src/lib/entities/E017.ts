import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("E017", { schema: "metodista_local" })
export class E017 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE017" })
  ide017: number;

  @Column("varchar", { name: "TIPO", nullable: true, length: 16 })
  tipo: string | null;

  @Column("int", { name: "IDG018", nullable: true })
  idg018: number | null;

  @Column("int", { name: "IDG019", nullable: true })
  idg019: number | null;

  @Column("int", { name: "IDG020", nullable: true })
  idg020: number | null;

  @Column("int", { name: "IDG021", nullable: true })
  idg021: number | null;

  @Column("int", { name: "IDG003", nullable: true })
  idg003: number | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @Column("varchar", { name: "DESCRICA", nullable: true, length: 120 })
  descrica: string | null;

  @Column("varchar", { name: "VALORBAS", nullable: true, length: 16 })
  valorbas: string | null;

  @Column("varchar", { name: "VENCIMEN", nullable: true, length: 16 })
  vencimen: string | null;

  @Column("varchar", { name: "SITUACAO", nullable: true, length: 16 })
  situacao: string | null;

  @Column("int", { name: "IDG005", nullable: true })
  idg005: number | null;

  @Column("tinyint", { name: "FXBANCO", nullable: true, width: 1 })
  fxbanco: boolean | null;

  @Column("tinyint", { name: "RECORRENT", nullable: true, width: 1 })
  recorrent: boolean | null;

  @Column("varchar", { name: "OBSERVACA", nullable: true, length: 200 })
  observaca: string | null;

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
