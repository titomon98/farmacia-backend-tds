import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { Usuario } from '../domain/usuario.entity';
import { UsuarioRepository } from '../infrastructure/usuario.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService extends BaseService<
  Usuario,
  CreateUsuarioDto,
  UpdateUsuarioDto
> {
  constructor(private readonly usuarioRepository: UsuarioRepository) {
    super(usuarioRepository, 'Usuario');
  }
}
