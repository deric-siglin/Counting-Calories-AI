import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuputList } from './ouput-list';

describe('OuputList', () => {
  let component: OuputList;
  let fixture: ComponentFixture<OuputList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuputList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuputList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
