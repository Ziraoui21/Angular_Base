import { HttpServiceService } from './../http-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  public source : any;
  constructor(private dataSerice:HttpServiceService) { }

  ngOnInit(): void {
    this.dataSerice.getData().subscribe(data => {
      console.log(data);
      this.source = data;
    });
  }

}
