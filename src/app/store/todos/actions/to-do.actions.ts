import {Action, createAction, props} from '@ngrx/store';
import {ToDo} from '../../../shared/models/to-do.model';

export const GET_ALL_TO_DOS = createAction(
    '[To Dos] Get All To Dos',
);

export const GET_ALL_TO_DOS_SUCCESS = createAction(
    '[To Dos Success] Get All To Dos Success',
    props<{toDos: ToDo[]}>()
);

export const GET_ALL_TO_DOS_FAILURE = createAction(
    '[To Dos Failure] Get All To Dos Failure',
    props<{error: any}>()
);

// export enum ToDoActionTypes {
//     GET_ALL_TO_DOS = '[To Dos] Get All To Dos',
// }
//
// export class GetAllToDos implements Action {
//     readonly type = ToDoActionTypes.GET_ALL_TO_DOS;
// }

// export type ToDosActions = GetAllToDos;
