import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E005 } from "./E005";
import { G019 } from "./G019";

@Index("FK_TIPOSLOCAIS_x_GRUPOSRECEITAS", ["ide005"], {})
@Entity("G018", { schema: "metodista_local" })
export class G018 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG018" })
  idg018: number;

  @Column("varchar", { name: "ORDENACA", nullable: true, length: 16 })
  ordenaca: string | null;

  @Column("varchar", { name: "NOME", nullable: true, length: 100 })
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

  @Column("int", { name: "IDE005" })
  ide005: number;

  @ManyToOne(() => E005, (e005) => e005.gs3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE005", referencedColumnName: "ide005" }])
  ide0: E005;

  @OneToMany(() => G019, (g019) => g019.idg0)
  gs: G019[];
}
