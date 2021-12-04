import { Startup } from 'src/startup/startup.entity';
import { Testimony } from 'src/testimony/testimony.entity';
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;
  @Column()
  email: string;
  @Column()
  image: string;

  @ManyToOne(type => Startup, startup => startup.owners) 
  startup: Startup;

  @OneToMany(type => Testimony, testimony => testimony.owner) 
  testimonies: Testimony[];}
