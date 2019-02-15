import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsInfoComponent } from './objects-info.component';

describe('ObjectsInfoComponent', () => {
  let component: ObjectsInfoComponent;
  let fixture: ComponentFixture<ObjectsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
