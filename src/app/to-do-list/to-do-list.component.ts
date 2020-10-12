import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
    @Input() thingsToDo: string[];
    @Output() thingsToDoChange = new EventEmitter<string[]>();

    onComplete(index): void {
        const thingsToDo = this.thingsToDo.filter((item, idx) => idx !== index);
        this.thingsToDoChange.emit(thingsToDo);
    }
}
