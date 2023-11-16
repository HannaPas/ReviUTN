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
  resenias: any;

  constructor(private http: HttpClient, private apiResenia: ApiService) { }

  ngOnInit(): void {
    this.cargarResenias("Algebra");
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

  cargarResenias(materia: string): void {
    this.apiResenia.obtenerReseniasPorMateria(materia)
      .subscribe({
        next: (res) => {
          this.resenias = res;
          console.log(this.resenias)
          console.log("Reseña cargada", res);
        },
        error: (err) => {
          alert("error al mostrar la resenia")
        }
      })
  }



}
