import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    @ViewChild(CardComponent, {static: false}) cardComponent: CardComponent;

    title = 'To do';

    thingsToDo = [
        'Learn JavaScript',
        'Learn Angular',
        'Learn Redux',
    ];

    ngAfterViewInit() {
        this.cardComponent.cardColour = '#b1b1b1';
    }

    onNewItem(item: string) {
        this.thingsToDo.push(item);
    }
}
