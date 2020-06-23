import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { G002 } from "./G002";
import { G006 } from "./G006";
import { G008 } from "./G008";
import { G014 } from "./G014";

@Index("CDBANCO", ["cdbanco", "banco"], { unique: true })
@Index("CDBANCO_2", ["cdbanco", "banco"], { unique: true })
@Index("CDBANCO_3", ["cdbanco"], { unique: true })
@Index("IDG005", ["cdbanco", "banco"], { unique: true })
@Index("NMBANCO", ["banco"], { unique: true })
@Entity("G005", { schema: "metodista_local" })
export class G005 {
  @PrimaryGeneratedColumn({ type: "int", name: "IDG005" })
  idg005: number;

  @Column("varchar", { name: "CDBANCO", unique: true, length: 3 })
  cdbanco: string;

  @Column("varchar", {
    name: "BANCO",
    nullable: true,
    unique: true,
    length: 60,
  })
  banco: string | null;

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

  @Column("int", { name: "CODIGOVARIA", nullable: true })
  codigovaria: number | null;

  @OneToMany(() => G002, (g002) => g002.idg0)
  gs: G002[];

  @OneToMany(() => G006, (g006) => g006.idg0)
  gs2: G006[];

  @OneToMany(() => G008, (g008) => g008.idg02)
  gs3: G008[];

  @OneToMany(() => G014, (g014) => g014.idg02)
  gs4: G014[];
}
