import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ToDo} from '../shared/models/to-do.model';
import {ToDosStateService} from '../shared/services/to-dos-state.service';
import {UsersService} from '../shared/services/users.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    allToDos$: Observable<ToDo[]> = this.todosState.allItems$;
    incompleteItems$: Observable<ToDo[]> = this.todosState.incompleteItems$;
    completedItems$: Observable<ToDo[]> = this.todosState.completeItems$;

    constructor(private todosState: ToDosStateService,
                private usersService: UsersService) {
    }

    ngOnInit(): void {
        this.allToDos$.subscribe(x => console.log(x));
        this.todosState.userIds$.subscribe(x => console.log(x));
        this.todosState.users$.subscribe(x => console.log(x));
    }

}
