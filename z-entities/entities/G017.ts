import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PERGUNTA_UNIQUE", ["pergunta"], { unique: true })
@Entity("G017", { schema: "metodista_local" })
export class G017 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG017" })
  idg017: number;

  @Column("varchar", {
    name: "PERGUNTA",
    nullable: true,
    unique: true,
    length: 500,
  })
  pergunta: string | null;

  @Column("varchar", { name: "RESPOSTA", nullable: true, length: 5000 })
  resposta: string | null;

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
