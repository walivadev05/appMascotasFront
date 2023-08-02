import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from 'src/app/interface/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent {

  loading:boolean = false;
  form:FormGroup

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      nombre:['',Validators.required],
      raza  :['',Validators.required],
      color :['',Validators.required],
      edad  :['',Validators.required],
      peso  :['',Validators.required],
    })
  }

  agregarMascota(){
    const mascota:Mascota = {
      nombre: this.form.value.nombre,
      raza: this.form.value.raza,
      color: this.form.value.color,
      edad: this.form.value.edad,
      peso: this.form.value.peso
    }
    
    console.log(mascota)
  }


}
