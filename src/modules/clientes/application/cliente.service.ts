import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { Cliente } from '../domain/cliente.entity';
import { ClienteRepository } from '../infrastructure/cliente.repository';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService extends BaseService<
  Cliente,
  CreateClienteDto,
  UpdateClienteDto
> {
  constructor(private readonly clienteRepository: ClienteRepository) {
    super(clienteRepository, 'Cliente');
  }
}
