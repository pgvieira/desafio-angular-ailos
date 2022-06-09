import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSituationComponent } from './user-situation.component';

describe('UserSituationComponent', () => {
  let component: UserSituationComponent;
  let fixture: ComponentFixture<UserSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSituationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
