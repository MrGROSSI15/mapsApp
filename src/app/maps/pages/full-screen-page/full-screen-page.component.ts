import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit {


  @ViewChild('map') divMap ?: ElementRef;




  ngAfterViewInit(): void {

    if( !this.divMap) throw 'EL elemeno no existe'


    const map = new Map({
      // accessToken: 'pk.eyJ1Ijoid29wYW1hcHMiLCJhIjoiY2x4NTh4cDJ6MWRjbTJrcXMzaHZkYzZhbCJ9.0u6HidCCiSbk7nLhncXuZA',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }



}
