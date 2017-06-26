import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

 import { UserService, AlertService, AuthenticationService } from '../services/index';

describe('Register component (Mocked)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,

        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: any, options:any) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('check register service is defined', async(inject(
    [UserService, MockBackend], (service :UserService, mockBackend :MockBackend) => {

    expect(service).toBeDefined();
  })));

  describe('Check if registration is correct', () => {
    const mockResponse = {
      userdetail: 'zen'
    };

    it('should allow registration', async(inject(
      [UserService, MockBackend], (service :UserService, mockBackend :MockBackend) => {

      mockBackend.connections.subscribe((conn: any) => {
        conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
      });

      const result = service.getAll();

      result.subscribe(res => {
        expect(res).toEqual({
          userdetail: 'zen'
        });
      });
    })));
  });
});