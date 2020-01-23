import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';
import { FilterPipe } from '../../filter.pipe';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [FilterPipe]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService, private filter: FilterPipe) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = [
        {
          id: 1,
          title: 'fold laundry',
          completed: false
        },
        {
          id: 2,
          title: 'put clothes in dresser',
          completed: false
        },
        {
          id: 3,
          title: 'relax',
          completed: false
        },
        {
          id: 4,
          title: 'try to pet cat',
          completed: true
        },
        {
          id: 5,
          title: 'pet dog',
          completed: false
        },
        {
          id: 6,
          title: 'be awesome',
          completed: true
        }
      ]
    });
    
  }

  deleteTodo(todo:Todo){
    //UI
    this.todos = this.todos.filter(t => t.title !== todo.title);
    //Server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
