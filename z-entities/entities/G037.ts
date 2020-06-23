import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G009 } from "./G009";
import { G039 } from "./G039";
import { G006 } from "./G006";
import { G025 } from "./G025";

@Index("FK_MEMBROS_MOVIMENTACOES", ["idg009"], {})
@Index("FK_MOVIMENTACOES_CONTAS", ["idg006"], {})
@Index("FK_PAGAR", ["idg025"], {})
@Entity("G037", { schema: "metodista_local" })
export class G037 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG037" })
  idg037: number;

  @Column("int", { name: "IDG025", nullable: true })
  idg025: number | null;

  @Column("int", { name: "IDG009", nullable: true })
  idg009: number | null;

  @Column("int", { name: "IDG006", nullable: true })
  idg006: number | null;

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

  @Column("decimal", { name: "JUROS", nullable: true, precision: 11, scale: 2 })
  juros: string | null;

  @Column("decimal", {
    name: "MULTAS",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  multas: string | null;

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

  @ManyToOne(() => G009, (g009) => g009.gs4, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG009", referencedColumnName: "idg009" }])
  idg0: G009;

  @OneToMany(() => G039, (g039) => g039.idg07)
  gs: G039[];

  @ManyToOne(() => G006, (g006) => g006.gs4, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG006", referencedColumnName: "idg006" }])
  idg02: G006;

  @ManyToOne(() => G025, (g025) => g025.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG025", referencedColumnName: "idg025" }])
  idg03: G025;
}
