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
var usuario_1 = require("../../usuario/class/usuario");
var usuario_service_1 = require("../../usuario/service/usuario.service");
var login_service_1 = require("../../login/service/login.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(usuarioService, loginService, router) {
        this.usuarioService = usuarioService;
        this.loginService = loginService;
        this.router = router;
        this.usuario = new usuario_1.Usuario();
        this.showLoading = false;
        this.errorMessage = null;
    }
    LoginComponent.prototype.onClick = function (event) {
        var _this = this;
        event.preventDefault();
        this.showLoading = true;
        this.errorMessage = null;
        this.usuarioService.insert(this.usuario).subscribe(function (result) { return _this.onLoginResult(result); }, function (error) { return _this.onLoginError(error); });
    };
    LoginComponent.prototype.onLoginResult = function (result) {
        console.log(result);
        this.loginService.setLogin(result.usuario, result.token);
        this.router.navigate(['/home']);
    };
    LoginComponent.prototype.onLoginError = function (error) {
        this.showLoading = false;
        this.errorMessage = error._body;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login",
        providers: [usuario_service_1.UsuarioService, login_service_1.LoginService],
        templateUrl: "/app/login/templates/login.template.html"
    }),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService, login_service_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map