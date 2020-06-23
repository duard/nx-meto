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
import { E041 } from "./E041";
import { G004 } from "./G004";
import { G005 } from "./G005";
import { G015 } from "./G015";
import { E002 } from "./E002";
import { G001 } from "./G001";
import { E019 } from "./E019";
import { E036 } from "./E036";
import { E037 } from "./E037";
import { E038 } from "./E038";
import { G003 } from "./G003";

@Index("FK_G002_G005_idx", ["idg005"], {})
@Index("fk_graus", ["ide002"], {})
@Index("FK_PASTOR_PREVIDENCIA", ["ide036"], {})
@Index("FK_PECULIO_IDG004_idx", ["peculio"], {})
@Entity("G002", { schema: "metodista_local" })
export class G002 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG002" })
  idg002: number;

  @Column("text", { name: "OBSERVAC", nullable: true })
  observac: string | null;

  @Column("int", { name: "IDE002", nullable: true })
  ide002: number | null;

  @Column("date", { name: "DTPASTOR", nullable: true })
  dtpastor: string | null;

  @Column("date", { name: "DTFORMAT", nullable: true })
  dtformat: string | null;

  @Column("varchar", { name: "LOFORMAT", nullable: true, length: 255 })
  loformat: string | null;

  @Column("date", { name: "DTCONSAG", nullable: true })
  dtconsag: string | null;

  @Column("date", { name: "DTORDENA", nullable: true })
  dtordena: string | null;

  @Column("varchar", { name: "EMINSTIT", nullable: true, length: 255 })
  eminstit: string | null;

  @Column("varchar", { name: "OFERNACI", nullable: true, length: 1 })
  ofernaci: string | null;

  @Column("varchar", { name: "OFERREGI", nullable: true, length: 1 })
  oferregi: string | null;

  @Column("int", { name: "PECULIO", nullable: true })
  peculio: number | null;

  @Column("varchar", { name: "CONVOCA", nullable: true, length: 1 })
  convoca: string | null;

  @Column("varchar", { name: "ENCODIST", nullable: true, length: 1 })
  encodist: string | null;

  @Column("varchar", { name: "MINIDIST", nullable: true, length: 1 })
  minidist: string | null;

  @Column("varchar", { name: "JUNAME", nullable: true, length: 1 })
  juname: string | null;

  @Column("varchar", { name: "GRANENCO", nullable: true, length: 1 })
  granenco: string | null;

  @Column("varchar", { name: "PMUSJ", nullable: true, length: 1 })
  pmusj: string | null;

  @Column("date", { name: "DTIGREJA", nullable: true })
  dtigreja: string | null;

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

  @Column("text", { name: "FOTOFAMILIA", nullable: true })
  fotofamilia: string | null;

  @Column("varchar", { name: "TIPOCONTA", nullable: true, length: 8 })
  tipoconta: string | null;

  @Column("int", { name: "IDG005", nullable: true })
  idg005: number | null;

  @Column("varchar", { name: "NRAGENCI", nullable: true, length: 5 })
  nragenci: string | null;

  @Column("varchar", { name: "DVAGENCI", nullable: true, length: 2 })
  dvagenci: string | null;

  @Column("varchar", { name: "NRCONTA", nullable: true, length: 12 })
  nrconta: string | null;

  @Column("varchar", { name: "DVCONTA", nullable: true, length: 2 })
  dvconta: string | null;

  @Column("float", {
    name: "FATORMULT",
    nullable: true,
    comment: "base",
    precision: 11,
    scale: 2,
  })
  fatormult: number | null;

  @Column("float", {
    name: "BASEREGIAJUSTADA",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  baseregiajustada: number | null;

  @Column("float", { name: "ADICDEPE", nullable: true, precision: 5, scale: 2 })
  adicdepe: number | null;

  @Column("int", { name: "QUINQUE", nullable: true })
  quinque: number | null;

  @Column("float", {
    name: "SUBCALCU",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  subcalcu: number | null;

  @Column("float", { name: "SUBAJUS", nullable: true, precision: 11, scale: 2 })
  subajus: number | null;

  @Column("float", {
    name: "LIVRENEGO",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  livrenego: number | null;

  @Column("int", { name: "IDG009", nullable: true })
  idg009: number | null;

  @Column("text", { name: "ADDIGREJ", nullable: true })
  addigrej: string | null;

  @Column("float", {
    name: "BASEREGI",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  baseregi: number | null;

  @Column("float", {
    name: "ADICONJU",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  adiconju: number | null;

  @Column("float", {
    name: "INCEMISSI",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  incemissi: number | null;

  @Column("int", { name: "IDE036", nullable: true })
  ide036: number | null;

  @Column("float", {
    name: "SALDOATUAL",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  saldoatual: number | null;

  @Column("float", {
    name: "SALDOPROVI",
    nullable: true,
    precision: 11,
    scale: 2,
    default: () => "'0.00'",
  })
  saldoprovi: number | null;

  @Column("date", { name: "DTINICIAL", nullable: true })
  dtinicial: string | null;

  @Column("tinyint", { name: "PGMTSEDE", nullable: true, width: 1 })
  pgmtsede: boolean | null;

  @OneToMany(() => A001, (a001) => a001.idg02)
  as: A001[];

  @OneToMany(() => E041, (e041) => e041.idg0)
  es: E041[];

  @ManyToOne(() => G004, (g004) => g004.gs4, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "PECULIO", referencedColumnName: "idg004" }])
  peculio2: G004;

  @ManyToOne(() => G005, (g005) => g005.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG005", referencedColumnName: "idg005" }])
  idg0: G005;

  @OneToMany(() => G015, (g015) => g015.idg0)
  gs: G015[];

  @OneToMany(() => G004, (g004) => g004.idg0)
  gs2: G004[];

  @ManyToOne(() => E002, (e002) => e002.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE002", referencedColumnName: "ide002" }])
  ide0: E002;

  @OneToMany(() => G001, (g001) => g001.idg02)
  gs3: G001[];

  @OneToMany(() => E019, (e019) => e019.idg02)
  es2: E019[];

  @ManyToOne(() => E036, (e036) => e036.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE036", referencedColumnName: "ide036" }])
  ide02: E036;

  @OneToMany(() => E037, (e037) => e037.idg02)
  es3: E037[];

  @OneToMany(() => E038, (e038) => e038.idg02)
  es4: E038[];

  @OneToMany(() => G003, (g003) => g003.idg02)
  gs4: G003[];
}
