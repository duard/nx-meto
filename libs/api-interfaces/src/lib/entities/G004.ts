import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E014 } from "./E014";
import { A001 } from "./A001";
import { G025 } from "./G025";
import { G026 } from "./G026";
import { G016 } from "./G016";
import { E043 } from "./E043";
import { G002 } from "./G002";
import { LocaisDescontos } from "./LocaisDescontos";
import { G007 } from "./G007";
import { G008 } from "./G008";
import { G009 } from "./G009";
import { G023 } from "./G023";
import { G030 } from "./G030";
import { G034 } from "./G034";
import { G041 } from "./G041";
import { G042 } from "./G042";
import { G044 } from "./G044";
import { G045 } from "./G045";
import { G049 } from "./G049";
import { E005 } from "./E005";
import { G003 } from "./G003";
import { G022 } from "./G022";
import { E019 } from "./E019";
import { E024 } from "./E024";
import { E037 } from "./E037";
import { G019 } from "./G019";
import { G001 } from "./G001";
import { G006 } from "./G006";
import { G014 } from "./G014";

@Index("FK_G002IDG002_IDG002_idx", ["idg002"], {})
@Index("FK_G004_G019_idx", ["idg019"], {})
@Index("FK_G004_G021_idx", ["idg021"], {})
@Index("FK_G004IDG004FK_IDG004", ["idg004Fk"], {})
@Index("FK_IDE005_IDE005_idx", ["ide005"], {})
@Index("FK_IDG002_IDG002_idx", ["idg002"], {})
@Index("FK_IDG003_IDG003_idx", ["idg003"], {})
@Index("FK_RUBRICACOTAREG_IDG019_idx", ["rubricacotareg"], {})
@Index("FK_RUBRICAPEC_IDG019_idx", ["rubricapec"], {})
@Index("FK_SEDE_IDG001_idx", ["sede"], {})
@Index("G004_UN", ["cnpj"], { unique: true })
@Entity("G004", { schema: "metodista_local" })
export class G004 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG004" })
  idg004: number;

  @Column("int", { name: "IDG003", nullable: true })
  idg003: number | null;

  @Column("varchar", { name: "NOME", nullable: true, length: 60 })
  nome: string | null;

  @Column("varchar", { name: "CNPJ", nullable: true, unique: true, length: 18 })
  cnpj: string | null;

  @Column("date", { name: "FUNDACAO", nullable: true })
  fundacao: string | null;

  @Column("int", { name: "IDE005", nullable: true })
  ide005: number | null;

  @Column("varchar", { name: "OBSERVAC", nullable: true, length: 500 })
  observac: string | null;

  @Column("varchar", { name: "EMAILINS", nullable: true, length: 60 })
  emailins: string | null;

  @Column("varchar", { name: "SITE", nullable: true, length: 60 })
  site: string | null;

  @Column("varchar", { name: "FACEBOOK", nullable: true, length: 60 })
  facebook: string | null;

  @Column("varchar", { name: "TWITTER", nullable: true, length: 60 })
  twitter: string | null;

  @Column("varchar", { name: "YOUTUBE", nullable: true, length: 60 })
  youtube: string | null;

  @Column("varchar", { name: "INSTAG", nullable: true, length: 60 })
  instag: string | null;

  @Column("varchar", { name: "TEL1", nullable: true, length: 45 })
  tel1: string | null;

  @Column("varchar", { name: "TEL2", nullable: true, length: 45 })
  tel2: string | null;

  @Column("varchar", { name: "TEL3", nullable: true, length: 45 })
  tel3: string | null;

  @Column("varchar", { name: "TEL4", nullable: true, length: 45 })
  tel4: string | null;

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

  @Column("timestamp", {
    name: "DESCONTO_DT",
    default: () => "'1970-01-01 03:00:01'",
  })
  descontoDt: Date;

  @Column("decimal", {
    name: "DESCONTO_PERCENTUAL",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  descontoPercentual: string | null;

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

  @Column("varchar", { name: "HISTORIA", nullable: true, length: 60000 })
  historia: string | null;

  @Column("int", { name: "IDG002", nullable: true })
  idg002: number | null;

  @Column("varchar", { name: "EMAILPAS", nullable: true, length: 60 })
  emailpas: string | null;

  @Column("varchar", { name: "EMAILSEC", nullable: true, length: 60 })
  emailsec: string | null;

  @Column("int", { name: "IDG004FK", nullable: true })
  idg004Fk: number | null;

  @Column("int", { name: "SEDE", nullable: true })
  sede: number | null;

  @Column("int", { name: "IDG019", nullable: true })
  idg019: number | null;

  @Column("int", { name: "IDG021", nullable: true })
  idg021: number | null;

  @Column("varchar", { name: "RAZAOSOCIAL", nullable: true, length: 100 })
  razaosocial: string | null;

  @Column("int", { name: "RUBRICAPEC", nullable: true })
  rubricapec: number | null;

  @Column("int", { name: "RUBRICACOTAREG", nullable: true })
  rubricacotareg: number | null;

  @OneToMany(() => E014, (e014) => e014.idg0)
  es: E014[];

  @OneToMany(() => A001, (a001) => a001.idg04)
  as: A001[];

  @OneToMany(() => G025, (g025) => g025.portador2)
  gs: G025[];

  @OneToMany(() => G026, (g026) => g026.portador2)
  gs2: G026[];

  @OneToMany(() => G016, (g016) => g016.idg0)
  gs3: G016[];

  @OneToMany(() => E043, (e043) => e043.local2)
  es2: E043[];

  @OneToMany(() => G002, (g002) => g002.peculio2)
  gs4: G002[];

  @ManyToOne(() => G002, (g002) => g002.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG002", referencedColumnName: "idg002" }])
  idg0: G002;

  @OneToMany(() => LocaisDescontos, (locaisDescontos) => locaisDescontos.g0)
  locaisDescontos: LocaisDescontos[];

  @ManyToOne(() => G004, (g004) => g004.gs5, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004FK", referencedColumnName: "idg004" }])
  idg004Fk2: G004;

  @OneToMany(() => G004, (g004) => g004.idg004Fk2)
  gs5: G004[];

  @OneToMany(() => G007, (g007) => g007.idg03)
  gs6: G007[];

  @OneToMany(() => G008, (g008) => g008.idg0)
  gs7: G008[];

  @OneToMany(() => G009, (g009) => g009.idg0)
  gs8: G009[];

  @OneToMany(() => G023, (g023) => g023.idg0)
  gs9: G023[];

  @OneToMany(() => G030, (g030) => g030.idg0)
  g10: G030[];

  @OneToMany(() => G034, (g034) => g034.local2)
  g11: G034[];

  @OneToMany(() => G041, (g041) => g041.idg03)
  g12: G041[];

  @OneToMany(() => G042, (g042) => g042.idg03)
  g13: G042[];

  @OneToMany(() => G044, (g044) => g044.idg03)
  g14: G044[];

  @OneToMany(() => G045, (g045) => g045.idg03)
  g15: G045[];

  @OneToMany(() => G049, (g049) => g049.local2)
  g16: G049[];

  @ManyToOne(() => E005, (e005) => e005.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE005", referencedColumnName: "ide005" }])
  ide0: E005;

  @ManyToOne(() => G003, (g003) => g003.gs6, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG003", referencedColumnName: "idg003" }])
  idg02: G003;

  @OneToMany(() => G022, (g022) => g022.idg0)
  g17: G022[];

  @OneToMany(() => E019, (e019) => e019.idg0)
  es3: E019[];

  @OneToMany(() => E024, (e024) => e024.idg08)
  es4: E024[];

  @OneToMany(() => E037, (e037) => e037.idg0)
  es5: E037[];

  @ManyToOne(() => G019, (g019) => g019.gs8, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "RUBRICACOTAREG", referencedColumnName: "idg019" }])
  rubricacotareg2: G019;

  @ManyToOne(() => G019, (g019) => g019.g0s, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "RUBRICAPEC", referencedColumnName: "idg019" }])
  rubricapec2: G019;

  @ManyToOne(() => G001, (g001) => g001.gs7, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "SEDE", referencedColumnName: "idg001" }])
  sede2: G001;

  @OneToMany(() => G006, (g006) => g006.idg02)
  g18: G006[];

  @OneToMany(() => G014, (g014) => g014.idg0)
  g19: G014[];
}
