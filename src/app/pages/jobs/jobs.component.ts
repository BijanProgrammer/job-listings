import {Component, OnInit} from '@angular/core';
import {JobModel} from '../../models/job.model';
import {JobsService} from './jobs.service';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
    public jobs: JobModel[] = [];
    public filters = new Set<string>();

    public constructor(private jobsService: JobsService) {}

    public async ngOnInit(): Promise<void> {
        await this.jobsService.fetchJobs();
        this.syncJobs();
    }

    public syncJobs(): void {
        this.jobs = this.jobsService.getJobs([...this.filters]);
    }

    public addFilter(filter: string): void {
        this.filters.add(filter);
        this.syncJobs();
    }
}
