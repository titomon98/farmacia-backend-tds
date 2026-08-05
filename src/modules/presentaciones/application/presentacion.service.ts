import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { Presentacion } from '../domain/presentacion.entity';
import { PresentacionRepository } from '../infrastructure/presentacion.repository';
import { CreatePresentacionDto } from './dto/create-presentacion.dto';
import { UpdatePresentacionDto } from './dto/update-presentacion.dto';

//Importar luego de añadir logs-presentacion
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogPresentacion } from '../domain/logs-presentacion.entity';

@Injectable()
export class PresentacionService extends BaseService<
  Presentacion,
  CreatePresentacionDto,
  UpdatePresentacionDto
> {
  constructor(
    private readonly presentacionRepository: PresentacionRepository,
    @InjectRepository(LogPresentacion)
    private readonly logRepository: Repository<LogPresentacion>
  ) {
    super(presentacionRepository, 'Presentacion');
  }

  async crear(crearDto: CreatePresentacionDto): Promise<Presentacion> {
    const nuevaPresentacion = await super.crear(crearDto);

    const fecha = new Date().toLocaleDateString('es-GT')
    const hora = new Date().toLocaleTimeString('es-GT')
    let descripcion = 'Presentacion ' + nuevaPresentacion.nombre_presentacion + ' generada el dia ' + fecha + 'a las ' + hora;

    await this.logRepository.save({
      descripcion: descripcion
    })

    return nuevaPresentacion
  }
}
