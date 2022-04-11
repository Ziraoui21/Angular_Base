import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction-test',
  templateUrl: './component-interaction-test.component.html',
  styleUrls: ['./component-interaction-test.component.css']
})
export class ComponentInteractionTestComponent implements OnInit {

  parent:string = "Hello iam from parent";
  messageData = "";

  constructor() { }

  ngOnInit(): void {
  }

  setMessageData(data:string):void {
    this.messageData = data;
  }
}
