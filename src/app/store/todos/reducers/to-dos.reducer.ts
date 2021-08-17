import {AllToDosState, toDosAdapter} from '../to-dos.state';

export const initialState: AllToDosState = toDosAdapter.getInitialState({
    loading: false,
    loaded: false,
    error: null,
});

export function toDosReducer(state: AllToDosState = initialState, action: any): AllToDosState {
    return state;
}
