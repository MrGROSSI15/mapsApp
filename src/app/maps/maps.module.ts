import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).accessToken =
  'pk.eyJ1Ijoid29wYW1hcHMiLCJhIjoiY2x4NTkyc3EyMWRlOTJrcXMwazhwaDJtZyJ9.fYjSWfFEcnPfs_GRq3h4yQ';

  import { MapsRoutingModule } from './maps-routing.module';
  import { MiniMapComponent } from './components/mini-map/mini-map.component';
  import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
  import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
  import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
  import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
  import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,SideMenuComponent
  ]
})
export class MapsModule { }
