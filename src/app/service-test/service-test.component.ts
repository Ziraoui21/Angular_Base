import { Component, OnInit } from '@angular/core';
import { DataCenterService } from '../data-center.service';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.css']
})
export class ServiceTestComponent implements OnInit {

  list : any;
  constructor(private dataCenterService:DataCenterService ) {}

  ngOnInit(): void {
    this.list = this.dataCenterService.getData();
  }
}
