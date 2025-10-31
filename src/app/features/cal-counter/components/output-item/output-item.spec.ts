import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputItem } from './output-item';

describe('OutputItem', () => {
  let component: OutputItem;
  let fixture: ComponentFixture<OutputItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
