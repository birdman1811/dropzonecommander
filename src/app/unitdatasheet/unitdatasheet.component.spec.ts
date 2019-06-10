import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitdatasheetComponent } from './unitdatasheet.component';

describe('UnitdatasheetComponent', () => {
  let component: UnitdatasheetComponent;
  let fixture: ComponentFixture<UnitdatasheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitdatasheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitdatasheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
