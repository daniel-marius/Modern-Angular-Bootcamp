<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
=======
<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
>>>>>>> bbdceda (Third commit)
>>>>>>> e61eb90 (Fourth commit)

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  });
=======
>>>>>>> e61eb90 (Fourth commit)
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));
<<<<<<< HEAD
=======
>>>>>>> bbdceda (Third commit)
>>>>>>> e61eb90 (Fourth commit)

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
