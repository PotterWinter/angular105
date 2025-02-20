import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-itenm',
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todo-itenm.component.html',
  styleUrl: './todo-itenm.component.scss',
})
export class TodoItenmComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
}
