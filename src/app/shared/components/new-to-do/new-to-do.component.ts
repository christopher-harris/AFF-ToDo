import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {ToDosStateService} from '../../services/to-dos-state.service';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.scss']
})
export class NewToDoComponent implements OnInit {
  users$: Observable<any> = this.toDoState.users$;
  newItemForm: FormGroup = new FormGroup({
    completed: new FormControl(false),
    title: new FormControl(''),
    userId: new FormControl(''),
  });

  constructor(public dialog: MatDialog,
              private toDoState: ToDosStateService) { }

  ngOnInit(): void {
    this.toDoState.users$.subscribe(x => console.log(x));
  }

}
