import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../servicios/api/api.service'
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  materiaNombre: string = '';
  resenia: any;

  constructor(private http: HttpClient, private apiResenia: ApiService) { }

  ngOnInit(): void {
    /* this.cargarMateria(); */
    this.cargarResenia("1");
  }


 /*  cargarMateria(): void {
    this.http.get<any>('/api/materia') // Ajusta la URL según sea necesario
      .subscribe({
        next: (data) => {
          this.materiaNombre = data.nombre; // Ajusta según la estructura de tu objeto
        },
        error: (error) => {
          console.error('Error al obtener la materia:', error);
        }
      });
  } */

  cargarResenia(id:string):void{
    this.apiResenia.obtenerReseniaPorId(id)
      .subscribe({
        next:(res) =>{
          this.resenia = res;
          console.log("Reseña cargada", res);
        },
        error:(err)=>{
          alert("error al mostrar la resenia")
        }
      })
    }  
}
