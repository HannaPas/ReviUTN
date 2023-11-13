import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{

  resenias: [] = []

  constructor(){}

  ngOnInit(): void {
    
  }

/* con el getAll de reseñas lleno el array resenias y se hace el promedio */

/*   getCalificacionPromedio(): number {
    if (this.resenias.length === 0) {
      return 0; // Retorna 0 si no hay reseñas
    }

    const sumatoriaEstrellas = this.resenias.reduce((total, resenia) => total + resenia.estrellas, 0);
    return sumatoriaEstrellas / this.resenias.length;
  } */



}
