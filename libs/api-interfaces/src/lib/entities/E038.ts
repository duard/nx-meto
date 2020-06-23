import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G025 } from "./G025";
import { G002 } from "./G002";

@Index("FK_PREVISAO_TITULOPAGAR", ["idg025"], {})
@Index("FK_PROVISOES_PASTOR", ["idg002"], {})
@Entity("E038", { schema: "metodista_local" })
export class E038 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE038" })
  ide038: number;

  @Column("int", { name: "IDG025", nullable: true })
  idg025: number | null;

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

  @Column("varchar", { name: "STATUS", nullable: true, length: 1 })
  status: string | null;

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

  @Column("int", { name: "IDG002", nullable: true })
  idg002: number | null;

  @Column("int", { name: "IDE036", nullable: true })
  ide036: number | null;

  @Column("int", { name: "PECULIO", nullable: true })
  peculio: number | null;

  @ManyToOne(() => G025, (g025) => g025.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG025", referencedColumnName: "idg025" }])
  idg0: G025;

  @ManyToOne(() => G002, (g002) => g002.es4, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG002", referencedColumnName: "idg002" }])
  idg02: G002;
}
