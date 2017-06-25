import { Router,ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { AlertService, AuthenticationService } from '../services/index';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Login', () => {
 
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule,RouterTestingModule],
    providers: [
     
      {
        provide: ActivatedRoute
      },
      LoginComponent,
      AuthenticationService,
      Router
    ]
  }));

  it('should call authenticated service', inject([LoginComponent, AuthenticationService], (login: LoginComponent, authService: AuthenticationService)  => {
    spyOn(authService, 'logout');
    expect(authService.logout).not.toHaveBeenCalled();

    login.ngOnInit();
    expect(authService.logout).toHaveBeenCalled();
  }));

  it('should call ngon Init', inject([LoginComponent], (login: LoginComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    login.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
