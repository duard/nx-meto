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
import { E025 } from "./E025";
import { E026 } from "./E026";
import { E027 } from "./E027";
import { E028 } from "./E028";
import { E029 } from "./E029";
import { E030 } from "./E030";
import { E033 } from "./E033";
import { G011 } from "./G011";

@Index("G013_E025_FK", ["stsbem"], {})
@Index("G013_E026_FK_idx", ["tpaquisi"], {})
@Index("G013_E027_FK_idx", ["natureza"], {})
@Index("G013_E028_FK_idx", ["ocupacao"], {})
@Index("G013_E029_FK_idx", ["explorac"], {})
@Index("G013_E030_FK_idx", ["tputiliz"], {})
@Index("G013_E033_FK_idx", ["segurado"], {})
@Index("G013_G011_FK", ["grupo"], {})
@Entity("G013", { schema: "metodista_local" })
export class G013 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG013" })
  idg013: number;

  @Column("int", { name: "GRUPO", nullable: true })
  grupo: number | null;

  @Column("int", {
    name: "IDG004",
    nullable: true,
    comment: "REFERENCIA A TABELA DE LOCAIS",
  })
  idg004: number | null;

  @Column("int", { name: "STSBEM", nullable: true })
  stsbem: number | null;

  @Column("int", { name: "TPAQUISI", nullable: true })
  tpaquisi: number | null;

  @Column("date", { name: "DTAQUISI", nullable: true })
  dtaquisi: string | null;

  @Column("varchar", { name: "VALORAQU", nullable: true, length: 15 })
  valoraqu: string | null;

  @Column("varchar", { name: "VALORMER", nullable: true, length: 15 })
  valormer: string | null;

  @Column("varchar", { name: "VALORALU", nullable: true, length: 15 })
  valoralu: string | null;

  @Column("date", { name: "DTULAVAL", nullable: true })
  dtulaval: string | null;

  @Column("varchar", { name: "CLASSIFI", nullable: true, length: 60 })
  classifi: string | null;

  @Column("int", { name: "NATUREZA", nullable: true })
  natureza: number | null;

  @Column("int", { name: "OCUPACAO", nullable: true })
  ocupacao: number | null;

  @Column("int", { name: "TPUTILIZ", nullable: true })
  tputiliz: number | null;

  @Column("int", { name: "EXPLORAC", nullable: true })
  explorac: number | null;

  @Column("int", { name: "SEGURADO", nullable: true })
  segurado: number | null;

  @Column("date", { name: "CREATED", nullable: true })
  created: string | null;

  @Column("date", { name: "UPDATED", nullable: true })
  updated: string | null;

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

  @Column("text", { name: "CARACTERISTICAS", nullable: true })
  caracteristicas: string | null;

  @OneToMany(() => A001, (a001) => a001.idg08)
  as: A001[];

  @ManyToOne(() => E025, (e025) => e025.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "STSBEM", referencedColumnName: "ide025" }])
  stsbem2: E025;

  @ManyToOne(() => E026, (e026) => e026.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "TPAQUISI", referencedColumnName: "ide026" }])
  tpaquisi2: E026;

  @ManyToOne(() => E027, (e027) => e027.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "NATUREZA", referencedColumnName: "ide027" }])
  natureza2: E027;

  @ManyToOne(() => E028, (e028) => e028.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "OCUPACAO", referencedColumnName: "ide028" }])
  ocupacao2: E028;

  @ManyToOne(() => E029, (e029) => e029.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "EXPLORAC", referencedColumnName: "ide029" }])
  explorac2: E029;

  @ManyToOne(() => E030, (e030) => e030.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "TPUTILIZ", referencedColumnName: "ide030" }])
  tputiliz2: E030;

  @ManyToOne(() => E033, (e033) => e033.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "SEGURADO", referencedColumnName: "ide033" }])
  segurado2: E033;

  @ManyToOne(() => G011, (g011) => g011.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "GRUPO", referencedColumnName: "idg011" }])
  grupo2: G011;
}
