import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G006 } from "./G006";

@Index("FK_S003_G004_idx", ["idg004"], {})
@Index("FK_S003_G006_idx", ["idg006"], {})
@Entity("S003", { schema: "metodista_local" })
export class S003 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDS003" })
  ids003: number;

  @Column("int", { name: "IDG006", nullable: true })
  idg006: number | null;

  @Column("int", { name: "SEQUENCIAL", nullable: true })
  sequencial: number | null;

  @Column("int", { name: "VARIACAOCARTEIRA", nullable: true })
  variacaocarteira: number | null;

  @Column("int", { name: "CARTEIRA", nullable: true })
  carteira: number | null;

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

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @ManyToOne(() => G006, (g006) => g006.s, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG006", referencedColumnName: "idg006" }])
  idg0: G006;
}
