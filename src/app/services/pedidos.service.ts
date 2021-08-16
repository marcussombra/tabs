import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
 
@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  url = 'https://msombra.com.br/json.php';

  constructor(private http: HttpClient) { }
 
  getPedidos(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(data => data)
    );
  }
}