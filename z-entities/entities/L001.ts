import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G009 } from "./G009";

@Index("FK_LOG_USER", ["user"], {})
@Entity("L001", { schema: "metodista_local" })
export class L001 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDL001" })
  idl001: number;

  @Column("varchar", { name: "TABELA", length: 4 })
  tabela: string;

  @Column("int", { name: "ID", comment: "ID DO DADO", default: () => "'0'" })
  id: number;

  @Column("datetime", { name: "CREATED", nullable: true })
  created: Date | null;

  @Column("datetime", { name: "UPDATED", nullable: true })
  updated: Date | null;

  @Column("int", { name: "USER", default: () => "'0'" })
  user: number;

  @Column("varchar", { name: "OPERACAO", length: 13 })
  operacao: string;

  @Column("text", { name: "OLD", nullable: true })
  old: string | null;

  @Column("text", { name: "NEW", nullable: true })
  new: string | null;

  @ManyToOne(() => G009, (g009) => g009.ls, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "USER", referencedColumnName: "idg009" }])
  user2: G009;
}
