import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E019 } from "./E019";
import { E024 } from "./E024";
import { G009 } from "./G009";

@Index("IDX_36a620b6ac5b76369005278ae9", ["nome"], { unique: true })
@Entity("E001", { schema: "metodista_local" })
export class E001 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE001" })
  ide001: number;

  @Column("varchar", { name: "NOME", unique: true, length: 60 })
  nome: string;

  @Column("timestamp", { name: "CREATED", default: () => "CURRENT_TIMESTAMP" })
  created: Date;

  @Column("timestamp", { name: "UPDATED", default: () => "CURRENT_TIMESTAMP" })
  updated: Date;

  @Column("varchar", { name: "DELETED", length: 1, default: () => "'N'" })
  deleted: string;

  @Column("varchar", { name: "STS", length: 1, default: () => "'A'" })
  sts: string;

  @OneToMany(() => E019, (e019) => e019.ide0)
  es: E019[];

  @OneToMany(() => E024, (e024) => e024.ide0)
  es2: E024[];

  @OneToMany(() => G009, (g009) => g009.ide0)
  gs: G009[];
}
