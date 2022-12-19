import { Injectable } from '@angular/core';
import { ResponseLivros, RequestCreate, ResponseCreate, RequestUpdate, ResponseUpdate } from './livro.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLivro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private url="https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getLivros(): Observable<ResponseLivros>{
    return this.http.get<ResponseLivros>(this.url);

}

 createUser(request: RequestCreate): Observable<ResponseCreate>{
  return this.http.post<ResponseCreate>(this.url, request);

 }
 getLivro(id: string): Observable<ResponseLivro>{
  const _url=`${this.url}/${id}`;

    return this.http.get<ResponseLivro>(_url);
 }

 updateLivro(id:string, request: RequestUpdate): Observable<ResponseUpdate>{
  const _url=`${this.url}/${id}`;

  return this.http.put<ResponseUpdate>(_url, request);
 }
}
