import {Injectable} from '@angular/core';
import {JobModel} from '../../models/job.model';

@Injectable({
    providedIn: 'root',
})
export class JobsService {
    private jobs: JobModel[] = [];

    public async fetchJobs(): Promise<void> {
        const response = await fetch('assets/data/jobs.data.json');
        this.jobs = await response.json();
    }

    public getJobs(filters?: string[]): JobModel[] {
        if (!filters?.length) return [...this.jobs];
        return this.jobs.filter((job) => filters.every((filter) => job.tags.includes(filter)));
    }
}
