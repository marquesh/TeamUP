import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MatchSettings } from "./../matchSettings/matchSettings";

@Component({
  selector: "page-start",
  templateUrl: "start.html"
})
export class StartPage {
  constructor(public navCtrl: NavController) {}

  quickStart() {
    this.navCtrl.push(MatchSettings);
  }
}
