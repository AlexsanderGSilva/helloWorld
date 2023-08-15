import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarvaoPage } from './carvao.page';

describe('CarvaoPage', () => {
  let component: CarvaoPage;
  let fixture: ComponentFixture<CarvaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarvaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
