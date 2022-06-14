import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JobModel} from '../../models/job.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() public job!: JobModel;

    @Output() private tagClick = new EventEmitter<string>();

    public tagClickHandler(tag: string): void {
        this.tagClick.emit(tag);
    }
}
