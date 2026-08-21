import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private httpClient = inject(HttpClient);

  private apiURL = 'http://127.0.0.1:8000/api/categorias';

  obtenerCategorias() {
    return this.httpClient.get<any>(this.apiURL);
  }
}
