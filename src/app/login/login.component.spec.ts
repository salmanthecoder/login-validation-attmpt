import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

 import { UserService, AlertService, AuthenticationService } from '../services/index';

describe('login component (Mocked)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,

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

  it('should check authentication service', async(inject(
    [AuthenticationService, MockBackend], (service :AuthenticationService, mockBackend :MockBackend) => {

    expect(service).toBeDefined();
  })));

  describe('check if user is authorised', () => {
    const mockResponse = {
      userId: 'jack'
    };

    it('should parse response', async(inject(
      [AuthenticationService, MockBackend], (service :AuthenticationService, mockBackend :MockBackend) => {

      mockBackend.connections.subscribe((conn: any) => {
        conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
      });

      const result = service.login('jack','1234');
      expect(result).toBeDefined();
    })));
  });
});