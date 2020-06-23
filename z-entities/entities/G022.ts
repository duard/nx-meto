import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G004 } from "./G004";

@Index("FK_LOCAIS", ["idg004"], {})
@Entity("G022", { schema: "metodista_local" })
export class G022 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG022" })
  idg022: number;

  @Column("varchar", { name: "DIA", nullable: true, length: 10 })
  dia: string | null;

  @Column("varchar", { name: "TITULO", nullable: true, length: 60 })
  titulo: string | null;

  @Column("varchar", { name: "HORARIO", nullable: true, length: 6 })
  horario: string | null;

  @Column("date", { name: "CREATED", nullable: true })
  created: string | null;

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

  @Column("date", { name: "UPDATED", nullable: true })
  updated: string | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @ManyToOne(() => G004, (g004) => g004.g17, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg0: G004;
}
