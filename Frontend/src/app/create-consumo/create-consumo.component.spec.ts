import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConsumoComponent } from './create-consumo.component';

describe('CreateConsumoComponent', () => {
  let component: CreateConsumoComponent;
  let fixture: ComponentFixture<CreateConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
