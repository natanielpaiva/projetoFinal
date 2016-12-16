import { Component, OnInit } from '@angular/core';
import { Usuario } from '../class/usuario';
import { Perfil } from '../../perfil/class/perfil';
import { UsuarioService } from '../service/usuario.service';
import { PerfilService } from '../../perfil/service/perfil.service';
import { CorreiosService } from '../../correios/service/correios.service';
//nataniel.paiva@gmail.com
@Component({
    selector: 'usuario',
    templateUrl: 'app/usuario/templates/usuario.template.html',
    providers: [UsuarioService, PerfilService, CorreiosService]
})
export class UsuarioComponent implements OnInit {
    usuarios: Usuario[];
    usuarioObject = new Usuario();
    perfis: Perfil[];

    errorMessage: any;
    i: number;

    constructor(private usuarioService: UsuarioService,
        private perfilService: PerfilService,
        private correiosService: CorreiosService) {
    }
    edit = false;

    onChange(cep): void {
       
        if (cep != null) {
            if (cep.toString().length === 8) {
                this.correiosService.getCep(cep)
                .subscribe(
                    response => this.popularLogadouro(response)
                );
            }
        }
    }
    
    popularLogadouro(response){
        this.usuarioObject.endereco = 
        "Logradouro: " + response.logradouro + 
        " Barrio: " + response.bairro ; 
    }

    deletarUsuario(id, i): void {
        this.i = i;
        this.usuarioService.deletarUsuario(id)
            .subscribe(
            reponse => this.usuarios.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    salvarUsuario(usuario: Usuario) {
        if (!usuario.nome) { return; }
        console.log(usuario);
        this.usuarioService.salvarUsuario(usuario)
            .subscribe(
            usuario => this.popularLista(usuario),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(usuario: Usuario) {
        this.usuarios.push(usuario);
        this.usuarioObject = new Usuario();
        this.usuarioObject.perfil = this.perfis[0];
    }

    public editarUsuario(usuario, persistir = false): void {
        this.edit = true;

        for (var p in this.perfis) {
            if (usuario.perfil.nome === this.perfis[p].nome) {
                usuario.perfil = this.perfis[p];
            }
        }

        this.usuarioObject = usuario;

        if (persistir) {
            this.usuarioObject = new Usuario();
            this.edit = false;
            this.usuarioObject.perfil = this.perfis[0];
        }
    }

    public listar(): void {
        this.usuarioService.getListUsuario()
            .subscribe(
            usuarios => this.usuarios = usuarios,
            error => this.errorMessage = <any>error);
    }

    public listarPerfil(): void {
        this.perfilService.getList()
            .subscribe(
            response => this.popularPerfis(response),
            error => this.errorMessage = <any>error);
    }
    popularPerfis(perfis): void {
        this.perfis = perfis;
        this.usuarioObject.perfil = this.perfis[0];
    }

    ngOnInit(): void {
        this.listar();
        this.listarPerfil();
    }
}
