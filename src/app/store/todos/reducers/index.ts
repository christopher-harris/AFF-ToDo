import {AllToDosState} from '../to-dos.state';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {reducer} from './to-dos.reducer';

export interface ToDosState {
    allToDos: any;
}

export const reducers: ActionReducerMap<ToDosState> = {
  allToDos: reducer,
};

export const getAllToDosState = createFeatureSelector<ToDosState>('to-dos');
