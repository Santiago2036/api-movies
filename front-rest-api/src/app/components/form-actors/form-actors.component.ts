import { Component, HostBinding, OnInit } from '@angular/core';
import { Actor } from 'src/app/services/models/actor';
import { ActorsService } from '../../services/actors.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-actors',
  templateUrl: './form-actors.component.html',
  styleUrls: ['./form-actors.component.css']
})
export class FormActorsComponent implements OnInit{

  @HostBinding('class') classes = 'row';
  validator = this.activeRouter.snapshot.params;

  edit: boolean = false;

  actor:any = {
    id: 0,
    name: '',
    last_name: '',
    age: '',
    imagen: ''
  }

  constructor(private actorservice: ActorsService,private router:Router,private activeRouter:ActivatedRoute){}
  ngOnInit(): void {

    console.log(this.validator['id'])

    const params = this.activeRouter.snapshot.params;
    if (params['id']){
      this.actorservice.getActor(params['id']).subscribe(
        res => {
          this.actor = res,
          console.log(res)
          this.edit = true;
        },
        err => console.error(err)
      )
    }



  }

  handleCreate(){
    console.log("crearemos!")

    console.log(this.actor)

    this.actorservice.saveActor(this.actor).subscribe(
      res=> {
        console.log(res),
        this.router.navigate(['/'])
      },
      err=> console.error(err)

    )
  }

  handleUpdate(){
    console.log("actualizaremos!")

    this.actorservice.updateActor(this.actor.id,this.actor).subscribe(
      res=> {
        console.log(res),
        this.router.navigate(['/'])
      },
      err=> console.error(err)

    )
  }

}
