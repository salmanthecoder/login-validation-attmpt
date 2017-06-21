import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/users', this.token()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.token()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.token()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.token()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.token()).map((response: Response) => response.json());
    }
    deleteAll() {
        return this.http.delete('http://localhost:3000/api/tasks', this.token()).map((response: Response) => response.json());
    }
    getAllentry() {
        return this.http.get('http://localhost:3000/api/tasks').map((response: Response) => response.json());
    }
    createEntry(task:any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/tasks', task, {headers:headers}).map((response: Response) => response.json());
    }
    // private helper methods

    private token() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}