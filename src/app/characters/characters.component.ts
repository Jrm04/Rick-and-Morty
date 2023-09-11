import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent {
/*   characters: Character[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters(): void{
    this.apiService.getCharacters().subscribe( characters => {
      this.characters = characters;
      console.log(this.characters);
    })
  }
  */
  @Input() characters!: Character;
}

