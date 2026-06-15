import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNumerosclear } from './lista-numerosclear';

describe('ListaNumerosclear', () => {
  let component: ListaNumerosclear;
  let fixture: ComponentFixture<ListaNumerosclear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNumerosclear],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaNumerosclear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
