import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NuevoRegistroComponent } from './components/nuevo-registro/nuevo-registro.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./guard/auth.guard";
import { BuscarComponent } from "./buscar/buscar.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'registros', 
    component: NuevoRegistroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'buscar',
    component: BuscarComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
