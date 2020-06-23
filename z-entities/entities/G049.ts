import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E041 } from "./E041";
import { G004 } from "./G004";

@Index("fk_G049_1_idx", ["local"], {})
@Entity("G049", { schema: "metodista_local" })
export class G049 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG049" })
  idg049: number;

  @Column("int", { name: "ANO", nullable: true })
  ano: number | null;

  @Column("int", { name: "MES", nullable: true })
  mes: number | null;

  @Column("datetime", {
    name: "CREATED",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  created: Date | null;

  @Column("datetime", {
    name: "UPDATED",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
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

  @Column("int", { name: "LOCAL", nullable: true })
  local: number | null;

  @OneToMany(() => E041, (e041) => e041.idg02)
  es: E041[];

  @ManyToOne(() => G004, (g004) => g004.g16, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "LOCAL", referencedColumnName: "idg004" }])
  local2: G004;
}
