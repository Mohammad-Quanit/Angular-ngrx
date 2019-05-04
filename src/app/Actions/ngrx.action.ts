import { Injectable } from "@angular/core";
import { IData } from 'models/ngrx.model';

import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ClassActionTypes {
  ADD_DATA = '[DATA] Add',
  REMOVE_DATA = '[DATA] REMOVE'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class AddData implements Action {
  readonly type = ClassActionTypes.ADD_DATA;

  constructor(public payload: IData) { }
}

export class RemoveData implements Action {
  readonly type = ClassActionTypes.REMOVE_DATA;

  constructor(public index: number) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type DataActions = AddData | RemoveData;
