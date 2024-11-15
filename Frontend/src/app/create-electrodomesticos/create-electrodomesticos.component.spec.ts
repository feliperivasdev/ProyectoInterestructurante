import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElectrodomesticosComponent } from './create-electrodomesticos.component';

describe('CreateElectrodomesticosComponent', () => {
  let component: CreateElectrodomesticosComponent;
  let fixture: ComponentFixture<CreateElectrodomesticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateElectrodomesticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElectrodomesticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
