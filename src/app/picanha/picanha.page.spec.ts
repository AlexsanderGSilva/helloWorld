import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PicanhaPage } from './picanha.page';

describe('PicanhaPage', () => {
  let component: PicanhaPage;
  let fixture: ComponentFixture<PicanhaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PicanhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
