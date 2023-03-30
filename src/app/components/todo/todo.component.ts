import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = [
    {
      id: 1,
      content: 'This is first todo content',
      completed: false,
    },
    {
      id: 2,
      content: 'This is second todo content',
      completed: true
    }
  ]

  inputTodo:string = '';
  lastId:number=0;
  isEdit:boolean = false;
  editIndex:number=0;


  constructor() { }

  ngOnInit(): void {
    this.lastId=this.todos.length

  }

  completeTodo(id:number){
    this.todos.map((value, index) => {
      if(index==id) value.completed = !value.completed;
    })
  }

  removeTodo(id:number){
    this.todos = this.todos.filter((value, index) => index !== id);
  }

  addTodo(){
    this.lastId+=1
    this.todos.push({
      // id: this.todos.length + 1,

      id: this.lastId,
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = '';
  }


  editTodo(i:number){
    this.editIndex=i
    this.isEdit = true;
    this.inputTodo = this.todos[i].content;
  }
  updateTodo(){
    this.todos[this.editIndex].content=this.inputTodo
    this.inputTodo = '';
    this.isEdit = false;
  }

}
