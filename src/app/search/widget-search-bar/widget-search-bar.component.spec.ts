import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSearchBarComponent } from './widget-search-bar.component';

describe('WidgetSearchBarComponent', () => {
  let component: WidgetSearchBarComponent;
  let fixture: ComponentFixture<WidgetSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
