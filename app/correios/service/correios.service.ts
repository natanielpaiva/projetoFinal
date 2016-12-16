import { Injectable } from '@angular/core';
import { Correios } from '../class/correios';
import { Http, Response } from '@angular/http';
import { Observable, } from 'rxjs/Observable';

@Injectable()
export class CorreiosService {

    correiosUrl = 'http://viacep.com.br/ws/';

    constructor(private http: Http) { }

    correios: Correios[];
    public getCep(cep): Observable<Correios[]> {
        return this.http.get(this.correiosUrl + cep +"/json" )
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


