import { IApiResponseArray } from 'src/app/general/api.interfaces';



export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
export interface EpisodeResponse extends IApiResponseArray<Episode> {}