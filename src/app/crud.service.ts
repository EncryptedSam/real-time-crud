import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  constructor(private httpClient:HttpClient) { }

  usersUrl:string = "https://jsonplaceholder.typicode.com/posts";

  getAllUsers(){
    return this.httpClient.get(this.usersUrl)
  }

}
