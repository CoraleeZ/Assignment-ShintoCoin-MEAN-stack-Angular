import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranctionComponent } from './tranction.component';

describe('TranctionComponent', () => {
  let component: TranctionComponent;
  let fixture: ComponentFixture<TranctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
