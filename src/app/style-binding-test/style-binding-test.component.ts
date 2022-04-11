import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding-test',
  templateUrl: './style-binding-test.component.html',
  styleUrls: ['./style-binding-test.component.css']
})
export class StyleBindingTestComponent implements OnInit {

  public color = "red";
  public test = true;
  public styles = {
    "color" : "green",
    "text-decoration" : "underline"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
