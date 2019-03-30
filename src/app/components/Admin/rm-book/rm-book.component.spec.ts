import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmBookComponent } from './rm-book.component';

describe('RmBookComponent', () => {
  let component: RmBookComponent;
  let fixture: ComponentFixture<RmBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
