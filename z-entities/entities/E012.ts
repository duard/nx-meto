import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { G016 } from "./G016";

@Entity("E012", { schema: "metodista_local" })
export class E012 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE012" })
  ide012: number;

  @Column("text", { name: "DESCRICA" })
  descrica: string;

  @Column("varchar", { name: "ESPECONT", length: 60 })
  especont: string;

  @Column("varchar", { name: "MEDIEVEN", length: 3 })
  medieven: string;

  @Column("varchar", { name: "CONTFIXO", length: 3 })
  contfixo: string;

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

  @OneToMany(() => G016, (g016) => g016.ide0)
  gs: G016[];
}
