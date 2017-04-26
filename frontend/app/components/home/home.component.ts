import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ITask, TaskService } from './../../services/task/task.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    public tasks: ITask[];

    constructor(private http: Http) {
        var taskService: TaskService = new TaskService(http);

        taskService.list().subscribe(data => {
            this.tasks = data;
        });
    }
}
