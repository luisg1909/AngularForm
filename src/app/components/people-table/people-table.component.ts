import { Component , OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { Person } from '../../models';
import { People } from '../../data';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


@Component({
  selector: 'app-people-table',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatPaginatorModule,MatTableModule,MatFormFieldModule],
  templateUrl: './people-table.component.html',
  styleUrl: './people-table.component.scss'
})
export class PeopleTableComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'category', 'company', 'levelOfHappiness'];
  dataSource: MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(People);
  }

  ngAfterViewInit() {
    this.dataSource!.paginator = this.paginator;
    this.dataSource!.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    
  }
}
