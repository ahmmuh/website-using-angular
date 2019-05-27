import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photos } from 'src/models/data';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPhotos(){
    return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos');
    

  }
}
