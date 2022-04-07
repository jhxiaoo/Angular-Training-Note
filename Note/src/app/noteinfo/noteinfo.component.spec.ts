import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteinfoComponent } from './noteinfo.component';

describe('NoteinfoComponent', () => {
  let component: NoteinfoComponent;
  let fixture: ComponentFixture<NoteinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
