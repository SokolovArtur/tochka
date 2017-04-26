import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface ITask {
    id: number;
    title: string;
    date: string;
    author?: string;
    status?: string;
    description?: string;
}

@Injectable()
export class TaskService {
    /**
     * Backend server
     */
    private URL: string = 'http://localhost/api/v1/task';

    public constructor(private http: Http) {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public list(): Observable<ITask[]> {
        return this.http.get(this.URL)
            .map(data => {
                return data.json() as ITask[];
            });
    }

    /**
     * Display the specified resource.
     */
    public details(id: number): Observable<ITask> {
        var url: string = this.URL + '/' + id;

        return this.http.get(url)
            .map(data => {
                return data.json() as ITask;
            });
    }
}
