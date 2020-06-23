import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G002 } from "./G002";
import { G049 } from "./G049";
import { G014 } from "./G014";
import { G021 } from "./G021";
import { E042 } from "./E042";

@Index("fk_E041_1_idx", ["idg002"], {})
@Index("fk_E041_2_idx", ["idg049"], {})
@Index("fk_E041_3_idx", ["idg014"], {})
@Index("fk_E041_4_idx", ["idg021"], {})
@Entity("E041", { schema: "metodista_local" })
export class E041 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE041" })
  ide041: number;

  @Column("int", { name: "IDG002", nullable: true })
  idg002: number | null;

  @Column("int", { name: "IDG049", nullable: true })
  idg049: number | null;

  @Column("int", { name: "IDG014", nullable: true })
  idg014: number | null;

  @Column("decimal", {
    name: "SALARIOBRUTO",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  salariobruto: string | null;

  @Column("int", { name: "IDG021", nullable: true })
  idg021: number | null;

  @ManyToOne(() => G002, (g002) => g002.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG002", referencedColumnName: "idg002" }])
  idg0: G002;

  @ManyToOne(() => G049, (g049) => g049.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG049", referencedColumnName: "idg049" }])
  idg02: G049;

  @ManyToOne(() => G014, (g014) => g014.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG014", referencedColumnName: "idg014" }])
  idg03: G014;

  @ManyToOne(() => G021, (g021) => g021.es2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG021", referencedColumnName: "idg021" }])
  idg04: G021;

  @OneToMany(() => E042, (e042) => e042.ide0)
  es: E042[];
}
