import { Component, ComponentFactoryResolver, HostBinding, OnInit } from '@angular/core';
import { Movies } from 'src/app/services/models/movies';
import { MoviesService } from '../../../services/movies.service';
import { ActorsService } from 'src/app/services/actors.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.css']
})
export class FormMoviesComponent implements OnInit{

  @HostBinding('class') classes = 'row';
  validator = this.activeRouter.snapshot.params;

  edit: boolean = false;
  actorsMenu:any = [];
  actors:any = [];

  movie:any = {
    id: 0,
    name: '',
    gender: '',
    description: '',
    year: '',
    imagen: '',
    actors: []
  }

  constructor(private movieservice: MoviesService,private actorservice: ActorsService,private router:Router,private activeRouter:ActivatedRoute){}
  ngOnInit(): void {

     this.actorsMenu= this.actorservice.getActors().subscribe(
      res=> {
        console.log(res)
        this.actorsMenu = res;
        console.log(this.actorsMenu);
      },
      err=> console.error(err)
    )


    console.log(this.validator['id'])

    const params = this.activeRouter.snapshot.params;
    if (params['id']){
      this.movieservice.getMovie(params['id']).subscribe(
        res => {
          this.movie = res,
          console.log(res)
          this.edit = true;
        },
        err => console.error(err)
      )
    }



  }

  handleActor(actor:any){
    console.log(this.movie.actors)
    if(this.movie.actors.includes(actor)){
      console.log("")
    }else{
      this.movie.actors.push(actor)
      this.actors = this.movie.actors;
    }
  }

  validateActors(){
    if(this.actors.length === 0){
      alert("Please select actors");
    }
  }



  handleCreate(){

    console.log(this.movie)

    this.movieservice.saveMovie(this.movie).subscribe(
      res=> {
        console.log(res),
        this.router.navigate(['/'])
      },
      err=> console.error(err)

    )
  }

  handleUpdate(){
    console.log("actualizaremos!")

    this.movieservice.updateMovie(this.movie.id,this.movie).subscribe(
      res=> {
        console.log(res),
        this.router.navigate(['/'])
      },
      err=> console.error(err)

    )
  }

}

