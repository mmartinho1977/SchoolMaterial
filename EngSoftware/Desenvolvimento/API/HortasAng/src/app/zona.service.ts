import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';  
import { Zona } from './zona'; 


var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})

export class ZonaService {
  url = 'http://localhost:54002/api/zona';
  //url = environment.apiUrl + 'https://localhost:44393//api/zona';
  constructor(private http: HttpClient) { }

  GetZonas(): Observable<Zona[]> {  
    return this.http.get<Zona[]>(this.url);  
  }  
  getZonaById(zonaid: number): Observable<Zona> {  
    const apiurl = `${this.url}/${zonaid}`;
    return this.http.get<Zona>(apiurl);  
  } 
  PutZona(zona: Zona): Observable<Zona> {  
    return this.http.post<Zona>(this.url, zona, httpOptions);  
  }  
  updateZona(zonaid: number, zona: Zona): Observable<Zona> {  
    const apiurl = `${this.url}/${zonaid}`;
    return this.http.put<Zona>(apiurl,zona, httpOptions);  
  }  
  deleteZonaById(zonaid: number): Observable<number> {  
    const apiurl = `${this.url}/${zonaid}`;
    return this.http.delete<number>(apiurl, httpOptions);  
  } 

}
