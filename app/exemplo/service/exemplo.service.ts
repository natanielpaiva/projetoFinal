import { Injectable } from '@angular/core';
import { Exemplo } from '../class/exemplo';
import { Http, Response } from '@angular/http';
//adicione essa linha
import { Headers, RequestOptions } from '@angular/http';
import { Observable, } from 'rxjs/Observable';

@Injectable()
export class ExemploService {

    exemploUrl = 'https://natanieltse.herokuapp.com/exemplo';

    constructor(private http: Http) { }

    exemplos: Exemplo[];
    public getList(): Observable<Exemplo[]> {
        return this.http.get(this.exemploUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    salvar(exemplo: Exemplo): Observable<Exemplo> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!exemplo._id) {
            return this.http.post(this.exemploUrl, exemplo, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.exemploUrl + "/" + exemplo._id, exemplo, options)
                .map(res => res.json())
                .catch(this.handleError);
        }

    }

    deletar(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.exemploUrl + "/" + id, options);
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


