import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PokeService } from './poke.service';

describe('PokeService', () => {
  let service: PokeService;
  let httpClient: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [PokeService]
    });

    httpClient = TestBed.inject(HttpTestingController)
    service = TestBed.inject(PokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia hacer una peticion', (done: DoneFn) =>{
    service.getList().subscribe((res) =>{
      console.log(res)

      expect(1).toBe(1)

      done()
    })

    const req = httpClient.expectOne(service.baseUrl)

    req.flush({})

    httpClient.verify()

  })
});
 