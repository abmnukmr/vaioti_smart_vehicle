import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {SearchPage} from "../search/search";
import { TextToSpeech } from '@ionic-native/text-to-speech';


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
  stoppage:any=["Hamirpur","Sujanpur","Nadon","Anu","Una"];

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private tts: TextToSpeech) {
    this.bus_number=this.navParams.get("bus_number");
    this.speech();
  }
  speech(){
    this.tts.speak({
      text: 'Welcome to Live Tracking System',
      rate: 0.8
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
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
