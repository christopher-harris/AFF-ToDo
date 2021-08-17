import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ToDo} from '../../shared/models/to-do.model';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
    @Input() todoList$: Observable<ToDo[]> | undefined;
    @Output() itemClicked: EventEmitter<ToDo> = new EventEmitter<ToDo>();

    constructor() {
    }

    ngOnInit(): void {
    }

    handleItemClicked(item: ToDo) {
        this.itemClicked.emit(item);
    }

}
