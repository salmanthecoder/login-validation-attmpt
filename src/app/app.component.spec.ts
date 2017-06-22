import { NO_ERRORS_SCHEMA } from '@angular/core';
import {} from 'jasmine';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';


import { AppComponent } from './app.component';

describe(`App`, () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it(`should be @login Valdation attemp`, () => {
    expect(comp.url).toEqual('url');
    expect(comp.name).toEqual('login Valdation attemp');
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

});
