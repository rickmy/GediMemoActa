import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizadorComponent } from "./visualizador/visualizador.component";
import { ElaboradorComponent } from "./elaborador/elaborador.component";
import { MemorandumsComponent } from './elaborador/memorandums/memorandums.component';
import { ActasComponent } from './elaborador/actas/actas.component';

const routes: Routes = [
   {path:"visualizador",component:VisualizadorComponent},
   {path:"elaborador",component:ElaboradorComponent},
    {
      path:'memo',component:MemorandumsComponent
    },
    {
      path:'actas', component : ActasComponent
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
