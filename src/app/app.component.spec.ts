import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ResourceService } from './services/resources.service';

describe('AppComponent', () => {
  let mockResourceService = jasmine.createSpyObj('ResourceService', ['getSearchPackageByName', 'getPackageDetail']);

  @Component({
    selector: 'app-dialog-pop-up',
    template: ''
  })
  class MockSearchBarComponent {
  
  }
  
  @Component({
    selector: 'app-card',
    template: ''
  })
  class MockCardComponent {
  
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockSearchBarComponent,
        MockCardComponent
      ],
      providers: [
        {provide: ResourceService, useValue: mockResourceService}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title `NPM Finder`', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('NPM Finder');
  });
});

