import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G006 } from "./G006";
import { G034 } from "./G034";

@Index("fk_E016_G0061_idx", ["idg006"], {})
@Index("FK_E016_G034_idx", ["idg034"], {})
@Entity("E016", { schema: "metodista_local" })
export class E016 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE016" })
  ide016: number;

  @Column("int", { name: "IDG006" })
  idg006: number;

  @Column("date", { name: "DATA", nullable: true })
  data: string | null;

  @Column("decimal", {
    name: "SALDOINI",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  saldoini: string | null;

  @Column("decimal", {
    name: "SALDOATU",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  saldoatu: string | null;

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

  @Column("int", { name: "IDG034", nullable: true })
  idg034: number | null;

  @Column("decimal", {
    name: "ENTRADAS",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  entradas: string | null;

  @Column("decimal", {
    name: "SAIDAS",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  saidas: string | null;

  @ManyToOne(() => G006, (g006) => g006.es3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG006", referencedColumnName: "idg006" }])
  idg0: G006;

  @ManyToOne(() => G034, (g034) => g034.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG034", referencedColumnName: "idg034" }])
  idg02: G034;
}
