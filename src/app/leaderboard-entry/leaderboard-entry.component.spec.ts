import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardEntryComponent } from './leaderboard-entry.component';

describe('LeaderboardEntryComponent', () => {
  let component: LeaderboardEntryComponent;
  let fixture: ComponentFixture<LeaderboardEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
