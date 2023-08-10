import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Mascota } from 'src/app/interface/mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent implements OnInit,OnDestroy {

  id!: number;
  mascota !:Mascota;
  routeSub!: Subscription;

  //mascota$!=Observable<Mascota>
  constructor( private _mascotaService:MascotaService,private aRoute: ActivatedRoute) {
    //this.id = Number(this.aRoute.snapshot.paramMap.get('id')); opcion para obtener la ruta
  }

  ngOnInit(): void {
    //this.mascota$ = this._mascotaService.getMascota(this.id) --PIPE ASYNC 
   this.routeSub =  this.aRoute.params.subscribe(data => {
      this.id = data['id'];
      this.obtenerMascota();
    })


  }

  obtenerMascota(){

    return this._mascotaService.getMascota(this.id).subscribe(data =>{
        this.mascota = data;
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
  

}
