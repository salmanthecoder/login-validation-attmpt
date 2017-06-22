import { Component } from '@angular/core';

import '../assets/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
        url:string = 'url';
        name :string = 'login Valdation attemp'
    ngOnInit() {
            console.log('hello `App` component');
            /**
             * \to initialise data
             */
        }
 }