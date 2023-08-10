import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interface/mascota';
import { MascotaService } from 'src/app/service/mascota.service';

/*
const listaMascotas: Mascota[] = [
  { nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'draco', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'cory', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'sultan', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'draw', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 },
  { nombre: 'rocky', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13 }
];*/


@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoMascotasComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina'

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private _snackBar: MatSnackBar, private _mascotaService:MascotaService) {
  }

  ngOnInit(): void {
    this.obtenerMascotas();
   }

  obtenerMascotas(){
    this.loading = true;
    this._mascotaService.getMascotas().subscribe(data =>{
      //console.log(data);
      this.loading = false;
      this.dataSource.data = data;
    })
  }

  eliminarMascota(id:number) {
    this.loading = true;
    this._mascotaService.deleteMascota(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerMascotas();
    });
  }

  mensajeExito(){
    this._snackBar.open('La mascota fue eliminada con exito', '', {
      duration: 4000,
      horizontalPosition: 'right'
    });  
  }

}
