import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G004 } from "./G004";
import { E022 } from "./E022";
import { G039 } from "./G039";

@Index("FK_COTA_LOCAL", ["local"], {})
@Entity("E043", { schema: "metodista_local" })
export class E043 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE043" })
  ide043: number;

  @Column("int", { name: "LOCAL" })
  local: number;

  @Column("varchar", { name: "MES", length: 2 })
  mes: string;

  @Column("varchar", { name: "ANO", length: 4 })
  ano: string;

  @Column("date", { name: "VENCIMENTO" })
  vencimento: string;

  @Column("varchar", {
    name: "DELETED",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deleted: string | null;

  @Column("datetime", { name: "CREATED", nullable: true })
  created: Date | null;

  @Column("varchar", { name: "URLBOLETO", nullable: true, length: 255 })
  urlboleto: string | null;

  @ManyToOne(() => G004, (g004) => g004.es2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "LOCAL", referencedColumnName: "idg004" }])
  local2: G004;

  @OneToMany(() => E022, (e022) => e022.ide0)
  es: E022[];

  @OneToMany(() => G039, (g039) => g039.ide0)
  gs: G039[];
}
