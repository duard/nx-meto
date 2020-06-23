import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E037 } from "./E037";
import { G036 } from "./G036";
import { E015 } from "./E015";
import { G024 } from "./G024";
import { E016 } from "./E016";
import { G005 } from "./G005";
import { G039 } from "./G039";
import { G037 } from "./G037";
import { S003 } from "./S003";
import { G004 } from "./G004";

@Index("FK_G006IDG005_IDG005_idx", ["idg005"], {})
@Index("G006_G004_FK", ["idg004"], {})
@Entity("G006", { schema: "metodista_local" })
export class G006 {
  @Column("int", { name: "IDG005", nullable: true })
  idg005: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "IDG006" })
  idg006: number;

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

  @Column("varchar", { name: "MUNICIPI", nullable: true, length: 60 })
  municipi: string | null;

  @Column("varchar", { name: "CIDADE", nullable: true, length: 60 })
  cidade: string | null;

  @Column("varchar", { name: "ESTADO", nullable: true, length: 2 })
  estado: string | null;

  @Column("varchar", { name: "GERENTEC", nullable: true, length: 60 })
  gerentec: string | null;

  @Column("varchar", { name: "TELGER", nullable: true, length: 45 })
  telger: string | null;

  @Column("varchar", { name: "EMAILGER", nullable: true, length: 100 })
  emailger: string | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

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

  @Column("varchar", { name: "TIPOCONTA", nullable: true, length: 15 })
  tipoconta: string | null;

  @Column("varchar", { name: "DESCRICA", nullable: true, length: 100 })
  descrica: string | null;

  @Column("varchar", { name: "CONTABIL", nullable: true, length: 20 })
  contabil: string | null;

  @OneToMany(() => E037, (e037) => e037.conta2)
  es: E037[];

  @OneToMany(() => G036, (g036) => g036.idg0)
  gs: G036[];

  @OneToMany(() => E015, (e015) => e015.idg0)
  es2: E015[];

  @OneToMany(() => G024, (g024) => g024.destino2)
  gs2: G024[];

  @OneToMany(() => E016, (e016) => e016.idg0)
  es3: E016[];

  @ManyToOne(() => G005, (g005) => g005.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG005", referencedColumnName: "idg005" }])
  idg0: G005;

  @OneToMany(() => G039, (g039) => g039.idg0)
  gs3: G039[];

  @OneToMany(() => G037, (g037) => g037.idg02)
  gs4: G037[];

  @OneToMany(() => G024, (g024) => g024.origem2)
  g0s: G024[];

  @OneToMany(() => S003, (s003) => s003.idg0)
  s: S003[];

  @ManyToOne(() => G004, (g004) => g004.g18, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg02: G004;
}
