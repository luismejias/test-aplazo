import { IApiResponseArray } from 'src/app/general/api.interfaces';


export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationResponse extends IApiResponseArray<Location> {}