import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConsumoComponent } from './delete-consumo.component';

describe('DeleteConsumoComponent', () => {
  let component: DeleteConsumoComponent;
  let fixture: ComponentFixture<DeleteConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
