import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiColorComponent } from './ui-color.component';

describe('UiColorComponent', () => {
  let component: UiColorComponent;
  let fixture: ComponentFixture<UiColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiColorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
