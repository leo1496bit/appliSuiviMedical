import { Component, OnInit } from '@angular/core';
import { InfosService } from '../infos.service';

@Component({
  selector: 'app-consommation',
  templateUrl: './consommation.page.html',
  styleUrls: ['./consommation.page.scss'],
})
export class ConsommationPage implements OnInit {
data:any
  constructor(private infos:InfosService) { }

  ngOnInit() {
    this.data=this.infos.data
  }

}
