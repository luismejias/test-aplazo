export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
} 
export interface IApiResponseBase {
  info: Info;  
}

export interface IApiResponseObject<T> extends IApiResponseBase {
  data: T;
}

export interface IApiResponseArray<T> extends IApiResponseBase {
  data: T[];
}


