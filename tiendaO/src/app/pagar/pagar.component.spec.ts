import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarComponent } from './pagar.component';

describe('PagarComponent', () => {
  let fixture: ComponentFixture<PagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarComponent);
    fixture.detectChanges();
  });
});
