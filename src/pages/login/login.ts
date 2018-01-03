import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {User} from '../../models/user';
import {AngularFireAuth} from '../../../node_modules/angularfire2/auth';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {


  constructor(private aFAuth: AngularFireAuth,
  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

user = {} as User;

 async login(user: User){
try{

const result = this.aFAuth.auth.signInWithEmailAndPassword(user.email, user.password);

console.log(result);

if(result){

this.navCtrl.push(TabsPage);}
}
catch(e)
{	
	console.error(e);
}
 
  }

}
