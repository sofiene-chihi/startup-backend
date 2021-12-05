import { Owner } from 'src/owner/owner.entity';
import { Column, Entity,OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Startup {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({default:""})
  name: string;
  @Column({default:""})
  address: string;
  @Column()
  logo: string;
  @Column()
  lat: string;
  @Column()
  lng: string;
  @Column()
  img_str: string;

  @OneToMany(type => Owner, owner => owner.startup) 
  owners: Owner[];
}
