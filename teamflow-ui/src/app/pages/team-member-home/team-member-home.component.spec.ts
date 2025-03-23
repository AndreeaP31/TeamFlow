import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberHomeComponent } from './team-member-home.component';

describe('TeamMemberHomeComponent', () => {
  let component: TeamMemberHomeComponent;
  let fixture: ComponentFixture<TeamMemberHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamMemberHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMemberHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
