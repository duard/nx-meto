import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G004 } from "./G004";

@Index("FK_G023_G004_idx", ["idg004"], {})
@Entity("G023", { schema: "metodista_local" })
export class G023 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG023" })
  idg023: number;

  @Column("int", { name: "ANO", nullable: true })
  ano: number | null;

  @Column("decimal", {
    name: "SALDOINI",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  saldoini: string | null;

  @Column("decimal", {
    name: "SALDOFIN",
    nullable: true,
    precision: 11,
    scale: 2,
    default: () => "'0.00'",
  })
  saldofin: string | null;

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

  @Column("text", { name: "RESUMO", nullable: true })
  resumo: string | null;

  @Column("text", { name: "RECEITAS", nullable: true })
  receitas: string | null;

  @Column("text", { name: "DESPESAS", nullable: true })
  despesas: string | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @ManyToOne(() => G004, (g004) => g004.gs9, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg0: G004;
}
