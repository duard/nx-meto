import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { E042 } from "./E042";

@Entity("G048", { schema: "metodista_local" })
export class G048 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG048" })
  idg048: number;

  @Column("datetime", {
    name: "CREATED",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  created: Date | null;

  @Column("datetime", {
    name: "UPDATED",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
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

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

  @Column("varchar", { name: "DESCRICAO", nullable: true, length: 60 })
  descricao: string | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 45 })
  tipo: string | null;

  @OneToMany(() => E042, (e042) => e042.idg0)
  es: E042[];
}
