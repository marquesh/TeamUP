import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { PickPlayers } from "../pickPlayers/pickPlayers";

@Component({
  selector: "page-matchSettings",
  templateUrl: "matchSettings.html"
})
export class MatchSettings {
  private team1: number;
  private team2: number;
  private randomSort: boolean;

  constructor(public navCtrl: NavController) {
    this.team1 = 5;
    this.team2 = 5;
    this.randomSort = false;
  }

  next() {
    this.navCtrl.push(PickPlayers, {
      team1: this.team1,
      team2: this.team2,
      random: this.randomSort
    });
  }
}
