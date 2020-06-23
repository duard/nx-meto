import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G004 } from "./G004";

@Index("FK_G004_IDG004_LOCAIS_DESCONTOS", ["g004Id"], {})
@Entity("LOCAIS_DESCONTOS", { schema: "metodista_local" })
export class LocaisDescontos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "g004_id", nullable: true })
  g004Id: number | null;

  @Column("decimal", {
    name: "percentual",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  percentual: string | null;

  @Column("timestamp", {
    name: "dt_ini",
    default: () => "'1970-01-01 03:00:01'",
  })
  dtIni: Date;

  @Column("timestamp", {
    name: "dt_fim",
    default: () => "'1970-01-01 03:00:01'",
  })
  dtFim: Date;

  @Column("timestamp", {
    name: "dt_created",
    default: () => "CURRENT_TIMESTAMP",
  })
  dtCreated: Date;

  @Column("timestamp", {
    name: "dt_updated",
    default: () => "CURRENT_TIMESTAMP",
  })
  dtUpdated: Date;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @ManyToOne(() => G004, (g004) => g004.locaisDescontos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "g004_id", referencedColumnName: "idg004" }])
  g0: G004;
}
