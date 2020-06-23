import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { E014 } from "./E014";

@Entity("E013", { schema: "metodista_local" })
export class E013 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE013" })
  ide013: number;

  @Column("varchar", { name: "NOME", nullable: true, length: 100 })
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

  @OneToMany(() => E014, (e014) => e014.ide0)
  es: E014[];
}
