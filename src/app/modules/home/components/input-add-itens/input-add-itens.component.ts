import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.scss'],
})
export class InputAddItensComponent implements OnInit {
  @Output() emitItemTaskList = new EventEmitter();

  addItemTaskList: string = '';

  constructor() {}

  ngOnInit(): void {}

  submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = '';
    }
  }
}
