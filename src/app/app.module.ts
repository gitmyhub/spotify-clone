import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { NavbarComponent } from  './components/navbar/navbar.component';
import { AboutComponent } from  './components/about/about.component';
import {SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artist/:id', component: ArtistComponent},
  { path: 'album/:id', component: AlbumComponent}
  
];

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes), BrowserModule , FormsModule, HttpModule],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }