import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CotasPercentuais } from "./CotasPercentuais";
import { G004 } from "./G004";
import { G020 } from "./G020";
import { G018 } from "./G018";

@Index("NOME_UNIQUE", ["nome"], { unique: true })
@Entity("E005", { schema: "metodista_local" })
export class E005 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE005" })
  ide005: number;

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

  @Column("varchar", { name: "NOME", nullable: true, unique: true, length: 60 })
  nome: string | null;

  @Column("float", {
    name: "COTAREGI",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  cotaregi: number | null;

  @OneToMany(() => CotasPercentuais, (cotasPercentuais) => cotasPercentuais.e0)
  cotasPercentuais: CotasPercentuais[];

  @OneToMany(() => G004, (g004) => g004.ide0)
  gs: G004[];

  @OneToMany(() => G020, (g020) => g020.ide0)
  gs2: G020[];

  @OneToMany(() => G018, (g018) => g018.ide0)
  gs3: G018[];
}
