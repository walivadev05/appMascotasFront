import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from '../interface/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  myAppUrl:string ='https://localhost:7161/api/Mascota/'

  constructor(private http: HttpClient) { }

  getMascotas():Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.myAppUrl}`);
  }

  getMascota(id: number):Observable<Mascota>{
    return this.http.get<Mascota>(`${this.myAppUrl}${id}`);
  }

  deleteMascota(id: number):Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${id}`);
  }

  addMascota(mascota:Mascota): Observable<Mascota>{
    return this.http.post<Mascota>(`${this.myAppUrl}`,mascota);
  }

  updateMascota(id:number,mascota:Mascota): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${id}`,mascota);
  }

}
