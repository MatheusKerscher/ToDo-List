import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  taskList: Array<TaskList> = [
    {
      task: 'Teste',
      checked: false,
    },

    {
      task: 'Teste2',
      checked: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  deleteTask(event: number) {
    this.taskList.splice(event, 1);
  }

  deleteAllTask() {
    const confim = window.confirm(
      'Você realmente deseja excluir todas as suas tasks?'
    );
    if (confim) this.taskList = [];
  }
}
