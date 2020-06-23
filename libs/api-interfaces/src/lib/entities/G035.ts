import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { A001 } from "./A001";

@Entity("G035", { schema: "metodista_local" })
export class G035 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG035" })
  idg035: number;

  @Column("varchar", { name: "NOME", nullable: true, length: 60 })
  nome: string | null;

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

  @OneToMany(() => A001, (a001) => a001.idg11)
  as: A001[];
}
