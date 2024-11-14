import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsumoComponent } from './edit-consumo.component';

describe('EditConsumoComponent', () => {
  let component: EditConsumoComponent;
  let fixture: ComponentFixture<EditConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
