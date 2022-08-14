import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }


  getCountryList():Observable<any[]>{
    let myParams=new HttpParams({fromString:'PageNamber=1&PageSize=1000'})

    return this.http.get<any>('https://localhost:7249/api/Country',{params:myParams});
  }
}
