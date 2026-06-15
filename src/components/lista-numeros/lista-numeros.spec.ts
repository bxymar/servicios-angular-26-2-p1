import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNumeros } from './lista-numeros';

describe('ListaNumeros', () => {
  let component: ListaNumeros;
  let fixture: ComponentFixture<ListaNumeros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNumeros],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaNumeros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
