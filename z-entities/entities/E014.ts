import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E013 } from "./E013";
import { G004 } from "./G004";
import { G009 } from "./G009";

@Index("E014_E013_FK", ["ide013"], {})
@Index("E014_G004_FK", ["idg004"], {})
@Index("FK_G009", ["idg009"], {})
@Entity("E014", { schema: "metodista_local" })
export class E014 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE014" })
  ide014: number;

  @Column("int", { name: "IDG004" })
  idg004: number;

  @Column("int", { name: "IDE013" })
  ide013: number;

  @Column("text", { name: "PROCURAD", nullable: true })
  procurad: string | null;

  @Column("date", { name: "DTCONCLO", nullable: true })
  dtconclo: string | null;

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

  @ManyToOne(() => E013, (e013) => e013.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE013", referencedColumnName: "ide013" }])
  ide0: E013;

  @ManyToOne(() => G004, (g004) => g004.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg0: G004;

  @ManyToOne(() => G009, (g009) => g009.es3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG009", referencedColumnName: "idg009" }])
  idg02: G009;
}
