import {AllToDosState, toDosAdapter} from '../to-dos.state';
import {Action, createReducer, on} from '@ngrx/store';
import * as ToDoActions from '../actions';

export const initialState: AllToDosState = toDosAdapter.getInitialState({
    loading: false,
    loaded: false,
    error: null,
});

const reducer = createReducer(
    initialState,
    on(ToDoActions.GET_ALL_TO_DOS_SUCCESS, (state, {toDos}) => {
        return toDosAdapter.addMany(toDos, state);
    }),
);

export function toDosReducer(state: AllToDosState | undefined, action: Action): AllToDosState {
    return reducer(state, action);
}
