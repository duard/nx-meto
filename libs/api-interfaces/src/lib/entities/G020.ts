import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G021 } from "./G021";
import { E005 } from "./E005";

@Index("FK_TIPOSLOCAIS_x_GRUPODESPESA", ["ide005"], {})
@Entity("G020", { schema: "metodista_local" })
export class G020 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG020" })
  idg020: number;

  @Column("varchar", { name: "ORDENACA", nullable: true, length: 16 })
  ordenaca: string | null;

  @Column("varchar", { name: "NOME", nullable: true, length: 100 })
  nome: string | null;

  @Column("varchar", { name: "OBSERVAC", nullable: true, length: 200 })
  observac: string | null;

  @Column("varchar", { name: "ESPECIFI", nullable: true, length: 200 })
  especifi: string | null;

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

  @Column("int", { name: "IDE005", nullable: true })
  ide005: number | null;

  @OneToMany(() => G021, (g021) => g021.idg0)
  gs: G021[];

  @ManyToOne(() => E005, (e005) => e005.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE005", referencedColumnName: "ide005" }])
  ide0: E005;
}
