import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });

	/*it('#login should return an User with his username (Steve) for s@j.com and steve123', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
		expect(AuthenticationService.login('s@j.com', 'steve123').username()).toBe('Steve')
	})*/

});
