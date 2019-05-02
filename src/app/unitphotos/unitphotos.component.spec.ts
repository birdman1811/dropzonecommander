import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitphotosComponent } from './unitphotos.component';

describe('UnitphotosComponent', () => {
  let component: UnitphotosComponent;
  let fixture: ComponentFixture<UnitphotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitphotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
