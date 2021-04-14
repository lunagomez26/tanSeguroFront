import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogarDeudorOfertaComponent } from './hogar-deudor-oferta.component';

describe('HogarDeudorOfertaComponent', () => {
  let component: HogarDeudorOfertaComponent;
  let fixture: ComponentFixture<HogarDeudorOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HogarDeudorOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogarDeudorOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
