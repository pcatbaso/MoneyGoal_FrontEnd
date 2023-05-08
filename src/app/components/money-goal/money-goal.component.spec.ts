import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyGoalComponent } from './money-goal.component';

describe('MoneyGoalComponent', () => {
  let component: MoneyGoalComponent;
  let fixture: ComponentFixture<MoneyGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
