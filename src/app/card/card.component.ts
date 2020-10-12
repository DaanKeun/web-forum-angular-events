import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterContentInit {
    cardColour = '#FFF';

    @ContentChild(ToDoListComponent, {static: false}) toDoListComponent: ToDoListComponent;

    ngAfterContentInit() {
        const thingsToDo = this.toDoListComponent.thingsToDo;
        thingsToDo.push('Testing');

        this.toDoListComponent.thingsToDoChange.emit(thingsToDo);
    }

}
