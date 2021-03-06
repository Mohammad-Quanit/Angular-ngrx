import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDataComponent } from './read-data.component';

describe('ReadDataComponent', () => {
  let component: ReadDataComponent;
  let fixture: ComponentFixture<ReadDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
