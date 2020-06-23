import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("G012", { schema: "metodista_local" })
export class G012 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG012" })
  idg012: number;

  @Column("varchar", { name: "EXERCICIO", nullable: true, length: 4 })
  exercicio: string | null;

  @Column("varchar", { name: "PERIODO", nullable: true, length: 2 })
  periodo: string | null;

  @Column("date", { name: "DTINICIO", nullable: true })
  dtinicio: string | null;

  @Column("date", { name: "DTFIM", nullable: true })
  dtfim: string | null;

  @Column("date", { name: "CREATED", nullable: true })
  created: string | null;

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
