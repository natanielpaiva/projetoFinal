import {Injectable} from '@angular/core'
import { Usuario } from '../../usuario/class/usuario';
 
@Injectable()
export class LoginService {
    private usuario:Usuario=null;
    private token:string=null;
    constructor() { }
    setLogin(u:Usuario,t:string){
        this.usuario = u;
        this.token = t;
    }
    getToken():string{
        return this.token;
    }
    getUsuario(){
        return this.usuario;
    }
    isLogged(){
       return this.usuario!=null && this.token!=null; 
    }
    logout(){
        this.usuario = null;
        this.token = null;
    }

}