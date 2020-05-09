import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { User } from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users:any;
  
  constructor(private crudService:CrudService){}

  ngOnInit(){
    this.getAllUsers();  
  }

  getAllUsers(){
    this.crudService.getAllUsers().subscribe(
      (data)=>this.users = data
    );

  }


}
