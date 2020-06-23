import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { E019 } from "./E019";
import { E024 } from "./E024";

@Entity("E018", { schema: "metodista_local" })
export class E018 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE018" })
  ide018: number;

  @Column("varchar", { name: "NOME", length: 60 })
  nome: string;

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

  @OneToMany(() => E019, (e019) => e019.ide02)
  es: E019[];

  @OneToMany(() => E024, (e024) => e024.ide03)
  es2: E024[];
}
