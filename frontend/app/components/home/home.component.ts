import { Component, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';
import { ITask, TaskService } from './../../services/task/task.service';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { DetailsComponent } from './../details/details.component';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    public filterQuery: string;

    public tasks: ITask[];

    constructor(
        http: Http,
        overlay: Overlay,
        vcr: ViewContainerRef,
        private modal: Modal
    ) {
        var taskService: TaskService = new TaskService(http);
        taskService.list().subscribe(data => {
            this.tasks = data;
        });

        overlay.defaultViewContainer = vcr;
    }

    public openTask(id: number) {
        return this.modal.open(
            DetailsComponent,
            overlayConfigFactory({ id: id }, BSModalContext)
        );
    }
}
