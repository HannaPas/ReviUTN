/* import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5500/api'; // Reemplaza con la URL correcta de tu backend

  constructor(private http: HttpClient) { }

  public crearResenias(reseniasData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, reseniasData);
  }

  public borrarResenias(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/`);
  }

  public obtenerReseniaPorId(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Agrega funciones para las demás operaciones (obtenerTextoResenia, obtenerReseniasPorMateria, etc.)
} */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5500/api/resenias';

  constructor(private http: HttpClient) { }

  private jsonHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' // Ajusta según tus necesidades
  });

  public crearResenias(reseniasData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, reseniasData, { headers: this.jsonHeaders });
  }

  public borrarResenias(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/`, { headers: this.jsonHeaders });
  }

  public obtenerReseniaPorId(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { headers: this.jsonHeaders });
  }

  public obtenerReseniasPorMateria(materia: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/materia/${materia}`, { headers: this.jsonHeaders });
  }

  public obtenerProfesoresMateria(materia:string): Observable<any>{
    return this.http.get(`${this.baseUrl}/materia/${materia}/profesor`, { headers: this.jsonHeaders });
  }

  public obtenerEstrellasResenia(id:string): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}/estrellas`, { headers: this.jsonHeaders });
  }


  // Agrega funciones para las demás operaciones (obtenerTextoResenia, obtenerReseniasPorMateria, etc.)
}

