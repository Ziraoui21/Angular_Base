import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input()
  parentData: string = "";

  @Output()
  childEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendData(value:string): void {
    this.childEvent.emit(value);
  }
}
