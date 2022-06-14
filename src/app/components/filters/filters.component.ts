import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    @Input() public filters!: Set<string>;

    @Output() private filtersChange = new EventEmitter<Set<string>>();

    public removeFilter(filter: string): void {
        this.filters.delete(filter);
        this.filtersChange.emit(this.filters);
    }

    public clearFilters(): void {
        this.filters.clear();
        this.filtersChange.emit(this.filters);
    }
}
