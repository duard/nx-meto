import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { G043 } from "./G043";
import { G033 } from "./G033";
import { G038 } from "./G038";

@Entity("G032", { schema: "metodista_local" })
export class G032 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG032" })
  idg032: number;

  @Column("varchar", { name: "title", length: 60 })
  title: string;

  @Column("varchar", { name: "type", length: 1 })
  type: string;

  @Column("varchar", { name: "icon", nullable: true, length: 60 })
  icon: string | null;

  @Column("varchar", { name: "url", nullable: true, length: 60 })
  url: string | null;

  @Column("int", { name: "idpai", nullable: true })
  idpai: number | null;

  @Column("date", { name: "CREATED", nullable: true })
  created: string | null;

  @Column("varchar", {
    name: "DELETED",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deleted: string | null;

  @Column("date", { name: "UPDATED", nullable: true })
  updated: string | null;

  @Column("varchar", {
    name: "STS",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  sts: string | null;

  @Column("varchar", { name: "id", nullable: true, length: 60 })
  id: string | null;

  @Column("int", { name: "ordem" })
  ordem: number;

  @OneToMany(() => G043, (g043) => g043.idg02)
  gs: G043[];

  @OneToMany(() => G033, (g033) => g033.idg02)
  gs2: G033[];

  @OneToMany(() => G038, (g038) => g038.idg02)
  gs3: G038[];
}
