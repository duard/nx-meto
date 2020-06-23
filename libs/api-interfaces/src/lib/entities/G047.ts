import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G039 } from "./G039";
import { G019 } from "./G019";

@Index("FK_G047IDG039_G039_idx", ["idg039"], {})
@Index("FK_G047RUBRICA_G019_idx", ["rubrica"], {})
@Entity("G047", { schema: "metodista_local" })
export class G047 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG047" })
  idg047: number;

  @Column("int", { name: "RUBRICA", nullable: true })
  rubrica: number | null;

  @Column("int", { name: "IDG039", nullable: true })
  idg039: number | null;

  @Column("varchar", {
    name: "DELETED",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deleted: string | null;

  @ManyToOne(() => G039, (g039) => g039.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG039", referencedColumnName: "idg039" }])
  idg0: G039;

  @ManyToOne(() => G019, (g019) => g019.gs5, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "RUBRICA", referencedColumnName: "idg019" }])
  rubrica2: G019;
}
