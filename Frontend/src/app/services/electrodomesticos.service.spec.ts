import { TestBed } from '@angular/core/testing';

import { ElectrodomesticosService } from './electrodomesticos.service';

describe('ElectrodomesticosService', () => {
  let service: ElectrodomesticosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectrodomesticosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
