import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Resenia } from 'src/app/modelos/resenia';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{

  estrellasArray: number[] = [];
  suma:number=0;
  promedio :any;
  largo: number=0;

  constructor(private http: HttpClient, private apiResenia: ApiService){}

  ngOnInit(): void {
    this.getCalificacionPromedio("Algebra");
  /*   this.calificacionPromedio(); */
  }


  getCalificacionPromedio(materia: string): any {
    this.apiResenia.obtenerReseniasPorMateria(materia)
      .subscribe({
        next: (res: Resenia[]) => { 

          this.estrellasArray = res.map((resenia: Resenia) => resenia.estrellas as number);
  
          this.largo = this.estrellasArray.length;

          for (let i = 0; i < this.largo; i++) {
            this.suma += this.estrellasArray[i];
            }
      
          this.promedio = this.suma/this.largo;
      
          console.log("promedio", this.promedio)

          console.log("Estrellas cargadas", this.estrellasArray);
        },
        error: (err) => {
          alert("Error al mostrar las estrellas");
        }
      });
  }
/* 
  calificacionPromedio() {
   
   console.log("lenght",this.largo)
  
    for (let i = 0; i < this.largo; i++) {
      this.suma += this.estrellasArray[i];
      console.log("suma", this.suma);
      }

    this.promedio = this.suma/this.largo;

    console.log("promedio", this.promedio)
  
  } */
  
}
