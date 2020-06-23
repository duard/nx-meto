import { Column, Entity } from "typeorm";

@Entity("users", { schema: "metodista_local" })
export class Users {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "nome", nullable: true, length: 255 })
  nome: string | null;

  @Column("varchar", { name: "user", length: 45 })
  user: string;

  @Column("varchar", { name: "img", nullable: true, length: 45 })
  img: string | null;

  @Column("text", { name: "token", nullable: true })
  token: string | null;

  @Column("varchar", {
    name: "sts",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  sts: string | null;

  @Column("datetime", { name: "created", nullable: true })
  created: Date | null;

  @Column("datetime", { name: "updated", nullable: true })
  updated: Date | null;

  @Column("varchar", {
    name: "deleted",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deleted: string | null;
}
