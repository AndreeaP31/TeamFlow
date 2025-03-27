import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthInterceptor } from './auth.interceptor';  // Importă corect clasa
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from '../../token/token.service';

describe('AuthInterceptor', () => {
  let httpMock: HttpTestingController;
  let tokenService: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,  // Folosește clasa AuthInterceptor
          multi: true,
        },
        TokenService
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    tokenService = TestBed.inject(TokenService);
  });

  it('should be created', () => {
    const interceptor = TestBed.inject(AuthInterceptor);  // Testează instanțierea interceptorului
    expect(interceptor).toBeTruthy();
  });
});
