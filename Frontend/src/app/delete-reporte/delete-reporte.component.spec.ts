import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReporteComponent } from './delete-reporte.component';

describe('DeleteReporteComponent', () => {
  let component: DeleteReporteComponent;
  let fixture: ComponentFixture<DeleteReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
