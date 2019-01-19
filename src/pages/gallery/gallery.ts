import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  motcle: string ="Casablanca";
  images: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	          private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
    //this.onSearch();
  }
  onSearch(){
  	console.log('tettetete');
  	this.http.get("https://pixabay.com/api/?key=11027643-08f6b73c53e5d40de43a0889f&q="+this.motcle+"&per_page=10&page=2")
  	.subscribe(data=>{
  		this.images =data;
     console.log('data',data);
     console.log('motcle',this.motcle);

    }
    );
  }

}
