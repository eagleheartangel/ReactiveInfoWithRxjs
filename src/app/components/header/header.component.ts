import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  pokemons$ = this._pokemons.pokemones$;

  constructor(private _pokemons: PokemonsService) {}

  ngOnInit(): void {}
}
