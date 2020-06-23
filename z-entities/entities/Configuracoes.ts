import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("configuracoes", { schema: "metodista_local" })
export class Configuracoes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", {
    name: "qtd_dias_vencimento",
    nullable: true,
    default: () => "'5'",
  })
  qtdDiasVencimento: number | null;

  @Column("int", {
    name: "dia_limite_desconto",
    nullable: true,
    default: () => "'10'",
  })
  diaLimiteDesconto: number | null;
}
