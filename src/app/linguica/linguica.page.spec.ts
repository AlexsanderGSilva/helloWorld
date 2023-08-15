import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinguicaPage } from './linguica.page';

describe('LinguicaPage', () => {
  let component: LinguicaPage;
  let fixture: ComponentFixture<LinguicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LinguicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
