import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuckComponent } from './cuck.component';

describe('CuckComponent', () => {
  let component: CuckComponent;
  let fixture: ComponentFixture<CuckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
