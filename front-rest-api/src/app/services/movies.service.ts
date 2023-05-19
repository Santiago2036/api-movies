import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movies } from './models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  URL = 'http://localhost:8500/api'

  constructor(private http: HttpClient) { }


  getMovies(){
    return (this.http.get(`${this.URL}/movies`));
  }

  getMovie(id: string){
    return (this.http.get(`${this.URL}/movies/${id}`));
  }

  saveMovie(movie: Movies){
    return(this.http.post(`${this.URL}/movies/`, movie));
  }

  updateMovie(id:string, movie: Movies){
    return(this.http.put(`${this.URL}/movies/${id}/`, movie));
  }

  deleteMovie(id:any){
    return(this.http.delete(`${this.URL}/movies/${id}`));
  }
}
