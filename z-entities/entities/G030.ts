import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E035 } from "./E035";
import { G004 } from "./G004";
import { G008 } from "./G008";
import { G014 } from "./G014";
import { G009 } from "./G009";
import { G039 } from "./G039";

@Index("FK_G030_E035_idx", ["ide035"], {})
@Index("fk_G030_G004_idx", ["idg004"], {})
@Index("FK_G030_G008_idx", ["idg008"], {})
@Index("FK_G030_G014_idx", ["idg014"], {})
@Index("FK_G030_G039_idx", ["idg039"], {})
@Index("FK_MEMBRO_VALORMEMBRO", ["idg009"], {})
@Entity("G030", { schema: "metodista_local" })
export class G030 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG030" })
  idg030: number;

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

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

  @Column("int", { name: "IDG039", nullable: true })
  idg039: number | null;

  @Column("int", { name: "IDG008", nullable: true })
  idg008: number | null;

  @Column("int", { name: "IDE035", nullable: true })
  ide035: number | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @Column("int", { name: "IDG014", nullable: true })
  idg014: number | null;

  @Column("date", { name: "DATA", nullable: true })
  data: string | null;

  @ManyToOne(() => E035, (e035) => e035.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE035", referencedColumnName: "ide035" }])
  ide0: E035;

  @ManyToOne(() => G004, (g004) => g004.g10, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg0: G004;

  @ManyToOne(() => G008, (g008) => g008.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG008", referencedColumnName: "idg008" }])
  idg02: G008;

  @ManyToOne(() => G014, (g014) => g014.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG014", referencedColumnName: "idg014" }])
  idg03: G014;

  @ManyToOne(() => G009, (g009) => g009.gs3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG009", referencedColumnName: "idg009" }])
  idg04: G009;

  @ManyToOne(() => G039, (g039) => g039.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG039", referencedColumnName: "idg039" }])
  idg05: G039;
}
