import { IApiResponseArray } from 'src/app/general/api.interfaces';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

// export interface CharacterResponse extends IApiResponseArray<Character> {}


export interface CharacterResponse {
  info: Info;
  results: Character[];
}



interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface CharacterState {
  loading: boolean;
  characters: ReadonlyArray<Character>;
}
