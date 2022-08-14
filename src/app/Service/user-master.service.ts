import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/Model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {

  constructor(private http:HttpClient) { }

  apiurl='https://localhost:7249/api';

  GetAllUser():Observable<UserModel[]>{
      let myParams=new HttpParams({fromString:'PageNamber=1&PageSize=1000'})
  
      return this.http.get<UserModel[]>(this.apiurl+'/User/GetUsers',{params:myParams})
      
    }
  

  GetUserByPrivateNumber(privateNumber:any){
    return  this.http.get(this.apiurl+'/User/'+privateNumber);

  }

  RemoveUserByPrivateNumber(privateNumber:any){
    return  this.http.get(this.apiurl+'/User/'+privateNumber);

  }

  updateUser(inputdata:any){
    return this.http.post(this.apiurl+'/User/',inputdata);
  }
}
