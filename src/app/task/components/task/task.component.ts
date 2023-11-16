import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : [];
  }

  onSubmit(fromValue: Task){
    this.tasks.push(fromValue);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  onRemove(indice: number){
    this.tasks.splice(indice, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
