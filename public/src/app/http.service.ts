import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//tslint:disable: variable-name one-line no-string-literal whitespace comment-format

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes()
  {
    return this._http.get('/cakes');
  }
  getCake(cakeID)
  {
    return this._http.get(`/cake/${cakeID}`);
  }
  postCakes(cake)
  {
    return this._http.post('/cake', cake);
  }
  rateCake(cakeID, review)
  {
    return this._http.put(`/cake/rating/${cakeID}`, review);
  }
  updateCake(cake)
  {
    return this._http.put(`/cake/${cake._id}`, cake);
  }
  deleteCake(cakeID)
  {
    return this._http.delete(`/cake/${cakeID}`);
  }
}

