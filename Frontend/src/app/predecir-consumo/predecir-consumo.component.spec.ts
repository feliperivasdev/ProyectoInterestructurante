import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredecirConsumoComponent } from './predecir-consumo.component';

describe('PredecirConsumoComponent', () => {
  let component: PredecirConsumoComponent;
  let fixture: ComponentFixture<PredecirConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredecirConsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredecirConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
