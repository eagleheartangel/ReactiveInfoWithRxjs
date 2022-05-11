import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../components/interfaces/pokemons.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private pokemones = new BehaviorSubject<Pokemon[]>([]);
  pokemones$ = this.pokemones.asObservable();
  pok: Pokemon[] = [];

  constructor(private _http: HttpClient) {}

  getPokemons() {
    return this._http
      .get('https://pokeapi.co/api/v2/pokemon?limit=1126')
      .subscribe((pokemons: any) => {
        console.log(pokemons);
        this.pokemones.next(pokemons.results);
        this.pok = pokemons.results;
      });
  }
  addPokemon(pokemon: Pokemon) {
    this.pok.push(pokemon);
    this.pokemones.next(this.pok);
  }
}
