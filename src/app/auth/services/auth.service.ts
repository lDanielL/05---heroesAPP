import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { tap, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl = environment.baseUrl;
  private _auth: Auth | undefined;

  constructor(private http: HttpClient) { }

  verificaAutenticacion():Observable<boolean> {

      if(!localStorage.getItem('token')){
        return of(false);
      }

      return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map( auth => {
          this._auth = auth;
          return true;
        })
      ); 


  }

  get auth(): Auth{
    // se pone de esta manera para protegerlo y evitar que se modifique de alguna manera no deseada
    return {...this._auth!}
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap( auth => this._auth = auth),
      tap( auth => localStorage.setItem('token', auth.id)),
    );
  }


  logout(){
    this._auth = undefined;
  }

}
