import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("FK_E034_G011_idx", ["idg011"], {})
@Entity("E034", { schema: "metodista_local" })
export class E034 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE034" })
  ide034: number;

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

  @Column("int", { name: "IDG011", nullable: true })
  idg011: number | null;
}
