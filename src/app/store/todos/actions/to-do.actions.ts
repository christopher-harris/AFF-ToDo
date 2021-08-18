import {Action} from '@ngrx/store';
import {ToDo} from '../../../shared/models/to-do.model';

export enum ToDoActionTypes {
    FETCH_ALL_TO_DOS = '[To Dos] Get All',
    FETCH_ALL_TO_DOS_SUCCESS = '[To Dos] Get All Success',
    FETCH_ALL_TO_DOS_FAILURE = '[To Dos] Get All Failure',
    UPDATE_ITEM = '[To Dos] Update Item',
    UPDATE_ITEM_SUCCESS = '[To Dos] Update Item Success',
    UPDATE_ITEM_FAILURE = '[To Dos] Update Item Failure',
}

export class FetchAllToDos implements Action {
    readonly type = ToDoActionTypes.FETCH_ALL_TO_DOS;
}

export class FetchAllToDosSuccess implements Action {
    readonly type = ToDoActionTypes.FETCH_ALL_TO_DOS_SUCCESS;
    constructor(public payload: ToDo[]) {}
}

export class FetchAllToDosFailure implements Action {
    readonly type = ToDoActionTypes.FETCH_ALL_TO_DOS_FAILURE;
    constructor(public payload: any) {
    }
}

export class UpdateItem implements Action {
    readonly type = ToDoActionTypes.UPDATE_ITEM;

    constructor(public payload: ToDo) {}

}

export class UpdateItemSuccess implements Action {
    readonly type = ToDoActionTypes.UPDATE_ITEM_SUCCESS;

    constructor(public payload: any) {}

}

export class UpdateItemFailure implements Action {
    readonly type = ToDoActionTypes.UPDATE_ITEM_FAILURE;

    constructor(public payload: any) {}

}

export type ToDoActions =
    | FetchAllToDos
    | FetchAllToDosSuccess
    | FetchAllToDosFailure
    | UpdateItem
    | UpdateItemSuccess
    | UpdateItemFailure;
