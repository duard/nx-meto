import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G006 } from "./G006";
import { G019 } from "./G019";
import { G039 } from "./G039";
import { G021 } from "./G021";

@Index("FK_DESTINO_G006_idx", ["destino"], {})
@Index("FK_G024_G019_idx", ["idg019"], {})
@Index("FK_G024_G034_idx", ["idg034"], {})
@Index("FK_GO24_G021_idx", ["idg021"], {})
@Index("FK_IDG02_idx", ["origem"], {})
@Entity("G024", { schema: "metodista_local" })
export class G024 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG024" })
  idg024: number;

  @Column("int", { name: "ORIGEM", nullable: true })
  origem: number | null;

  @Column("int", { name: "DESTINO", nullable: true })
  destino: number | null;

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

  @Column("date", { name: "DATA", nullable: true })
  data: string | null;

  @Column("date", { name: "CREATED", nullable: true })
  created: string | null;

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

  @Column("int", { name: "IDG019", nullable: true })
  idg019: number | null;

  @Column("int", { name: "IDG021", nullable: true })
  idg021: number | null;

  @Column("varchar", { name: "HISTORICO", nullable: true, length: 255 })
  historico: string | null;

  @Column("int", { name: "IDG034", nullable: true })
  idg034: number | null;

  @ManyToOne(() => G006, (g006) => g006.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "DESTINO", referencedColumnName: "idg006" }])
  destino2: G006;

  @ManyToOne(() => G019, (g019) => g019.gs3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG019", referencedColumnName: "idg019" }])
  idg0: G019;

  @OneToMany(() => G039, (g039) => g039.idg04)
  gs: G039[];

  @ManyToOne(() => G021, (g021) => g021.gs3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG021", referencedColumnName: "idg021" }])
  idg02: G021;

  @ManyToOne(() => G006, (g006) => g006.g0s, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ORIGEM", referencedColumnName: "idg006" }])
  origem2: G006;
}
