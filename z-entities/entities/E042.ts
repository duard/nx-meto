import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E041 } from "./E041";
import { G048 } from "./G048";

@Index("fk_E042_1_idx", ["ide041"], {})
@Index("fk_E042_2_idx", ["idg048"], {})
@Entity("E042", { schema: "metodista_local" })
export class E042 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE042" })
  ide042: number;

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

  @Column("int", { name: "IDE041", nullable: true })
  ide041: number | null;

  @Column("int", { name: "IDG048", nullable: true })
  idg048: number | null;

  @ManyToOne(() => E041, (e041) => e041.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE041", referencedColumnName: "ide041" }])
  ide0: E041;

  @ManyToOne(() => G048, (g048) => g048.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG048", referencedColumnName: "idg048" }])
  idg0: G048;
}
