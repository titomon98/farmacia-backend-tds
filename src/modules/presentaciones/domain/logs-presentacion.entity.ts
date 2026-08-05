import { CreateDateColumn, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//src/modules/presentaciones/domain/logs-presentacion.entity.ts

@Entity({ name: 'logs_presentaciones'})
export class LogPresentacion {
    @PrimaryGeneratedColumn({ name: 'id_log_presentacion'})
    id_log_presentacion: number;

    @Column({ type: 'varchar', length: '100'})
    descripcion: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz'})
    created_at: Date;
}