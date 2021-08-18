import {AllToDosState, toDosAdapter} from '../to-dos.state';
import {Action, createReducer, on} from '@ngrx/store';
import * as ToDoActions from '../actions';
import {ToDoActionTypes} from '../actions';

export const initialState: AllToDosState = toDosAdapter.getInitialState({
    loading: false,
    loaded: false,
    error: null,
});

// const reducer = createReducer(
//     initialState,
//     on(ToDoActions.GET_ALL_TO_DOS_SUCCESS, (state, {toDos}) => {
//         return toDosAdapter.addMany(toDos, state);
//     }),
//     on(ToDoActions.ToDoActionTypes.UPDATE_ITEM, (state, { update }) => {
//         return toDosAdapter.updateOne(update, state);
//     }),
// );

export function reducer(state: AllToDosState, action: any): AllToDosState {
    switch (action.type) {
        // case ToDoActions.ToDoActionTypes.FETCH_ALL_TO_DOS: {
        //     return {
        //         ...state,
        //         loading: true
        //     }
        // }

        // case ToDoActions.ToDoActionTypes.FETCH_ALL_TO_DOS_SUCCESS: {
        //     return toDosAdapter.updateMany(action.payload, {
        //         ...state,
        //         loading: false,
        //         loaded: true
        //     });
        // }

        // case ToDoActions.ToDoActionTypes.UPDATE_ITEM: {
        //     return toDosAdapter.updateOne(
        //         {id: action.},
        //         {...state}
        //     );
        // }
    }

    return state;
}
