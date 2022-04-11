import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-test',
  templateUrl: './property-binding-test.component.html',
  styleUrls: ['./property-binding-test.component.css']
})
export class PropertyBindingTestComponent implements OnInit {

  public name:string = "Ziraoui"
  public myid:number = 12;

  constructor() { }

  ngOnInit(): void {
  }

}
