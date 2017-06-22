import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { RegisterComponent } from './register.component';

describe('Register', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      
      RegisterComponent
    ]
  }));

  it('should log ngOnInit', inject([RegisterComponent], (register: RegisterComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    register.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
