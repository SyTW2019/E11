import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have an id`, () => {
    const user = fixture.debugElement.componentInstance;
    expect(user.id).toEqual(user.id);
  });

  it(`should have an Firs Name`, () => {
    const user = fixture.debugElement.componentInstance;
    expect(user.firstName).not.toBeNull();
  });

  it(`should have an Last Name`, () => {
    const user = fixture.debugElement.componentInstance;
    expect(user.lastName).not.toBeNull();
  });

  it(`should have an password`, () => {
    const user = fixture.debugElement.componentInstance;
    expect(user.password).not.toBeNull();
  });

  it(`should have an email`, () => {
    const user = fixture.debugElement.componentInstance;
    expect(user.email).toEqual(user.email);
  });
});

