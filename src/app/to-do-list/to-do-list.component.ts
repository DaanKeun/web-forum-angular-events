import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
    @Input() thingsToDo: string[];

    addToDo(toDo: HTMLInputElement) {
        this.thingsToDo.push(toDo.value);
        toDo.value = '';
    }
}
