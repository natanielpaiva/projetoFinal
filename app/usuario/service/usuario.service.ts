import { Injectable } from '@angular/core';
import { Usuario } from '../class/usuario';
import { Http, Response } from '@angular/http';
//adicione essa linha
import { Headers, RequestOptions } from '@angular/http';
import { Observable, } from 'rxjs/Observable';
import { HeadersService } from './../../config/headers';

@Injectable()
export class UsuarioService {

    usuarioUrl = 'https://rest-auth.herokuapp.com/usuario/';
    urlLogin = 'https://rest-auth.herokuapp.com/login';

    constructor(private http: Http,
        private _header: HeadersService) { }

    public insert(u: Usuario) {
        return this.http
            .post(this.urlLogin, JSON.stringify(u), this._header.getJsonHeaders())
            .map(res => res.json());
    }

    usuarios: Usuario[];
    public getListUsuario(): Observable<Usuario[]> {
        return this.http.get(this.usuarioUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    //método para salvar o usuário
    salvarUsuario(usuario: Usuario): Observable<Usuario> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(usuario);
        if (!usuario._id) {
            return this.http.post(this.usuarioUrl, usuario, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.usuarioUrl + "/" + usuario._id, usuario, options)
                .map(res => res.json())
                .catch(this.handleError);
        }

    }

    deletarUsuario(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.usuarioUrl + "/" + id, options);
    }

    //Crie esse método
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}


