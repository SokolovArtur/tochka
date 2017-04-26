import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ITask, TaskService } from './../../services/task/task.service';

@Component({
    moduleId: module.id,
    selector: 'details-component',
    templateUrl: 'details.component.html'
})
export class DetailsComponent {
    public task: ITask;

    constructor(private http: Http, private route: ActivatedRoute) {
        var taskService: TaskService = new TaskService(http);

        taskService.details(this.getId()).subscribe(data => {
            this.task = data;
        });
    }

    public getId(): number {
        var id: number;
        this.route.params.subscribe(params => {
            id = +params['id']; // (+) converts string 'id' to a number
        });
        return id;
    }
}
