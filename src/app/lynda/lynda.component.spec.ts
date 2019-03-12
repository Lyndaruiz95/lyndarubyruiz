import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyndaComponent } from './lynda.component';

describe('LyndaComponent', () => {
  let component: LyndaComponent;
  let fixture: ComponentFixture<LyndaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyndaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyndaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
