import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteElectrodomesticosComponent } from './delete-electrodomesticos.component';

describe('DeleteElectrodomesticosComponent', () => {
  let component: DeleteElectrodomesticosComponent;
  let fixture: ComponentFixture<DeleteElectrodomesticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteElectrodomesticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteElectrodomesticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
