import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  a="";
  b="";
  todos=[
  
  ];

  ngOnInit() {
  }
   i=1
  addTodo(newTodoLabel){
    var newTodo = {
      label : newTodoLabel,
      priority : this.i++,
      done : false
    };
    this.todos.push(newTodo);

  }
  deleteTodo(todo){
    this.todos = this.todos.filter( t => t.label !== todo.label);
  }
  

  } 
