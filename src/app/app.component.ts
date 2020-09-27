import { Component, OnInit, AfterContentInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { InfosService } from './infos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit,AfterContentInit {
  public selectedIndex = 0;
  public pseudo="Pseudo";
  public mail="adresse@mail.fr";
  public appPages = [
    {
      title: 'Utilisation',
      url: '/message',
      icon: 'stats-chart'

    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications'
    },
    {
      title: 'Consommation',
      url: '/consommation',
      icon: 'speedometer'
    },
    {
      title: 'Medecin',
      url: '/medecin',
      icon: 'medical'
    },
    {
      title: 'Historique',
      url: '/historique',
      icon: 'book'
    },
    {
      title: 'Recommandations',
      url: '/conseils',
      icon: 'bulb'
    }
  ];
  public labels = ['Deconnexion'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu:MenuController,
    private router:Router,
    private info:InfosService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide()
      this.update()
    });
  }
  update(){
    this.info.loadConso(this.info.mail).then(()=>{
    this.pseudo=this.info.data.user;
    this.mail=this.info.data.mail;
    
    }).catch((error)=>{
      console.error(error)
    })
    
  }

  ngOnInit() {
    
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.update()
    
  }
  ngAfterContentInit(){
    this.update()
  }
  close(){
    this.menu.close().then(()=>{
      this.router.navigate(['/accueil'])
    })
  }
  goToProfil(){
    this.menu.close()
    this.router.navigate(['/profil'])
  }
}
