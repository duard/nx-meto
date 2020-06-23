import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G002 } from "./G002";
import { E037 } from "./E037";
import { G021 } from "./G021";
import { G008 } from "./G008";

@Index("FK_PREVIDENCIA_DESPESAS", ["idg021"], {})
@Index("FK_PREVIDENCIA_PARCEIROS", ["idg008"], {})
@Entity("E036", { schema: "metodista_local" })
export class E036 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE036" })
  ide036: number;

  @Column("varchar", { name: "NOME", nullable: true, length: 60 })
  nome: string | null;

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

  @Column("varchar", { name: "CONTRATO", nullable: true, length: 20 })
  contrato: string | null;

  @Column("int", { name: "IDG008", nullable: true })
  idg008: number | null;

  @Column("int", { name: "IDG021", nullable: true })
  idg021: number | null;

  @OneToMany(() => G002, (g002) => g002.ide02)
  gs: G002[];

  @OneToMany(() => E037, (e037) => e037.ide0)
  es: E037[];

  @ManyToOne(() => G021, (g021) => g021.es3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG021", referencedColumnName: "idg021" }])
  idg0: G021;

  @ManyToOne(() => G008, (g008) => g008.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG008", referencedColumnName: "idg008" }])
  idg02: G008;
}
