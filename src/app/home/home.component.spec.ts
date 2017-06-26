import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

 import { UserService, AlertService, AuthenticationService } from '../services/index';

describe('HomeComponent (Mocked)', () => {
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

  it('should check magic number service', async(inject(
    [UserService, MockBackend], (service :UserService, mockBackend :MockBackend) => {

    expect(service).toBeDefined();
  })));

  describe('should check magic number', () => {
    const mockResponse = {
      userId: 'Zuf',
      magicNumber:'123'
    };

    it('should parse response', async(inject(
      [UserService, MockBackend], (service :UserService, mockBackend :MockBackend) => {

      mockBackend.connections.subscribe((conn: any) => {
        conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) })));
      });

      const result = service.getAllentry();

      result.subscribe(res => {
        expect(res).toEqual({
          userId: 'Zuf',
         magicNumber:'123'
        });
      });
    })));
  });
});