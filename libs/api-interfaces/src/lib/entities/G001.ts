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
import { G009 } from "./G009";
import { G003 } from "./G003";
import { G007 } from "./G007";
import { G041 } from "./G041";
import { G042 } from "./G042";
import { G044 } from "./G044";
import { G045 } from "./G045";
import { G002 } from "./G002";
import { G004 } from "./G004";

@Index("FK_G001IDG009_IDG009_idx", ["idg009"], {})
@Index("FK_IDG002_IDG002_idx", ["idg002"], {})
@Entity("G001", { schema: "metodista_local" })
export class G001 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG001" })
  idg001: number;

  @Column("varchar", { name: "NOME", nullable: true, length: 60 })
  nome: string | null;

  @Column("varchar", { name: "ABREV", nullable: true, length: 45 })
  abrev: string | null;

  @Column("int", { name: "IDG002", nullable: true })
  idg002: number | null;

  @Column("varchar", { name: "CNPJ", nullable: true, length: 18 })
  cnpj: string | null;

  @Column("varchar", { name: "TELEFONE", nullable: true, length: 20 })
  telefone: string | null;

  @Column("varchar", { name: "EMAILGI", nullable: true, length: 60 })
  emailgi: string | null;

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

  @Column("int", { name: "IDG009", nullable: true })
  idg009: number | null;

  @OneToMany(() => A001, (a001) => a001.idg0)
  as: A001[];

  @ManyToOne(() => G009, (g009) => g009.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG009", referencedColumnName: "idg009" }])
  idg0: G009;

  @OneToMany(() => G003, (g003) => g003.idg0)
  gs: G003[];

  @OneToMany(() => G007, (g007) => g007.idg0)
  gs2: G007[];

  @OneToMany(() => G041, (g041) => g041.idg0)
  gs3: G041[];

  @OneToMany(() => G042, (g042) => g042.idg0)
  gs4: G042[];

  @OneToMany(() => G044, (g044) => g044.idg0)
  gs5: G044[];

  @OneToMany(() => G045, (g045) => g045.idg0)
  gs6: G045[];

  @ManyToOne(() => G002, (g002) => g002.gs3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG002", referencedColumnName: "idg002" }])
  idg02: G002;

  @OneToMany(() => G004, (g004) => g004.sede2)
  gs7: G004[];
}
