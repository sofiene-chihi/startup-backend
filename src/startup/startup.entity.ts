import { Owner } from 'src/owner/owner.entity';
import { Column, Entity,OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Startup {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  field: string;
  @Column()
  logo: string;
  @Column()
  turnover: number;

  @OneToMany(type => Owner, owner => owner.startup) 
  owners: Owner[];
}
