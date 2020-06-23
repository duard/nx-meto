import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G009 } from "./G009";
import { G002 } from "./G002";
import { G014 } from "./G014";

@Index("IDX_b780fa19ceae75bded03220b1a", ["nome"], { unique: true })
@Entity("E002", { schema: "metodista_local" })
export class E002 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE002" })
  ide002: number;

  @Column("varchar", { name: "NOME", unique: true, length: 60 })
  nome: string;

  @Column("varchar", { name: "DELETED", length: 1, default: () => "'N'" })
  deleted: string;

  @Column("varchar", { name: "STS", length: 1, default: () => "'A'" })
  sts: string;

  @Column("timestamp", { name: "CREATED", default: () => "CURRENT_TIMESTAMP" })
  created: Date;

  @Column("timestamp", { name: "UPDATED", default: () => "CURRENT_TIMESTAMP" })
  updated: Date;

  @OneToMany(() => G009, (g009) => g009.ide02)
  gs: G009[];

  @OneToMany(() => G002, (g002) => g002.ide0)
  gs2: G002[];

  @OneToMany(() => G014, (g014) => g014.ide0)
  gs3: G014[];
}
