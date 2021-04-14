import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogarDeudorComponent } from './hogar-deudor.component';

describe('HogarDeudorComponent', () => {
  let component: HogarDeudorComponent;
  let fixture: ComponentFixture<HogarDeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HogarDeudorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogarDeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
