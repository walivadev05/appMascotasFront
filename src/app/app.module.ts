import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { MascotaComponent } from './pages/mascota/mascota.component';
import { ListadoMascotasComponent } from './pages/listado-mascotas/listado-mascotas.component';
import { VerMascotaComponent } from './pages/ver-mascota/ver-mascota.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modulos
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    MascotaComponent,
    ListadoMascotasComponent,
    VerMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
