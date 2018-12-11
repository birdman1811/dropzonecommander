import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaltariComponent } from './shaltari.component';

describe('ShaltariComponent', () => {
  let component: ShaltariComponent;
  let fixture: ComponentFixture<ShaltariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaltariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaltariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
