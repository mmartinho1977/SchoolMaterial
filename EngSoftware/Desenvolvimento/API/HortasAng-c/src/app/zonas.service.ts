import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Zona } from './zona'; 


@Injectable({
  providedIn: 'root'
})
export class ZonasService {
   private headers: HttpHeaders;
   private accessPointUrl:  string =  'https://localhost:44393//api/zona'

  constructor(private http: HttpClient) 
  {
      this.headers = new HttpHeaders({'Content-Yype': 'application/json; charset=utf-8'});
  }

  public get(){
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(zona: Zona){
    return this.http.get(this.accessPointUrl+ '/' + zona, {headers: this.headers});
  }

  public revove(zona:Zona){
    return this.http.get(this.accessPointUrl + '/' + zona.Id,  {headers: this.headers});
  }

  public update(zona:Zona){
    return this.http.get(this.accessPointUrl + '/' + zona,  {headers: this.headers});
  }

  
}
