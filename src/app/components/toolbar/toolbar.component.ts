import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';
import { PeopleTableComponent } from '../../components/people-table/people-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatIconModule,MatDialogModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
constructor(public dialog: MatDialog){}
openDialog() {
  this.dialog.open(PeopleTableComponent, {
   
  });

}

}
