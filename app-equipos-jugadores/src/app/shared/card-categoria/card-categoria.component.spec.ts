import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCategoriaComponent } from './card-categoria.component';

describe('CardCategoriaComponent', () => {
  let component: CardCategoriaComponent;
  let fixture: ComponentFixture<CardCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
