import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScourgeComponent } from './scourge.component';

describe('ScourgeComponent', () => {
  let component: ScourgeComponent;
  let fixture: ComponentFixture<ScourgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScourgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScourgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
