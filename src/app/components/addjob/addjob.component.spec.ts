import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobComponent } from './addjob.component';

describe('AddjobComponent', () => {
  let component: AddjobComponent;
  let fixture: ComponentFixture<AddjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
