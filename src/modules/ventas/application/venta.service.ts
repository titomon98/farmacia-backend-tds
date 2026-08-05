import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { Venta } from '../domain/venta.entity';
import { VentaRepository } from '../infrastructure/venta.repository';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Injectable()
export class VentaService extends BaseService<
  Venta,
  CreateVentaDto,
  UpdateVentaDto
> {
  constructor(private readonly ventaRepository: VentaRepository) {
    super(ventaRepository, 'Venta');
  }
}
