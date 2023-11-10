import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  materiaNombre: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarMateria();
  }

  cargarMateria(): void {
    this.http.get<any>('/api/materia') // Ajusta la URL según sea necesario
      .subscribe({
        next: (data) => {
          this.materiaNombre = data.nombre; // Ajusta según la estructura de tu objeto
        },
        error: (error) => {
          console.error('Error al obtener la materia:', error);
        }
      });
  }
}
