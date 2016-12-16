import { Component, OnInit } from '@angular/core';
import { Exemplo } from '../class/exemplo';
import { ExemploService } from '../service/exemplo.service';
//nataniel.paiva@gmail.com
@Component({
    selector: 'exemplo',
    templateUrl: 'app/exemplo/templates/exemplo.template.html',
    providers: [ExemploService]
})
export class ExemploComponent implements OnInit {
    exemplos: Exemplo[];
    errorMessage: any;
    i: number;

    constructor(private exemploService: ExemploService) { }

    exemploObject = new Exemplo();

    edit = false;
    
    

    deletar(id, i): void {
        this.i = i;
        this.exemploService.deletar(id)
            .subscribe(
            reponse => this.exemplos.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    salvar(exemplo: Exemplo) {
        if (!exemplo.exemplo) { return; }
        this.exemploService.salvar(exemplo)
            .subscribe(
            usuario => this.popularLista(usuario),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(exemplo: Exemplo) {
        this.exemplos.push(exemplo);
        this.exemploObject = new Exemplo();
    }

    public editar(exemplo, persistir = false): void {
        this.edit = true;
        this.exemploObject = exemplo;
        if (persistir) {
            this.exemploObject = new Exemplo();
            this.edit = false;
        }
    }

    public listar(): void {
        this.exemploService.getList()
            .subscribe(
            exemplos => this.exemplos = exemplos,
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.listar();
    }
}
