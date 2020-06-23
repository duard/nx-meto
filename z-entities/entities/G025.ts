import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G004 } from "./G004";
import { G037 } from "./G037";
import { E038 } from "./E038";

@Index("FK_CONTASPAGAR_LOCAL", ["portador"], {})
@Index("FK_G025_G004_idx", ["idg004"], {})
@Entity("G025", { schema: "metodista_local" })
export class G025 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG025" })
  idg025: number;

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

  @Column("varchar", { name: "NUMERO", nullable: true, length: 45 })
  numero: string | null;

  @Column("varchar", { name: "PARCELA", nullable: true, length: 3 })
  parcela: string | null;

  @Column("date", { name: "EMISSAO", nullable: true })
  emissao: string | null;

  @Column("date", { name: "VENCIMENTO", nullable: true })
  vencimento: string | null;

  @Column("decimal", { name: "VALOR", nullable: true, precision: 11, scale: 2 })
  valor: string | null;

  @Column("decimal", { name: "SALDO", nullable: true, precision: 11, scale: 2 })
  saldo: string | null;

  @Column("varchar", { name: "NOSSONUME", nullable: true, length: 10 })
  nossonume: string | null;

  @Column("varchar", {
    name: "ORIGEM",
    nullable: true,
    length: 3,
    default: () => "'MAN'",
  })
  origem: string | null;

  @Column("varchar", { name: "FUNCAO", nullable: true, length: 255 })
  funcao: string | null;

  @Column("int", { name: "IDENTIFICADOR", nullable: true })
  identificador: number | null;

  @Column("int", { name: "IDG008", nullable: true })
  idg008: number | null;

  @Column("int", { name: "IDG004", nullable: true })
  idg004: number | null;

  @Column("int", { name: "IDG021", nullable: true })
  idg021: number | null;

  @Column("int", { name: "IDG005", nullable: true })
  idg005: number | null;

  @Column("int", { name: "INTERDIAS", nullable: true })
  interdias: number | null;

  @Column("varchar", { name: "IDDESDOB", nullable: true, length: 255 })
  iddesdob: string | null;

  @Column("varchar", { name: "HISTORICO", nullable: true, length: 255 })
  historico: string | null;

  @Column("varchar", {
    name: "BOLETO",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  boleto: string | null;

  @Column("varchar", { name: "URLBOLETO", nullable: true, length: 255 })
  urlboleto: string | null;

  @Column("varchar", {
    name: "STSBOLETO",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  stsboleto: string | null;

  @Column("decimal", {
    name: "ADICIONAL",
    nullable: true,
    precision: 11,
    scale: 2,
    default: () => "'0.00'",
  })
  adicional: string | null;

  @Column("int", { name: "SEGVIA", nullable: true })
  segvia: number | null;

  @Column("int", { name: "PORTADOR", nullable: true })
  portador: number | null;

  @Column("varchar", { name: "IDRENEGOCIACAO", nullable: true, length: 255 })
  idrenegociacao: string | null;

  @Column("varchar", {
    name: "RENEGOCIADO",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  renegociado: string | null;

  @ManyToOne(() => G004, (g004) => g004.gs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "PORTADOR", referencedColumnName: "idg004" }])
  portador2: G004;

  @OneToMany(() => G037, (g037) => g037.idg03)
  gs: G037[];

  @OneToMany(() => E038, (e038) => e038.idg0)
  es: E038[];
}
