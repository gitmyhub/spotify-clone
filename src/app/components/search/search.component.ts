import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../../Artist';
import { RouterModule, Routes } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
  providers: [SpotifyService]
})
export class SearchComponent  { 
    searchStr:string;
    searchRes: Artist;

    constructor(private _spotifyservice:SpotifyService){

    }
    searchMusic(){
        this._spotifyservice.SearchMusic(this.searchStr)
        .subscribe(res=> {
            this.searchRes = res.artists.items;
        })

    }
}
