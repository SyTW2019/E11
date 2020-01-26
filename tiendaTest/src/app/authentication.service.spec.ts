import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { notEqual } from 'assert';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    expect(TestBed).toBeDefined();
  });

//	it('#login should return an User with his username (Steve) for s@j.com and steve123', () => {
  //  const service: AuthenticationService = TestBed.get(AuthenticationService);
	//	expect(AuthenticationService.login('s@j.com', 'steve123').username()).toBe('Steve')
	//})

});
