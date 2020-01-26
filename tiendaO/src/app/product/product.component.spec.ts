import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product.component';

describe('ProductListComponent', () => {
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    fixture.detectChanges();
  });

  
});
