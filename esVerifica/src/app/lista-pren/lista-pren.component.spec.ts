import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrenComponent } from './lista-pren.component';

describe('ListaPrenComponent', () => {
  let component: ListaPrenComponent;
  let fixture: ComponentFixture<ListaPrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
