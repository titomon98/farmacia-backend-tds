import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { DetalleCompraService } from '../application/detalle-compra.service';
import { CreateDetalleCompraDto } from '../application/dto/create-detalle-compra.dto';
import { UpdateDetalleCompraDto } from '../application/dto/update-detalle-compra.dto';

@Controller('detalles-compra')
export class DetalleCompraController {
  constructor(private readonly detalleCompraService: DetalleCompraService) {}

  @Post()
  crear(@Body() createDto: CreateDetalleCompraDto) {
    return this.detalleCompraService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.detalleCompraService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.detalleCompraService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateDetalleCompraDto,
  ) {
    return this.detalleCompraService.actualizar(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.detalleCompraService.eliminar(id);
  }
}
