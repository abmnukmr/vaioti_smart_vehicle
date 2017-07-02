import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {SearchPage} from "../search/search";


/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  bus_number:string;
  stoppage:any=["Hamirpur","Bhota","Mehre","Badsar","Bangana","Una"];

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
    this.bus_number=this.navParams.get("bus_number");
  }
  confirm() {
    this.navCtrl.pop();
  }
  search(){
    this.navCtrl.push(SearchPage);
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad MainPage');
  }

}
