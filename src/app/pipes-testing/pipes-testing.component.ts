import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-testing',
  templateUrl: './pipes-testing.component.html',
  styleUrls: ['./pipes-testing.component.css']
})
export class PipesTestingComponent implements OnInit {

  name = "hello the woRlD";
  person = {
    name : "Ziraoui",
    age : 21,
    ID : "ZZFL23S"
  };

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
