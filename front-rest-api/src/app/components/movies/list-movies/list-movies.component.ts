import { Component, HostBinding, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  movies:any = []

  constructor(private movieService: MoviesService){}

  ngOnInit(): void {
    this.getActors()
  }

  getActors(){

    this.movieService.getMovies().subscribe(

      res => {
        this.movies = res,
        console.log(this.movies),
        console.log(this.movies.name)
      },
      err => console.error(err)
      )

  }

  handleDelete(id: any){


    if (confirm("Estas seguro de eliminar el actor?")){

      this.movieService.deleteMovie(id). subscribe(
        res => {
          console.log(res),
          this.getActors()
        },
        err => console.error(err)
      )
    }
  }


}

