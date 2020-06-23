import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { G014 } from "./G014";

@Entity("E023", { schema: "metodista_local" })
export class E023 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE023" })
  ide023: number;

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

  @OneToMany(() => G014, (g014) => g014.ide04)
  gs: G014[];
}
