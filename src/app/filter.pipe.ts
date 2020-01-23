import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: any, term: string): any {
    if(!term) return todos;
      
    return todos.filter(function(todo: any){
      return todo.title.toLowerCase().includes(term.toLowerCase());
    })
    
  }

}
