import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E022 } from "./E022";
import { G021 } from "./G021";
import { G024 } from "./G024";
import { G039 } from "./G039";
import { G047 } from "./G047";
import { G027 } from "./G027";
import { G003 } from "./G003";
import { G004 } from "./G004";
import { G018 } from "./G018";

@Index("FK_G019RUBRICA_IDG019_idx", ["rubrica"], {})
@Index("G019_G018_FK", ["idg018"], {})
@Entity("G019", { schema: "metodista_local" })
export class G019 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG019" })
  idg019: number;

  @Column("varchar", { name: "NOME", nullable: true, length: 60 })
  nome: string | null;

  @Column("varchar", { name: "ORDENACA", nullable: true, length: 100 })
  ordenaca: string | null;

  @Column("int", { name: "IDG018", nullable: true })
  idg018: number | null;

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

  @Column("int", { name: "REMESSA", nullable: true })
  remessa: number | null;

  @Column("int", { name: "CONTACRE", nullable: true })
  contacre: number | null;

  @Column("int", { name: "HISTPAD", nullable: true })
  histpad: number | null;

  @Column("varchar", { name: "COMPLEME", nullable: true, length: 100 })
  compleme: string | null;

  @Column("varchar", { name: "REFERENCIA", nullable: true, length: 1 })
  referencia: string | null;

  @Column("int", { name: "LANCAMENSAL", nullable: true })
  lancamensal: number | null;

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

  @Column("double", { name: "VALORDEF", nullable: true, precision: 22 })
  valordef: number | null;

  @Column("int", { name: "CALCCOTA", nullable: true })
  calccota: number | null;

  @Column("int", { name: "RUBRICA", nullable: true })
  rubrica: number | null;

  @Column("decimal", {
    name: "SALDOINI",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  saldoini: string | null;

  @Column("decimal", {
    name: "SALDOATU",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  saldoatu: string | null;

  @Column("int", { name: "CONTROLESALDO", nullable: true })
  controlesaldo: number | null;

  @Column("int", { name: "CONTADEB", nullable: true })
  contadeb: number | null;

  @OneToMany(() => E022, (e022) => e022.idg0)
  es: E022[];

  @ManyToOne(() => G019, (g019) => g019.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "RUBRICA", referencedColumnName: "idg019" }])
  rubrica2: G019;

  @OneToMany(() => G019, (g019) => g019.rubrica2)
  gs: G019[];

  @OneToMany(() => G021, (g021) => g021.rubrica2)
  gs2: G021[];

  @OneToMany(() => G024, (g024) => g024.idg0)
  gs3: G024[];

  @OneToMany(() => G039, (g039) => g039.idg02)
  gs4: G039[];

  @OneToMany(() => G047, (g047) => g047.rubrica2)
  gs5: G047[];

  @OneToMany(() => G027, (g027) => g027.receita2)
  gs6: G027[];

  @OneToMany(() => G003, (g003) => g003.rubrica2)
  gs7: G003[];

  @OneToMany(() => G004, (g004) => g004.rubricacotareg2)
  gs8: G004[];

  @OneToMany(() => G004, (g004) => g004.rubricapec2)
  g0s: G004[];

  @ManyToOne(() => G018, (g018) => g018.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG018", referencedColumnName: "idg018" }])
  idg0: G018;
}
