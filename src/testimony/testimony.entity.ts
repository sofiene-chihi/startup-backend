import { Owner } from 'src/owner/owner.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Testimony {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  content: string;

  @ManyToOne((type) => Owner, (owner) => owner.testimonies)
  owner: Owner;
}
