import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E001 } from "./E001";
import { E018 } from "./E018";
import { G004 } from "./G004";
import { G002 } from "./G002";
import { E003 } from "./E003";

@Index("FK_CARGOS", ["ide001"], {})
@Index("FK_CLASSIFICACOES", ["ide018"], {})
@Index("FK_LOCAL", ["idg004"], {})
@Index("FK_PASTOR", ["idg002"], {})
@Index("FK_SITUACOES", ["ide003"], {})
@Entity("E019", { schema: "metodista_local" })
export class E019 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE019" })
  ide019: number;

  @Column("int", { name: "IDE003", nullable: true })
  ide003: number | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @Column("int", { name: "IDE001", nullable: true })
  ide001: number | null;

  @Column("int", { name: "IDE018", nullable: true })
  ide018: number | null;

  @Column("date", { name: "DTINICIO", nullable: true })
  dtinicio: string | null;

  @Column("date", { name: "DTFINAL", nullable: true })
  dtfinal: string | null;

  @Column("varchar", { name: "AVALIADO", nullable: true, length: 3 })
  avaliado: string | null;

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

  @Column("int", { name: "IDG002", nullable: true })
  idg002: number | null;

  @ManyToOne(() => E001, (e001) => e001.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE001", referencedColumnName: "ide001" }])
  ide0: E001;

  @ManyToOne(() => E018, (e018) => e018.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE018", referencedColumnName: "ide018" }])
  ide02: E018;

  @ManyToOne(() => G004, (g004) => g004.es3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg0: G004;

  @ManyToOne(() => G002, (g002) => g002.es2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG002", referencedColumnName: "idg002" }])
  idg02: G002;

  @ManyToOne(() => E003, (e003) => e003.es2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE003", referencedColumnName: "ide003" }])
  ide03: E003;
}
