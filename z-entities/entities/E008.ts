import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { G009 } from "./G009";

@Entity("E008", { schema: "metodista_local" })
export class E008 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE008" })
  ide008: number;

  @Column("varchar", { name: "NOME", length: 60 })
  nome: string;

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

  @OneToMany(() => G009, (g009) => g009.ide04)
  gs: G009[];
}
