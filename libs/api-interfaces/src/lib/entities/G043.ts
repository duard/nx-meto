import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G009 } from "./G009";
import { G032 } from "./G032";

@Index("FK_G043_G009_idx", ["idg009"], {})
@Index("FK_G043_G032_idx", ["idg032"], {})
@Entity("G043", { schema: "metodista_local" })
export class G043 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG043", unsigned: true })
  idg043: number;

  @Column("int", { name: "IDG009", nullable: true })
  idg009: number | null;

  @Column("int", { name: "IDG032", nullable: true })
  idg032: number | null;

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

  @ManyToOne(() => G009, (g009) => g009.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG009", referencedColumnName: "idg009" }])
  idg0: G009;

  @ManyToOne(() => G032, (g032) => g032.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG032", referencedColumnName: "idg032" }])
  idg02: G032;
}
