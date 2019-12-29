import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMejComponent } from './menuMej.component';

describe('MenuMejComponent', () => {
  let component: MenuMejComponent;
  let fixture: ComponentFixture<MenuMejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
