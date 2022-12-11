import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ListaPrenComponent } from './lista-pren/lista-pren.component';
import { DettagliStanzaComponent } from './dettagli-stanza/dettagli-stanza.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPrenComponent,
    DettagliStanzaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
