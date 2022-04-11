import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-events-test',
  templateUrl: './data-binding-events-test.component.html',
  styleUrls: ['./data-binding-events-test.component.css']
})
export class DataBindingEventsTestComponent implements OnInit {

  public name:string = "";
  public age:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setAge(inputAge:string) {
    this.age = parseInt(inputAge);
  }
}
