import { Component, ViewChild } from "@angular/core";

import { Platform, MenuController, Nav } from "ionic-angular";

import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Page } from "../../node_modules/ionic-angular/umd/navigation/nav-util";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;
  rootPage: Page;
  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.rootPage = HomePage; // TODO : if firstTime : show blabla, else direct to start;

    this.pages = [
      { title: "Teams", component: HomePage },
      { title: "Players", component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.push(page.component);
  }
}
