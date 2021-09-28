import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaLojasComponent } from './mapa-lojas.component';

describe('MapaLojasComponent', () => {
  let component: MapaLojasComponent;
  let fixture: ComponentFixture<MapaLojasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaLojasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaLojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
