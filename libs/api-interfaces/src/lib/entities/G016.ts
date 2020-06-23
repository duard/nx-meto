import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { A001 } from "./A001";
import { G004 } from "./G004";
import { E012 } from "./E012";
import { G008 } from "./G008";

@Index("FK_CONTRATO_LOCAL", ["idg004"], {})
@Index("G016_E012_FK", ["ide012"], {})
@Index("G016_G008_FK", ["idg008"], {})
@Index("NRCONTRA_UNIQUE", ["nrcontra"], { unique: true })
@Entity("G016", { schema: "metodista_local" })
export class G016 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG016" })
  idg016: number;

  @Column("int", { name: "IDE012", nullable: true })
  ide012: number | null;

  @Column("varchar", {
    name: "NRCONTRA",
    nullable: true,
    unique: true,
    length: 16,
  })
  nrcontra: string | null;

  @Column("date", { name: "DTASSINA", nullable: true })
  dtassina: string | null;

  @Column("date", { name: "DTINICIO", nullable: true })
  dtinicio: string | null;

  @Column("varchar", { name: "UNIDADEV", nullable: true, length: 30 })
  unidadev: string | null;

  @Column("varchar", { name: "VIGENCIA", nullable: true, length: 3 })
  vigencia: string | null;

  @Column("date", { name: "DTFINAL", nullable: true })
  dtfinal: string | null;

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

  @Column("varchar", { name: "OBJETO", nullable: true, length: 200 })
  objeto: string | null;

  @Column("int", { name: "IDG008", nullable: true })
  idg008: number | null;

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

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @OneToMany(() => A001, (a001) => a001.idg10)
  as: A001[];

  @ManyToOne(() => G004, (g004) => g004.gs3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg0: G004;

  @ManyToOne(() => E012, (e012) => e012.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE012", referencedColumnName: "ide012" }])
  ide0: E012;

  @ManyToOne(() => G008, (g008) => g008.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG008", referencedColumnName: "idg008" }])
  idg02: G008;
}
