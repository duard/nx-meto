import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { G034 } from "./G034";

@Index("FK_G046_G034_idx", ["idg034"], {})
@Entity("G046", { schema: "metodista_local" })
export class G046 {
  @Column("int", { primary: true, name: "IDG046" })
  idg046: number;

  @Column("int", { name: "IDG034", nullable: true })
  idg034: number | null;

  @Column("varchar", { name: "NOMEPAGADOR", nullable: true, length: 100 })
  nomepagador: string | null;

  @Column("varchar", { name: "CPFOUCNPJPAGADOR", nullable: true, length: 20 })
  cpfoucnpjpagador: string | null;

  @Column("varchar", { name: "LOGRADOUROPAGADOR", nullable: true, length: 100 })
  logradouropagador: string | null;

  @Column("varchar", { name: "BAIRROPAGADOR", nullable: true, length: 100 })
  bairropagador: string | null;

  @Column("varchar", { name: "CIDADEPAGADOR", nullable: true, length: 100 })
  cidadepagador: string | null;

  @Column("varchar", { name: "UFPAGADOR", nullable: true, length: 10 })
  ufpagador: string | null;

  @Column("varchar", { name: "CEPPAGADOR", nullable: true, length: 10 })
  ceppagador: string | null;

  @Column("varchar", { name: "NOMEBENEFICIARIO", nullable: true, length: 100 })
  nomebeneficiario: string | null;

  @Column("varchar", {
    name: "CPFOUCNPJBENEFICIARIO",
    nullable: true,
    length: 20,
  })
  cpfoucnpjbeneficiario: string | null;

  @Column("varchar", {
    name: "CARTEIRABENEFICIARIO",
    nullable: true,
    length: 10,
  })
  carteirabeneficiario: string | null;

  @Column("varchar", { name: "AGENCIA", nullable: true, length: 10 })
  agencia: string | null;

  @Column("varchar", { name: "CODIGOBENEFICIARIO", nullable: true, length: 15 })
  codigobeneficiario: string | null;

  @Column("varchar", {
    name: "NOSSONUMEROBENEFICIARIO",
    nullable: true,
    length: 20,
  })
  nossonumerobeneficiario: string | null;

  @Column("varchar", {
    name: "DIGITONOSSONUMEROBENEFICIARIO",
    nullable: true,
    length: 2,
  })
  digitonossonumerobeneficiario: string | null;

  @Column("int", { name: "DIAVENCIMENTO", nullable: true })
  diavencimento: number | null;

  @Column("int", { name: "MESVENCIMENTO", nullable: true })
  mesvencimento: number | null;

  @Column("int", { name: "ANOVENCIMENTO", nullable: true })
  anovencimento: number | null;

  @Column("int", { name: "DIAPROCESSAMENTO", nullable: true })
  diaprocessamento: number | null;

  @Column("int", { name: "MESPROCESSAMENTO", nullable: true })
  mesprocessamento: number | null;

  @Column("int", { name: "ANOPROCESSAMENTO", nullable: true })
  anoprocessamento: number | null;

  @Column("decimal", {
    name: "VALORBOLETO",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  valorboleto: string | null;

  @Column("varchar", { name: "NUMERODOCUMENTO", nullable: true, length: 45 })
  numerodocumento: string | null;

  @Column("varchar", { name: "REMESSA", nullable: true, length: 250 })
  remessa: string | null;

  @Column("varchar", {
    name: "AGENCIABENEFICIARIO",
    nullable: true,
    length: 20,
  })
  agenciabeneficiario: string | null;

  @Column("varchar", {
    name: "BAIRROBENEFICIARIO",
    nullable: true,
    length: 100,
  })
  bairrobeneficiario: string | null;

  @Column("varchar", {
    name: "CIDADEBENEFICIARIO",
    nullable: true,
    length: 100,
  })
  cidadebeneficiario: string | null;

  @Column("varchar", { name: "CEPBENEFICIARIO", nullable: true, length: 15 })
  cepbeneficiario: string | null;

  @Column("varchar", {
    name: "LOGRADOUROBENEFICIARIO",
    nullable: true,
    length: 100,
  })
  logradourobeneficiario: string | null;

  @Column("varchar", { name: "UFBENEFICIARIO", nullable: true, length: 2 })
  ufbeneficiario: string | null;

  @Column("int", { name: "NUMEROBENEFICIARIO", nullable: true })
  numerobeneficiario: number | null;

  @Column("varchar", { name: "URL", nullable: true, length: 200 })
  url: string | null;

  @ManyToOne(() => G034, (g034) => g034.gs2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "IDG034", referencedColumnName: "idg034" }])
  idg0: G034;
}
