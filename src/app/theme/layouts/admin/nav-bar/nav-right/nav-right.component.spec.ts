import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRightComponent } from './nav-right.component';

describe('NavRightComponent', () => {
  let component: NavRightComponent;
  let fixture: ComponentFixture<NavRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavRightComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
