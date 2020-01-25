import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';
//tslint:disable: variable-name one-line no-string-literal whitespace comment-format prefer-const

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cake: any;
  updateCake: any;
  review: any;
  cakes: [];
  selectedCake: any;
  avgRating: string;
  show=false;
  showRate=false;
  showUpdate=false;
  hideButtons=false;

  constructor(private _httpService: HttpService){}

  ngOnInit()
  {
    this.cake = {cakeName: '', bakerName: '', url: ''};
    this.review={rating: '', comment: ''};
    this.updateCake= {_id: '', cakeName: '', bakerName: '', url: '', review:[]};
    this.allCakes();
  }

  allCakes()
  {
    const observable = this._httpService.getCakes();
    observable.subscribe(data => {
      this.cakes = data['cakes'];
    });
  }
  oneCake(cake)
  {
    window.scroll(0,0);
    this.selectedCake=cake;
    let sum=0;
    let counter=0;
    if(cake.reviews.length>0)
    {
      for(let review of cake.reviews)
      {
        sum+=review.rating;
        counter++;
      }
      this.avgRating=(sum/counter).toFixed(2);
      }
    else
    {
      this.avgRating='Nobody has rated this cake yet';
    }
    this.showRate=false;
    this.showUpdate=false;
    this.show=true;
    this.hideButtons=false;
  }
  showRatingForm()
  {
   this.showRate=true;
   this.hideButtons=true;
  }
  showUpdateForm()
  {
    this.showUpdate=true;
    this.hideButtons=true;
  }
  onSubmit()
  {
    const observable = this._httpService.postCakes(this.cake);
    observable.subscribe(data => console.log(data));
    //this.cake = {cakeName: '', bakerName: '', url: ''};
    this.ngOnInit();
  }
  rate()
  {
    const observable = this._httpService.rateCake(this.selectedCake._id, this.review);
    observable.subscribe(data => console.log(data));
    //this.review={rating: '', comment: ''};
    this.ngOnInit();
  }
  update()
  {
    if(this.updateCake.cakeName === '')
    {
      this.updateCake.cakeName=this.selectedCake.cakeName;
    }

    if(this.updateCake.url === '')
    {
      this.updateCake.url=this.selectedCake.url;
    }

    this.updateCake._id=this.selectedCake._id;
    this.updateCake.bakerName=this.selectedCake.bakerName;
    this.updateCake.reviews=this.selectedCake.reviews;
    const observable = this._httpService.updateCake(this.updateCake);
    observable.subscribe(data => console.log(data));
    this.ngOnInit();
    this.oneCake(this.selectedCake);
  }
  delete()
  {
    const observable = this._httpService.deleteCake(this.selectedCake._id);
    observable.subscribe(data => console.log(data));
    this.show=false;
    this.ngOnInit();
  }
}
