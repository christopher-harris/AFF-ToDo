import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewToDoComponent} from './shared/components/new-to-do/new-to-do.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interview-app';

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  openCreateToDoDialog() {
    const dialogRef = this.dialog.open(NewToDoComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
