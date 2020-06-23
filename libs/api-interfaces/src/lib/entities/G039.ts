import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G006 } from "./G006";
import { G019 } from "./G019";
import { G021 } from "./G021";
import { G024 } from "./G024";
import { G034 } from "./G034";
import { G036 } from "./G036";
import { G047 } from "./G047";
import { G037 } from "./G037";
import { G030 } from "./G030";
import { E043 } from "./E043";

@Index("FK_G039_E022_idx", ["ide022"], {})
@Index("FK_G039_G006_idx", ["idg006"], {})
@Index("FK_G039_G019_idx", ["idg019"], {})
@Index("FK_G039_G021_idx", ["idg021"], {})
@Index("FK_G039_G024_idx", ["idg024"], {})
@Index("FK_G039_G034_idx", ["idg034"], {})
@Index("FK_G039_G036_idx", ["idg036"], {})
@Index("FK_MOVIMENTACAO_PAGAR_X_MOVIMENTACOES", ["idg037"], {})
@Index("G039_FK", ["ide043"], {})
@Entity("G039", { schema: "metodista_local" })
export class G039 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG039" })
  idg039: number;

  @Column("int", { name: "IDG006", nullable: true })
  idg006: number | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  tipo: string | null;

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

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

  @Column("int", { name: "IDE022", nullable: true })
  ide022: number | null;

  @Column("varchar", {
    name: "ORIGEM",
    nullable: true,
    length: 3,
    default: () => "'MAN'",
  })
  origem: string | null;

  @Column("date", { name: "DATA", nullable: true })
  data: string | null;

  @Column("int", { name: "IDG024", nullable: true })
  idg024: number | null;

  @Column("int", { name: "IDG019", nullable: true })
  idg019: number | null;

  @Column("int", { name: "IDG021", nullable: true })
  idg021: number | null;

  @Column("int", { name: "IDG036", nullable: true })
  idg036: number | null;

  @Column("int", { name: "IDG037", nullable: true })
  idg037: number | null;

  @Column("varchar", { name: "HISTORICO", nullable: true, length: 300 })
  historico: string | null;

  @Column("varchar", { name: "FCNAME", nullable: true, length: 60 })
  fcname: string | null;

  @Column("int", { name: "IDG034", nullable: true })
  idg034: number | null;

  @Column("varchar", { name: "FUNCAO", nullable: true, length: 255 })
  funcao: string | null;

  @Column("int", { name: "IDE043", nullable: true })
  ide043: number | null;

  @ManyToOne(() => G006, (g006) => g006.gs3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG006", referencedColumnName: "idg006" }])
  idg0: G006;

  @ManyToOne(() => G019, (g019) => g019.gs4, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG019", referencedColumnName: "idg019" }])
  idg02: G019;

  @ManyToOne(() => G021, (g021) => g021.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG021", referencedColumnName: "idg021" }])
  idg03: G021;

  @ManyToOne(() => G024, (g024) => g024.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG024", referencedColumnName: "idg024" }])
  idg04: G024;

  @ManyToOne(() => G034, (g034) => g034.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG034", referencedColumnName: "idg034" }])
  idg05: G034;

  @ManyToOne(() => G036, (g036) => g036.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG036", referencedColumnName: "idg036" }])
  idg06: G036;

  @OneToMany(() => G047, (g047) => g047.idg0)
  gs: G047[];

  @ManyToOne(() => G037, (g037) => g037.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG037", referencedColumnName: "idg037" }])
  idg07: G037;

  @ManyToOne(() => G036, (g036) => g036.g0s, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG036", referencedColumnName: "idg036" }])
  idg08: G036;

  @OneToMany(() => G030, (g030) => g030.idg05)
  gs2: G030[];

  @ManyToOne(() => E043, (e043) => e043.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE043", referencedColumnName: "ide043" }])
  ide0: E043;
}
