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
