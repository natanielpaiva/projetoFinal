import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from '../usuario/components/usuario.component';
import { HomeComponent } from '../home/components/home.component';
import { LoginComponent } from '../login/components/login.component';
//import { PerfilComponent } from '../perfil/components/
//import { PerfilComponentForm } from '../../perfil/component/perfil.component.form';


//Configurações da rota
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario/:id', component: UsuarioComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent }
    
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);