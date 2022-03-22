import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApi } from '../_interfaces/api';
import { ICocktail, IDataCocktail, ISingleCocktail } from '../_interfaces/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  url = 'http://localhost:8888/cocktails'

  constructor(private http: HttpClient) { }

  getAllCocktails(): Observable<IDataCocktail>{
    return this.http.get<IDataCocktail>(this.url)
  }

  getCocktail(cid: string | null): Observable<ISingleCocktail>{
    return this.http.get<ISingleCocktail>(this.url+'/'+cid)
  }

  addCocktail(cocktail: ICocktail): Observable<IApi>{
    return this.http.put<IApi>(this.url, cocktail)
  }

  updateCocktail(cocktail: ICocktail): Observable<IApi>{
    return this.http.patch<IApi>(this.url+'/'+cocktail.id, cocktail)
  }

  trashCocktail(cid:number|undefined): Observable<IApi>{
    return this.http.delete<IApi>(this.url+'/trash/'+cid)
  }

  untrashCocktail(cid:number|undefined): Observable<IApi>{
    return this.http.post<IApi>(this.url+'/untrash/'+cid, {})
  }

  deleteCocktail(){}
}
