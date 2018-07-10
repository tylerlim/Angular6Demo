import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../campaign.model';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-campaign-active-list',
  templateUrl: './campaign-active-list.component.html',
  styleUrls: ['./campaign-active-list.component.css']
})
export class CampaignActiveListComponent implements OnInit {
private domain = 'https://api.xilnex.com';
campaigns: Campaign[];


  constructor(
    private campaignService: CampaignService
  ) { }

  getCampaign(): void {
    this.campaignService.getCampaignActiveList()
    .subscribe(data => this.campaigns = data);
    // console.log(this.campaigns);
  }

  ngOnInit() {
    this.getCampaign();
  }

}
