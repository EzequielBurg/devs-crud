import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("devs")
export class Dev {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  sexo: string;

  @Column()
  idade: number;

  @Column()
  hobby: string;

  @Column()
  datanascimento: Date;

  @CreateDateColumn()
  created_at: Date;
}
