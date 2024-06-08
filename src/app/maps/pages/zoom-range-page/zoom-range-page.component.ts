import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { LngLat, Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css',
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat (2.6554006629222613, 39.57047014925382);

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'EL elemeno no existe';

    this.map = new Map({
      // accessToken: 'pk.eyJ1Ijoid29wYW1hcHMiLCJhIjoiY2x4NTh4cDJ6MWRjbTJrcXMzaHZkYzZhbCJ9.0u6HidCCiSbk7nLhncXuZA',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove ();
  }

  mapListeners() {
    if( !this.map ) throw 'mapa no inicializado';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if (this.map!.getZoom() < 18 ) return;

      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
      const { lng, lat } = this.currentLngLat;
    });
  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged( value:string ){
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);

  }
}
