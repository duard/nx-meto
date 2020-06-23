import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G026 } from "./G026";
import { E022 } from "./E022";

@Index("G050_FK", ["titulo"], {})
@Index("G050_FK_1", ["remessa"], {})
@Entity("G050", { schema: "metodista_local" })
export class G050 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG050" })
  idg050: number;

  @Column("timestamp", { name: "CREATED", nullable: true })
  created: Date | null;

  @Column("int", { name: "titulo" })
  titulo: number;

  @Column("int", { name: "remessa" })
  remessa: number;

  @Column("decimal", {
    name: "proporcional",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  proporcional: string | null;

  @ManyToOne(() => G026, (g026) => g026.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "titulo", referencedColumnName: "idg026" }])
  titulo2: G026;

  @ManyToOne(() => E022, (e022) => e022.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "remessa", referencedColumnName: "ide022" }])
  remessa2: E022;
}
