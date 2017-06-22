import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('Login', () => {
 
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
     
      {
        provide: ActivatedRoute
      },
      LoginComponent
    ]
  }));

  it('should log ngOnInit', inject([LoginComponent], (login: LoginComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    login.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
