import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalrecomendationsComponent } from './globalrecomendations.component';

describe('GlobalrecomendationsComponent', () => {
  let component: GlobalrecomendationsComponent;
  let fixture: ComponentFixture<GlobalrecomendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalrecomendationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalrecomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
