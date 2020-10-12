import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-generic-input',
    templateUrl: './generic-input.component.html',
    styleUrls: ['./generic-input.component.scss']
})
export class GenericInputComponent {

    @Output() newItem: EventEmitter<string> = new EventEmitter<string>();

    addToDo(toDo: HTMLInputElement) {
        this.newItem.emit(toDo.value);
        toDo.value = '';
    }
}
