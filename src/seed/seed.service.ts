import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { PokemonAPI } from './interfaces/pokemon-api.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokemonAPI>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert: { name: string; pokemonNumber: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const pokemonNumber = Number(segments.at(-2));
      pokemonToInsert.push({ name, pokemonNumber });
    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'SEED executed';
  }
}
