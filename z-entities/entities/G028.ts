import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("G028", { schema: "metodista_local" })
export class G028 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG028" })
  idg028: number;

  @Column("varchar", { name: "MENU", nullable: true, length: 60 })
  menu: string | null;

  @Column("varchar", { name: "AJUDA", nullable: true, length: 5000 })
  ajuda: string | null;

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
}
