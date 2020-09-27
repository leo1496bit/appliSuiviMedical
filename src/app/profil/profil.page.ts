import { Component, OnInit } from '@angular/core';
import { InfosService } from '../infos.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  data:any;
  constructor(private info:InfosService, private menu:MenuController) { }

  ngOnInit() {
    this.data=this.info.data;
    this.menu.close()
  }

}
