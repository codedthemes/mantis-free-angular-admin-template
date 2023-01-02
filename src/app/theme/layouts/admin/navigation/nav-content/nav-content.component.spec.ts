import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContentComponent } from './nav-content.component';

describe('NavContentComponent', () => {
  let component: NavContentComponent;
  let fixture: ComponentFixture<NavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
