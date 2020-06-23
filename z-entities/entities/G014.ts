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
import { G030 } from "./G030";
import { E002 } from "./E002";
import { E004 } from "./E004";
import { E011 } from "./E011";
import { E023 } from "./E023";
import { G004 } from "./G004";
import { G005 } from "./G005";

@Index("G014_E001_FK", ["ide001"], {})
@Index("G014_E002_FK", ["ide002"], {})
@Index("G014_E004_FK", ["ide004"], {})
@Index("G014_E011_FK_idx", ["ide011"], {})
@Index("G014_E023_FK_idx", ["ide023"], {})
@Index("G014_G004_FK_idx", ["idg004"], {})
@Index("G014_G005_FK", ["idg005"], {})
@Index("G014_G035_FK_idx", ["idg035"], {})
@Index("MATRICUL_UNIQUE", ["matricul"], { unique: true })
@Entity("G014", { schema: "metodista_local" })
export class G014 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG014" })
  idg014: number;

  @Column("text", { name: "FOTO", nullable: true })
  foto: string | null;

  @Column("varchar", {
    name: "MATRICUL",
    nullable: true,
    unique: true,
    length: 14,
  })
  matricul: string | null;

  @Column("varchar", { name: "NOME", length: 100 })
  nome: string;

  @Column("varchar", { name: "SEXO", nullable: true, length: 1 })
  sexo: string | null;

  @Column("date", { name: "DATANASC", nullable: true })
  datanasc: string | null;

  @Column("int", { name: "IDE004", nullable: true })
  ide004: number | null;

  @Column("varchar", { name: "NECESSID", nullable: true, length: 1 })
  necessid: string | null;

  @Column("varchar", { name: "CPF", nullable: true, length: 14 })
  cpf: string | null;

  @Column("varchar", { name: "RG", nullable: true, length: 20 })
  rg: string | null;

  @Column("varchar", { name: "OREMISSO", nullable: true, length: 60 })
  oremisso: string | null;

  @Column("date", { name: "DTEMISSA", nullable: true })
  dtemissa: string | null;

  @Column("varchar", { name: "NASCIONA", nullable: true, length: 20 })
  nasciona: string | null;

  @Column("varchar", { name: "NATURALI", nullable: true, length: 60 })
  naturali: string | null;

  @Column("varchar", { name: "CEP", nullable: true, length: 9 })
  cep: string | null;

  @Column("varchar", { name: "LOGRADOU", nullable: true, length: 45 })
  logradou: string | null;

  @Column("int", { name: "NUMERO", nullable: true })
  numero: number | null;

  @Column("varchar", { name: "COMPLEM", nullable: true, length: 60 })
  complem: string | null;

  @Column("varchar", { name: "BAIRRO", nullable: true, length: 60 })
  bairro: string | null;

  @Column("varchar", { name: "CIDADE", nullable: true, length: 60 })
  cidade: string | null;

  @Column("varchar", { name: "ESTADO", nullable: true, length: 2 })
  estado: string | null;

  @Column("varchar", { name: "TELEFONR", nullable: true, length: 20 })
  telefonr: string | null;

  @Column("varchar", { name: "TELEFONC", nullable: true, length: 20 })
  telefonc: string | null;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 60 })
  email: string | null;

  @Column("int", { name: "IDE002", nullable: true })
  ide002: number | null;

  @Column("int", { name: "IDG035", nullable: true })
  idg035: number | null;

  @Column("int", { name: "IDE001", nullable: true })
  ide001: number | null;

  @Column("date", { name: "DTADMIS", nullable: true })
  dtadmis: string | null;

  @Column("date", { name: "DTDEMIS", nullable: true })
  dtdemis: string | null;

  @Column("decimal", {
    name: "SALARIO",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  salario: string | null;

  @Column("varchar", { name: "HRMES", nullable: true, length: 6 })
  hrmes: string | null;

  @Column("varchar", { name: "HRSEMANA", nullable: true, length: 3 })
  hrsemana: string | null;

  @Column("varchar", { name: "CONTACON", nullable: true, length: 60 })
  contacon: string | null;

  @Column("varchar", { name: "CENTRCUS", nullable: true, length: 60 })
  centrcus: string | null;

  @Column("varchar", { name: "TPCONTAS", nullable: true, length: 20 })
  tpcontas: string | null;

  @Column("int", { name: "IDG005", nullable: true })
  idg005: number | null;

  @Column("int", { name: "IDE011", nullable: true })
  ide011: number | null;

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

  @Column("int", { name: "NRAGENCI", nullable: true })
  nragenci: number | null;

  @Column("varchar", {
    name: "DVAGENCI",
    nullable: true,
    length: 2,
    default: () => "'0'",
  })
  dvagenci: string | null;

  @Column("varchar", { name: "NRCONTA", nullable: true, length: 12 })
  nrconta: string | null;

  @Column("varchar", {
    name: "DVCONTA",
    nullable: true,
    length: 2,
    default: () => "'0'",
  })
  dvconta: string | null;

  @Column("int", { name: "IDE023", nullable: true })
  ide023: number | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @OneToMany(() => A001, (a001) => a001.idg09)
  as: A001[];

  @OneToMany(() => E041, (e041) => e041.idg03)
  es: E041[];

  @OneToMany(() => G030, (g030) => g030.idg03)
  gs: G030[];

  @ManyToOne(() => E002, (e002) => e002.gs3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE002", referencedColumnName: "ide002" }])
  ide0: E002;

  @ManyToOne(() => E004, (e004) => e004.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE004", referencedColumnName: "ide004" }])
  ide02: E004;

  @ManyToOne(() => E011, (e011) => e011.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE011", referencedColumnName: "ide011" }])
  ide03: E011;

  @ManyToOne(() => E023, (e023) => e023.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE023", referencedColumnName: "ide023" }])
  ide04: E023;

  @ManyToOne(() => G004, (g004) => g004.g19, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg0: G004;

  @ManyToOne(() => G005, (g005) => g005.gs4, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG005", referencedColumnName: "idg005" }])
  idg02: G005;
}
