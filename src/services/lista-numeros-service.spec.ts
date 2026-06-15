import { TestBed } from '@angular/core/testing';

import { ListaNumerosService } from './lista-numeros-service';

describe('ListaNumerosService', () => {
  let service: ListaNumerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaNumerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
