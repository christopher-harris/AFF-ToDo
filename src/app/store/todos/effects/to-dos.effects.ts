import {Injectable} from '@angular/core';
import {Actions, Effect, createEffect, ofType} from '@ngrx/effects';
import {ToDoService} from '../../../shared/to-do.service';
import * as actions from '../actions';
import {catchError, exhaustMap, map, mergeMap, switchMap} from 'rxjs/operators';
import {ToDo} from '../../../shared/models/to-do.model';
import {of} from 'rxjs';

@Injectable()
export class ToDosEffects {
    constructor(private actions$: Actions,
                private toDosService: ToDoService) {
    }

    // loadAllToDos$ = createEffect(() => { return this.actions$.pipe(
    //     ofType(actions.GET_ALL_TO_DOS),
    //     exhaustMap(action => this.toDosService.getAllTodos().pipe(
    //         map((toDos: ToDo[]) => {
    //             console.log(toDos);
    //             return actions.GET_ALL_TO_DOS_SUCCESS({toDos});
    //         }),
    //         catchError(error => of(actions.GET_ALL_TO_DOS_FAILURE({error})))
    //     ))
    // ) });
    //
    // updateToDo$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(actions.ToDoActionTypes.UPDATE_ITEM),
    //         map((action: actions.UpdateItem) => action.payload),
    //         switchMap(action => {
    //             return this.toDosService.updateToDo(action).pipe(
    //                 map((response: any) => actions.updateToDoSuccess({ response })),
    //                 catchError((err: any) => of(actions.updateToDoFailure(err)))
    //             );
    //         })
    //     )
    // });
}
