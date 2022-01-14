import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulamentoParcaoComponent } from './regulamento-parcao.component';

describe('RegulamentoParcaoComponent', () => {
  let component: RegulamentoParcaoComponent;
  let fixture: ComponentFixture<RegulamentoParcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulamentoParcaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulamentoParcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
