import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCatDetailComponent } from './table-cat-detail.component';

describe('TableCatDetailComponent', () => {
  let component: TableCatDetailComponent;
  let fixture: ComponentFixture<TableCatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCatDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
