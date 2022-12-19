import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPopUpComponent } from './dialog-pop-up.component';

xdescribe('DialogPopUpComponent', () => {
  let component: DialogPopUpComponent;
  let fixture: ComponentFixture<DialogPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
