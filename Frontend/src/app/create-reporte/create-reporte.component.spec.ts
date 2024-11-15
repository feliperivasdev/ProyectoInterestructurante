import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReporteComponent } from './create-reporte.component';

describe('CreateReporteComponent', () => {
  let component: CreateReporteComponent;
  let fixture: ComponentFixture<CreateReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
