import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("L002", { schema: "metodista_local" })
export class L002 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDL002", unsigned: true })
  idl002: number;

  @Column("varchar", { name: "TIPO", nullable: true, length: 255 })
  tipo: string | null;

  @Column("int", { name: "MES", nullable: true })
  mes: number | null;

  @Column("int", { name: "ANO", nullable: true })
  ano: number | null;

  @Column("varchar", { name: "DISTRITO", nullable: true, length: 255 })
  distrito: string | null;

  @Column("int", { name: "USER", nullable: true })
  user: number | null;

  @Column("datetime", { name: "CREATED", nullable: true })
  created: Date | null;

  @Column("varchar", { name: "LOCAL", nullable: true, length: 100 })
  local: string | null;
}
