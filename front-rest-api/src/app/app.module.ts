import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListActorsComponent } from './components/list-actors/list-actors.component';
import { FormActorsComponent } from './components/form-actors/form-actors.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ActorsService } from './services/actors.service';
import { FormMoviesComponent } from './components/movies/form-movies/form-movies.component';
import { ListMoviesComponent } from './components/movies/list-movies/list-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListActorsComponent,
    FormActorsComponent,
    FormMoviesComponent,
    FormMoviesComponent,
    ListMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ActorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
