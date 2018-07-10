import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Campaign } from './campaign.model';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'dkey': 'l8g31xAwPQpLbKTtk9LV9CzIQyaIRsHz',
    // 'token': 'KU39g42VGDOQiooliWVM7+yjJDki+zC1CEJ6AhiGgCc='
  })
};

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private domain = 'https://api.xilnex.com';
  private dumyDomain = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor(
    private http: HttpClient
  ) { }

  getCampaignActiveList(): Observable<Campaign[]> {
    // const url = `${this.domain}/logic/v1/membership/AffiliateRule`;
    const url = `${this.dumyDomain}`;
    return this.http.get<Campaign[]>(url)
    .pipe(
      map(res => res)
    );
  }
}
