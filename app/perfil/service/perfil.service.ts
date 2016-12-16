import { Injectable } from '@angular/core';
import { Perfil } from '../class/perfil';
import { Http, Response } from '@angular/http';
import { Observable, } from 'rxjs/Observable';

@Injectable()
export class PerfilService {

    perfilUrl = 'https://natanieltse.herokuapp.com/perfil/';

    constructor(private http: Http) { }

    perfis: Perfil[];
    public getList(): Observable<Perfil[]> {
        return this.http.get(this.perfilUrl)
            .map(res => res.json())
            .catch(this.handleError);
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


