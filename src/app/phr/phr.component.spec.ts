import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrComponent } from './phr.component';

describe('PhrComponent', () => {
  let component: PhrComponent;
  let fixture: ComponentFixture<PhrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
