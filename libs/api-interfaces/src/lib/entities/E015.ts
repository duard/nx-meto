import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G006 } from "./G006";

@Index("fk_contas", ["idg006"], {})
@Entity("E015", { schema: "metodista_local" })
export class E015 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDE015" })
  ide015: number;

  @Column("int", { name: "IDG006" })
  idg006: number;

  @Column("varchar", { name: "SUBCONTA", length: 3 })
  subconta: string;

  @Column("varchar", { name: "ULTIDISC", nullable: true, length: 6 })
  ultidisc: string | null;

  @Column("varchar", { name: "SEQUENCI", nullable: true, length: 6 })
  sequenci: string | null;

  @Column("varchar", { name: "DC", nullable: true, length: 1 })
  dc: string | null;

  @Column("varchar", { name: "NAUTOMAT", nullable: true, length: 1 })
  nautomat: string | null;

  @Column("varchar", { name: "CEPDEP", nullable: true, length: 1 })
  cepdep: string | null;

  @Column("varchar", { name: "OPERACAO", nullable: true, length: 25 })
  operacao: string | null;

  @Column("float", { name: "IOF", nullable: true, precision: 10, scale: 2 })
  iof: number | null;

  @Column("varchar", { name: "INSTPRIM", nullable: true, length: 4 })
  instprim: string | null;

  @Column("varchar", { name: "INSTSECU", nullable: true, length: 4 })
  instsecu: string | null;

  @Column("varchar", { name: "EXTENSAO", length: 3 })
  extensao: string;

  @Column("varchar", { name: "FAIXINIC", nullable: true, length: 12 })
  faixinic: string | null;

  @Column("varchar", { name: "FAIXAFIM", nullable: true, length: 12 })
  faixafim: string | null;

  @Column("varchar", { name: "FAIXATUA", nullable: true, length: 12 })
  faixatua: string | null;

  @Column("varchar", { name: "CODEMPRE", nullable: true, length: 12 })
  codempre: string | null;

  @Column("varchar", { name: "DESPPRIN", nullable: true, length: 1 })
  despprin: string | null;

  @Column("varchar", { name: "LOTECNAB", nullable: true, length: 4 })
  lotecnab: string | null;

  @Column("varchar", { name: "BYTES", nullable: true, length: 3 })
  bytes: string | null;

  @Column("varchar", {
    name: "COBRELET",
    nullable: true,
    comment: "1- NÃO / 2 - E-FINANCIAL",
    length: 1,
  })
  cobrelet: string | null;

  @Column("varchar", {
    name: "CODCELET",
    nullable: true,
    comment: "CÓDIGO COBRANÇA ELETRÔNICA",
    length: 2,
  })
  codcelet: string | null;

  @Column("varchar", {
    name: "RETOAUTO",
    nullable: true,
    comment: "0 - NÃO / 1 - RECEBIMENTO",
    length: 1,
  })
  retoauto: string | null;

  @Column("date", { name: "CREATED", nullable: true })
  created: string | null;

  @Column("date", { name: "UPDATED", nullable: true })
  updated: string | null;

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

  @Column("varchar", { name: "CNABCP", nullable: true, length: 4 })
  cnabcp: string | null;

  @Column("varchar", { name: "BYTESCP", nullable: true, length: 3 })
  bytescp: string | null;

  @ManyToOne(() => G006, (g006) => g006.es2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG006", referencedColumnName: "idg006" }])
  idg0: G006;
}
