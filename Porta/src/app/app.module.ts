import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondoComponent } from './secondo/secondo.component';
import { TerzoComponent } from './terzo/terzo.component';
import { QuartoComponent } from './quarto/quarto.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondoComponent,
    TerzoComponent,
    QuartoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
