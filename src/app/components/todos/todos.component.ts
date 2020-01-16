import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Fold Clothes',
        completed: false
      },
      {
        id: 2,
        title: 'Put clothes in dresser',
        completed: false
      },
      {
        id: 3,
        title: 'Relax',
        completed: false
      },
      {
        id: 4,
        title: 'Try to pet cat',
        completed: true
      },
      {
        id: 5,
        title: 'Pet dog',
        completed: false
      },
      {
        id: 6,
        title: 'Be awesome',
        completed: false
      }
    ]
  }

}
