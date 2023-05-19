import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListActorsComponent } from './components/list-actors/list-actors.component';
import { FormActorsComponent } from './components/form-actors/form-actors.component';
import { FormMoviesComponent } from './components/movies/form-movies/form-movies.component';
import { ListMoviesComponent } from './components/movies/list-movies/list-movies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'actors',
    component: ListActorsComponent
  },

  {
    path: 'actors/add',
    component: FormActorsComponent
  },

  {
    path: 'actors/update/:id',
    component: FormActorsComponent
  },
  {
    path: 'movies',
    component: ListMoviesComponent
  },
  {
    path: 'movies/add',
    component: FormMoviesComponent
  },
  {
    path: 'movies/update/:id',
    component: FormMoviesComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
