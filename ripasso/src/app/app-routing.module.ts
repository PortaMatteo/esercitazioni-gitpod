import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
  {path: "", component:ListaComponent},
  {path: "pokemon/:path", component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
