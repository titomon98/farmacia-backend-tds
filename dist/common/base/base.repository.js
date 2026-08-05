"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    repositorio;
    llavePrimaria;
    constructor(repositorio, llavePrimaria) {
        this.repositorio = repositorio;
        this.llavePrimaria = llavePrimaria;
    }
    crear(datos) {
        const entidad = this.repositorio.create(datos);
        return this.repositorio.save(entidad);
    }
    listar(pagina, limite) {
        return this.repositorio.findAndCount({
            skip: (pagina - 1) * limite,
            take: limite,
            order: { [this.llavePrimaria]: 'ASC' },
        });
    }
    buscarPorId(id) {
        return this.repositorio.findOne({
            where: { [this.llavePrimaria]: id },
        });
    }
    async actualizar(id, datos) {
        const entidad = await this.repositorio.preload({
            [this.llavePrimaria]: id,
            ...datos,
        });
        if (!entidad)
            return null;
        return this.repositorio.save(entidad);
    }
    async eliminar(id) {
        const resultado = await this.repositorio.delete(id);
        return (resultado.affected ?? 0) > 0;
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map