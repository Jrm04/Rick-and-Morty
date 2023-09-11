import { Component, inject } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Character } from '../character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  characters: Character[] = [];
  apiService: ApiService = inject(ApiService);

  constructor(){
    this.apiService.getCharacters().subscribe( characters => {
      this.characters = characters;
      console.log(characters);
    })
  }
  
}
