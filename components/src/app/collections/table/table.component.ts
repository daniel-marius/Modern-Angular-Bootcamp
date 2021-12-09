<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
>>>>>>> bbdceda (Third commit)

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }

=======
  @Input('class') classNames = '';

  @Input('data') data: any[] = [];
  @Input('headers') headers: any[] = [];

  constructor() {}

  ngOnInit() {}
>>>>>>> bbdceda (Third commit)
}
