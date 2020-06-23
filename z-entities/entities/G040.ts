import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { A001 } from "./A001";
import { E024 } from "./E024";

@Index("FK_G040_E013_idx", ["ide013"], {})
@Index("FK_G040_G004_idx", ["idg004"], {})
@Entity("G040", { schema: "metodista_local" })
export class G040 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG040" })
  idg040: number;

  @Column("varchar", { name: "DESCRICA", nullable: true, length: 100 })
  descrica: string | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @Column("int", { name: "IDE013", nullable: true })
  ide013: number | null;

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

  @OneToMany(() => A001, (a001) => a001.idg12)
  as: A001[];

  @OneToMany(() => E024, (e024) => e024.idg03)
  es: E024[];
}
