import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMascotasComponent } from './pages/listado-mascotas/listado-mascotas.component';
import { MascotaComponent } from './pages/mascota/mascota.component';
import { VerMascotaComponent } from './pages/ver-mascota/ver-mascota.component';

const routes: Routes = [
  {path:'',redirectTo: 'listarMascota', pathMatch:'full'},
  {path:'listarmascota', component:ListadoMascotasComponent },
  {path:'agregarmascota', component:MascotaComponent },
  {path:'vermascota/:id', component:VerMascotaComponent },
  {path:'editarmascota/:id', component:MascotaComponent },
  {path:'**', redirectTo: 'listarmascota', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
