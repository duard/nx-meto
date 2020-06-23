import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E005 } from "./E005";
import { G003 } from "./G003";

@Index("FK_E005_IDE005_COTA_REGIONAL", ["e005Id"], {})
@Index("FK_G003_IDG003_COTA_DISTRITAL", ["g003Id"], {})
@Entity("COTAS_PERCENTUAIS", { schema: "metodista_local" })
export class CotasPercentuais {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "e005_id", nullable: true })
  e005Id: number | null;

  @Column("int", { name: "g003_id", nullable: true })
  g003Id: number | null;

  @Column("decimal", {
    name: "percentual",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  percentual: string | null;

  @Column("timestamp", {
    name: "dt_ini",
    default: () => "'0000-00-00 00:00:00'",
  })
  dtIni: Date;

  @Column("timestamp", {
    name: "dt_fim",
    default: () => "'0000-00-00 00:00:00'",
  })
  dtFim: Date;

  @Column("datetime", {
    name: "dt_created",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dtCreated: Date | null;

  @Column("datetime", {
    name: "dt_updated",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dtUpdated: Date | null;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @ManyToOne(() => E005, (e005) => e005.cotasPercentuais, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "e005_id", referencedColumnName: "ide005" }])
  e0: E005;

  @ManyToOne(() => G003, (g003) => g003.cotasPercentuais, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "g003_id", referencedColumnName: "idg003" }])
  g0: G003;
}
