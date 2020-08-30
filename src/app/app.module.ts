import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NuevoRegistroComponent } from './components/nuevo-registro/nuevo-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoRegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
