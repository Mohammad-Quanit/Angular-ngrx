import { Action } from "@ngrx/store";
import * as DataClass from '../Actions/ngrx.action';
import { IData } from 'models/ngrx.model';

export interface State {

};

const initialState: IData = {
  name: 'Quanit',
  age: 23,
  url: 'https://google.com'
};

export function reducer(state: IData[] = [initialState], action: DataClass.DataActions): State {
  switch (action.type) {
    case DataClass.ClassActionTypes.ADD_DATA: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}