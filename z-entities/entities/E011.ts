import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { G008 } from "./G008";
import { G014 } from "./G014";

@Entity("E011", { schema: "metodista_local" })
export class E011 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE011" })
  ide011: number;

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

  @OneToMany(() => G008, (g008) => g008.ide0)
  gs: G008[];

  @OneToMany(() => G014, (g014) => g014.ide03)
  gs2: G014[];
}
