export type PokemonList = {
  results: {
    name: string;
    url: string;
  }[];
};

export type Pokemon = PokemonFetch &
  PokemonSpeciesFetch & { evolution_chain: PokemonEvolutionChain };

export type PokemonFetch = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  stats: {
    base_stat: 78;
    effort: 0;
    stat: { name: string };
  }[];
  types: {
    type: { name: PokemonType };
  }[];
  species: {
    url: string;
  }
};

export type PokemonSpeciesFetch = {
  color: { name: PokemonColor };
  evolution_chain: { url: string };
  varieties: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

export type PokemonEvolutionChain = {
  name: string;
  id: string;
  depth: number;
  index: number;
}[];

export type evolutionChain = {
  chain: {
    species: {
      name: string;
      url: string;
    };
    evolves_to: evolves_to;
  };
};

export type evolves_to = {
  species: {
    name: string;
    url: string;
  };
  evolves_to?: evolves_to;
}[];

export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'unknown'
  | 'shadow';

export type PokemonColor =
  | 'black'
  | 'blue'
  | 'brown'
  | 'gray'
  | 'green'
  | 'pink'
  | 'purple'
  | 'red'
  | 'white'
  | 'yellow';
