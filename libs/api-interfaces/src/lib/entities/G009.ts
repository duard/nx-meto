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
import { E024 } from "./E024";
import { E039 } from "./E039";
import { G001 } from "./G001";
import { E014 } from "./E014";
import { E001 } from "./E001";
import { E002 } from "./E002";
import { E004 } from "./E004";
import { E008 } from "./E008";
import { E010 } from "./E010";
import { G004 } from "./G004";
import { G043 } from "./G043";
import { L001 } from "./L001";
import { G030 } from "./G030";
import { G037 } from "./G037";

@Index("FK_G009IDE001_IDE001_idx", ["ide001"], {})
@Index("FK_G009IDE002_IDE002_idx", ["ide002"], {})
@Index("FK_G009IDE004_IDE004_idx", ["ide004"], {})
@Index("FK_G009IDE008_IDE008_idx", ["ide008"], {})
@Index("FK_G009IDE010_IDE010_idx", ["ide010"], {})
@Index("FK_G009IDG009_IDG004_idx", ["idg004"], {})
@Entity("G009", { schema: "metodista_local" })
export class G009 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG009" })
  idg009: number;

  @Column("varchar", { name: "CPF", nullable: true, length: 14 })
  cpf: string | null;

  @Column("varchar", { name: "NOME", nullable: true, length: 100 })
  nome: string | null;

  @Column("date", { name: "DATANASC", nullable: true })
  datanasc: string | null;

  @Column("varchar", { name: "RG", nullable: true, length: 20 })
  rg: string | null;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 100 })
  email: string | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @Column("varchar", { name: "CEP", nullable: true, length: 9 })
  cep: string | null;

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
    default: () => "'B'",
  })
  sts: string | null;

  @Column("int", { name: "IDE008", nullable: true })
  ide008: number | null;

  @Column("text", { name: "TELEFONE", nullable: true })
  telefone: string | null;

  @Column("int", { name: "IDE004", nullable: true })
  ide004: number | null;

  @Column("int", { name: "IDE002", nullable: true })
  ide002: number | null;

  @Column("varchar", { name: "BATIZADO", nullable: true, length: 1 })
  batizado: string | null;

  @Column("date", { name: "DATABAT", nullable: true })
  databat: string | null;

  @Column("varchar", { name: "CONCRIST", nullable: true, length: 1 })
  concrist: string | null;

  @Column("varchar", { name: "NOMECONJ", nullable: true, length: 60 })
  nomeconj: string | null;

  @Column("varchar", { name: "MATRICUL", nullable: true, length: 1 })
  matricul: string | null;

  @Column("int", { name: "IDE001", nullable: true })
  ide001: number | null;

  @Column("varchar", { name: "VEIODENO", nullable: true, length: 1 })
  veiodeno: string | null;

  @Column("varchar", { name: "NOMEDENO", nullable: true, length: 60 })
  nomedeno: string | null;

  @Column("int", { name: "IDE010", nullable: true })
  ide010: number | null;

  @Column("varchar", { name: "ALGUEMIG", nullable: true, length: 1 })
  alguemig: string | null;

  @Column("varchar", { name: "OBSERVAC", nullable: true, length: 500 })
  observac: string | null;

  @Column("text", { name: "REUNIOES", nullable: true })
  reunioes: string | null;

  @Column("text", { name: "FOTO", nullable: true })
  foto: string | null;

  @Column("text", { name: "PASS", nullable: true })
  pass: string | null;

  @Column("int", { name: "IDG031", nullable: true, default: () => "'2'" })
  idg031: number | null;

  @Column("varchar", { name: "NATURALI", nullable: true, length: 60 })
  naturali: string | null;

  @Column("varchar", { name: "NASCIONAL", nullable: true, length: 60 })
  nascional: string | null;

  @Column("varchar", { name: "CERTNASC", nullable: true, length: 60 })
  certnasc: string | null;

  @Column("varchar", { name: "ELEITOR", nullable: true, length: 60 })
  eleitor: string | null;

  @Column("varchar", { name: "ORGAOEMI", nullable: true, length: 60 })
  orgaoemi: string | null;

  @Column("date", { name: "DTEMISSA", nullable: true })
  dtemissa: string | null;

  @Column("varchar", { name: "NOMEMAE", nullable: true, length: 60 })
  nomemae: string | null;

  @Column("varchar", { name: "NOMEPAI", nullable: true, length: 60 })
  nomepai: string | null;

  @Column("text", { name: "REDESOCI", nullable: true })
  redesoci: string | null;

  @Column("text", { name: "ENDERECR", nullable: true })
  enderecr: string | null;

  @Column("text", { name: "ENDERECC", nullable: true })
  enderecc: string | null;

  @Column("varchar", { name: "SEXO", nullable: true, length: 1 })
  sexo: string | null;

  @Column("varchar", { name: "RESETASENHA", nullable: true, length: 1 })
  resetasenha: string | null;

  @Column("varchar", { name: "IGREJAMAE", nullable: true, length: 1 })
  igrejamae: string | null;

  @Column("varchar", { name: "NOMECONGRE", nullable: true, length: 60 })
  nomecongre: string | null;

  @Column("int", { name: "ROL", nullable: true })
  rol: number | null;

  @Column("varchar", { name: "OBSERVACAO", nullable: true, length: 500 })
  observacao: string | null;

  @OneToMany(() => A001, (a001) => a001.idg07)
  as: A001[];

  @OneToMany(() => A001, (a001) => a001.user2)
  a0s: A001[];

  @OneToMany(() => E024, (e024) => e024.idg02)
  es: E024[];

  @OneToMany(() => E039, (e039) => e039.idg0)
  es2: E039[];

  @OneToMany(() => G001, (g001) => g001.idg0)
  gs: G001[];

  @OneToMany(() => E014, (e014) => e014.idg02)
  es3: E014[];

  @ManyToOne(() => E001, (e001) => e001.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE001", referencedColumnName: "ide001" }])
  ide0: E001;

  @ManyToOne(() => E002, (e002) => e002.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE002", referencedColumnName: "ide002" }])
  ide02: E002;

  @ManyToOne(() => E004, (e004) => e004.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE004", referencedColumnName: "ide004" }])
  ide03: E004;

  @ManyToOne(() => E008, (e008) => e008.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE008", referencedColumnName: "ide008" }])
  ide04: E008;

  @ManyToOne(() => E010, (e010) => e010.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE010", referencedColumnName: "ide010" }])
  ide05: E010;

  @ManyToOne(() => G004, (g004) => g004.gs8, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg0: G004;

  @OneToMany(() => G043, (g043) => g043.idg0)
  gs2: G043[];

  @OneToMany(() => L001, (l001) => l001.user2)
  ls: L001[];

  @OneToMany(() => G030, (g030) => g030.idg04)
  gs3: G030[];

  @OneToMany(() => G037, (g037) => g037.idg0)
  gs4: G037[];
}
