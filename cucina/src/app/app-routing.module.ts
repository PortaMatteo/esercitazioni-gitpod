import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProdottoComponent } from './prodotto/prodotto.component';


const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'product/:id', component: ProdottoComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
