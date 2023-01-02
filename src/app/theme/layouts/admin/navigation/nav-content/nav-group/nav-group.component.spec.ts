import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGroupComponent } from './nav-group.component';

describe('NavGroupComponent', () => {
  let component: NavGroupComponent;
  let fixture: ComponentFixture<NavGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
