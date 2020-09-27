import { Component, OnInit } from '@angular/core';
import { InfosService } from '../infos.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {

  constructor(private info:InfosService) { }

  ngOnInit() {
  }

}
