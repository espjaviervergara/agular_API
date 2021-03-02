import { TestBed } from '@angular/core/testing';

import { PasarFavoritoService } from './pasar-favorito.service';

describe('PasarFavoritoService', () => {
  let service: PasarFavoritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasarFavoritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
