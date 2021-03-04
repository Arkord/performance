import { Controller, Body, Put, Get, Param, Post, Delete } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private servicio: UsuariosService) {

    }

    @Get(':id')
    get(@Param() params) {
        return this.servicio.obtenerUsuario(params.id)
    }

    @Post()
    create(@Body() usuario: Usuario) {
        return  this.servicio.crearUsuario(usuario)
    }

    @Put()
    update(@Body() usuario: Usuario) {
        return this.servicio.actualizarUsuario(usuario);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.servicio.borrarUsuario(params.id);
    }
}
