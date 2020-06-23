import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { G033 } from "./G033";
import { G038 } from "./G038";

@Entity("G031", { schema: "metodista_local" })
export class G031 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG031" })
  idg031: number;

  @Column("varchar", { name: "DESCRI", length: 60 })
  descri: string;

  @Column("date", { name: "CREATED", nullable: true })
  created: string | null;

  @Column("varchar", {
    name: "DELETED",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deleted: string | null;

  @Column("date", { name: "UPDATED", nullable: true })
  updated: string | null;

  @Column("varchar", {
    name: "STS",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  sts: string | null;

  @Column("varchar", { name: "TIPO", nullable: true, length: 45 })
  tipo: string | null;

  @OneToMany(() => G033, (g033) => g033.idg0)
  gs: G033[];

  @OneToMany(() => G038, (g038) => g038.idg0)
  gs2: G038[];
}
