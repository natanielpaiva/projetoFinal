import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './../usuario/components/usuario.component';
import { ExemploComponent } from './../exemplo/components/exemplo.component';
import { HomeComponent } from './../home/components/home.component';
import { LoginComponent } from './../login/components/login.component';
import { HttpModule } from '@angular/http';
import { HeadersService } from './headers';

import { routing } from './route';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
        ],
    //Adicionar essa linha
    declarations: [
        AppComponent,
        UsuarioComponent,
        ExemploComponent,
        HomeComponent,
        LoginComponent
    ],
    //Adicionar essa linha
    bootstrap: [AppComponent],
    providers:[HeadersService]
})
export class AppModule { }