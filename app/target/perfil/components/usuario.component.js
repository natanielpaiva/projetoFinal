"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var usuario_1 = require('../class/usuario');
var usuario_service_1 = require('../service/usuario.service');
//nataniel.paiva@gmail.com
var UsuarioComponent = (function () {
    function UsuarioComponent(usuarioService) {
        this.usuarioService = usuarioService;
        this.usuarioObject = new usuario_1.Usuario();
        this.perfis = [
            { nome: "Admin" },
            { nome: "Oreia" },
            { nome: "Professor" }
        ];
        this.edit = false;
    }
    UsuarioComponent.prototype.deletarUsuario = function (id, i) {
        var _this = this;
        this.i = i;
        this.usuarioService.deletarUsuario(id)
            .subscribe(function (reponse) { return _this.usuarios.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    UsuarioComponent.prototype.salvarUsuario = function (usuario) {
        var _this = this;
        if (!usuario.nome) {
            return;
        }
        console.log(usuario);
        this.usuarioService.salvarUsuario(usuario)
            .subscribe(function (usuario) { return _this.popularLista(usuario); }, function (error) { return _this.errorMessage = error; });
    };
    UsuarioComponent.prototype.popularLista = function (usuario) {
        this.usuarios.push(usuario);
        this.usuarioObject = new usuario_1.Usuario();
        this.usuarioObject.perfil = this.perfis[0];
    };
    UsuarioComponent.prototype.editarUsuario = function (usuario, persistir) {
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        for (var p in this.perfis) {
            if (usuario.perfil.nome === this.perfis[p].nome) {
                usuario.perfil = this.perfis[p];
            }
        }
        this.usuarioObject = usuario;
        if (persistir) {
            this.usuarioObject = new usuario_1.Usuario();
            this.edit = false;
            this.usuarioObject.perfil = this.perfis[0];
        }
    };
    UsuarioComponent.prototype.listar = function () {
        var _this = this;
        this.usuarioService.getListUsuario()
            .subscribe(function (usuarios) { return _this.usuarios = usuarios; }, function (error) { return _this.errorMessage = error; });
    };
    UsuarioComponent.prototype.ngOnInit = function () {
        this.listar();
        this.usuarioObject.perfil = this.perfis[2];
    };
    UsuarioComponent = __decorate([
        core_1.Component({
            selector: 'usuario',
            templateUrl: 'app/usuario/templates/usuario.template.html',
            providers: [usuario_service_1.UsuarioService]
        }), 
        __metadata('design:paramtypes', [usuario_service_1.UsuarioService])
    ], UsuarioComponent);
    return UsuarioComponent;
}());
exports.UsuarioComponent = UsuarioComponent;
//# sourceMappingURL=usuario.component.js.map