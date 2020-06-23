import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G009 } from "./G009";
import { G014 } from "./G014";

@Index("NOME", ["nome"], { unique: true })
@Entity("E004", { schema: "metodista_local" })
export class E004 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE004" })
  ide004: number;

  @Column("varchar", { name: "NOME", nullable: true, unique: true, length: 60 })
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

  @OneToMany(() => G009, (g009) => g009.ide03)
  gs: G009[];

  @OneToMany(() => G014, (g014) => g014.ide02)
  gs2: G014[];
}
