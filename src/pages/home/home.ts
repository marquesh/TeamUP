import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { StartPage } from "./../start/start";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  goStart() {
    this.navCtrl.setRoot(StartPage).then(() => {
      this.navCtrl.popToRoot();
      //....
    });
    //this.navCtrl.push(StartPage);
  }
}
