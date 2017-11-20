import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolllComponent } from './polll.component';

describe('PolllComponent', () => {
  let component: PolllComponent;
  let fixture: ComponentFixture<PolllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
