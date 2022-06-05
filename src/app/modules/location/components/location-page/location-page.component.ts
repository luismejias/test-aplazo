import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {

  constructor(
    private locationService: LocationService
  ) { }
  

  ngOnInit(): void {
    this.getLocation();
  }
  getLocation():void {
    this.locationService.getLocation().subscribe((res: any) => {
      console.log('LocationS => ',res);
    })
  }

}
