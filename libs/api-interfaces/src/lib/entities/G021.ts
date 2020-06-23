import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G027 } from "./G027";
import { E022 } from "./E022";
import { E041 } from "./E041";
import { G020 } from "./G020";
import { G019 } from "./G019";
import { G039 } from "./G039";
import { G024 } from "./G024";
import { E036 } from "./E036";

@Index("FK_G021IDG020_IDG020_idx", ["idg020"], {})
@Index("FK_G021RUBRICA_IDG019_idx", ["rubrica"], {})
@Entity("G021", { schema: "metodista_local" })
export class G021 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG021" })
  idg021: number;

  @Column("varchar", { name: "ORDENACA", nullable: true, length: 16 })
  ordenaca: string | null;

  @Column("varchar", { name: "NOME", nullable: true, length: 60 })
  nome: string | null;

  @Column("int", { name: "IDG020", nullable: true })
  idg020: number | null;

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

  @Column("int", { name: "CONTADEB", nullable: true })
  contadeb: number | null;

  @Column("int", { name: "HISTPAD", nullable: true })
  histpad: number | null;

  @Column("varchar", { name: "COMPLEME", nullable: true, length: 100 })
  compleme: string | null;

  @Column("varchar", { name: "REFERENCIA", nullable: true, length: 1 })
  referencia: string | null;

  @Column("int", { name: "LANCAMENSAL", nullable: true })
  lancamensal: number | null;

  @Column("int", { name: "REMESSA", nullable: true })
  remessa: number | null;

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

  @Column("double", { name: "VALORDEF", nullable: true, precision: 22 })
  valordef: number | null;

  @Column("int", { name: "RUBRICA", nullable: true })
  rubrica: number | null;

  @Column("int", { name: "CONTACRE", nullable: true })
  contacre: number | null;

  @OneToMany(() => G027, (g027) => g027.despesa2)
  gs: G027[];

  @OneToMany(() => E022, (e022) => e022.idg02)
  es: E022[];

  @OneToMany(() => E041, (e041) => e041.idg04)
  es2: E041[];

  @ManyToOne(() => G020, (g020) => g020.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG020", referencedColumnName: "idg020" }])
  idg0: G020;

  @ManyToOne(() => G019, (g019) => g019.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "RUBRICA", referencedColumnName: "idg019" }])
  rubrica2: G019;

  @OneToMany(() => G039, (g039) => g039.idg03)
  gs2: G039[];

  @OneToMany(() => G024, (g024) => g024.idg02)
  gs3: G024[];

  @OneToMany(() => E036, (e036) => e036.idg0)
  es3: E036[];
}
