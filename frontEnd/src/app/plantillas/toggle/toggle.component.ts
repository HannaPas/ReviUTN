import { Component } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../servicios/api/api.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {

  catedra: [] = []

  constructor(private http: HttpClient, private apiResenia: ApiService) { }

  
  ngOnInit(): void {
    this.cargarProfesores("Algebra");
  }

  cargarProfesores(materia:string):void{
    this.apiResenia.obtenerProfesoresMateria(materia)
      .subscribe({
        next:(res) =>{
          this.catedra = res;
          console.log(this.catedra)
          console.log("Profesores cargados", res);
        },
        error:(err)=>{
          alert("error al mostrar la resenia")
        }
      })
    }  

}
