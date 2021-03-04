import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50})
    nombre: string;

    @Column({ length: 50})
    apellido: string;

    
}

