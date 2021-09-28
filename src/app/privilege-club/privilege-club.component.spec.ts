import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegeClubComponent } from './privilege-club.component';

describe('PrivilegeClubComponent', () => {
  let component: PrivilegeClubComponent;
  let fixture: ComponentFixture<PrivilegeClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivilegeClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegeClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
