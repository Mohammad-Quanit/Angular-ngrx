import { IData } from 'models/ngrx.model';

// YOu can use multiple models if you have
export interface AppStore {
  // For single model in our case
  readonly data: IData[];
}