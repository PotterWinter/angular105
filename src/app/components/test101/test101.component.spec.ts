import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test101Component } from './test101.component';

describe('Test101Component', () => {
  let component: Test101Component;
  let fixture: ComponentFixture<Test101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test101Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
