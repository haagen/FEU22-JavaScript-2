import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListingComponent } from './dog-listing.component';

describe('DogListingComponent', () => {
  let component: DogListingComponent;
  let fixture: ComponentFixture<DogListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
