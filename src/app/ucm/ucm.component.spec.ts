import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcmComponent } from './ucm.component';

describe('UcmComponent', () => {
  let component: UcmComponent;
  let fixture: ComponentFixture<UcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
