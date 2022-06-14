import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JobsComponent} from './pages/jobs/jobs.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'jobs'},
    {path: 'jobs', component: JobsComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
