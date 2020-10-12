import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'To do';

    thingsToDo = [
        'Learn JavaScript',
        'Learn Angular',
        'Learn Redux',
    ];

    onNewItem(item: string) {
        this.thingsToDo.push(item);
    }
}
