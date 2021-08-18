import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ToDo} from '../../shared/models/to-do.model';
import {ToDoService} from '../../shared/to-do.service';
import {ToDosStateService} from '../../shared/services/to-dos-state.service';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
    @Input() todoList$: Observable<ToDo[]> | undefined;
    @Output() itemClicked: EventEmitter<ToDo> = new EventEmitter<ToDo>();

    constructor(private toDoService: ToDoService,
                private store: ToDosStateService) {
    }

    ngOnInit(): void {
    }

    handleItemClicked(item: ToDo) {
        this.itemClicked.emit(item);
    }

    deleteItem(id: number) {
        this.store.deleteItem(id);
    }

}
