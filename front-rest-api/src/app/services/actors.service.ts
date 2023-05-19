import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Actor } from './models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  URL = 'http://localhost:8500/api'

  constructor(private http: HttpClient) { }


  getActors(){
    return (this.http.get(`${this.URL}/actor`));
  }

  getActor(id: string){
    return (this.http.get(`${this.URL}/actor/${id}`));
  }

  saveActor(actor: Actor){
    return(this.http.post(`${this.URL}/actor/`, actor));
  }

  updateActor(id:string, actor: Actor){
    return(this.http.put(`${this.URL}/actor/${id}/`, actor));
  }

  deleteActor(id:any){
    return(this.http.delete(`${this.URL}/actor/${id}`));
  }
}
