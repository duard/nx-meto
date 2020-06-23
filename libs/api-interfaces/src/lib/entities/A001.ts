import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G001 } from "./G001";
import { G002 } from "./G002";
import { G003 } from "./G003";
import { G004 } from "./G004";
import { G007 } from "./G007";
import { G008 } from "./G008";
import { G009 } from "./G009";
import { G013 } from "./G013";
import { G014 } from "./G014";
import { G016 } from "./G016";
import { G035 } from "./G035";
import { G040 } from "./G040";
import { G041 } from "./G041";
import { G042 } from "./G042";
import { G044 } from "./G044";
import { G045 } from "./G045";

@Index("FK_A001_G001_idx", ["idg001"], {})
@Index("FK_A001_G002_idx", ["idg002"], {})
@Index("FK_A001_G003_idx", ["idg003"], {})
@Index("FK_A001_G004_idx", ["idg004"], {})
@Index("FK_A001_G007_idx", ["idg007"], {})
@Index("FK_A001_G008_idx", ["idg008"], {})
@Index("FK_A001_G009_idx", ["idg009"], {})
@Index("FK_A001_G013_idx", ["idg013"], {})
@Index("FK_A001_G014_idx", ["idg014"], {})
@Index("FK_A001_G016_idx", ["idg016"], {})
@Index("FK_A001_G035_idx", ["idg035"], {})
@Index("FK_A001_G040_idx", ["idg040"], {})
@Index("FK_A001_G041_idx", ["idg041"], {})
@Index("FK_A001_G042_idx", ["idg042"], {})
@Index("FK_A001_G044_idx", ["idg044"], {})
@Index("FK_A001_G045_idx", ["idg045"], {})
@Index("FK_A001_USER_idx", ["user"], {})
@Entity("A001", { schema: "metodista_local" })
export class A001 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDA001" })
  ida001: number;

  @Column("varchar", { name: "URL", nullable: true, length: 500 })
  url: string | null;

  @Column("varchar", { name: "DESC", nullable: true, length: 100 })
  desc: string | null;

  @Column("date", { name: "DATA", nullable: true })
  data: string | null;

  @Column("int", { name: "IDG003", nullable: true })
  idg003: number | null;

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

  @Column("varchar", { name: "EXTENSAO", nullable: true, length: 5 })
  extensao: string | null;

  @Column("int", { name: "IDG009", nullable: true })
  idg009: number | null;

  @Column("int", { name: "IDG013", nullable: true })
  idg013: number | null;

  @Column("int", { name: "IDG035", nullable: true })
  idg035: number | null;

  @Column("int", { name: "IDG014", nullable: true })
  idg014: number | null;

  @Column("int", { name: "IDG008", nullable: true })
  idg008: number | null;

  @Column("int", { name: "IDG016", nullable: true })
  idg016: number | null;

  @Column("int", { name: "IDG040", nullable: true })
  idg040: number | null;

  @Column("int", { name: "IDG007", nullable: true })
  idg007: number | null;

  @Column("int", { name: "IDG002", nullable: true })
  idg002: number | null;

  @Column("int", { name: "IDG041", nullable: true })
  idg041: number | null;

  @Column("int", { name: "IDG042", nullable: true })
  idg042: number | null;

  @Column("int", { name: "IDG001", nullable: true })
  idg001: number | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @Column("int", { name: "USER", nullable: true })
  user: number | null;

  @Column("int", { name: "IDG044", nullable: true })
  idg044: number | null;

  @Column("int", { name: "IDG045", nullable: true })
  idg045: number | null;

  @ManyToOne(() => G001, (g001) => g001.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG001", referencedColumnName: "idg001" }])
  idg0: G001;

  @ManyToOne(() => G002, (g002) => g002.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG002", referencedColumnName: "idg002" }])
  idg02: G002;

  @ManyToOne(() => G003, (g003) => g003.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG003", referencedColumnName: "idg003" }])
  idg03: G003;

  @ManyToOne(() => G004, (g004) => g004.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg04: G004;

  @ManyToOne(() => G007, (g007) => g007.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG007", referencedColumnName: "idg007" }])
  idg05: G007;

  @ManyToOne(() => G008, (g008) => g008.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG008", referencedColumnName: "idg008" }])
  idg06: G008;

  @ManyToOne(() => G009, (g009) => g009.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG009", referencedColumnName: "idg009" }])
  idg07: G009;

  @ManyToOne(() => G013, (g013) => g013.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG013", referencedColumnName: "idg013" }])
  idg08: G013;

  @ManyToOne(() => G014, (g014) => g014.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG014", referencedColumnName: "idg014" }])
  idg09: G014;

  @ManyToOne(() => G016, (g016) => g016.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG016", referencedColumnName: "idg016" }])
  idg10: G016;

  @ManyToOne(() => G035, (g035) => g035.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG035", referencedColumnName: "idg035" }])
  idg11: G035;

  @ManyToOne(() => G040, (g040) => g040.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG040", referencedColumnName: "idg040" }])
  idg12: G040;

  @ManyToOne(() => G041, (g041) => g041.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG041", referencedColumnName: "idg041" }])
  idg13: G041;

  @ManyToOne(() => G042, (g042) => g042.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG042", referencedColumnName: "idg042" }])
  idg14: G042;

  @ManyToOne(() => G044, (g044) => g044.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG044", referencedColumnName: "idg044" }])
  idg15: G044;

  @ManyToOne(() => G045, (g045) => g045.as, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG045", referencedColumnName: "idg045" }])
  idg16: G045;

  @ManyToOne(() => G009, (g009) => g009.a0s, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "USER", referencedColumnName: "idg009" }])
  user2: G009;
}
