import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { Usuario } from '../domain/usuario.entity';

@Injectable()
export class UsuarioRepository extends BaseRepository<Usuario> {
  constructor(
    @InjectRepository(Usuario)
    repositorio: Repository<Usuario>,
  ) {
    super(repositorio, 'id_usuario');
  }
}
