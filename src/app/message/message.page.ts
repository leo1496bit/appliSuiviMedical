import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  public nom:String;
  constructor() { }

  ngOnInit() {
  }
  public messages = [

  ];
  

}
