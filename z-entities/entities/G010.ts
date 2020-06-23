import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { E020 } from "./E020";

@Entity("G010", { schema: "metodista_local" })
export class G010 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG010" })
  idg010: number;

  @Column("int", { name: "IDG002", nullable: true })
  idg002: number | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @Column("varchar", { name: "INICIO", length: 4 })
  inicio: string;

  @Column("varchar", { name: "FINAL", length: 4 })
  final: string;

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

  @OneToMany(() => E020, (e020) => e020.idg0)
  es: E020[];
}
