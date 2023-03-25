import { Component } from '@angular/core';
import { Todos } from '../todos';
@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class TodoMainComponent {
  todos:Todos[] = [

  ]

  addTodo(newTodo:Todos) {
    if (newTodo) {
      this.todos.push(newTodo)
    }
  }
}
