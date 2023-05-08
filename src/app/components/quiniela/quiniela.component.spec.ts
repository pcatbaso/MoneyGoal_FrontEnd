import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinielaComponent } from './quiniela.component';

describe('QuinielaComponent', () => {
  let component: QuinielaComponent;
  let fixture: ComponentFixture<QuinielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinielaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuinielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
