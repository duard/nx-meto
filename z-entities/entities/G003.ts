import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { A001 } from "./A001";
import { G001 } from "./G001";
import { CotasPercentuais } from "./CotasPercentuais";
import { G007 } from "./G007";
import { G041 } from "./G041";
import { G042 } from "./G042";
import { G044 } from "./G044";
import { G045 } from "./G045";
import { G004 } from "./G004";
import { G019 } from "./G019";
import { G002 } from "./G002";

@Index("FK_IDG001_IDG001_idx", ["idg001"], {})
@Index("FK_RUBRICA_IDG019_idx", ["rubrica"], {})
@Index("GK_IDG002_IDG002_idx", ["idg002"], {})
@Entity("G003", { schema: "metodista_local" })
export class G003 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG003" })
  idg003: number;

  @Column("int", { name: "IDG001", nullable: true })
  idg001: number | null;

  @Column("varchar", { name: "NOME", nullable: true, length: 60 })
  nome: string | null;

  @Column("int", { name: "IDG002", nullable: true })
  idg002: number | null;

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

  @Column("double", { name: "COTADIST", nullable: true, precision: 22 })
  cotadist: number | null;

  @Column("int", { name: "RUBRICA", nullable: true })
  rubrica: number | null;

  @OneToMany(() => A001, (a001) => a001.idg03)
  as: A001[];

  @ManyToOne(() => G001, (g001) => g001.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG001", referencedColumnName: "idg001" }])
  idg0: G001;

  @OneToMany(() => CotasPercentuais, (cotasPercentuais) => cotasPercentuais.g0)
  cotasPercentuais: CotasPercentuais[];

  @OneToMany(() => G007, (g007) => g007.idg02)
  gs: G007[];

  @OneToMany(() => G041, (g041) => g041.idg02)
  gs2: G041[];

  @OneToMany(() => G042, (g042) => g042.idg02)
  gs3: G042[];

  @OneToMany(() => G044, (g044) => g044.idg02)
  gs4: G044[];

  @OneToMany(() => G045, (g045) => g045.idg02)
  gs5: G045[];

  @OneToMany(() => G004, (g004) => g004.idg02)
  gs6: G004[];

  @ManyToOne(() => G019, (g019) => g019.gs7, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "RUBRICA", referencedColumnName: "idg019" }])
  rubrica2: G019;

  @ManyToOne(() => G002, (g002) => g002.gs4, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG002", referencedColumnName: "idg002" }])
  idg02: G002;
}
