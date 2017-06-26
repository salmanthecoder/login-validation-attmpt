import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/index';
import { UserService } from '../services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    model: any = {};
    task:any={};
    users: User[] = [];
    magicNumbers: any = [];
    hiddenMagicNumber : number = 123;
    count:number=0;
    success : boolean = false;

    constructor(private userService: UserService,
    private router: Router,) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        console.log('hello `home` component');
        this.loadAllUsers();
        this.loadAllEntries();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
    addMagicNumber(id: number) {
         this.success = false;
        this.count++;
        this.task ={};
        this.task = {
            "userame":this.currentUser.firstName,
            "magicnumber":id
        };
        if(id == this.hiddenMagicNumber) {
            this.success = true;
        }
         if(this.count===4) {
                        this.count = 0;
                        this.router.navigate(['/login']);
                        return;
                    }
                    this.model = {};
        this.userService.createEntry(this.task)
            .subscribe(
                data => {
                    this.loadAllEntries();
                },
                error => {
                });
    }
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
     public deleteAllDocs() {
        this.userService.deleteAll().subscribe(users => { this.users = users; });
    }
    private loadAllEntries() {
        this.userService.getAllentry().subscribe(magicNumberData => { this.magicNumbers = magicNumberData; });
    }
}