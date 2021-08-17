import {AllToDosState} from '../to-dos.state';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {toDosReducer} from './to-dos.reducer';

export interface ToDosState {
    allToDos: AllToDosState;
}

export const reducers: ActionReducerMap<ToDosState> = {
  allToDos: toDosReducer,
};

export const getAllToDosState = createFeatureSelector<ToDosState>('to-dos');
