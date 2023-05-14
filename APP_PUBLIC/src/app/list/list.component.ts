import { Component, OnInit } from '@angular/core';
import { BikeServiceService } from '../bike-service.service';
import { Bike } from '../bike';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[BikeServiceService]
})
export class ListComponent implements OnInit {
  bikes: any;
  constructor(private bikeService: BikeServiceService) { }

  ngOnInit(): void {
    this.bikeService.getBikes().then(bikes => {
      this.bikes = bikes as Bike[];
    });
  }

}
