import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G002 } from "./G002";

@Index("FK_G002_G015", ["idg002"], {})
@Entity("G015", { schema: "metodista_local" })
export class G015 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG015" })
  idg015: number;

  @Column("varchar", { name: "NOMEDEPE", nullable: true, length: 60 })
  nomedepe: string | null;

  @Column("varchar", { name: "CPFDEPEN", nullable: true, length: 15 })
  cpfdepen: string | null;

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

  @Column("varchar", { name: "GRAUPARE", nullable: true, length: 60 })
  graupare: string | null;

  @Column("date", { name: "NASCDEPE", nullable: true })
  nascdepe: string | null;

  @Column("varchar", { name: "SEXODEPE", nullable: true, length: 10 })
  sexodepe: string | null;

  @Column("varchar", { name: "ESTUDANT", nullable: true, length: 3 })
  estudant: string | null;

  @Column("varchar", { name: "NECEESPE", nullable: true, length: 3 })
  neceespe: string | null;

  @Column("varchar", { name: "DEPENDIR", nullable: true, length: 3 })
  dependir: string | null;

  @Column("varchar", { name: "ATVDREMU", nullable: true, length: 3 })
  atvdremu: string | null;

  @Column("int", { name: "IDG002", nullable: true })
  idg002: number | null;

  @ManyToOne(() => G002, (g002) => g002.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG002", referencedColumnName: "idg002" }])
  idg0: G002;
}
