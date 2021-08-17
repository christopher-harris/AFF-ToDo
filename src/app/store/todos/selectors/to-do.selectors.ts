import {createSelector} from '@ngrx/store';
import * as toDosFeature from '../reducers';
import {toDosAdapter} from '../to-dos.state';

export const getAllToDosState = createSelector(
    toDosFeature.getAllToDosState,
    (state: toDosFeature.ToDosState) => state.allToDos
);

export const {selectAll, selectEntities, selectIds, selectTotal} = toDosAdapter.getSelectors(
    getAllToDosState
);

export const getAllToDos = selectAll;

export const selectUncompletedToDos = createSelector(
    getAllToDos,
    (todos) => todos.filter(todo => todo.completed === false)
);

export const selectCompletedToDos = createSelector(
    getAllToDos,
    (todos) => todos.filter(todo => todo.completed === true)
);
