import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G021 } from "./G021";
import { G019 } from "./G019";

@Index("FK_DESPESAS", ["despesa"], {})
@Index("FK_RECEITAS", ["receita"], {})
@Entity("G027", { schema: "metodista_local" })
export class G027 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG027" })
  idg027: number;

  @Column("varchar", { name: "DESCRI", length: 60 })
  descri: string;

  @Column("int", { name: "DESPESA" })
  despesa: number;

  @Column("int", { name: "RECEITA" })
  receita: number;

  @Column("varchar", { name: "VENCTO", nullable: true, length: 2 })
  vencto: string | null;

  @Column("float", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: number | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  tipo: string | null;

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

  @Column("varchar", {
    name: "STS",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  sts: string | null;

  @Column("varchar", {
    name: "PERIOCIDADE",
    comment: "S - SEMANAL, Q - QUINZENAL, M - MENSAL",
    length: 1,
  })
  periocidade: string;

  @Column("int", { name: "INCIDENCIA", nullable: true })
  incidencia: number | null;

  @Column("varchar", {
    name: "REFERENCIA",
    nullable: true,
    comment: "I - IGREJA, M - MEMBRO",
    length: 1,
  })
  referencia: string | null;

  @ManyToOne(() => G021, (g021) => g021.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "DESPESA", referencedColumnName: "idg021" }])
  despesa2: G021;

  @ManyToOne(() => G019, (g019) => g019.gs6, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "RECEITA", referencedColumnName: "idg019" }])
  receita2: G019;
}
