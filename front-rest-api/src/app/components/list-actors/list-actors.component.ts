import { Component, HostBinding, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.css']
})
export class ListActorsComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  actors:any = []

  constructor(private actorService: ActorsService){}

  ngOnInit(): void {
    this.getActors()
  }

  getActors(){

    this.actorService.getActors().subscribe(
      res => this.actors = res,
      err => console.error(err)
      )
  }

  handleDelete(id: any){


    if (confirm("Estas seguro de eliminar el actor?")){

      this.actorService.deleteActor(id). subscribe(
        res => {
          console.log(res),
          this.getActors()
        },
        err => console.error(err)
      )
    }
  }


}
