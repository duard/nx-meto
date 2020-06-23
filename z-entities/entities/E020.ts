import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G010 } from "./G010";

@Index("FK_E020_G010_idx", ["idg010"], {})
@Entity("E020", { schema: "metodista_local" })
export class E020 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE020" })
  ide020: number;

  @Column("float", { name: "BASEREGI", precision: 11, scale: 2 })
  baseregi: number;

  @Column("float", { name: "ADICONJU", precision: 5, scale: 2 })
  adiconju: number;

  @Column("float", { name: "INCEMISSI", precision: 5, scale: 2 })
  incemissi: number;

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

  @Column("int", { name: "IDG010", nullable: true })
  idg010: number | null;

  @ManyToOne(() => G010, (g010) => g010.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG010", referencedColumnName: "idg010" }])
  idg0: G010;
}
