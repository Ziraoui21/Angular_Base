import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding-test',
  templateUrl: './class-binding-test.component.html',
  styleUrls: ['./class-binding-test.component.css']
})
export class ClassBindingTestComponent implements OnInit {

  public class1:string = "text-danger";
  public hasError = true;
  public isImg = false
  public classes = {
    "text-danger" : this.hasError,
    "img-fluid" : this.isImg
  };

  constructor() { }

  ngOnInit(): void {
  }

}
