import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, DoCheck {
  taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('taskList') || '[]'
  );

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  deleteTask(event: number) {
    this.taskList.splice(event, 1);
  }

  deleteAllTask() {
    const confim = window.confirm(
      'Você realmente deseja excluir todas as suas tasks?'
    );
    if (confim) this.taskList = [];
  }

  addItemTaskList(event: string) {
    const task: TaskList = { checked: false, task: event };
    this.taskList.push(task);
  }

  validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está vazia, deseja deletar?');

      if (confirm) {
        this.deleteTask(index);
      }
    }
  }

  setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );

      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }
  }
}
