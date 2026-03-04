import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GlucoseRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: number;

  @Index()
  @Column()
  measurementType: string;

  @Column({ nullable: true })
  note: string;

  @Column()
  measuredAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
