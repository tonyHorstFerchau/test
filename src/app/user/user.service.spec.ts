import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  
  let service: UserService;

  beforeAll(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  })

  /* beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  }) */

  it ('should be created', () => {
    expect(service).toBeTruthy();
  })

  it ('should get user', () => {
    service.getUsers().subscribe(users => {
      expect(users).toBeTruthy();
    })
  })

});
