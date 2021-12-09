<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
=======
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
>>>>>>> bbdceda (Third commit)
>>>>>>> e61eb90 (Fourth commit)

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
<<<<<<< HEAD
=======
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }

=======
>>>>>>> e61eb90 (Fourth commit)
  @Input('class') classNames = '';

  @Input('data') data: any[] = [];
  @Input('headers') headers: any[] = [];

  constructor() {}

  ngOnInit() {}
<<<<<<< HEAD
=======
>>>>>>> bbdceda (Third commit)
>>>>>>> e61eb90 (Fourth commit)
}
