import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("E040", { schema: "metodista_local" })
export class E040 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE040" })
  ide040: number;

  @Column("int", { name: "IDG002" })
  idg002: number;

  @Column("int", { name: "IDE036" })
  ide036: number;

  @Column("date", { name: "DTINICIAL" })
  dtinicial: string;

  @Column("date", { name: "DTFINAL", nullable: true })
  dtfinal: string | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;
}
