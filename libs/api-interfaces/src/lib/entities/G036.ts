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
import { G039 } from "./G039";
import { G026 } from "./G026";

@Index("FK_CONTA", ["idg006"], {})
@Index("FK_MEMBROS", ["idg009"], {})
@Index("FK_TITULOS_RECEBER", ["idg026"], {})
@Entity("G036", { schema: "metodista_local" })
export class G036 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG036" })
  idg036: number;

  @Column("int", { name: "IDG026", default: () => "'0'" })
  idg026: number;

  @Column("int", { name: "IDG009", nullable: true })
  idg009: number | null;

  @Column("int", { name: "IDG006", default: () => "'0'" })
  idg006: number;

  @Column("decimal", {
    name: "VALOR",
    precision: 11,
    scale: 2,
    default: () => "'0.00'",
  })
  valor: string;

  @Column("decimal", {
    name: "JUROS",
    nullable: true,
    precision: 11,
    scale: 2,
    default: () => "'0.00'",
  })
  juros: string | null;

  @Column("decimal", {
    name: "MULTAS",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  multas: string | null;

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

  @Column("varchar", { name: "STS", length: 1, default: () => "'A'" })
  sts: string;

  @Column("timestamp", { name: "DATA", default: () => "CURRENT_TIMESTAMP" })
  data: Date;

  @ManyToOne(() => G006, (g006) => g006.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG006", referencedColumnName: "idg006" }])
  idg0: G006;

  @OneToMany(() => G039, (g039) => g039.idg06)
  gs: G039[];

  @OneToMany(() => G039, (g039) => g039.idg08)
  g0s: G039[];

  @ManyToOne(() => G026, (g026) => g026.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG026", referencedColumnName: "idg026" }])
  idg02: G026;
}
