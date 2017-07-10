import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibleTodoListComponent } from './visible-todo-list.component';

describe('VisibleTodoListComponent', () => {
  let component: VisibleTodoListComponent;
  let fixture: ComponentFixture<VisibleTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibleTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibleTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
