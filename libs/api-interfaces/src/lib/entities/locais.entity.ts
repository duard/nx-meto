import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('FK_G002IDG002_IDG002_idx', ['idg002'], {})
@Index('FK_G004_G019_idx', ['idg019'], {})
@Index('FK_G004_G021_idx', ['idg021'], {})
@Index('FK_G004IDG004FK_IDG004', ['idg004Fk'], {})
@Index('FK_IDE005_IDE005_idx', ['ide005'], {})
@Index('FK_IDG002_IDG002_idx', ['idg002'], {})
@Index('FK_IDG003_IDG003_idx', ['idg003'], {})
@Index('FK_RUBRICACOTAREG_IDG019_idx', ['rubricacotareg'], {})
@Index('FK_RUBRICAPEC_IDG019_idx', ['rubricapec'], {})
@Index('FK_SEDE_IDG001_idx', ['sede'], {})
@Index('G004_UN', ['cnpj'], { unique: true })
@Entity('G004', { schema: 'metodista_local' })
export class LocalEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IDG004' })
  idg004: number;

  @Column('int', { name: 'IDG003', nullable: true })
  idg003: number | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 60 })
  nome: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, unique: true, length: 18 })
  cnpj: string | null;

  @Column('date', { name: 'FUNDACAO', nullable: true })
  fundacao: string | null;

  @Column('int', { name: 'IDE005', nullable: true })
  ide005: number | null;

  @Column('varchar', { name: 'OBSERVAC', nullable: true, length: 500 })
  observac: string | null;

  @Column('varchar', { name: 'EMAILINS', nullable: true, length: 60 })
  emailins: string | null;

  @Column('varchar', { name: 'SITE', nullable: true, length: 60 })
  site: string | null;

  @Column('varchar', { name: 'FACEBOOK', nullable: true, length: 60 })
  facebook: string | null;

  @Column('varchar', { name: 'TWITTER', nullable: true, length: 60 })
  twitter: string | null;

  @Column('varchar', { name: 'YOUTUBE', nullable: true, length: 60 })
  youtube: string | null;

  @Column('varchar', { name: 'INSTAG', nullable: true, length: 60 })
  instag: string | null;

  @Column('varchar', { name: 'TEL1', nullable: true, length: 45 })
  tel1: string | null;

  @Column('varchar', { name: 'TEL2', nullable: true, length: 45 })
  tel2: string | null;

  @Column('varchar', { name: 'TEL3', nullable: true, length: 45 })
  tel3: string | null;

  @Column('varchar', { name: 'TEL4', nullable: true, length: 45 })
  tel4: string | null;

  @Column('datetime', { name: 'CREATED', nullable: true })
  created: Date | null;

  @Column('datetime', { name: 'UPDATED', nullable: true })
  updated: Date | null;

  @Column('varchar', {
    name: 'DELETED',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deleted: string | null;

  @Column('varchar', {
    name: 'STS',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  sts: string | null;

  @Column('timestamp', {
    name: 'DESCONTO_DT',
    default: () => "'1970-01-01 03:00:01'",
  })
  descontoDt: Date;

  @Column('decimal', {
    name: 'DESCONTO_PERCENTUAL',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  descontoPercentual: string | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 9 })
  cep: string | null;

  @Column('varchar', { name: 'LOGRADOU', nullable: true, length: 45 })
  logradou: string | null;

  @Column('int', { name: 'NUMERO', nullable: true })
  numero: number | null;

  @Column('varchar', { name: 'COMPLEM', nullable: true, length: 60 })
  complem: string | null;

  @Column('varchar', { name: 'BAIRRO', nullable: true, length: 60 })
  bairro: string | null;

  @Column('varchar', { name: 'CIDADE', nullable: true, length: 60 })
  cidade: string | null;

  @Column('varchar', { name: 'ESTADO', nullable: true, length: 2 })
  estado: string | null;

  @Column('varchar', { name: 'HISTORIA', nullable: true, length: 60000 })
  historia: string | null;

  @Column('int', { name: 'IDG002', nullable: true })
  idg002: number | null;

  @Column('varchar', { name: 'EMAILPAS', nullable: true, length: 60 })
  emailpas: string | null;

  @Column('varchar', { name: 'EMAILSEC', nullable: true, length: 60 })
  emailsec: string | null;

  @Column('int', { name: 'IDG004FK', nullable: true })
  idg004Fk: number | null;

  @Column('int', { name: 'SEDE', nullable: true })
  sede: number | null;

  @Column('int', { name: 'IDG019', nullable: true })
  idg019: number | null;

  @Column('int', { name: 'IDG021', nullable: true })
  idg021: number | null;

  @Column('varchar', { name: 'RAZAOSOCIAL', nullable: true, length: 100 })
  razaosocial: string | null;

  @Column('int', { name: 'RUBRICAPEC', nullable: true })
  rubricapec: number | null;

  @Column('int', { name: 'RUBRICACOTAREG', nullable: true })
  rubricacotareg: number | null;
}
