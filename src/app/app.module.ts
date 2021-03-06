import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NuevoRegistroComponent } from './components/nuevo-registro/nuevo-registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

//MODULOS FIREBASE
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AuthService } from "./services/auth.service";
import { AuthGuard } from './guard/auth.guard';
import { BuscarComponent } from './buscar/buscar.component';
import { FilterPipe } from './pipes/filter.pipe';
import * as printJS from 'print-js';

@NgModule({
  declarations: [
    AppComponent,
    NuevoRegistroComponent,
    LoginComponent,
    HomeComponent,
    BuscarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
