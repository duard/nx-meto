import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G031 } from "./G031";
import { G032 } from "./G032";

@Index("FK_GRUPOS_USUARIOS", ["idg031"], {})
@Index("FK_MENU", ["idg032"], {})
@Entity("G033", { schema: "metodista_local" })
export class G033 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG033" })
  idg033: number;

  @Column("int", { name: "IDG031" })
  idg031: number;

  @Column("int", { name: "IDG032" })
  idg032: number;

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

  @ManyToOne(() => G031, (g031) => g031.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG031", referencedColumnName: "idg031" }])
  idg0: G031;

  @ManyToOne(() => G032, (g032) => g032.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG032", referencedColumnName: "idg032" }])
  idg02: G032;
}
