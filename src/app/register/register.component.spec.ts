import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import {} from 'jasmine';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('Register', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule, RouterTestingModule],
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
