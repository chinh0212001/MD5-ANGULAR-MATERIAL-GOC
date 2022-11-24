import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilpleAvatarComponent } from './multilple-avatar.component';

describe('MultilpleAvatarComponent', () => {
  let component: MultilpleAvatarComponent;
  let fixture: ComponentFixture<MultilpleAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultilpleAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilpleAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
