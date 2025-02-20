import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItenmComponent } from './todo-itenm.component';

describe('TodoItenmComponent', () => {
  let component: TodoItenmComponent;
  let fixture: ComponentFixture<TodoItenmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItenmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItenmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
