import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E001 } from "./E001";
import { E003 } from "./E003";
import { G007 } from "./G007";
import { G009 } from "./G009";
import { G040 } from "./G040";
import { G041 } from "./G041";
import { G042 } from "./G042";
import { G044 } from "./G044";
import { G045 } from "./G045";
import { E018 } from "./E018";
import { G004 } from "./G004";

@Index("FK_E024_E001_idx", ["ide001"], {})
@Index("FK_E024_E003_idx", ["ide003"], {})
@Index("FK_E024_G007_idx", ["idg007"], {})
@Index("FK_E024_G009_idx", ["idg009"], {})
@Index("FK_E024_G040_idx", ["idg040"], {})
@Index("FK_E024_G041_idx", ["idg041"], {})
@Index("FK_E024_G042_idx", ["idg042"], {})
@Index("FK_E024_G044_idx", ["idg044"], {})
@Index("FK_E024_G045_idx", ["idg045"], {})
@Index("FK_NOMEACAO_CLASSIFICAO", ["ide018"], {})
@Index("FK_NOMEACAO_LOCAL", ["idg004"], {})
@Entity("E024", { schema: "metodista_local" })
export class E024 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE024" })
  ide024: number;

  @Column("int", { name: "IDG009", nullable: true })
  idg009: number | null;

  @Column("int", { name: "IDE001", nullable: true })
  ide001: number | null;

  @Column("int", { name: "IDE003", nullable: true })
  ide003: number | null;

  @Column("date", { name: "DTINICIO", nullable: true })
  dtinicio: string | null;

  @Column("date", { name: "DTFIM", nullable: true })
  dtfim: string | null;

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

  @Column("int", { name: "IDG007", nullable: true })
  idg007: number | null;

  @Column("int", { name: "IDG040", nullable: true })
  idg040: number | null;

  @Column("int", { name: "IDG041", nullable: true })
  idg041: number | null;

  @Column("int", { name: "IDG042", nullable: true })
  idg042: number | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @Column("int", { name: "IDE018", nullable: true })
  ide018: number | null;

  @Column("varchar", { name: "AVALIADO", nullable: true, length: 3 })
  avaliado: string | null;

  @Column("int", { name: "IDG045", nullable: true })
  idg045: number | null;

  @Column("int", { name: "IDG044", nullable: true })
  idg044: number | null;

  @ManyToOne(() => E001, (e001) => e001.es2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE001", referencedColumnName: "ide001" }])
  ide0: E001;

  @ManyToOne(() => E003, (e003) => e003.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE003", referencedColumnName: "ide003" }])
  ide02: E003;

  @ManyToOne(() => G007, (g007) => g007.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG007", referencedColumnName: "idg007" }])
  idg0: G007;

  @ManyToOne(() => G009, (g009) => g009.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG009", referencedColumnName: "idg009" }])
  idg02: G009;

  @ManyToOne(() => G040, (g040) => g040.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG040", referencedColumnName: "idg040" }])
  idg03: G040;

  @ManyToOne(() => G041, (g041) => g041.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG041", referencedColumnName: "idg041" }])
  idg04: G041;

  @ManyToOne(() => G042, (g042) => g042.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG042", referencedColumnName: "idg042" }])
  idg05: G042;

  @ManyToOne(() => G044, (g044) => g044.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG044", referencedColumnName: "idg044" }])
  idg06: G044;

  @ManyToOne(() => G045, (g045) => g045.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG045", referencedColumnName: "idg045" }])
  idg07: G045;

  @ManyToOne(() => E018, (e018) => e018.es2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE018", referencedColumnName: "ide018" }])
  ide03: E018;

  @ManyToOne(() => G004, (g004) => g004.es4, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg08: G004;
}
