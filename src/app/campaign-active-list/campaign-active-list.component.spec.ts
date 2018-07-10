import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignActiveListComponent } from './campaign-active-list.component';

describe('CampaignActiveListComponent', () => {
  let component: CampaignActiveListComponent;
  let fixture: ComponentFixture<CampaignActiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignActiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignActiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
