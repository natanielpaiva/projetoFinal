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
var usuario_service_1 = require('../service/usuario.service');
//nataniel.paiva@gmail.com
var ExemploComponent = (function () {
    function ExemploComponent(exemploService) {
        this.exemploService = exemploService;
        this.usuarioObject = new Usuario();
        this.edit = false;
    }
    ExemploComponent.prototype.deletarUsuario = function (id, i) {
        var _this = this;
        this.i = i;
        this.usuarioService.deletarUsuario(id)
            .subscribe(function (reponse) { return _this.usuarios.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    ExemploComponent.prototype.salvarUsuario = function (usuario) {
        var _this = this;
        if (!usuario.nome) {
            return;
        }
        this.usuarioService.salvarUsuario(usuario)
            .subscribe(function (usuario) { return _this.popularLista(usuario); }, function (error) { return _this.errorMessage = error; });
    };
    ExemploComponent.prototype.popularLista = function (usuario) {
        this.usuarios.push(usuario);
        this.usuarioObject = new Usuario();
    };
    ExemploComponent.prototype.editarUsuario = function (usuario, persistir) {
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.usuarioObject = usuario;
        if (persistir) {
            this.usuarioObject = new Usuario();
            this.edit = false;
        }
    };
    ExemploComponent.prototype.listar = function () {
        var _this = this;
        this.usuarioService.getListUsuario()
            .subscribe(function (usuarios) { return _this.usuarios = usuarios; }, function (error) { return _this.errorMessage = error; });
    };
    ExemploComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    ExemploComponent = __decorate([
        core_1.Component({
            selector: 'usuario',
            templateUrl: 'app/exemplo/templates/exemplo.template.html',
            providers: [usuario_service_1.ExemploService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof usuario_service_1.ExemploService !== 'undefined' && usuario_service_1.ExemploService) === 'function' && _a) || Object])
    ], ExemploComponent);
    return ExemploComponent;
    var _a;
}());
exports.ExemploComponent = ExemploComponent;
//# sourceMappingURL=usuario.component.js.map