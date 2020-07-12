import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSearchBarButtonComponent } from './widget-search-bar-button.component';

describe('WidgetSearchBarButtonComponent', () => {
  let component: WidgetSearchBarButtonComponent;
  let fixture: ComponentFixture<WidgetSearchBarButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSearchBarButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSearchBarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
