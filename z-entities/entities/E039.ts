import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G009 } from "./G009";
import { G034 } from "./G034";

@Index("FK_E039_G009_idx", ["idg009"], {})
@Index("FK_E039_G034_idx", ["idg034"], {})
@Entity("E039", { schema: "metodista_local" })
export class E039 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE039" })
  ide039: number;

  @Column("int", { name: "IDG034", nullable: true })
  idg034: number | null;

  @Column("int", { name: "IDG009", nullable: true })
  idg009: number | null;

  @Column("varchar", { name: "STATUS", nullable: true, length: 45 })
  status: string | null;

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

  @Column("timestamp", {
    name: "DATA",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  data: Date | null;

  @ManyToOne(() => G009, (g009) => g009.es2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG009", referencedColumnName: "idg009" }])
  idg0: G009;

  @ManyToOne(() => G034, (g034) => g034.es4, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG034", referencedColumnName: "idg034" }])
  idg02: G034;
}
