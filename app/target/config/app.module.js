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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var usuario_component_1 = require("./../usuario/components/usuario.component");
var exemplo_component_1 = require("./../exemplo/components/exemplo.component");
var home_component_1 = require("./../home/components/home.component");
var login_component_1 = require("./../login/components/login.component");
var http_1 = require("@angular/http");
var headers_1 = require("./headers");
var route_1 = require("./route");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            route_1.routing
        ],
        //Adicionar essa linha
        declarations: [
            app_component_1.AppComponent,
            usuario_component_1.UsuarioComponent,
            exemplo_component_1.ExemploComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent
        ],
        //Adicionar essa linha
        bootstrap: [app_component_1.AppComponent],
        providers: [headers_1.HeadersService]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map