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
import { E011 } from "./E011";
import { G005 } from "./G005";
import { G030 } from "./G030";
import { E036 } from "./E036";
import { G016 } from "./G016";

@Index("CNPJ_UNIQUE", ["cpfcnpj"], { unique: true })
@Index("fk_G008_G004_idx", ["idg004"], {})
@Index("FK_G008IDE011_IDE011_idx", ["ide011"], {})
@Index("FK_G008IDG005_IDG005_idx", ["idg005"], {})
@Entity("G008", { schema: "metodista_local" })
export class G008 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG008" })
  idg008: number;

  @Column("varchar", {
    name: "CPFCNPJ",
    nullable: true,
    unique: true,
    length: 18,
  })
  cpfcnpj: string | null;

  @Column("varchar", { name: "INSCEST", nullable: true, length: 60 })
  inscest: string | null;

  @Column("varchar", { name: "INSCMUN", nullable: true, length: 60 })
  inscmun: string | null;

  @Column("varchar", { name: "RAZAOSOC", nullable: true, length: 60 })
  razaosoc: string | null;

  @Column("varchar", { name: "NOME", nullable: true, length: 60 })
  nome: string | null;

  @Column("varchar", { name: "TELEFONE", nullable: true, length: 20 })
  telefone: string | null;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 60 })
  email: string | null;

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

  @Column("int", { name: "IDG005", nullable: true })
  idg005: number | null;

  @Column("int", { name: "NRAGENCI", nullable: true })
  nragenci: number | null;

  @Column("int", { name: "DVAGENCI", nullable: true })
  dvagenci: number | null;

  @Column("varchar", { name: "NRCONTA", nullable: true, length: 12 })
  nrconta: string | null;

  @Column("varchar", { name: "DVCONTA", nullable: true, length: 2 })
  dvconta: string | null;

  @Column("int", { name: "IDE011", nullable: true })
  ide011: number | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 20 })
  tipo: string | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @OneToMany(() => A001, (a001) => a001.idg06)
  as: A001[];

  @ManyToOne(() => G004, (g004) => g004.gs7, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg0: G004;

  @ManyToOne(() => E011, (e011) => e011.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE011", referencedColumnName: "ide011" }])
  ide0: E011;

  @ManyToOne(() => G005, (g005) => g005.gs3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG005", referencedColumnName: "idg005" }])
  idg02: G005;

  @OneToMany(() => G030, (g030) => g030.idg02)
  gs: G030[];

  @OneToMany(() => E036, (e036) => e036.idg02)
  es: E036[];

  @OneToMany(() => G016, (g016) => g016.idg02)
  gs2: G016[];
}
