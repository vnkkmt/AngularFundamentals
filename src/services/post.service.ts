import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
  //
  //private wrongUrl = 'https://jsonplaceholde.typicode.com/posts'

  constructor(http:HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts',http);
  }

}
