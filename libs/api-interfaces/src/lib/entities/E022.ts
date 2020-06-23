import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E043 } from "./E043";
import { G019 } from "./G019";
import { G021 } from "./G021";
import { G034 } from "./G034";
import { G050 } from "./G050";

@Index("FK_COTA_REMESSA", ["ide043"], {})
@Index("FK_E022_G019_idx", ["idg019"], {})
@Index("FK_E022_G021_idx", ["idg021"], {})
@Index("FK_E022_G034_idx", ["idg034"], {})
@Entity("E022", { schema: "metodista_local" })
export class E022 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE022" })
  ide022: number;

  @Column("int", { name: "IDG034", nullable: true })
  idg034: number | null;

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

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

  @Column("varchar", { name: "FCNAME", nullable: true, length: 45 })
  fcname: string | null;

  @Column("int", { name: "IDG019", nullable: true })
  idg019: number | null;

  @Column("int", { name: "IDG021", nullable: true })
  idg021: number | null;

  @Column("int", { name: "IDE043", nullable: true })
  ide043: number | null;

  @Column("decimal", { name: "SALDO", nullable: true, precision: 11, scale: 2 })
  saldo: string | null;

  @ManyToOne(() => E043, (e043) => e043.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDE043", referencedColumnName: "ide043" }])
  ide0: E043;

  @ManyToOne(() => G019, (g019) => g019.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG019", referencedColumnName: "idg019" }])
  idg0: G019;

  @ManyToOne(() => G021, (g021) => g021.es, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG021", referencedColumnName: "idg021" }])
  idg02: G021;

  @ManyToOne(() => G034, (g034) => g034.es2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG034", referencedColumnName: "idg034" }])
  idg03: G034;

  @OneToMany(() => G050, (g050) => g050.remessa2)
  gs: G050[];
}
