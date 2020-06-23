import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("G029", { schema: "metodista_local" })
export class G029 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG029" })
  idg029: number;

  @Column("date", { name: "DATA", nullable: true })
  data: string | null;

  @Column("time", { name: "HORA", nullable: true })
  hora: string | null;

  @Column("varchar", { name: "USER", nullable: true, length: 600 })
  user: string | null;

  @Column("datetime", { name: "CREATED", nullable: true })
  created: Date | null;

  @Column("datetime", { name: "UPDATED", nullable: true })
  updated: Date | null;
}
