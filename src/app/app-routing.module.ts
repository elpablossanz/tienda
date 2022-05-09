import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { ArticuloFormComponent } from './home/articulo-form/articulo-form.component';
import { ArticuloListComponent } from './home/articulo-list/articulo-list.component';
import { ArticuloService } from './home/articulo.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'acerca', component:AcercaComponent},
{path: 'articulos', component:ArticuloListComponent},
{path: 'articulo/:idArticulo', component:ArticuloFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
