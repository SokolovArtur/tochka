import { Component } from '@angular/core';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ModalComponent, DialogRef } from 'angular2-modal';
import { Http } from '@angular/http';
import { ITask, TaskService } from './../../services/task/task.service';

export class DetailsComponentContext extends BSModalContext {
    public id: number;
}

@Component({
    moduleId: module.id,
    selector: 'details-component',
    templateUrl: 'details.component.html'
})
export class DetailsComponent implements ModalComponent<DetailsComponentContext> {
    public context: DetailsComponentContext;

    public task: ITask;

    constructor(public dialog: DialogRef<DetailsComponentContext>, private http: Http) {
        this.context = dialog.context;

        this.serverRequest();
    }

    // TODO Кэширование запросов
    private serverRequest() {
        var taskService: TaskService = new TaskService(this.http);
        taskService.details(this.context.id).subscribe(data => {
            this.task = data;
        });
    }
}
