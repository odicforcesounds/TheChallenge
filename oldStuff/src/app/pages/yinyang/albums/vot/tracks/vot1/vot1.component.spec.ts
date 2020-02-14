/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vot1Component } from './vot1.component';

describe('Vot1Component', () => {
  let component: Vot1Component;
  let fixture: ComponentFixture<Vot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
