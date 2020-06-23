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
import { E024 } from "./E024";
import { G001 } from "./G001";
import { G003 } from "./G003";
import { G004 } from "./G004";

@Index("FK_G007_G001_idx", ["idg001"], {})
@Index("FK_G007_G003_idx", ["idg003"], {})
@Index("FK_G007_G004_idx", ["idg004"], {})
@Entity("G007", { schema: "metodista_local" })
export class G007 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG007" })
  idg007: number;

  @Column("varchar", { name: "DESCRICAO", nullable: true, length: 100 })
  descricao: string | null;

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

  @Column("varchar", { name: "TIPO", nullable: true, length: 10 })
  tipo: string | null;

  @Column("int", { name: "IDG001", nullable: true })
  idg001: number | null;

  @Column("int", { name: "IDG003", nullable: true })
  idg003: number | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @OneToMany(() => A001, (a001) => a001.idg05)
  as: A001[];

  @OneToMany(() => E024, (e024) => e024.idg0)
  es: E024[];

  @ManyToOne(() => G001, (g001) => g001.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG001", referencedColumnName: "idg001" }])
  idg0: G001;

  @ManyToOne(() => G003, (g003) => g003.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG003", referencedColumnName: "idg003" }])
  idg02: G003;

  @ManyToOne(() => G004, (g004) => g004.gs6, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG004", referencedColumnName: "idg004" }])
  idg03: G004;
}
