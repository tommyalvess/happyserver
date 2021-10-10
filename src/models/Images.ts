import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './Ophanages';

//Decorator
//Em class em propriedaded ou funções
@Entity('images')
export default class Images{
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    path: string;

    //relacionameto
    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'ophanages_id'})
    orphanage: Orphanage;    
}