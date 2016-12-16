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
var core_1 = require("@angular/core");
var exemplo_1 = require("../class/exemplo");
var exemplo_service_1 = require("../service/exemplo.service");
//nataniel.paiva@gmail.com
var ExemploComponent = (function () {
    function ExemploComponent(exemploService) {
        this.exemploService = exemploService;
        this.exemploObject = new exemplo_1.Exemplo();
        this.edit = false;
    }
    ExemploComponent.prototype.deletar = function (id, i) {
        var _this = this;
        this.i = i;
        this.exemploService.deletar(id)
            .subscribe(function (reponse) { return _this.exemplos.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    ExemploComponent.prototype.salvar = function (exemplo) {
        var _this = this;
        if (!exemplo.exemplo) {
            return;
        }
        this.exemploService.salvar(exemplo)
            .subscribe(function (usuario) { return _this.popularLista(usuario); }, function (error) { return _this.errorMessage = error; });
    };
    ExemploComponent.prototype.popularLista = function (exemplo) {
        this.exemplos.push(exemplo);
        this.exemploObject = new exemplo_1.Exemplo();
    };
    ExemploComponent.prototype.editar = function (exemplo, persistir) {
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.exemploObject = exemplo;
        if (persistir) {
            this.exemploObject = new exemplo_1.Exemplo();
            this.edit = false;
        }
    };
    ExemploComponent.prototype.listar = function () {
        var _this = this;
        this.exemploService.getList()
            .subscribe(function (exemplos) { return _this.exemplos = exemplos; }, function (error) { return _this.errorMessage = error; });
    };
    ExemploComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    return ExemploComponent;
}());
ExemploComponent = __decorate([
    core_1.Component({
        selector: 'exemplo',
        templateUrl: 'app/exemplo/templates/exemplo.template.html',
        providers: [exemplo_service_1.ExemploService]
    }),
    __metadata("design:paramtypes", [exemplo_service_1.ExemploService])
], ExemploComponent);
exports.ExemploComponent = ExemploComponent;
//# sourceMappingURL=exemplo.component.js.map