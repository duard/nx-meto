import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G013 } from "./G013";

@Index("DESCRICA_UNIQUE", ["descrica"], { unique: true })
@Entity("G011", { schema: "metodista_local" })
export class G011 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG011" })
  idg011: number;

  @Column("varchar", { name: "DESCRICA", unique: true, length: 255 })
  descrica: string;

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

  @OneToMany(() => G013, (g013) => g013.grupo2)
  gs: G013[];
}
