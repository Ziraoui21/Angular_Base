import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-test',
  templateUrl: './interpolation-test.component.html',
  styleUrls: ['./interpolation-test.component.css']
})
export class InterpolationTestComponent implements OnInit {

  public title = "Hello the world";

  constructor() { }

  ngOnInit(): void {
  }

}
