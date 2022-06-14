import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobsComponent} from './jobs.component';
import {FiltersModule} from '../../components/filters/filters.module';
import {CardModule} from '../../components/card/card.module';

@NgModule({
    declarations: [JobsComponent],
    imports: [CommonModule, FiltersModule, CardModule],
})
export class JobsModule {}
