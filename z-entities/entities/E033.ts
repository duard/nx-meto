import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { G013 } from "./G013";

@Entity("E033", { schema: "metodista_local" })
export class E033 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE033" })
  ide033: number;

  @Column("varchar", { name: "NOME", nullable: true, length: 60 })
  nome: string | null;

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

  @OneToMany(() => G013, (g013) => g013.segurado2)
  gs: G013[];
}
