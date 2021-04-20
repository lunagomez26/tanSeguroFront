import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogarDeudorOfertaAceptadaComponent } from './hogar-deudor-oferta-aceptada.component';

describe('HogarDeudorOfertaAceptadaComponent', () => {
  let component: HogarDeudorOfertaAceptadaComponent;
  let fixture: ComponentFixture<HogarDeudorOfertaAceptadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HogarDeudorOfertaAceptadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogarDeudorOfertaAceptadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
