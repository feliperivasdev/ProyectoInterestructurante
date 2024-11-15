import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElectrodomesticosComponent } from './edit-electrodomesticos.component';

describe('EditElectrodomesticosComponent', () => {
  let component: EditElectrodomesticosComponent;
  let fixture: ComponentFixture<EditElectrodomesticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditElectrodomesticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElectrodomesticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
