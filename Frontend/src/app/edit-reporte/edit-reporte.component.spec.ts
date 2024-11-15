import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReporteComponent } from './edit-reporte.component';

describe('EditReporteComponent', () => {
  let component: EditReporteComponent;
  let fixture: ComponentFixture<EditReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
