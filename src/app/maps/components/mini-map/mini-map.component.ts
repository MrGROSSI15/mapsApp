import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent {
  @ViewChild('map') divMap?: ElementRef;



  @Input() lngLat?: [number, number];


  ngAfterViewInit(){
    if(!this.divMap?.nativeElement) throw "Map div not found";
    if(!this.lngLat) throw "Map div not found";

    const map = new Map({
      // accessToken: 'pk.eyJ1Ijoid29wYW1hcHMiLCJhIjoiY2x4NTh4cDJ6MWRjbTJrcXMzaHZkYzZhbCJ9.0u6HidCCiSbk7nLhncXuZA',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });

    new Marker()
    .setLngLat( this.lngLat)
    .addTo(map)

  }
}
