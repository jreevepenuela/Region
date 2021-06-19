import { Component, OnInit } from '@angular/core';
import { RegionService } from './region.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  region:any;
  constructor(private regionService: RegionService){}

  ngOnInit(): void {
    this.region = this.regionService.fetchRegion();
  }

}