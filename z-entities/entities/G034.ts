import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { E016 } from "./E016";
import { E022 } from "./E022";
import { E035 } from "./E035";
import { E039 } from "./E039";
import { G004 } from "./G004";
import { G039 } from "./G039";
import { G046 } from "./G046";

@Index("FK_G034LOCAL_G004_idx", ["local"], {})
@Entity("G034", { schema: "metodista_local" })
export class G034 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG034" })
  idg034: number;

  @Column("int", { name: "LOCAL", nullable: true })
  local: number | null;

  @Column("int", { name: "ANO", nullable: true })
  ano: number | null;

  @Column("int", { name: "MES", nullable: true })
  mes: number | null;

  @Column("varchar", { name: "STATUS", nullable: true, length: 45 })
  status: string | null;

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

  @Column("text", { name: "PECULIO", nullable: true })
  peculio: string | null;

  @Column("varchar", { name: "URL", nullable: true, length: 250 })
  url: string | null;

  @OneToMany(() => E016, (e016) => e016.idg02)
  es: E016[];

  @OneToMany(() => E022, (e022) => e022.idg03)
  es2: E022[];

  @OneToMany(() => E035, (e035) => e035.idg0)
  es3: E035[];

  @OneToMany(() => E039, (e039) => e039.idg02)
  es4: E039[];

  @ManyToOne(() => G004, (g004) => g004.g11, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "LOCAL", referencedColumnName: "idg004" }])
  local2: G004;

  @OneToMany(() => G039, (g039) => g039.idg05)
  gs: G039[];

  @OneToMany(() => G046, (g046) => g046.idg0)
  gs2: G046[];
}
