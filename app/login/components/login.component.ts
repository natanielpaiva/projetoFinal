import {Component} from '@angular/core'
import { Usuario } from '../../usuario/class/usuario' 
import { UsuarioService } from '../../usuario/service/usuario.service'
import { LoginService } from '../../login/service/login.service'
import {Router} from '@angular/router';


@Component({
    selector:"login",
    providers: [UsuarioService, LoginService],
    templateUrl:"/app/login/templates/login.template.html"
})
export class LoginComponent { 
    private usuario:Usuario=new Usuario();
    private showLoading:boolean = false;
    private errorMessage:string = null;
    constructor(private usuarioService:UsuarioService, private loginService:LoginService, private router:Router){
        
    }
    onClick(event){
        event.preventDefault();
        this.showLoading = true;  
        this.errorMessage = null;      
        this.usuarioService.insert(this.usuario).subscribe(
            result => this.onLoginResult(result),
            error => this.onLoginError(error)
        );
    }
    onLoginResult(result){
        console.log(result);
        this.loginService.setLogin(result.usuario,result.token);
        this.router.navigate( ['/home'] );
    }
    onLoginError(error){
        this.showLoading = false; 
        this.errorMessage = error._body;
    }
}