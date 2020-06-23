import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G006 } from "./G006";
import { G004 } from "./G004";
import { G002 } from "./G002";
import { E036 } from "./E036";

@Index("E037_G006_FK", ["conta"], {})
@Index("FK_PECULIO_LOCAL", ["idg004"], {})
@Index("FK_PECULIO_PASTORES", ["idg002"], {})
@Index("FK_PECULIO_PREVIDENCIA", ["ide036"], {})
@Index("FK_PECULIO_TITULO_idx", ["titulo"], {})
@Entity("E037", { schema: "metodista_local" })
export class E037 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE037" })
  ide037: number;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  tipo: string | null;

  @Column("varchar", { name: "DESCRICA", nullable: true, length: 100 })
  descrica: string | null;

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

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

  @Column("int", { name: "IDG002", nullable: true })
  idg002: number | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @Column("int", { name: "IDE036", nullable: true })
  ide036: number | null;

  @Column("varchar", { name: "ORIGEM", nullable: true, length: 3 })
  origem: string | null;

  @Column("datetime", { name: "DATA", nullable: true })
  data: Date | null;

  @Column("varchar", {
    name: "PROVISIONADO",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  provisionado: string | null;

  @Column("int", { name: "TITULO", nullable: true })
  titulo: number | null;

  @Column("int", { name: "CONTA", nullable: true })
  conta: number | null;

  @Column("int", { name: "IDG039", nullable: true })
  idg039: number | null;

  @Column("int", { name: "IDG034", nullable: true })
  idg034: number | null;

  @ManyToOne(() => G006, (g006) => g006.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "CONTA", referencedColumnName: "idg006" }])
  conta2: G006;

  @ManyToOne(() => G004, (g004) => g004.es5, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg0: G004;

  @ManyToOne(() => G002, (g002) => g002.es3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG002", referencedColumnName: "idg002" }])
  idg02: G002;

  @ManyToOne(() => E036, (e036) => e036.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE036", referencedColumnName: "ide036" }])
  ide0: E036;
}
