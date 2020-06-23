import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G034 } from "./G034";
import { G030 } from "./G030";

@Index("FK_E035_G006_idx", ["conta"], {})
@Index("FK_E035_G034_idx", ["idg034"], {})
@Entity("E035", { schema: "metodista_local" })
export class E035 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE035" })
  ide035: number;

  @Column("int", { name: "IDG034", nullable: true })
  idg034: number | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 1 })
  tipo: string | null;

  @Column("varchar", { name: "FCNAME", nullable: true, length: 60 })
  fcname: string | null;

  @Column("int", { name: "IDFK", nullable: true })
  idfk: number | null;

  @Column("double", { name: "VALOR", nullable: true, precision: 22 })
  valor: number | null;

  @Column("date", { name: "DATA", nullable: true })
  data: string | null;

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

  @Column("int", { name: "CONTA", nullable: true })
  conta: number | null;

  @Column("varchar", { name: "HISTORICO", nullable: true, length: 100 })
  historico: string | null;

  @ManyToOne(() => G034, (g034) => g034.es3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG034", referencedColumnName: "idg034" }])
  idg0: G034;

  @OneToMany(() => G030, (g030) => g030.ide0)
  gs: G030[];
}
