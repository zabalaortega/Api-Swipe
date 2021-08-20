import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../../core/services/characters.service';
import { Characters } from '../../../../core/models/characters';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters: Characters[];

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters()
    .subscribe((characters) => {
      this.characters = characters;
        // console.log(resp);
    });
  }

}
