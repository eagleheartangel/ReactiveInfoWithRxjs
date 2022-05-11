import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../interfaces/pokemons.interface';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
})
export class PokemonsComponent implements OnInit {
  pokemons$ = this._pokemons.pokemones$;
  pokemon: Pokemon = { name: 'NuevoPokemon', url: 'https://nuevopokemon' };

  constructor(private _pokemons: PokemonsService) {}

  ngOnInit(): void {
    this._pokemons.getPokemons();
  }

  addPokemon() {
    this._pokemons.addPokemon(this.pokemon);
  }
}
